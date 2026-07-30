(function () {
  "use strict";

  const DATA = window.SPLUNK_HUB_DATA;
  const STORAGE_KEY = "splunk-core-user-hub-v1";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const defaultState = {
    activeDay: 1,
    tasks: {},
    lessons: {},
    checklist: {},
    mockHistory: []
  };

  let state = loadState();
  let quizState = null;
  let toastTimer = null;
  let labState = { rows: [], sourceEvents: [], view: "table" };

  const sampleEvents = [
    event("2026-07-13T14:52:14Z", "web01", "/var/log/nginx/access.log", "access_combined", "alex", "allowed", "success", "10.0.1.15", "GET", 4210, "GET /dashboard 200"),
    event("2026-07-13T14:47:01Z", "dc01", "WinEventLog:Security", "WinEventLog:Security", "riley", "login", "failure", "203.0.113.44", "-", 812, "Failed login for riley"),
    event("2026-07-13T14:44:18Z", "vpn01", "/var/log/vpn.log", "vpn:auth", "sam", "login", "success", "198.51.100.22", "-", 644, "VPN authentication successful"),
    event("2026-07-13T14:40:32Z", "dc01", "WinEventLog:Security", "WinEventLog:Security", "admin", "login", "failure", "203.0.113.44", "-", 851, "Failed password for admin"),
    event("2026-07-13T14:34:49Z", "web02", "/var/log/nginx/access.log", "access_combined", "guest", "blocked", "failure", "192.0.2.81", "POST", 2201, "POST /admin denied 403"),
    event("2026-07-13T14:29:11Z", "db01", "/var/log/mysql/error.log", "mysql:error", "service_db", "query", "success", "10.0.2.30", "-", 3180, "Query completed"),
    event("2026-07-13T14:22:08Z", "web01", "/var/log/nginx/access.log", "access_combined", "alex", "allowed", "success", "10.0.1.15", "GET", 3890, "GET /profile 200"),
    event("2026-07-13T14:15:55Z", "mail01", "/var/log/maillog", "linux_secure", "mailer", "deliver", "success", "10.0.3.10", "SMTP", 1380, "Message delivered"),
    event("2026-07-13T14:08:27Z", "dc02", "WinEventLog:Security", "WinEventLog:Security", "taylor", "login", "failure", "198.51.100.77", "-", 902, "Account login denied"),
    event("2026-07-13T13:55:09Z", "vpn01", "/var/log/vpn.log", "vpn:auth", "riley", "login", "failure", "203.0.113.44", "-", 702, "VPN login failed"),
    event("2026-07-13T13:42:43Z", "web02", "/var/log/nginx/access.log", "access_combined", "guest", "allowed", "success", "192.0.2.81", "GET", 5112, "GET /catalog 200"),
    event("2026-07-13T13:31:20Z", "db01", "/var/log/mysql/error.log", "mysql:error", "service_db", "query", "failure", "10.0.2.30", "-", 1760, "Database connection error"),
    event("2026-07-13T13:18:06Z", "web01", "/var/log/nginx/access.log", "access_combined", "casey", "allowed", "success", "10.0.1.28", "GET", 2884, "GET /login 200"),
    event("2026-07-13T12:59:52Z", "dc01", "WinEventLog:Security", "WinEventLog:Security", "casey", "login", "success", "10.0.1.28", "-", 930, "Interactive login successful"),
    event("2026-07-13T12:43:38Z", "mail01", "/var/log/maillog", "linux_secure", "unknown", "blocked", "failure", "192.0.2.99", "SMTP", 1260, "Relay attempt denied"),
    event("2026-07-13T12:21:17Z", "dc02", "WinEventLog:Security", "WinEventLog:Security", "taylor", "login", "success", "10.0.1.41", "-", 875, "Network login successful"),
    event("2026-07-13T11:48:23Z", "web02", "/var/log/nginx/access.log", "access_combined", "sam", "allowed", "success", "198.51.100.22", "POST", 6035, "POST /checkout 201"),
    event("2026-07-13T11:16:02Z", "vpn01", "/var/log/vpn.log", "vpn:auth", "admin", "login", "failure", "203.0.113.44", "-", 730, "Repeated failed VPN login")
  ];

  function event(_time, host, source, sourcetype, user, action, status, src_ip, http_method, bytes, message) {
    return {
      _time, index: "test", host, source, sourcetype, user, action, status,
      src_ip, http_method, bytes, message,
      _raw: `${_time} host=${host} user=${user} action=${action} status=${status} src_ip=${src_ip} bytes=${bytes} message="${message}"`
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...defaultState, ...(saved || {}) };
    } catch (error) {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateReadiness();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function domainById(id) {
    return DATA.domains.find((domain) => domain.id === id);
  }

  function renderWeightings() {
    $("#weighting-grid").innerHTML = DATA.domains.map((domain) => `
      <div class="weight-item" style="--domain-color:${domain.color}">
        <strong>${domain.weight}%</strong>
        <span>${escapeHtml(domain.short)}</span>
      </div>
    `).join("");
  }

  function renderPlan() {
    const tabs = $("#day-tabs");
    tabs.innerHTML = DATA.studyPlan.map((day) => {
      const done = day.tasks.filter((task) => state.tasks[task.id]).length;
      return `
        <button class="day-tab" type="button" role="tab" data-day="${day.day}" aria-selected="${state.activeDay === day.day}">
          <strong>Day ${day.day}</strong>
          <span>${done}/${day.tasks.length} targets complete</span>
        </button>
      `;
    }).join("");

    $$(".day-tab", tabs).forEach((button) => {
      button.addEventListener("click", () => {
        state.activeDay = Number(button.dataset.day);
        saveState();
        renderPlan();
      });
    });

    renderActiveDay();
  }

  function renderActiveDay() {
    const day = DATA.studyPlan.find((item) => item.day === state.activeDay) || DATA.studyPlan[0];
    const panel = $("#day-panel");
    panel.innerHTML = `
      <div class="day-overview">
        <span class="day-number">0${day.day}</span>
        <h3>${escapeHtml(day.title)}</h3>
        <p>${escapeHtml(day.summary)}</p>
        <div class="day-goal"><span>Finish-line test</span><strong>${escapeHtml(day.goal)}</strong></div>
      </div>
      <div class="day-tasks">
        ${day.tasks.map((task) => `
          <div class="task-row">
            <input class="task-check" type="checkbox" id="${task.id}" data-task-id="${task.id}" ${state.tasks[task.id] ? "checked" : ""}>
            <label for="${task.id}"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(task.detail)}</span></label>
            <span class="task-time">${escapeHtml(task.time)}</span>
          </div>
        `).join("")}
      </div>
    `;

    $$(".task-check", panel).forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        state.tasks[checkbox.dataset.taskId] = checkbox.checked;
        saveState();
        renderPlan();
        if (checkbox.checked) showToast("Study target completed");
      });
    });
  }

  function renderLessons() {
    const grid = $("#lesson-grid");
    grid.innerHTML = DATA.lessons.map((lesson) => {
      const domain = domainById(lesson.domain);
      const completed = Boolean(state.lessons[lesson.id]);
      return `
        <article class="lesson-card ${completed ? "completed" : ""}" style="--domain-color:${domain.color}">
          <span class="lesson-number">Module ${lesson.number} · ${domain.weight}% of exam</span>
          <h3>${escapeHtml(lesson.title)}</h3>
          <p>${escapeHtml(lesson.summary)}</p>
          <div class="lesson-topics">${lesson.topics.slice(0, 4).map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</div>
          <div class="lesson-card-footer">
            <button type="button" data-lesson-id="${lesson.id}">${completed ? "Review lesson" : "Open lesson"} →</button>
            <span class="complete-badge">${completed ? "✓ Complete" : lesson.duration}</span>
          </div>
        </article>
      `;
    }).join("");

    $$('[data-lesson-id]', grid).forEach((button) => {
      button.addEventListener("click", () => openLesson(button.dataset.lessonId));
    });
  }

  function openLesson(id) {
    const lesson = DATA.lessons.find((item) => item.id === id);
    if (!lesson) return;
    const domain = domainById(lesson.domain);
    const content = $("#lesson-dialog-content");
    content.innerHTML = `
      <span class="dialog-kicker">Module ${lesson.number} · ${escapeHtml(domain.name)} · ${domain.weight}%</span>
      <h2 id="lesson-dialog-title">${escapeHtml(lesson.title)}</h2>
      <p class="dialog-summary">${escapeHtml(lesson.summary)}</p>

      <section class="dialog-section">
        <h3>Core concepts</h3>
        <div class="concept-list">
          ${lesson.concepts.map((concept) => `<div class="concept-item"><strong>${escapeHtml(concept.term)}:</strong> ${escapeHtml(concept.definition)}</div>`).join("")}
        </div>
      </section>

      <section class="dialog-section">
        <h3>What you need to understand</h3>
        <ul>${lesson.explanation.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>

      <section class="dialog-section">
        <h3>SPL examples</h3>
        ${lesson.examples.map((example) => `
          <div class="code-block"><button class="copy-code" type="button" data-code="${escapeHtml(example.spl)}">Copy</button><strong>${escapeHtml(example.label)}</strong>\n${escapeHtml(example.spl)}\n<span>${escapeHtml(example.why)}</span></div>
        `).join("")}
      </section>

      <section class="dialog-section">
        <h3>Hands-on task</h3>
        <p>${escapeHtml(lesson.lab)}</p>
      </section>

      <section class="dialog-section exam-trap">
        <strong>Exam trap:</strong> ${escapeHtml(lesson.trap)}
      </section>

      <div class="dialog-actions">
        <span>Estimated study time: ${escapeHtml(lesson.duration)}</span>
        <button class="button primary" type="button" id="complete-lesson" data-lesson-id="${lesson.id}">${state.lessons[lesson.id] ? "Mark incomplete" : "Mark lesson complete"}</button>
      </div>
    `;

    $$(".copy-code", content).forEach((button) => {
      button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(button.dataset.code);
        showToast("SPL copied");
      });
    });

    $("#complete-lesson", content).addEventListener("click", (event) => {
      const lessonId = event.currentTarget.dataset.lessonId;
      state.lessons[lessonId] = !state.lessons[lessonId];
      saveState();
      renderLessons();
      event.currentTarget.textContent = state.lessons[lessonId] ? "Mark incomplete" : "Mark lesson complete";
      showToast(state.lessons[lessonId] ? "Lesson completed" : "Lesson marked incomplete");
    });

    const dialog = $("#lesson-dialog");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function renderPocketReference() {
    $("#pocket-reference").innerHTML = DATA.pocketReference.map((item) => `
      <div class="pocket-row"><strong>${escapeHtml(item.label)}</strong><code>${escapeHtml(item.code)}</code></div>
    `).join("");
  }

  function renderChecklist() {
    const container = $("#final-checklist");
    container.innerHTML = DATA.checklist.map((item, index) => `
      <div class="check-row">
        <input type="checkbox" id="check-${index}" data-check-index="${index}" ${state.checklist[index] ? "checked" : ""}>
        <label for="check-${index}">${escapeHtml(item)}</label>
      </div>
    `).join("");

    $$('[data-check-index]', container).forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        state.checklist[checkbox.dataset.checkIndex] = checkbox.checked;
        saveState();
        updateChecklistCount();
      });
    });
    updateChecklistCount();
  }

  function updateChecklistCount() {
    const done = DATA.checklist.filter((_, index) => state.checklist[index]).length;
    $("#checklist-progress").textContent = `${done} / ${DATA.checklist.length}`;
  }

  function updateReadiness() {
    const tasks = DATA.studyPlan.flatMap((day) => day.tasks);
    const taskDone = tasks.filter((task) => state.tasks[task.id]).length;
    const lessonDone = DATA.lessons.filter((lesson) => state.lessons[lesson.id]).length;
    const checkDone = DATA.checklist.filter((_, index) => state.checklist[index]).length;
    const total = tasks.length + DATA.lessons.length + DATA.checklist.length;
    const completed = taskDone + lessonDone + checkDone;
    const score = Math.round((completed / total) * 100);

    $("#readiness-score").textContent = `${score}%`;
    $("#score-ring").style.setProperty("--score", score);
    $("#completed-count").textContent = completed;
    $("#total-count").textContent = total;
    $("#hero-progress").style.width = `${score}%`;

    const nextTask = tasks.find((task) => !state.tasks[task.id]);
    if (nextTask) {
      const day = DATA.studyPlan.find((item) => item.tasks.some((task) => task.id === nextTask.id));
      $("#next-up").innerHTML = `<span>Next up</span><strong>Day ${day.day} · ${escapeHtml(nextTask.title)}</strong>`;
    } else {
      $("#next-up").innerHTML = `<span>Plan complete</span><strong>Use your mock scores to confirm readiness.</strong>`;
    }
  }

  function renderLabRecipes() {
    $("#lab-event-count").textContent = `${sampleEvents.length} sample events`;
    const recipes = $("#lab-recipes");
    recipes.innerHTML = DATA.labSearches.map((recipe, index) => `
      <button class="recipe-button ${index === 3 ? "active" : ""}" type="button" data-recipe-index="${index}">
        <strong>${escapeHtml(recipe.name)}</strong><span>${escapeHtml(recipe.spl)}</span>
      </button>
    `).join("");

    $$('[data-recipe-index]', recipes).forEach((button) => {
      button.addEventListener("click", () => {
        const recipe = DATA.labSearches[Number(button.dataset.recipeIndex)];
        $("#spl-input").value = recipe.spl;
        $("#lab-hint").textContent = recipe.hint;
        $("#lab-hint").classList.remove("error");
        $$(".recipe-button", recipes).forEach((item) => item.classList.toggle("active", item === button));
        runSearch();
      });
    });
  }

  function wildcardMatch(actual, expected) {
    const escaped = String(expected).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replaceAll("*", ".*");
    return new RegExp(`^${escaped}$`, "i").test(String(actual ?? ""));
  }

  function rowText(row) {
    return Object.values(row).join(" ").toLowerCase();
  }

  function parseBaseSearch(base, events) {
    const cleaned = base.replace(/[()]/g, " ").trim();
    const tokens = cleaned.match(/"[^"]+"|\S+/g) || [];
    const positiveTerms = [];
    const negativeTerms = [];
    const fieldFilters = [];
    let negateNext = false;
    let hasOr = false;

    tokens.forEach((rawToken) => {
      const token = rawToken.replace(/^"|"$/g, "");
      const upper = token.toUpperCase();
      if (upper === "AND") return;
      if (upper === "OR") { hasOr = true; return; }
      if (upper === "NOT") { negateNext = true; return; }

      const match = token.match(/^([A-Za-z_][\w.]*)=(.+)$/);
      if (match) {
        const [, field, value] = match;
        if (field === "earliest" || field === "latest") return;
        fieldFilters.push({ field, value: value.replace(/^"|"$/g, ""), negate: negateNext });
        negateNext = false;
        return;
      }

      (negateNext ? negativeTerms : positiveTerms).push(token.toLowerCase());
      negateNext = false;
    });

    return events.filter((row) => {
      const fieldsPass = fieldFilters.every((filter) => {
        const matched = wildcardMatch(row[filter.field], filter.value);
        return filter.negate ? !matched : matched;
      });
      if (!fieldsPass) return false;
      const text = rowText(row);
      const positivesPass = positiveTerms.length === 0 || (hasOr ? positiveTerms.some((term) => text.includes(term)) : positiveTerms.every((term) => text.includes(term)));
      const negativesPass = negativeTerms.every((term) => !text.includes(term));
      return positivesPass && negativesPass;
    });
  }

  function aggregateRows(rows, command) {
    const byMatch = command.match(/\s+BY\s+(.+)$/i);
    const byFields = byMatch ? byMatch[1].trim().split(/[\s,]+/).filter(Boolean) : [];
    const aggregatePart = command.replace(/^stats\s+/i, "").replace(/\s+BY\s+.+$/i, "").trim();
    const aggregateRegex = /(count(?:\(([^)]*)\))?|dc\(([^)]+)\)|avg\(([^)]+)\)|sum\(([^)]+)\)|min\(([^)]+)\)|max\(([^)]+)\))(?:\s+AS\s+([A-Za-z_]\w*))?/gi;
    const aggregates = [];
    let match;
    while ((match = aggregateRegex.exec(aggregatePart)) !== null) {
      const expression = match[1];
      let type = expression.toLowerCase().split("(")[0];
      const field = match[2] || match[3] || match[4] || match[5] || match[6] || match[7] || null;
      const alias = match[8] || (type === "count" && !field ? "count" : expression.toLowerCase());
      aggregates.push({ type, field, alias });
    }
    if (!aggregates.length) throw new Error("Use stats with count, dc(field), avg(field), sum(field), min(field), or max(field).");

    const groups = new Map();
    rows.forEach((row) => {
      const key = byFields.length ? byFields.map((field) => String(row[field] ?? "")).join("¦") : "__all__";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(row);
    });

    return Array.from(groups.values()).map((group) => {
      const result = {};
      byFields.forEach((field) => { result[field] = group[0]?.[field] ?? ""; });
      aggregates.forEach((agg) => {
        const values = agg.field ? group.map((row) => row[agg.field]).filter((value) => value !== undefined && value !== null && value !== "") : [];
        const numeric = values.map(Number).filter(Number.isFinite);
        if (agg.type === "count") result[agg.alias] = agg.field ? values.length : group.length;
        if (agg.type === "dc") result[agg.alias] = new Set(values.map(String)).size;
        if (agg.type === "sum") result[agg.alias] = numeric.reduce((sum, value) => sum + value, 0);
        if (agg.type === "avg") result[agg.alias] = numeric.length ? Number((numeric.reduce((sum, value) => sum + value, 0) / numeric.length).toFixed(2)) : 0;
        if (agg.type === "min") result[agg.alias] = numeric.length ? Math.min(...numeric) : 0;
        if (agg.type === "max") result[agg.alias] = numeric.length ? Math.max(...numeric) : 0;
      });
      return result;
    });
  }

  function applyCommand(rows, command) {
    const trimmed = command.trim();
    if (!trimmed) return rows;

    if (/^head\s+/i.test(trimmed)) {
      const count = Number(trimmed.split(/\s+/)[1]) || 10;
      return rows.slice(0, count);
    }

    if (/^table\s+/i.test(trimmed)) {
      const fields = trimmed.replace(/^table\s+/i, "").split(/[\s,]+/).filter(Boolean);
      return rows.map((row) => Object.fromEntries(fields.map((field) => [field, row[field] ?? ""])));
    }

    if (/^fields\s+/i.test(trimmed)) {
      const body = trimmed.replace(/^fields\s+/i, "").trim();
      const exclude = body.startsWith("-");
      const fields = body.replace(/^[+-]\s*/, "").split(/[\s,]+/).filter(Boolean);
      if (exclude) {
        return rows.map((row) => Object.fromEntries(Object.entries(row).filter(([key]) => !fields.includes(key))));
      }
      return rows.map((row) => Object.fromEntries(fields.map((field) => [field, row[field] ?? ""])));
    }

    if (/^sort\s+/i.test(trimmed)) {
      const match = trimmed.match(/^sort\s+([+-])?\s*([A-Za-z_]\w*)/i);
      if (!match) throw new Error("Use sort - field for descending or sort + field for ascending.");
      const direction = match[1] === "-" ? -1 : 1;
      const field = match[2];
      return [...rows].sort((a, b) => {
        const av = a[field] ?? "";
        const bv = b[field] ?? "";
        if (field === "_time") return (new Date(av) - new Date(bv)) * direction;
        if (Number.isFinite(Number(av)) && Number.isFinite(Number(bv))) return (Number(av) - Number(bv)) * direction;
        return String(av).localeCompare(String(bv)) * direction;
      });
    }

    if (/^dedup\s+/i.test(trimmed)) {
      const field = trimmed.split(/\s+/)[1];
      const seen = new Set();
      return rows.filter((row) => {
        const value = String(row[field] ?? "");
        if (seen.has(value)) return false;
        seen.add(value);
        return true;
      });
    }

    if (/^rename\s+/i.test(trimmed)) {
      const match = trimmed.match(/^rename\s+([A-Za-z_]\w*)\s+AS\s+([A-Za-z_]\w*)$/i);
      if (!match) throw new Error("Use rename old_field AS new_field.");
      const [, oldName, newName] = match;
      return rows.map((row) => {
        const copy = { ...row };
        copy[newName] = copy[oldName] ?? "";
        delete copy[oldName];
        return copy;
      });
    }

    if (/^stats\s+/i.test(trimmed)) return aggregateRows(rows, trimmed);

    if (/^(top|rare)\s+/i.test(trimmed)) {
      const type = trimmed.match(/^(top|rare)/i)[1].toLowerCase();
      const limitMatch = trimmed.match(/limit=(\d+)/i);
      const limit = limitMatch ? Number(limitMatch[1]) : 10;
      const body = trimmed.replace(/^(top|rare)\s+/i, "").replace(/limit=\d+/i, "").trim();
      const field = body.split(/[\s,]+/)[0];
      if (!field) throw new Error(`Use ${type} field or ${type} limit=5 field.`);
      const counts = new Map();
      rows.forEach((row) => {
        const value = String(row[field] ?? "");
        counts.set(value, (counts.get(value) || 0) + 1);
      });
      return Array.from(counts, ([value, count]) => ({ [field]: value, count, percent: Number(((count / Math.max(rows.length, 1)) * 100).toFixed(2)) }))
        .sort((a, b) => type === "top" ? b.count - a.count : a.count - b.count)
        .slice(0, limit);
    }

    if (/^timechart\s+/i.test(trimmed)) {
      const buckets = new Map();
      rows.forEach((row) => {
        const date = new Date(row._time);
        date.setUTCMinutes(0, 0, 0);
        const key = date.toISOString().replace(":00.000Z", ":00Z");
        buckets.set(key, (buckets.get(key) || 0) + 1);
      });
      return Array.from(buckets, ([_time, count]) => ({ _time, count })).sort((a, b) => new Date(a._time) - new Date(b._time));
    }

    throw new Error(`The learning simulator does not recognize “${trimmed.split(/\s+/)[0]}”. Try a recipe or a Core User command.`);
  }

  function runSearch() {
    const input = $("#spl-input").value.trim();
    const hint = $("#lab-hint");
    if (!input) {
      hint.textContent = "Enter a search before pressing Run.";
      hint.classList.add("error");
      return;
    }

    try {
      const parts = input.split("|").map((part) => part.trim()).filter(Boolean);
      const sourceEvents = parseBaseSearch(parts.shift() || "index=test", sampleEvents);
      let rows = sourceEvents.map((row) => ({ ...row }));
      parts.forEach((command) => { rows = applyCommand(rows, command); });
      labState = { rows, sourceEvents, view: labState.view };
      hint.textContent = `Search completed. ${sourceEvents.length} events matched before pipeline commands.`;
      hint.classList.remove("error");
      renderLabResults();
    } catch (error) {
      hint.textContent = error.message;
      hint.classList.add("error");
    }
  }

  function renderLabResults() {
    const rows = labState.view === "events" ? labState.sourceEvents : labState.rows;
    const container = $("#lab-results");
    $("#result-summary").textContent = `${rows.length} result${rows.length === 1 ? "" : "s"}`;

    if (!rows.length) {
      container.innerHTML = `<div class="empty-result"><div><strong>No results</strong><br><span>Broaden a field value or try one of the example searches.</span></div></div>`;
      return;
    }

    if (labState.view === "events") {
      const eventFields = ["_time", "host", "sourcetype", "user", "status", "message"];
      container.innerHTML = makeTable(rows, eventFields);
      return;
    }

    const fields = Array.from(rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set())).slice(0, 12);
    container.innerHTML = makeTable(rows, fields);
  }

  function makeTable(rows, fields) {
    return `
      <table class="result-table">
        <thead><tr>${fields.map((field) => `<th>${escapeHtml(field)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${fields.map((field) => `<td>${escapeHtml(row[field] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    `;
  }

  function populateDomainSelect() {
    $("#domain-select").innerHTML = DATA.domains.map((domain) => `<option value="${domain.id}">${escapeHtml(domain.name)}</option>`).join("");
  }

  function selectMockQuestions(bank = DATA.questionBank, total = 60) {
    const weights = { basics: 5, searching: 22, fields: 20, language: 15, transforming: 15, reports: 12, lookups: 6, alerts: 5 };
    const selected = [];
    const used = new Set();

    DATA.domains.forEach((domain) => {
      const target = Math.max(1, Math.round((weights[domain.id] / 100) * total));
      const candidates = shuffle(bank.filter((question) => question.domain === domain.id));
      candidates.slice(0, target).forEach((question) => {
        selected.push(question);
        used.add(question.id);
      });
    });

    if (selected.length < total) {
      shuffle(bank.filter((question) => !used.has(question.id)))
        .slice(0, total - selected.length)
        .forEach((question) => selected.push(question));
    }

    return shuffle(selected).slice(0, Math.min(total, bank.length));
  }

  function randomizeQuestionOptions(questions) {
    return questions.map((question) => {
      const options = shuffle(question.options.map((text, index) => ({ text, correct: index === question.answer })));
      return {
        ...question,
        options: options.map((option) => option.text),
        answer: options.findIndex((option) => option.correct)
      };
    });
  }

  function startQuiz(mode) {
    let questions;
    let label;
    if (mode === "quick") {
      questions = shuffle(DATA.questionBank).slice(0, 10);
      label = "Quick diagnostic";
    } else if (mode === "domain") {
      const domainId = $("#domain-select").value;
      questions = shuffle(DATA.questionBank.filter((question) => question.domain === domainId));
      label = `${domainById(domainId).name} drill`;
    } else if (mode === "mock3") {
      questions = selectMockQuestions(DATA.mockExamBank3, 60);
      label = "Mock Exam Bank 3";
    } else {
      questions = selectMockQuestions(DATA.questionBank, 60);
      label = "Full mock exam";
    }

    questions = randomizeQuestionOptions(questions);
    const isTimedMock = mode === "mock" || mode === "mock3";

    quizState = {
      mode,
      label,
      questions,
      index: 0,
      answers: {},
      startedAt: Date.now(),
      endAt: isTimedMock ? Date.now() + (57 * 60 * 1000) : null,
      timerId: null
    };

    $("#quiz-launcher").classList.add("hidden");
    $("#quiz-results").classList.add("hidden");
    $("#quiz-app").classList.remove("hidden");
    $("#quiz-mode-label").textContent = label;
    $("#quiz-timer").classList.toggle("hidden", !isTimedMock);
    if (isTimedMock) {
      updateTimer();
      quizState.timerId = setInterval(updateTimer, 250);
    }
    renderQuestion();
    $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderQuestion() {
    if (!quizState) return;
    const question = quizState.questions[quizState.index];
    const domain = domainById(question.domain);
    const selected = quizState.answers[question.id];
    $("#quiz-progress-label").textContent = `Question ${quizState.index + 1} of ${quizState.questions.length}`;
    $("#quiz-progress-bar").style.width = `${((quizState.index + 1) / quizState.questions.length) * 100}%`;
    $("#question-card").innerHTML = `
      <span class="question-domain" style="color:${domain.color}">${escapeHtml(domain.name)}</span>
      <h3>${escapeHtml(question.q)}</h3>
      <div class="answer-list">
        ${question.options.map((option, index) => `
          <label class="answer-option">
            <input type="radio" name="answer" value="${index}" ${selected === index ? "checked" : ""}>
            <span><strong>${String.fromCharCode(65 + index)}.</strong> ${escapeHtml(option)}</span>
          </label>
        `).join("")}
      </div>
    `;

    $$('input[name="answer"]', $("#question-card")).forEach((input) => {
      input.addEventListener("change", () => {
        quizState.answers[question.id] = Number(input.value);
        renderQuestionNavigator();
      });
    });

    $("#previous-question").disabled = quizState.index === 0;
    const atEnd = quizState.index === quizState.questions.length - 1;
    $("#next-question").classList.toggle("hidden", atEnd);
    $("#submit-quiz").classList.toggle("hidden", !atEnd);
    renderQuestionNavigator();
  }

  function renderQuestionNavigator() {
    if (!quizState) return;
    $("#question-navigator").innerHTML = quizState.questions.map((question, index) => `
      <button class="nav-question ${quizState.answers[question.id] !== undefined ? "answered" : ""} ${index === quizState.index ? "current" : ""}" type="button" data-question-index="${index}" aria-label="Question ${index + 1}${quizState.answers[question.id] !== undefined ? ", answered" : ""}">${index + 1}</button>
    `).join("");
    $$('[data-question-index]', $("#question-navigator")).forEach((button) => {
      button.addEventListener("click", () => {
        quizState.index = Number(button.dataset.questionIndex);
        renderQuestion();
      });
    });
  }

  function updateTimer() {
    if (!quizState?.endAt) return;
    const remaining = Math.max(0, quizState.endAt - Date.now());
    const totalSeconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    $("#quiz-timer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    if (remaining <= 0) {
      clearInterval(quizState.timerId);
      showToast("Time is up. Your answered questions were submitted.");
      submitQuiz(true);
    }
  }

  function submitQuiz(autoSubmitted = false) {
    if (!quizState) return;
    clearInterval(quizState.timerId);
    const answered = Object.keys(quizState.answers).length;
    const correct = quizState.questions.filter((question) => quizState.answers[question.id] === question.answer).length;
    const percent = Math.round((correct / quizState.questions.length) * 100);
    const elapsed = Math.round((Date.now() - quizState.startedAt) / 1000);
    const snapshot = { ...quizState, answers: { ...quizState.answers } };

    if (snapshot.mode === "mock" || snapshot.mode === "mock3") {
      state.mockHistory.push({ date: new Date().toISOString(), percent, correct, total: snapshot.questions.length, elapsed });
      state.mockHistory = state.mockHistory.slice(-10);
      saveState();
    }

    $("#quiz-app").classList.add("hidden");
    renderQuizResults(snapshot, { answered, correct, percent, elapsed, autoSubmitted });
    quizState = null;
  }

  function renderQuizResults(snapshot, result) {
    const container = $("#quiz-results");
    const domainStats = DATA.domains.map((domain) => {
      const questions = snapshot.questions.filter((question) => question.domain === domain.id);
      if (!questions.length) return null;
      const correct = questions.filter((question) => snapshot.answers[question.id] === question.answer).length;
      return { domain, correct, total: questions.length, percent: Math.round((correct / questions.length) * 100) };
    }).filter(Boolean);
    const missed = snapshot.questions.filter((question) => snapshot.answers[question.id] !== question.answer);
    const minutes = Math.floor(result.elapsed / 60);
    const seconds = result.elapsed % 60;
    let headline = result.percent >= 85 ? "Strong exam-ready performance" : result.percent >= 70 ? "Close—repair the weak domains" : "Rebuild the foundations before retesting";

    container.innerHTML = `
      <div class="results-hero">
        <div class="result-score" style="--result:${result.percent}"><span>${result.percent}%</span></div>
        <div>
          <span class="eyebrow">${escapeHtml(snapshot.label)} complete</span>
          <h3>${headline}</h3>
          <p>${result.correct} correct out of ${snapshot.questions.length}; ${result.answered} answered in ${minutes}m ${seconds}s.${result.autoSubmitted ? " The timer submitted the attempt automatically." : ""}</p>
        </div>
      </div>
      <div class="domain-results">
        ${domainStats.map((item) => `
          <div class="domain-result">
            <div><span>${escapeHtml(item.domain.name)}</span><strong>${item.correct}/${item.total} · ${item.percent}%</strong></div>
            <div class="progress-track"><span style="width:${item.percent}%;background:${item.domain.color}"></span></div>
          </div>
        `).join("")}
      </div>
      <h3>${missed.length ? "Review missed and unanswered questions" : "Perfect score"}</h3>
      ${missed.length ? missed.map((question) => {
        const chosen = snapshot.answers[question.id];
        return `
          <div class="review-answer">
            <h4>${escapeHtml(question.q)}</h4>
            <p><strong>Your answer:</strong> ${chosen === undefined ? "Unanswered" : `${String.fromCharCode(65 + chosen)}. ${escapeHtml(question.options[chosen])}`}</p>
            <p><strong>Correct answer:</strong> ${String.fromCharCode(65 + question.answer)}. ${escapeHtml(question.options[question.answer])}</p>
            <p><strong>Why:</strong> ${escapeHtml(question.explanation)}</p>
          </div>
        `;
      }).join("") : `<div class="review-answer correct"><p>You answered every question correctly. Move to a harder mode or repeat the timed mock with a fresh question order.</p></div>`}
      <div class="dialog-actions">
        <span>Review explanations before starting another attempt.</span>
        <button class="button primary" type="button" id="return-to-quizzes">Choose another quiz</button>
      </div>
    `;
    container.classList.remove("hidden");
    $("#return-to-quizzes").addEventListener("click", () => {
      container.classList.add("hidden");
      $("#quiz-launcher").classList.remove("hidden");
      $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function bindEvents() {
    $("#menu-button").addEventListener("click", () => {
      const open = $("#site-nav").classList.toggle("open");
      $("#menu-button").setAttribute("aria-expanded", String(open));
    });
    $$("#site-nav a").forEach((link) => link.addEventListener("click", () => {
      $("#site-nav").classList.remove("open");
      $("#menu-button").setAttribute("aria-expanded", "false");
    }));

    $("#dialog-close").addEventListener("click", () => $("#lesson-dialog").close());
    $("#lesson-dialog").addEventListener("click", (event) => {
      if (event.target === $("#lesson-dialog")) $("#lesson-dialog").close();
    });

    $("#run-search").addEventListener("click", runSearch);
    $("#spl-input").addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runSearch();
    });
    $$('[data-result-view]').forEach((button) => {
      button.addEventListener("click", () => {
        labState.view = button.dataset.resultView;
        $$('[data-result-view]').forEach((item) => item.classList.toggle("active", item === button));
        renderLabResults();
      });
    });

    $$(".quiz-start").forEach((button) => button.addEventListener("click", () => startQuiz(button.dataset.mode)));
    $("#previous-question").addEventListener("click", () => {
      if (!quizState || quizState.index === 0) return;
      quizState.index -= 1;
      renderQuestion();
    });
    $("#next-question").addEventListener("click", () => {
      if (!quizState || quizState.index >= quizState.questions.length - 1) return;
      quizState.index += 1;
      renderQuestion();
    });
    $("#submit-quiz").addEventListener("click", () => submitQuiz(false));
    $("#exit-quiz").addEventListener("click", () => {
      if (!quizState) return;
      clearInterval(quizState.timerId);
      quizState = null;
      $("#quiz-app").classList.add("hidden");
      $("#quiz-launcher").classList.remove("hidden");
      showToast("Quiz exited; this attempt was not scored.");
    });

    $("#reset-progress").addEventListener("click", () => {
      const confirmed = window.confirm("Reset all study tasks, lessons, checklist items, and mock history on this device?");
      if (!confirmed) return;
      state = { ...defaultState, tasks: {}, lessons: {}, checklist: {}, mockHistory: [] };
      saveState();
      renderPlan();
      renderLessons();
      renderChecklist();
      showToast("Progress reset");
    });
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    }
  }

  function init() {
    renderWeightings();
    renderPlan();
    renderLessons();
    renderPocketReference();
    renderChecklist();
    renderLabRecipes();
    populateDomainSelect();
    bindEvents();
    updateReadiness();
    runSearch();
    registerServiceWorker();
  }

  init();
})();
