window.SPLUNK_HUB_DATA = {
  domains: [
    { id: "basics", short: "Basics", name: "Splunk Basics", weight: 5, color: "#65d46e" },
    { id: "searching", short: "Searching", name: "Basic Searching", weight: 22, color: "#58d3e6" },
    { id: "fields", short: "Fields", name: "Using Fields", weight: 20, color: "#8d8cff" },
    { id: "language", short: "SPL", name: "Search Language Fundamentals", weight: 15, color: "#f5b84c" },
    { id: "transforming", short: "Transform", name: "Basic Transforming Commands", weight: 15, color: "#ff8d85" },
    { id: "reports", short: "Reports", name: "Reports & Dashboards", weight: 12, color: "#45c8a5" },
    { id: "lookups", short: "Lookups", name: "Creating & Using Lookups", weight: 6, color: "#e88ad2" },
    { id: "alerts", short: "Alerts", name: "Scheduled Reports & Alerts", weight: 5, color: "#75a7ff" }
  ],

  studyPlan: [
    {
      day: 1,
      title: "Foundations + basic searching",
      summary: "Learn the data path, navigate Search & Reporting, and reduce a large event set with keywords, fields, and time.",
      goal: "Explain what Splunk is doing at every stage of a basic search.",
      tasks: [
        { id: "d1-architecture", title: "Learn the Splunk data path", detail: "Forwarder → indexer → search head; define apps and common uses.", time: "40 min", lesson: "basics" },
        { id: "d1-navigation", title: "Tour Search & Reporting", detail: "Find the search bar, time picker, timeline, fields sidebar, result tabs, and job controls.", time: "35 min", lesson: "basics" },
        { id: "d1-search", title: "Run the beginner search ladder", detail: "Use index=test, keywords, quoted phrases, Boolean operators, wildcards, and field=value.", time: "70 min", lesson: "searching" },
        { id: "d1-time", title: "Drill time modifiers", detail: "Practice -15m, -24h, @d, latest=now, and the time picker.", time: "35 min", lesson: "searching" },
        { id: "d1-quiz", title: "Complete a quick diagnostic", detail: "Ten mixed questions. Write down every weak domain.", time: "25 min", action: "quick" }
      ]
    },
    {
      day: 2,
      title: "Fields + search pipeline",
      summary: "Understand event anatomy and learn to control which rows and columns survive each SPL command.",
      goal: "Read an SPL pipeline from left to right and predict its result.",
      tasks: [
        { id: "d2-metadata", title: "Master event metadata", detail: "Identify _time, _raw, host, source, sourcetype, and index in real events.", time: "50 min", lesson: "fields" },
        { id: "d2-sidebar", title: "Use the fields sidebar", detail: "Compare selected and interesting fields; click values to refine a search.", time: "35 min", lesson: "fields" },
        { id: "d2-pipeline", title: "Build the pipeline ladder", detail: "Practice fields, table, rename, sort, dedup, and head in a deliberate order.", time: "80 min", lesson: "language" },
        { id: "d2-lab", title: "Repeat searches from memory", detail: "Use the SPL Lab, then run the same searches inside Splunk Enterprise.", time: "45 min", action: "lab" },
        { id: "d2-quiz", title: "Drill Fields and SPL", detail: "Complete both domain drills and explain every missed choice.", time: "35 min", action: "domain" }
      ]
    },
    {
      day: 3,
      title: "Statistics + visual answers",
      summary: "Turn raw events into counts, rankings, trends, reports, visualizations, and dashboard panels.",
      goal: "Choose the correct transforming command for the question being asked.",
      tasks: [
        { id: "d3-transform", title: "Master top, rare, and stats", detail: "Use count, dc, sum, avg, min, max, AS, and BY.", time: "85 min", lesson: "transforming" },
        { id: "d3-compare", title: "Compare transforming outputs", detail: "Explain what raw event detail disappears and which fields remain.", time: "30 min", lesson: "transforming" },
        { id: "d3-reports", title: "Create two reports", detail: "Save a statistical table and a time-based visualization as reports.", time: "45 min", lesson: "reports" },
        { id: "d3-dashboard", title: "Build a dashboard panel", detail: "Add a saved report, choose an appropriate chart, and edit its title.", time: "45 min", lesson: "reports" },
        { id: "d3-quiz", title: "Complete Transforming and Reports drills", detail: "Target 85% or better before moving forward.", time: "35 min", action: "domain" }
      ]
    },
    {
      day: 4,
      title: "Lookups, scheduling + first mock",
      summary: "Enrich events with external context, distinguish reports from alerts, and expose remaining gaps under time pressure.",
      goal: "Complete all blueprint domains and establish a realistic mock-exam baseline.",
      tasks: [
        { id: "d4-lookup", title: "Build a CSV lookup workflow", detail: "Upload a file, create a definition, understand automatic lookup, and use lookup SPL.", time: "70 min", lesson: "lookups" },
        { id: "d4-alerts", title: "Schedule and trigger", detail: "Compare scheduled reports, scheduled alerts, trigger conditions, and throttling.", time: "60 min", lesson: "alerts" },
        { id: "d4-review", title: "Review the SPL pocket reference", detail: "Write one correct example for every listed command.", time: "35 min", action: "review" },
        { id: "d4-mock", title: "Take full Mock Exam 1", detail: "Use the 57-minute timer. Do not look up answers during the attempt.", time: "57 min", action: "mock" },
        { id: "d4-errors", title: "Build an error log", detail: "For each miss: record the concept, why your answer failed, and the correct rule.", time: "55 min", action: "mock" }
      ]
    },
    {
      day: 5,
      title: "Close gaps + prove readiness",
      summary: "Repair weak domains, retrieve SPL from memory, and complete a second timed mock with disciplined pacing.",
      goal: "Score at least 85%, finish on time, and explain every command on the checklist.",
      tasks: [
        { id: "d5-weak", title: "Re-study your two weakest domains", detail: "Use the Mock 1 breakdown—not your feelings—to choose them.", time: "90 min", action: "domain" },
        { id: "d5-recall", title: "Complete a blank-page SPL recall", detail: "Write searches for filtering, fields, cleanup, statistics, trends, and lookups without notes.", time: "45 min", action: "lab" },
        { id: "d5-mock", title: "Take full Mock Exam 2", detail: "Target 85%+, answer easy questions first, and flag difficult items.", time: "57 min", action: "mock" },
        { id: "d5-fix", title: "Review every missed or guessed item", detail: "A lucky answer is not mastery—review it exactly like an incorrect answer.", time: "60 min", action: "mock" },
        { id: "d5-final", title: "Complete the readiness checklist", detail: "Stop heavy studying afterward; do only calm, light review.", time: "25 min", action: "review" }
      ]
    }
  ],

  lessons: [
    {
      id: "basics", number: 1, domain: "basics", title: "Splunk foundations", duration: "35 min",
      summary: "Understand the platform, its main processing components, apps, navigation, and the journey from machine data to searchable events.",
      topics: ["Forwarder", "Indexer", "Search head", "Apps", "Navigation"],
      concepts: [
        { term: "Forwarder", definition: "A lightweight Splunk component that collects data from a source and sends it onward, usually to an indexer." },
        { term: "Indexer", definition: "Receives data, processes it into events, builds searchable indexes, and stores the indexed data." },
        { term: "Search head", definition: "The user-facing component that dispatches searches, presents results, and supports reports and dashboards." },
        { term: "App", definition: "A packaged workspace of configurations and knowledge objects—such as searches, reports, dashboards, and field logic—for a use case." },
        { term: "Search & Reporting", definition: "The main app used to search data, inspect fields, create reports, and build dashboard content." }
      ],
      explanation: [
        "Think of Splunk as a pipeline. Data is collected, processed and indexed, searched, then turned into an answer or action.",
        "Splunk can support security monitoring, IT operations, application troubleshooting, observability, compliance reporting, and business analytics because all of them create machine data.",
        "User settings can affect defaults such as time zone and display behavior. They do not rewrite the underlying indexed events."
      ],
      examples: [
        { label: "Confirm searchable data", spl: "index=test | head 20", why: "Returns a small sample so you can inspect event structure safely." },
        { label: "See common data types", spl: "index=test | stats count BY sourcetype", why: "Shows which source types exist and how many events each contributes." }
      ],
      lab: "Open Search & Reporting. Run index=test | head 20. Locate the time picker, timeline, Events/Statistics/Visualization tabs, fields sidebar, and Job controls. Open one event and point to _time and _raw.",
      trap: "Do not confuse the search head with the indexer. The search head coordinates and presents searches; the indexer stores indexed data and performs much of the search work."
    },
    {
      id: "searching", number: 2, domain: "searching", title: "Basic searching + time", duration: "60 min",
      summary: "Retrieve the right events with keywords, phrases, Boolean logic, fields, wildcards, time boundaries, timeline controls, and search-job actions.",
      topics: ["Keywords", "Boolean", "Time", "Timeline", "Job controls"],
      concepts: [
        { term: "Implied AND", definition: "Separate search terms are treated as though AND appears between them; both must match." },
        { term: "Exact phrase", definition: "Quotation marks keep multiple words together, as in \"failed password\"." },
        { term: "Time picker", definition: "Controls the search window. A narrow relevant window normally searches faster than All time." },
        { term: "Timeline", definition: "A visual distribution of events over time. Selecting a portion can zoom the search to that period." },
        { term: "Search job", definition: "The running search process. Job controls can pause, stop, or inspect the search and its properties." }
      ],
      explanation: [
        "Begin with indexed terms and metadata whenever possible: index, sourcetype, source, and host. Then add specific field-value filters and only the keywords you need.",
        "Use uppercase OR and NOT so the logic is unmistakable. Parentheses make mixed Boolean logic easier to read and safer to interpret.",
        "Relative time uses values such as -15m, -24h, or -7d. A snap such as @d means the start of the current day. latest=now ends at the current time."
      ],
      examples: [
        { label: "Keyword search", spl: "index=test error", why: "Finds events in index=test containing the term error." },
        { label: "Phrase + Boolean", spl: "index=test (\"failed login\" OR denied) NOT success", why: "Matches either failure expression while excluding success." },
        { label: "Relative time", spl: "index=test earliest=-24h latest=now", why: "Limits the search to the previous 24 hours." },
        { label: "Metadata first", spl: "index=test sourcetype=access_combined status=500", why: "Constrains the index and data type before applying a field filter." }
      ],
      lab: "Run the four examples. Change the time from Last 24 hours to Last 15 minutes. Compare the event count and timeline. Stop one running search, then rerun it. Export a small result set as CSV so you know where result export lives.",
      trap: "All time is not a harmless default. It can waste time and resources. On the exam, prefer the narrowest correct time range and the most specific indexed filters."
    },
    {
      id: "fields", number: 3, domain: "fields", title: "Events + fields", duration: "55 min",
      summary: "Recognize default metadata, inspect the fields sidebar, add field-value pairs to a search, and control which fields remain in results.",
      topics: ["_time", "_raw", "host", "source", "sourcetype"],
      concepts: [
        { term: "_time", definition: "The event timestamp used for time-based searching and ordering." },
        { term: "_raw", definition: "The original event text as presented in search results." },
        { term: "host", definition: "The machine, device, or origin assigned to the event." },
        { term: "source", definition: "The input source, such as a file path, network input, or script." },
        { term: "sourcetype", definition: "A classification describing the structure or format of the data." },
        { term: "Selected vs. interesting", definition: "Selected fields are explicitly pinned for display. Interesting fields are discovered because they appear frequently enough in the current result set." }
      ],
      explanation: [
        "A field is a searchable name=value pair. Clicking a value in the fields sidebar can add it to or exclude it from the current search.",
        "The same field can contain different values across events. A field's value distribution is often more useful than one individual event.",
        "The fields command keeps or removes fields. The table command both selects fields and presents them as ordered columns."
      ],
      examples: [
        { label: "Inspect metadata", spl: "index=test | table _time host source sourcetype", why: "Places core metadata in predictable columns." },
        { label: "Keep only fields", spl: "index=test | fields _time host user status", why: "Retains the listed fields for commands that follow." },
        { label: "Remove raw text", spl: "index=test | fields - _raw", why: "Excludes _raw from the results passed forward." },
        { label: "Filter using a field", spl: "index=test status=failure", why: "Keeps only events whose status field equals failure." }
      ],
      lab: "Open the fields sidebar after running index=test. Add user and status as selected fields. Click one status value to filter. Remove it, then use fields - _raw. Explain how the result changed.",
      trap: "source and sourcetype are not interchangeable. source identifies where data came from; sourcetype identifies what kind of data format it is."
    },
    {
      id: "language", number: 4, domain: "language", title: "SPL pipeline fundamentals", duration: "70 min",
      summary: "Read SPL from left to right and shape results with table, fields, rename, dedup, sort, and deliberate command order.",
      topics: ["Pipe", "table", "rename", "dedup", "sort"],
      concepts: [
        { term: "Pipe |", definition: "Passes the current result set to the next command in the search pipeline." },
        { term: "table", definition: "Returns specified fields in a table, using the order written in the command." },
        { term: "rename", definition: "Changes a field name in the current search results, commonly with AS." },
        { term: "dedup", definition: "Removes duplicate combinations of field values, keeping events according to result order." },
        { term: "sort", definition: "Orders results. A minus sign means descending; a plus sign means ascending." }
      ],
      explanation: [
        "Every command receives only what the previous command passes to it. If you remove a field and a later command needs it, the later command cannot use it.",
        "Filter as early as practical, then shape the smaller result set. Put table near the end because it limits the fields available afterward.",
        "Order is especially important with dedup. Sort first when you must control which event is retained for each duplicated value."
      ],
      examples: [
        { label: "Newest event per user", spl: "index=test | sort - _time | dedup user | table _time user host status", why: "Sorts newest first, then keeps the first event for each user." },
        { label: "Rename for readability", spl: "index=test | rename host AS system | table _time system user", why: "Changes the result label without modifying stored event data." },
        { label: "Top five newest", spl: "index=test | sort - _time | head 5", why: "Orders all results, then retains the first five." }
      ],
      lab: "Build this search one pipe at a time: index=test | fields _time host user status | sort - _time | dedup user | rename host AS system | table _time system user status. Predict each intermediate result before adding the next line.",
      trap: "dedup does not mean 'keep the latest' by itself in every context. It keeps according to search order. Use sort before dedup when the retained record must be controlled explicitly."
    },
    {
      id: "transforming", number: 5, domain: "transforming", title: "Top, rare + stats", duration: "75 min",
      summary: "Transform events into ranked values and statistical tables using top, rare, stats, aggregation functions, aliases, and grouping.",
      topics: ["top", "rare", "stats", "Functions", "BY"],
      concepts: [
        { term: "Transforming command", definition: "Converts event results into a data table suitable for reporting and visualization." },
        { term: "top", definition: "Finds the most common field values and normally returns count and percent." },
        { term: "rare", definition: "Finds the least common field values and normally returns count and percent." },
        { term: "stats", definition: "Calculates aggregations such as count, distinct count, sum, average, minimum, and maximum." },
        { term: "BY", definition: "Groups a statistical calculation so each distinct group becomes a result row." }
      ],
      explanation: [
        "Use top or rare when the ranking itself is the question. Use stats when you need a specific calculation or several calculations together.",
        "count counts events. dc(field) counts distinct values. sum, avg, min, and max require numeric values.",
        "AS gives a calculated field a readable label. After a transforming command, the output contains the group fields and calculated fields—not every original event field."
      ],
      examples: [
        { label: "Most common hosts", spl: "index=test | top limit=5 host", why: "Returns the five most frequent hosts with count and percent." },
        { label: "Least common users", spl: "index=test | rare limit=5 user", why: "Highlights uncommon user values." },
        { label: "Events by status", spl: "index=test | stats count AS events BY status", why: "Creates one row per status with an event count." },
        { label: "Distinct users", spl: "index=test | stats dc(user) AS unique_users BY host", why: "Counts unique users separately for each host." },
        { label: "Numeric summary", spl: "index=test | stats avg(bytes) AS avg_bytes max(bytes) AS peak_bytes BY host", why: "Calculates two statistics for each host." }
      ],
      lab: "Run top host, rare user, stats count BY status, and stats dc(user) AS unique_users BY host. Change the BY field and explain how the rows change. Verify that raw event fields are no longer all present after stats.",
      trap: "count and dc are different. count measures events (or non-null field values when a field is supplied); dc(field) measures how many different values the field contains."
    },
    {
      id: "reports", number: 6, domain: "reports", title: "Reports, visualizations + dashboards", duration: "65 min",
      summary: "Save reusable searches, choose meaningful visualizations, and assemble dashboard panels that answer a clear question.",
      topics: ["Reports", "Tables", "Charts", "Panels", "Dashboards"],
      concepts: [
        { term: "Report", definition: "A saved search that can be rerun, edited, shared according to permissions, and optionally scheduled." },
        { term: "Visualization", definition: "A graphical or tabular presentation of structured search results." },
        { term: "Dashboard", definition: "A collection of one or more panels used to present related information in one view." },
        { term: "Panel", definition: "A dashboard element powered by an inline search or a saved report." },
        { term: "Timechart", definition: "A transforming command that aggregates data over time and uses _time as the horizontal axis." }
      ],
      explanation: [
        "Build a correct search first. Save it as a report when it should be reused. Add that report or its visualization to a new or existing dashboard.",
        "Use tables for exact values, bars or columns for category comparison, lines/timecharts for trends, and pie charts only for a small number of parts of a whole.",
        "Visualizations work best with transforming results because the output has defined rows, columns, and numeric values."
      ],
      examples: [
        { label: "Hourly trend", spl: "index=test | timechart span=1h count", why: "Produces a time-series table suitable for a line or column chart." },
        { label: "Category comparison", spl: "index=test | stats count BY host | sort - count", why: "Produces a ranked table suitable for a bar chart." },
        { label: "Status composition", spl: "index=test | stats count BY status", why: "Supports a bar chart or, for very few statuses, a pie chart." }
      ],
      lab: "Save the hourly trend as a report named Event Volume by Hour. Choose a line chart. Add it to a new dashboard named Core User Practice. Add the host comparison as a second panel and give both panels clear titles.",
      trap: "A dashboard is not the same thing as a report. A report is a saved search; a dashboard is a view that contains panels, which may be backed by reports or inline searches."
    },
    {
      id: "lookups", number: 7, domain: "lookups", title: "Creating + using lookups", duration: "55 min",
      summary: "Enrich indexed events with external CSV context by creating a lookup definition, using lookup SPL, and understanding automatic lookup behavior.",
      topics: ["CSV", "Definition", "Match field", "OUTPUT", "Automatic"],
      concepts: [
        { term: "Lookup", definition: "A way to match event fields against an external table and add related fields to search results." },
        { term: "Lookup file", definition: "Commonly a CSV whose first row contains field names and whose rows contain matching values and enrichment data." },
        { term: "Lookup definition", definition: "A named configuration that tells Splunk which lookup table and settings to use." },
        { term: "Automatic lookup", definition: "A configuration that applies lookup enrichment automatically for a specified sourcetype or context." },
        { term: "OUTPUTNEW", definition: "Returns lookup fields without replacing values that already exist in corresponding event fields." }
      ],
      explanation: [
        "A useful asset lookup might contain host, owner, department, and criticality. The host value becomes the match key between events and the table.",
        "The common workflow is: upload or create the CSV table, create a lookup definition, configure permissions, optionally configure an automatic lookup, then use the definition name in SPL.",
        "A lookup enriches search-time results. It does not rewrite the original raw indexed event."
      ],
      examples: [
        { label: "Enrich hosts", spl: "index=test | lookup asset_lookup host OUTPUT owner criticality", why: "Matches host and adds owner and criticality from the lookup." },
        { label: "Avoid overwrite", spl: "index=test | lookup asset_lookup host OUTPUTNEW owner criticality", why: "Adds values only when the result fields are not already populated." },
        { label: "Show enriched results", spl: "index=test | lookup asset_lookup host OUTPUT owner criticality | table _time host owner criticality", why: "Presents the matched context in readable columns." }
      ],
      lab: "Create a CSV with headers host,owner,criticality and at least three host rows. Upload it as a lookup table file, create a definition called asset_lookup, then run the enrichment search. Compare a matched host with an unmatched host.",
      trap: "After creating a lookup definition, the lookup command normally uses the definition name—not merely the uploaded CSV filename. Also remember that unmatched rows do not magically gain values."
    },
    {
      id: "alerts", number: 8, domain: "alerts", title: "Scheduled reports + alerts", duration: "50 min",
      summary: "Schedule saved searches, create condition-driven alerts, understand throttling, and find records of triggered alerts.",
      topics: ["Schedule", "Trigger", "Action", "Throttling", "Fired alerts"],
      concepts: [
        { term: "Scheduled report", definition: "A saved report configured to run on a recurring timetable so results are generated or refreshed." },
        { term: "Alert", definition: "A saved search that evaluates results and triggers one or more actions when its condition is met." },
        { term: "Trigger condition", definition: "The rule that determines whether search results should cause the alert to fire." },
        { term: "Throttling", definition: "Suppresses repeated alert triggering for a configured period after the trigger condition is met." },
        { term: "Fired/Triggered alerts", definition: "The view containing records for alerts that have triggered, subject to their expiration settings." }
      ],
      explanation: [
        "Use a scheduled report when the requirement is simply to run and retain or present results regularly. Use an alert when a condition must cause a response action.",
        "Coordinate the schedule and search time range. For example, an hourly scheduled alert might search the previous hour rather than All time.",
        "Trigger conditions decide whether the alert qualifies to fire. Throttling decides whether a qualifying repeat should be suppressed temporarily."
      ],
      examples: [
        { label: "Failure count", spl: "index=test (\"failed\" OR \"denied\") | stats count AS failures", why: "Creates one numeric value that can be evaluated by an alert condition." },
        { label: "Failures by host", spl: "index=test status=failure | stats count AS failures BY host", why: "Returns one result row per host for threshold evaluation." }
      ],
      lab: "Save the failure count as a report and schedule it hourly. Separately create an alert using the same search that triggers when failures is greater than 10. Add a throttle period and locate the Triggered/Fired Alerts view.",
      trap: "A trigger condition and throttling are not the same setting. A search may meet the condition, yet throttling can suppress a repeat action during the throttle window."
    }
  ],

  labSearches: [
    { name: "Browse events", spl: "index=test | head 10", hint: "Returns the first ten matching sample events." },
    { name: "Filter failures", spl: "index=test status=failure | table _time host user status message", hint: "Uses field=value, then selects readable columns." },
    { name: "Newest per user", spl: "index=test | sort - _time | dedup user | table _time user host status", hint: "Order matters: sort before dedup." },
    { name: "Count by status", spl: "index=test | stats count BY status", hint: "Creates a statistical table grouped by status." },
    { name: "Unique users", spl: "index=test | stats dc(user) AS unique_users BY host", hint: "dc means distinct count." },
    { name: "Top hosts", spl: "index=test | top limit=5 host", hint: "Returns the most frequent hosts with count and percent." },
    { name: "Rare users", spl: "index=test | rare limit=5 user", hint: "Returns least frequent user values." },
    { name: "Hourly trend", spl: "index=test | timechart span=1h count", hint: "Aggregates event volume by hour." },
    { name: "Rename field", spl: "index=test | rename host AS system | table _time system user status", hint: "Changes the result field name, not stored data." }
  ],

  pocketReference: [
    { label: "Find", code: 'index=test error · field=value · "exact phrase" · A OR B · NOT value' },
    { label: "Time", code: "earliest=-15m latest=now · earliest=-24h · earliest=@d" },
    { label: "Shape", code: "fields _time host · fields - _raw · table _time host · rename host AS system" },
    { label: "Clean", code: "sort - _time · dedup user · head 20" },
    { label: "Summarize", code: "top limit=5 host · rare user · stats count BY status · stats dc(user)" },
    { label: "Trend", code: "timechart span=1h count" },
    { label: "Enrich", code: "lookup asset_lookup host OUTPUT owner criticality" }
  ],

  checklist: [
    "I can explain forwarder → indexer → search head and define a Splunk app.",
    "I can narrow a search by time, index, sourcetype, keywords, fields, Boolean operators, quotes, and wildcards.",
    "I can identify _time, _raw, host, source, sourcetype, index, selected fields, and interesting fields.",
    "I can predict the result of table, fields, rename, dedup, sort, head, top, rare, and stats.",
    "I can write stats count BY field and stats dc(field), and I understand why pipeline order matters.",
    "I can save and edit a report, choose a sensible visualization, and add or edit a dashboard panel.",
    "I can explain CSV upload → lookup definition → optional automatic lookup → lookup SPL.",
    "I can distinguish a scheduled report from an alert and explain trigger conditions, throttling, and fired alerts.",
    "I scored at least 85% on two timed 60-question mocks.",
    "I can finish 60 questions in 57 minutes and flag difficult items for review.",
    "I reviewed every missed or guessed question by explaining why each wrong option is wrong."
  ],

  questionBank: [
    { id: 1, domain: "basics", q: "Which Splunk component normally receives, indexes, and stores incoming data?", options: ["Search head", "Indexer", "Dashboard", "App"], answer: 1, explanation: "The indexer processes incoming data into searchable events, builds index files, and stores the indexed data." },
    { id: 2, domain: "basics", q: "What is the primary purpose of a Splunk search head?", options: ["Collect endpoint data", "Store raw data permanently", "Coordinate searches and present results", "Replace all forwarders"], answer: 2, explanation: "The search head provides the search interface, dispatches searches, and presents reports and dashboards." },
    { id: 3, domain: "basics", q: "Which component is commonly used to collect data and send it to an indexer?", options: ["Forwarder", "Panel", "Lookup", "Timeline"], answer: 0, explanation: "A forwarder collects and forwards data to another Splunk component, commonly an indexer." },
    { id: 4, domain: "basics", q: "Which statement best describes a Splunk app?", options: ["A single raw event", "A packaged collection of configurations and knowledge for a use case", "A physical indexer", "A search time range"], answer: 1, explanation: "Apps package searches, reports, dashboards, configurations, and other content for a particular workflow or use case." },
    { id: 5, domain: "basics", q: "Where would a Core User most commonly run ad hoc SPL searches?", options: ["Forwarder Management", "Search & Reporting", "License Manager only", "The operating system registry"], answer: 1, explanation: "Search & Reporting is the primary app for searches, fields, reports, and dashboard work." },

    { id: 6, domain: "searching", q: "At the beginning of a Splunk search, what is implied when two ordinary search terms are separated by a space?", options: ["OR", "AND", "NOT", "XOR"], answer: 1, explanation: "Separate terms are implicitly ANDed, so both must match unless other Boolean logic is specified." },
    { id: 7, domain: "searching", q: "Which syntax searches for the exact phrase failed login?", options: ["failed login", "[failed login]", "\"failed login\"", "failed+login"], answer: 2, explanation: "Quotation marks preserve a multiword exact phrase." },
    { id: 8, domain: "searching", q: "Which search is most efficiently constrained when investigating known Windows Security failures?", options: ["failure", "status=failure", "index=oswinsec failure", "index=oswinsec sourcetype=WinEventLog:Security status=failure"], answer: 3, explanation: "Specifying both index and exact sourcetype narrows the data early before applying the field filter." },
    { id: 9, domain: "searching", q: "Which modifier represents the previous 24 hours ending now?", options: ["earliest=24h latest=@d", "earliest=-24h latest=now", "earliest=now latest=-24h", "time=-24"], answer: 1, explanation: "A negative relative time points backward from now; latest=now ends the window at the current time." },
    { id: 10, domain: "searching", q: "What does earliest=@d mean?", options: ["Exactly 24 hours ago", "The start of the current day", "The end of the current day", "The start of the current decade"], answer: 1, explanation: "@d snaps the time to the beginning of the current day." },
    { id: 11, domain: "searching", q: "Which search matches failure or denied while excluding events containing success?", options: ["failure AND denied AND success", "(failure OR denied) NOT success", "failure NOT denied OR success", "failure + denied - success"], answer: 1, explanation: "Parentheses group the OR alternatives, while NOT excludes success." },
    { id: 12, domain: "searching", q: "What is the main purpose of the search timeline?", options: ["Edit lookup CSV files", "Show event distribution over time and help select a time range", "Rename fields permanently", "Store alert actions"], answer: 1, explanation: "The timeline visualizes event counts over time and can be used to zoom into a period." },
    { id: 13, domain: "searching", q: "Why is All time often a poor default for a routine search?", options: ["It disables fields", "It may search much more data than necessary", "It prevents Boolean operators", "It converts events into statistics"], answer: 1, explanation: "A needlessly broad time window increases the data Splunk must examine and can slow the search." },
    { id: 14, domain: "searching", q: "Which character is commonly used as a wildcard in a search value?", options: ["*", "#", "@", "&"], answer: 0, explanation: "An asterisk is the common wildcard character, such as host=web*." },
    { id: 15, domain: "searching", q: "What does clicking Stop on a running search job do?", options: ["Deletes indexed data", "Stops further processing of that search job", "Removes the Splunk app", "Clears all saved reports"], answer: 1, explanation: "Stop ends processing for the current search job; it does not delete indexed data." },
    { id: 16, domain: "searching", q: "What is the effect of index=test host=web01?", options: ["It creates host web01", "It searches index test for events whose host field equals web01", "It searches every index except test", "It renames test to web01"], answer: 1, explanation: "Both field-value expressions constrain the events retrieved by the search." },
    { id: 17, domain: "searching", q: "Which is the best first action when a search returns far too many events?", options: ["Add a broader wildcard", "Increase the time range", "Narrow the time range and add specific indexed filters", "Remove the index name"], answer: 2, explanation: "A tighter time window and specific index/sourcetype filters reduce irrelevant data early." },
    { id: 18, domain: "searching", q: "Which feature allows search results to be saved outside Splunk in a common tabular file format?", options: ["Export as CSV", "Automatic lookup", "Forwarder restart", "App install"], answer: 0, explanation: "Search results can be exported, including in CSV format, without changing the indexed events." },
    { id: 19, domain: "searching", q: "Which search looks for hosts whose names begin with web?", options: ["host=web*", "host=*web", "host==web", "host=[web]"], answer: 0, explanation: "The trailing wildcard matches any characters after web." },
    { id: 20, domain: "searching", q: "What happens when you select a smaller interval on the timeline?", options: ["The index is deleted", "The search can rerun for the selected time interval", "All fields are renamed", "A dashboard is automatically created"], answer: 1, explanation: "Timeline selection is used to zoom the search into that time range." },

    { id: 21, domain: "fields", q: "Which default field contains the original event text?", options: ["_time", "_raw", "host", "index"], answer: 1, explanation: "_raw contains the event's original text representation in search results." },
    { id: 22, domain: "fields", q: "Which field contains the event timestamp used by time-based searches?", options: ["source", "_time", "sourcetype", "_raw"], answer: 1, explanation: "_time is the parsed event timestamp used for ordering and time selection." },
    { id: 23, domain: "fields", q: "Which metadata field usually identifies the machine or device associated with an event?", options: ["host", "source", "sourcetype", "punct"], answer: 0, explanation: "host identifies the origin assigned to the event, commonly a machine or device." },
    { id: 24, domain: "fields", q: "Which metadata field most directly describes the event data format?", options: ["host", "source", "sourcetype", "linecount"], answer: 2, explanation: "sourcetype classifies the structure or format of the data." },
    { id: 25, domain: "fields", q: "Which metadata field can identify a file path, network input, or other input origin?", options: ["source", "_time", "user", "percent"], answer: 0, explanation: "source identifies the input source, which can be a path or another input identifier." },
    { id: 26, domain: "fields", q: "What is a field in Splunk search results?", options: ["Only a chart color", "A searchable name-value pair", "A physical hard drive", "A scheduled time range"], answer: 1, explanation: "Fields are extracted or metadata name-value pairs used to search, group, and display data." },
    { id: 27, domain: "fields", q: "How is a selected field different from an interesting field?", options: ["Selected fields are manually chosen for display; interesting fields are discovered from the result set", "Interesting fields are always indexed; selected fields never are", "Selected fields exist only in dashboards", "There is no difference"], answer: 0, explanation: "Users pin selected fields, while Splunk identifies interesting fields based on their presence in current results." },
    { id: 28, domain: "fields", q: "What does index=test | fields - _raw do?", options: ["Deletes the original data", "Excludes _raw from the results passed forward", "Keeps only _raw", "Renames _raw"], answer: 1, explanation: "The minus sign tells fields to exclude _raw from the result set; indexed data is unaffected." },
    { id: 29, domain: "fields", q: "What does index=test | fields _time host user do?", options: ["Retains the listed fields for subsequent commands", "Creates three new indexes", "Deletes events missing user", "Sorts by all three fields"], answer: 0, explanation: "The fields command with a positive list retains the named fields for downstream use." },
    { id: 30, domain: "fields", q: "What usually happens when you click a specific field value in the fields sidebar?", options: ["The value can be added as a filter to the search", "The indexer is shut down", "The field is permanently deleted", "A forwarder is installed"], answer: 0, explanation: "The fields sidebar supports adding or excluding field values to refine the current search." },
    { id: 31, domain: "fields", q: "Which search returns events where status equals failure?", options: ["status AS failure", "status=failure", "status BY failure", "fields status failure"], answer: 1, explanation: "A field-value search uses name=value syntax." },
    { id: 32, domain: "fields", q: "Which statement about _raw is correct?", options: ["It is always a calculated count", "It contains raw event text and can be removed from displayed results without deleting indexed data", "It is the dashboard name", "It can only contain numeric values"], answer: 1, explanation: "Removing _raw from results changes display/pipeline fields, not the stored event." },
    { id: 33, domain: "fields", q: "Which pair is most directly used to distinguish where data came from versus what format it has?", options: ["source and sourcetype", "count and percent", "dashboard and panel", "top and rare"], answer: 0, explanation: "source identifies the input origin, while sourcetype identifies the data format/classification." },
    { id: 34, domain: "fields", q: "A field appears in many events in the current results but has not been pinned by the user. Where is it most likely shown?", options: ["Interesting fields", "Triggered alerts", "App installer", "License usage"], answer: 0, explanation: "Frequently occurring discovered fields are typically listed as interesting fields." },

    { id: 35, domain: "language", q: "What does the pipe character do in SPL?", options: ["Deletes the previous result", "Passes current results to the next command", "Creates an index", "Starts a comment"], answer: 1, explanation: "The pipe connects commands so the next command receives the current result set." },
    { id: 36, domain: "language", q: "Which command displays specified fields as ordered columns?", options: ["table", "rare", "lookup", "dedup"], answer: 0, explanation: "table returns the listed fields in tabular column order." },
    { id: 37, domain: "language", q: "Which command changes host to system in the current result set?", options: ["table host BY system", "rename host AS system", "dedup host system", "fields host=system"], answer: 1, explanation: "rename old AS new changes the field name in the search results." },
    { id: 38, domain: "language", q: "Which command removes repeated values of user from the result set?", options: ["dedup user", "rare user", "fields - user", "rename user"], answer: 0, explanation: "dedup user retains events according to result order while removing duplicate user values." },
    { id: 39, domain: "language", q: "Which command sorts results from newest to oldest?", options: ["sort + _time", "sort - _time", "dedup _time", "table - _time"], answer: 1, explanation: "The minus sign requests descending order, placing greater/newer _time values first." },
    { id: 40, domain: "language", q: "You need the newest event for every user. Which order is most explicit?", options: ["dedup user | sort - _time", "sort - _time | dedup user", "table user | rare _time", "fields user | head 1"], answer: 1, explanation: "Sorting newest first before dedup controls which event is retained for each user." },
    { id: 41, domain: "language", q: "Why is table commonly placed near the end of a search?", options: ["It starts all searches", "It restricts the output to named fields, which later commands may still need", "It creates raw events", "It changes the time zone"], answer: 1, explanation: "Placing table too early can remove fields required by subsequent commands." },
    { id: 42, domain: "language", q: "What does head 20 do?", options: ["Returns the last 20 fields", "Retains the first 20 results in current order", "Creates 20 dashboards", "Searches 20 indexes"], answer: 1, explanation: "head N keeps the first N results it receives." },
    { id: 43, domain: "language", q: "Which search correctly renames host and then displays it?", options: ["index=test | rename host AS system | table system", "index=test | table system | rename host", "index=test | host=system | table host", "index=test | dedup system AS host"], answer: 0, explanation: "After rename, downstream commands must use the new field name system." },
    { id: 44, domain: "language", q: "A command needs the user field, but an earlier fields command removed it. What is the likely result?", options: ["The later command cannot use user because it was not passed forward", "Splunk recreates every removed field automatically", "The index is deleted", "All users become admin"], answer: 0, explanation: "Downstream commands can only use fields present in the result set they receive." },
    { id: 45, domain: "language", q: "Which pipeline returns the five newest events?", options: ["index=test | sort - _time | head 5", "index=test | head 5 | sort + _time", "index=test | rare 5 _time", "index=test | dedup 5"], answer: 0, explanation: "Sort descending by time first, then keep the first five results." },

    { id: 46, domain: "transforming", q: "Which command finds the most common values of a field?", options: ["rare", "top", "fields", "rename"], answer: 1, explanation: "top ranks the most frequent field values and normally returns count and percent." },
    { id: 47, domain: "transforming", q: "Which command finds the least common values of a field?", options: ["stats", "top", "rare", "table"], answer: 2, explanation: "rare ranks the least frequent field values." },
    { id: 48, domain: "transforming", q: "Which command calculates statistics based on fields in events?", options: ["fields", "stats", "rename", "dedup"], answer: 1, explanation: "stats performs aggregations such as count, sum, average, and distinct count." },
    { id: 49, domain: "transforming", q: "Which SPL counts events for each status value?", options: ["stats count BY status", "table count status", "top count status", "fields status=count"], answer: 0, explanation: "stats count performs the event count, and BY status groups the calculation." },
    { id: 50, domain: "transforming", q: "Which function counts unique user values?", options: ["count(user)", "sum(user)", "dc(user)", "avg(user)"], answer: 2, explanation: "dc means distinct count and returns the number of different values." },
    { id: 51, domain: "transforming", q: "Which function is appropriate for the arithmetic mean of a numeric bytes field?", options: ["avg(bytes)", "dc(bytes)", "rare(bytes)", "dedup(bytes)"], answer: 0, explanation: "avg computes the arithmetic mean of numeric field values." },
    { id: 52, domain: "transforming", q: "What does BY host do in stats count BY host?", options: ["Renames host", "Creates one grouped count per host", "Deletes the host field", "Sorts hosts alphabetically only"], answer: 1, explanation: "BY makes host the group field, producing one result row for each distinct host." },
    { id: 53, domain: "transforming", q: "What output fields are normally produced by top host?", options: ["Only _raw", "host plus count and percent", "Every original event field", "host plus _time only"], answer: 1, explanation: "top returns the ranked field values and normally includes frequency count and percentage." },
    { id: 54, domain: "transforming", q: "Which search creates a readable name for a calculated distinct-user field?", options: ["stats dc(user) AS unique_users", "rename dc user", "table user AS unique", "fields user=unique"], answer: 0, explanation: "AS aliases the calculated result field." },
    { id: 55, domain: "transforming", q: "After stats count BY status, which information is normally present?", options: ["Every raw field from every event", "The status groups and their calculated counts", "Only the forwarder name", "The original CSV lookup file"], answer: 1, explanation: "A transforming command outputs the group fields and calculated fields rather than all original event detail." },
    { id: 56, domain: "transforming", q: "Which command best answers 'What are the five most frequent source types?'", options: ["rare limit=5 sourcetype", "top limit=5 sourcetype", "dedup sourcetype", "fields sourcetype"], answer: 1, explanation: "top ranks the most frequent values; limit=5 requests five rows." },
    { id: 57, domain: "transforming", q: "Which search returns both average and maximum bytes for each host?", options: ["stats avg(bytes) max(bytes) BY host", "top avg bytes host", "table avg max bytes", "rare bytes BY host"], answer: 0, explanation: "stats can calculate multiple aggregations in one command and group them with BY." },

    { id: 58, domain: "reports", q: "What is a Splunk report?", options: ["A saved search that can be rerun and managed", "A physical forwarder", "A raw event only", "A lookup match key"], answer: 0, explanation: "A report is a saved search that can be edited, shared by permissions, visualized, and scheduled." },
    { id: 59, domain: "reports", q: "What is a dashboard?", options: ["A single host field", "A collection of panels presenting related information", "A data forwarder", "A Boolean operator"], answer: 1, explanation: "Dashboards contain one or more panels, each presenting search-powered information." },
    { id: 60, domain: "reports", q: "Which visualization is generally best for showing event volume over time?", options: ["Line chart based on timechart", "Single pie with 50 slices", "Static text only", "Lookup definition"], answer: 0, explanation: "A timechart produces a time series, and a line chart clearly shows change over time." },
    { id: 61, domain: "reports", q: "Which visualization is generally best for comparing counts across several hosts?", options: ["Bar chart", "Paragraph", "Forwarder table file", "Alert action"], answer: 0, explanation: "Bars make categorical magnitude comparisons easy to see." },
    { id: 62, domain: "reports", q: "What is a dashboard panel commonly powered by?", options: ["A search or saved report", "A physical disk partition", "A user password", "A time zone only"], answer: 0, explanation: "A panel's visualization is generated by a search, either inline or through a saved report." },
    { id: 63, domain: "reports", q: "Which is the most sensible order for creating reusable visual content?", options: ["Build a working search → save as report → choose visualization → add to dashboard", "Create an empty alert → delete the index → add fields", "Install a forwarder → rename _raw → stop Splunk", "Create a dashboard → remove all panels → export users"], answer: 0, explanation: "Start with correct data and results, then save, visualize, and place them into a dashboard." },
    { id: 64, domain: "reports", q: "Which command creates a time-based statistical result with _time on the horizontal axis?", options: ["timechart", "rename", "dedup", "lookup"], answer: 0, explanation: "timechart aggregates over time and uses _time as its time axis." },
    { id: 65, domain: "reports", q: "When is a table preferable to a chart?", options: ["When exact values and multiple columns must be read precisely", "When no search exists", "When installing a forwarder", "When changing a password"], answer: 0, explanation: "Tables are strongest for precise lookup of values; charts are strongest for patterns and comparisons." },

    { id: 66, domain: "lookups", q: "What is the primary purpose of a lookup?", options: ["Add external context to matching events", "Delete the index", "Stop all searches", "Replace the search head"], answer: 0, explanation: "Lookups match event fields to an external table and add related context to search results." },
    { id: 67, domain: "lookups", q: "What should the first row of a CSV lookup file normally contain?", options: ["Field names as headers", "A dashboard screenshot", "Only Boolean operators", "A timer value"], answer: 0, explanation: "The header row names the lookup fields used for matching and output." },
    { id: 68, domain: "lookups", q: "After uploading a CSV, what named object is commonly created so searches can use the table with configured settings?", options: ["Lookup definition", "Search head cluster", "Timeline", "Forwarder token"], answer: 0, explanation: "A lookup definition provides a name and configuration for the lookup table." },
    { id: 69, domain: "lookups", q: "What does an automatic lookup do?", options: ["Applies lookup enrichment automatically in its configured context", "Runs every search in real time", "Deletes unmatched events", "Creates a new index for every row"], answer: 0, explanation: "An automatic lookup applies configured matching and output without requiring the lookup command in every search." },
    { id: 70, domain: "lookups", q: "What is the purpose of OUTPUTNEW in a lookup command?", options: ["Avoid overwriting an existing result field value", "Delete all old lookup files", "Create a new search head", "Force every row to match"], answer: 0, explanation: "OUTPUTNEW adds lookup values only when the corresponding result fields do not already have values." },

    { id: 71, domain: "alerts", q: "Which object should be used when a search must trigger an action only after a condition is met?", options: ["Alert", "Dashboard", "App icon", "Timeline"], answer: 0, explanation: "An alert evaluates results and triggers configured actions when its condition is satisfied." },
    { id: 72, domain: "alerts", q: "What is the main purpose of a scheduled report?", options: ["Run a saved report on a recurring timetable", "Suppress duplicate field values", "Upload a CSV", "Change a sourcetype"], answer: 0, explanation: "A scheduled report runs periodically so its results can be generated or refreshed." },
    { id: 73, domain: "alerts", q: "What does alert throttling control?", options: ["Whether qualifying repeat alerts are suppressed for a period", "Which index stores all data", "How fields are extracted", "The dashboard color"], answer: 0, explanation: "After the trigger condition is met, throttling can suppress repeated triggering for the configured time." },
    { id: 74, domain: "alerts", q: "Where would a user look for records of alerts that have triggered?", options: ["Fired or Triggered Alerts", "The forwarder installer", "The lookup CSV header", "User preferences only"], answer: 0, explanation: "The Fired/Triggered Alerts view shows records of alerts that have fired, subject to retention/expiration." },
    { id: 75, domain: "alerts", q: "An alert runs every hour. Which search window is usually more logical for detecting new hourly failures?", options: ["A relevant recent window such as the previous hour", "All time every run regardless of need", "A future-only time range", "No time range and no search"], answer: 0, explanation: "The schedule and search window should align so each run evaluates the intended recent period without unnecessary overlap." },

{ id: 76, domain: "transforming", q: "Which search returns the number of events for each status code?", options: ["index=web | table status | count", "index=web | stats count BY status", "index=web | fields status | count BY status", "index=web | top count status"], answer: 1, explanation: "stats count BY status creates one row per status value with the number of matching events." },
{ id: 77, domain: "fields", q: "Which command is best for showing only the fields host, source, and status in results?", options: ["table host, source, status", "fields host source status", "stats host source status", "sort host source status"], answer: 1, explanation: "The fields command keeps only the named fields in the result set for downstream use." },
{ id: 78, domain: "lookups", q: "A user wants to enrich events with department names stored in a CSV file. Which command is used during the search?", options: ["inputlookup", "outputlookup", "lookup", "eval"], answer: 2, explanation: "lookup is the search-time command used to match event fields to a lookup table and add extra fields." },
{ id: 79, domain: "searching", q: "Which search returns only events where all three terms are present: error, fail, and 403?", options: ["error OR fail OR 403", "error AND fail AND 403", "error (fail OR 403)", "error NOT fail 403"], answer: 1, explanation: "AND requires all terms to be present in the matching events." },
{ id: 80, domain: "transforming", q: "Which search correctly finds the maximum value of bytes?", options: ["index=web | max(bytes)", "index=web | stats max(bytes)", "index=web | table max(bytes)", "index=web | fields max(bytes)"], answer: 1, explanation: "stats max(bytes) calculates the maximum numeric value for the bytes field." },
{ id: 81, domain: "transforming", q: "What does values(user) do in a stats search?", options: ["Counts all users", "Lists unique user values", "Lists all user values including duplicates", "Renames the user field"], answer: 1, explanation: "values(field) returns the unique values found for that field." },
{ id: 82, domain: "searching", q: "Which time modifier means from 24 hours ago until now?", options: ["earliest=-24h latest=now", "earliest=@d latest=now", "earliest=-1d@d latest=@d", "earliest=yesterday latest=today"], answer: 0, explanation: "earliest=-24h latest=now defines a rolling 24-hour window ending at the current time." },
{ id: 83, domain: "searching", q: "A search job opened from Activity shows what?", options: ["New events based on the current time picker", "The same results from when the original search ran", "All current events in the index", "Only bookmarked results"], answer: 1, explanation: "Opening a historical search job from Activity shows the results from that original job execution." },
{ id: 84, domain: "fields", q: "Which statement about fields is true?", options: ["Field values are case sensitive, field names are not", "Field names are case sensitive, field values are not", "Both are always case sensitive", "Neither is case sensitive"], answer: 1, explanation: "Field names are case sensitive in SPL, while field values are generally not." },
{ id: 85, domain: "lookups", q: "Which command is used to review the contents of a static lookup file?", options: ["lookup", "outputlookup", "inputlookup", "csvlookup"], answer: 2, explanation: "inputlookup reads and displays the contents of a static lookup table." },
{ id: 86, domain: "reports", q: "Which is the best description of a report in Splunk?", options: ["A report is only a PDF export", "A report is a saved search that can display statistics or visualizations", "A report is the same as an alert", "A report cannot be added to a dashboard"], answer: 1, explanation: "A Splunk report is a saved search that can be rerun, visualized, shared, and scheduled." },
{ id: 87, domain: "searching", q: "Which search is best for reducing work early in the pipeline?", options: ["index=* | sort host", "error | fields user src", "index=web status=404", "index=* | table *"], answer: 2, explanation: "Specific indexed filters and field constraints reduce the amount of data Splunk must search." },
{ id: 88, domain: "reports", q: "A dashboard panel is based on a report. Which is true?", options: ["You can edit the search directly in the panel", "Changes to the report can affect dashboards using that report", "The report cannot be reused", "Panels based on reports cannot be visualized"], answer: 1, explanation: "Panels backed by reports depend on that report, so report changes can affect dashboards using it." },
{ id: 89, domain: "language", q: "Which command removes duplicate results based on a field?", options: ["sort", "fields", "dedup", "rename"], answer: 2, explanation: "dedup removes duplicate field values while keeping results according to current search order." },
{ id: 90, domain: "transforming", q: "Which search returns the top 5 most common values of host?", options: ["index=web | stats top 5 BY host", "index=web | top host limit=5", "index=web | rare host limit=5", "index=web | stats count(host)=5"], answer: 1, explanation: "top host limit=5 returns the five most frequent host values." }
  ],

  mockExamBank3: [
  {
    "id": "b3-1",
    "domain": "reports",
    "q": "When editing a dashboard panel that is based on the report, which of the following is true?",
    "options": [
      "You can modify the search string in the panel and you can change and configure the visualization",
      "You can modify the search string in the panel, but you cannot change and configure the visualization",
      "You cannot modify the search string in a panel, but you can change and configure the visualization",
      "You cannot modify the search string in a panel and you cannot change and configure the visualization"
    ],
    "answer": 2,
    "explanation": "When a dashboard panel is based on a report, the search logic is inherited from the report and is not editable directly within the panel. However, the panel's visualization settings such as chart type, formatting, and display options can be modified independently.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-2",
    "domain": "transforming",
    "q": "Which of the following are common constraints of the top command?",
    "options": [
      "Limit count",
      "Limit showperc",
      "limit count field",
      "showperc count field"
    ],
    "answer": 1,
    "explanation": "The top command commonly uses the limit constraint to control how many values are returned and the showperc constraint to display each values percentage of the total.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-3",
    "domain": "reports",
    "q": "When displaying results of a search, which of the following is true about line charts?",
    "options": [
      "Line charts are optimal for single and multiple series",
      "Line charts are optimal for single series when using fast mode",
      "Line charts are optimal for multiple series with three or more columns",
      "Line charts are optimal for multi- series searches with at least two or more columns"
    ],
    "answer": 3,
    "explanation": "Line charts in Splunk are designed to visualize trends over time and work best when displaying multiple series where each series is represented by a separate field or column. This allows meaningful comparison across related data sets on the same time axis.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-4",
    "domain": "searching",
    "q": "How are events displayed after a search is executed?",
    "options": [
      "in chronological order",
      "randomly by default",
      "in reverse chronological order",
      "alphabetically according to field name"
    ],
    "answer": 2,
    "explanation": "By default, Splunk displays searched results with the most recent events first. This allows analysts to immediately see the latest activity without changing any settings.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-5",
    "domain": "searching",
    "q": "Which of the following is true about user account settings and preferences?",
    "options": [
      "Search and reporting is the only app that can be set as the default application",
      "Full names can only be changed by accounts with a power user or admin role",
      "Time zones are automatically updated based on the setting of the computer accessing Splunk",
      "Full name, time zone, and default app can be defined by clicking the login name in the Splunk bar"
    ],
    "answer": 3,
    "explanation": "User account preferences in Splunk allow each user to configure their own full name, time zone, and default app directly from the user menu accessed by clicking their login name. These settings are user specific and do not require elevated privileges.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-6",
    "domain": "alerts",
    "q": "What is a primary function of a scheduled report?",
    "options": [
      "Autodetect changes in performance",
      "Autogenerated PDF reports of overall data trends",
      "Regularly scheduled archiving to keep disk space use low",
      "Triggering an alert in your Splunk instance when certain conditions are met"
    ],
    "answer": 3,
    "explanation": "A scheduled report runs a search on a defined schedule and evaluates its results. One of its primary functions is to act as the underlying mechanism for alerts triggering notifications or actions when specified conditions are satisfied.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-7",
    "domain": "searching",
    "q": "After running a search, what effect does clicking and dragging across the timeline have?",
    "options": [
      "executes a new search?",
      "filters current search results",
      "moves to past or future events",
      "expands the time range of the search"
    ],
    "answer": 1,
    "explanation": "Clicking and dragging across the timeline narrows the time range of the already executed search. The existing results are filtered to only include events within the selected time window. The search is not rewritten, only constrained by time.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-8",
    "domain": "lookups",
    "q": "Which command is used to review the contents of a specified static lookup file?",
    "options": [
      "lookup,",
      "CSV lookup,",
      "input lookup,",
      "output lookup"
    ],
    "answer": 2,
    "explanation": "The input lookup command is used to view and search the contents of a static lookup file, such as a CSV, without writing results back to the file. It allows you to inspect lookup data directly within a search.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-9",
    "domain": "language",
    "q": "When sorting on multiple fields with the sort command, what delimiter can be used between the field names in the search?",
    "options": [
      "pipe,",
      "dollar,",
      "exclamation,",
      "comma"
    ],
    "answer": 3,
    "explanation": "When using the sort command with multiple fields in Splunk, field names are separated by commas. This allows sorting to be applied in sequence, first by the leftmost field, then by subsequent fields.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-10",
    "domain": "searching",
    "q": "Which time range picker configuration would return real-time events for the past 30 seconds?",
    "options": [
      "Preset relative 30 seconds ago",
      "relative earliest 30 seconds ago latest now",
      "Realtime earliest 30 seconds ago latest now",
      "advanced earliest 30 seconds ago latest now"
    ],
    "answer": 2,
    "explanation": "This configuration enables a real-time search window that continuously updates while only displaying events from the last 30 seconds. Realtime mode is required to stream incoming events as they occur.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-11",
    "domain": "alerts",
    "q": "In the Splunk alerts interface, the list of alerts can be filtered based on which characteristics?",
    "options": [
      "app owner severity and type",
      "app owner priority and status",
      "app dashboard severity and type",
      "app time window type and severity"
    ],
    "answer": 1,
    "explanation": "In the Splunk alerts interface, alerts [snorts] can be filtered by the application they belong to, the owner who created them, their priority level, and their current status, such as enabled or disabled. These filters help manage and locate alerts efficiently in environments with many alerts.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-12",
    "domain": "alerts",
    "q": "What are the steps to schedule a report?",
    "options": [
      "After saving the report, click schedule",
      "After saving the report, click event type",
      "After saving the report, click scheduling",
      "After saving the report, click dashboard panel"
    ],
    "answer": 0,
    "explanation": "In Splunk, a report must first be saved. Once saved, the schedule option becomes available, allowing you to define when and how often the report runs along with any related actions.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-13",
    "domain": "fields",
    "q": "In the field sidebar, what indicates that a field is numeric?",
    "options": [
      "a number to the right of the field name?",
      "a hash symbol to the left of the field name?",
      "a lowercase N to the left of the field name",
      "a lowercase N to the right of the field name"
    ],
    "answer": 1,
    "explanation": "In the Splunk field sidebar, a hash icon indicates that the field contains numeric values. Splunk uses these icons to quickly communicate the data type of fields for analysis and visualization purposes.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-14",
    "domain": "transforming",
    "q": "Which of the following are functions of the stats command?",
    "options": [
      "Count sum add",
      "Count sum less",
      "Sum average values",
      "Sum values table"
    ],
    "answer": 2,
    "explanation": "These are valid statistical functions provided by the stats command. Sum calculates totals. Average [snorts] calculates the average and values returns the unique values for a field.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-15",
    "domain": "fields",
    "q": "Where does Splunk store the event timestamp value?",
    "options": [
      "_time",
      "time",
      "event_time",
      "timestamp"
    ],
    "answer": 0,
    "explanation": "At index time, Splunk stores the event timestamp in the internal field underscore time. This field is used for timebased indexing, searching and ordering of events and it is fundamental to how Splunk processes and retrieves data efficiently.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-16",
    "domain": "language",
    "q": "Which of the following is a best practice when writing a search string?",
    "options": [
      "Include all formatting commands before any search terms",
      "Include at least one function as this is a search requirement",
      "Include the search terms at the beginning of the search string",
      "Avoid using formatting clauses as they add too much overhead"
    ],
    "answer": 2,
    "explanation": "Best practice in Splunk is to place search terms and filters as early as possible. This reduces the amount of data processed by subsequent commands and improves overall search performance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-17",
    "domain": "reports",
    "q": "What type of search can be saved as a report?",
    "options": [
      "Any search can be saved as a report",
      "Only searches that generate visualizations",
      "Only searches containing a transforming command",
      "Only searches that generate statistics or visualizations"
    ],
    "answer": 0,
    "explanation": "In Splunk, any valid search can be saved as a report. Whether it is a simple event search, a transforming search, or one that produces statistics or visualizations. Transforming searches are required only if the report is intended to generate visualizations, not for saving the report itself.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-18",
    "domain": "searching",
    "q": "What can be included in the all fields option in the sidebar?",
    "options": [
      "Dashboards",
      "Metadata only",
      "Non-interesting fields",
      "Field descriptions"
    ],
    "answer": 2,
    "explanation": "The all field section in the field sidebar contains every field present in the search results, including those that Splunk does not classify as interesting. This allows users to manually add less frequently used or less prominent fields to selected fields.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-19",
    "domain": "fields",
    "q": "When viewing the results of a search, what is an interesting field?",
    "options": [
      "A field that appears in any event",
      "a field that appears in every event",
      "A field that appears in the top 10 events",
      "A field that appears in at least 20% of the events"
    ],
    "answer": 3,
    "explanation": "In Splunk, an interesting field is one that occurs in a significant portion of the return events, typically at least 20%. These fields are surfaced to help users quickly identify commonly occurring and potentially useful dimensions for analysis.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-20",
    "domain": "basics",
    "q": "When a Splunk search generates calculated data that appears in the statistics tab, in what formats can the results be exported?",
    "options": [
      "CSV, JSON, PDF",
      "CSV, XML, JSON",
      "Raw events, XML, JSON",
      "Raw events, CSV, XML, JSON"
    ],
    "answer": 1,
    "explanation": "When a Splunk search produces calculated results that appear in the statistics tab, those results can be exported in structured data formats suitable for further processing or integration. The supported export formats are CSV, XML, and JSON.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-21",
    "domain": "searching",
    "q": "Which of the following is the most efficient filter for running searches in Splunk?",
    "options": [
      "time,",
      "fast mode,",
      "sourcetype,",
      "selected fields"
    ],
    "answer": 0,
    "explanation": "Time is the most efficient filter in Splunk because it limits the amount of index data that must be scanned before any other processing occurs. Time constraints are applied at the index level, dramatically reducing I/O and improving search performance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-22",
    "domain": "searching",
    "q": "How does Splunk determine which fields to extract from data?",
    "options": [
      "Splunk only extracts the most interesting data from the last 24 hours",
      "Splunk only extracts fields users have manually specified in their data",
      "Splunk automatically extracts any fields that generate interesting visualizations",
      "Splunk automatically discovers many fields based on sourcetype and key value pairs found in the data"
    ],
    "answer": 3,
    "explanation": "Splunk performs automatic field extraction at search time using the assigned sourcetype and by detecting common patterns such as key value pairs within the raw event data. This allows fields to be extracted without manual definition.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-23",
    "domain": "searching",
    "q": "Which of the following file types is an option for exporting Splunk search results?",
    "options": [
      "PDF,",
      "JSON,",
      "XLS,",
      "RTF"
    ],
    "answer": 2,
    "explanation": "Splunk allows search results to be exported in several formats, including CSV, XML, and Excel spreadsheet format. XLS is a supported export option for search results from the Splunk UI.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-24",
    "domain": "language",
    "q": "What syntax is used to link key value pairs in search strings?",
    "options": [
      "Parentheses",
      "Add or hash symbols",
      "Quotation marks",
      "relational operations such as equals, less than, or greater than"
    ],
    "answer": 3,
    "explanation": "In Splunk search syntax, key and value pairs are linked using relational operators. The most common is the equal sign, but other operators such as less than or greater than can also be used depending on the comparison required.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-25",
    "domain": "fields",
    "q": "Which search would return events from the access_combined sourcetype?",
    "options": [
      "sourcetype=access_combined",
      "Sourcetype=access_combined",
      "sourcetype=ACCESS_COMBINED",
      "source=access_combined"
    ],
    "answer": 0,
    "explanation": "Field values are not case-sensitive. So, access combined is matched correctly.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-26",
    "domain": "searching",
    "q": "Which index search would provide the most efficient search performance?",
    "options": [
      "error",
      "index=* error",
      "index=web OR index=security error",
      "sourcetype=* error"
    ],
    "answer": 2,
    "explanation": "Clearly defined index constraints provide the best performance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-27",
    "domain": "reports",
    "q": "What is a suggested Splunk best practice for naming reports?",
    "options": [
      "Reports are best named using many numbers so they can be more easily sorted",
      "Use a consistent naming convention so they are easily separated by characteristics such as group and object",
      "Name reports as uniquely as possible with no overlap to differentiate them from one another",
      "Any naming convention is fine as long as you keep an external spreadsheet to keep track"
    ],
    "answer": 1,
    "explanation": "Splunk best practice recommends using a consistent structured naming convention for reports. This makes reports easier to organize, search, maintain, and reuse, especially in environments with many users and knowledge objects.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-28",
    "domain": "language",
    "q": "In a deployment with multiple indexes, what will happen when a search is run and an index is not specified in the search string?",
    "options": [
      "No events will be returned",
      "Splunk will prompt you to specify an index",
      "All non-indexed events to which the user has access will be returned",
      "Events from every index searched by default to which the user has access will be returned"
    ],
    "answer": 3,
    "explanation": "When no index is specified in a Splunk search, Splunk searches all default indexes that the user has permission to access. The exact set of indexes depend on the user's role configuration.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-29",
    "domain": "searching",
    "q": "When looking at a statistics table, what is one way to drill down to see the underlying events?",
    "options": [
      "Creating a pivot table",
      "Clicking on the visualizations tab",
      "Viewing your report in a dashboard",
      "Clicking on any field value in the table"
    ],
    "answer": 3,
    "explanation": "In Splunk, statistics tables support drill down by default. Clicking on a field value applies that value as a filter and allows you to view the underlying events that contributed to the statistic.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-30",
    "domain": "language",
    "q": "Which SPL syntax counts the number of events containing the vendor_action field?",
    "options": [
      "| stats values(vendor_action)",
      "| stats dc(vendor_action)",
      "| stats count(vendor_action)",
      "| stats sum(vendor_action)"
    ],
    "answer": 2,
    "explanation": "Using count vendor action returns the number of events that contain the vendor action field.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-31",
    "domain": "reports",
    "q": "What is one benefit of creating dashboard panels from reports?",
    "options": [
      "Any newly created dashboard will include that report",
      "There are no benefits to creating dashboard panels from reports",
      "It makes the dashboard more efficient because it only has to run one search string",
      "Any change to the underlying report will affect every dashboard that utilizes that report"
    ],
    "answer": 3,
    "explanation": "When dashboard panels are created from reports, they reference the reports search logic. Updating the report automatically updates all dashboards that use it, ensuring consistency and reducing duplicated maintenance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-32",
    "domain": "fields",
    "q": "By default, which of the following fields will be listed in the fields sidebar under interesting fields?",
    "options": [
      "host,",
      "index,",
      "source,",
      "sourcetype"
    ],
    "answer": 0,
    "explanation": "By default, the interesting fields list shows fields that appear frequently in the current search results and provide analytical value. The host field commonly varies across events and is therefore surfaced as an interesting field.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-33",
    "domain": "searching",
    "q": "Which of the following statements about case sensitivity is true?",
    "options": [
      "Both field names and field values are case sensitive?",
      "Field names are case-sensitive. Field values are not",
      "Field values are case-sensitive. Field names are not",
      "Both field names and field values are not case-sensitive"
    ],
    "answer": 1,
    "explanation": "Field values are not. In Splunk searches, field names must match the exact case as defined in the data model or extraction. Field values, however, are case insensitive by default unless explicitly handled otherwise using functions or commands that enforce case sensitivity.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-34",
    "domain": "transforming",
    "q": "What does the rare command do?",
    "options": [
      "returns the least common field values of a given field in the results",
      "returns the most common field values of a given field in the results",
      "returns the top 10 field values of a given field in the results",
      "returns the lowest 10 field values of a given field in the results"
    ],
    "answer": 0,
    "explanation": "The rare command in Splunk is used to identify uncommon or infrequent values within a specified field. It is essentially the inverse of the top command and is useful for spotting anomalies or unusual behavior.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-35",
    "domain": "alerts",
    "q": "When an alert action runs a script, which directory is one location Splunk checks for the script?",
    "options": [
      "$SPLUNK_HOME/bin/scripts",
      "$SPLUNK_HOME/etc/apps",
      "$SPLUNK_HOME/var/run",
      "$SPLUNK_HOME/share"
    ],
    "answer": 0,
    "explanation": "One of the default locations Splunk checks is Splunk home bin scripts.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-36",
    "domain": "language",
    "q": "is A. Which boolean operator is always implied between two search terms unless otherwise specified",
    "options": [
      "or",
      "not",
      "N",
      "X or"
    ],
    "answer": 2,
    "explanation": "In Splunk searches, when multiple search terms are written next to each other without an explicit boolean operator, Splunk implicitly applies and. This means all specified terms must be present in an event for it to be returned.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-37",
    "domain": "transforming",
    "q": "What does the values function of the stats command do?",
    "options": [
      "lists all values of a given field",
      "lists unique values of a given field",
      "returns a count of unique values for a given field",
      "returns the number of events that match the search"
    ],
    "answer": 1,
    "explanation": "The values function in the stats command returns a list of distinct unique values that appear in the specified field across the search results. Duplicate values are removed making it useful for understanding the range of different values present.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-38",
    "domain": "transforming",
    "q": "Which stats function returns the number of unique values for a field?",
    "options": [
      "dc(field)",
      "count(field)",
      "values(field)",
      "sum(field)"
    ],
    "answer": 0,
    "explanation": "It is specifically designed to count distinct occurrences.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-39",
    "domain": "searching",
    "q": "A collection of items containing things such as data inputs, UI elements, and knowledge objects is known as what?",
    "options": [
      "An app",
      "JSON",
      "A role",
      "An enhanced solution"
    ],
    "answer": 0,
    "explanation": "In Splunk, an app is a packaged collection of components such as data inputs, dashboards, reports, alerts, lookups, field extractions, and other knowledge objects. Apps provide a structured way to deliver functionality, and organize related resources.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-40",
    "domain": "searching",
    "q": "Which of the following is an option after clicking an item in search results?",
    "options": [
      "Saving the item to a report",
      "Adding the item to the search",
      "Adding the item to a dashboard",
      "Saving the search to a JSON file"
    ],
    "answer": 1,
    "explanation": "Clicking an item in the search results provides interactive options such as adding that value to the current search as the filter. This allows quick refinement of the search without manually editing the search string.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-41",
    "domain": "searching",
    "q": "Which of the following fields is stored with the events in the index?",
    "options": [
      "user,",
      "source,",
      "location,",
      "sourcetype"
    ],
    "answer": 1,
    "explanation": "The source field is one of Splunk's default metadata fields and is stored with each event at index time. It identifies the origin of the data such as file path or input source and is always available for searching.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-42",
    "domain": "reports",
    "q": "Which of the following is the recommended way to create multiple dashboards displaying data from the same search?",
    "options": [
      "Save the search as a report and use it in multiple dashboards as needed",
      "Save the search as a dashboard panel for each dashboard that needs the data",
      "Save the search as a scheduled alert and use it in multiple dashboards as needed",
      "Export the results of the search to an XML file and use the file as the basis of the dashboards"
    ],
    "answer": 0,
    "explanation": "Save the search as a report and use it in multiple dashboards as needed. This is the recommended approach because a report centralizes the search logic. Any update to the report automatically propagates to all dashboards that reference it ensuring consistency and reducing maintenance effort.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-43",
    "domain": "searching",
    "q": "What does the following specified time range do?",
    "options": [
      "Look back three days ago and prior",
      "Look back 72 hours up to one day ago",
      "Look back 72 hours up to the end of today",
      "Look back from 3 days ago up to the beginning of today"
    ],
    "answer": 3,
    "explanation": "The earliest value means 72 hours ago snapped to the start of the hour. The latest value means the beginning of the current day. The range therefore spans from 3 days ago to the start of today.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-44",
    "domain": "language",
    "q": "Which events will be returned by the following search string?",
    "options": [
      "All events that either have a host of www3 or a status of 503",
      "All events with a host of www3 that also have a status of 503",
      "We need more information. We cannot tell without knowing the time range",
      "We need more information. A search cannot be run without specifying an index"
    ],
    "answer": 1,
    "explanation": "This means both conditions must be true for an event to be returned.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-45",
    "domain": "transforming",
    "q": "What does the stats command do?",
    "options": [
      "automatically correlates related fields",
      "converts field values into numerical values",
      "calculates statistics on data that matches the search criteria",
      "analyzes numerical fields for their ability to predict another discrete field"
    ],
    "answer": 2,
    "explanation": "The stats command is used to perform statistical calculations such as count, sum, average, min, max, DC, and values on the results returned by a search. It transforms raw events into aggregated results suitable for analysis and visualization.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-46",
    "domain": "searching",
    "q": "Which is the primary function of the timeline located under the search bar?",
    "options": [
      "to differentiate between structured and unstructured events in the data",
      "to sort the events returned by the search command in chronological order",
      "to zoom in and zoom out, although this does not change the scale of the chart",
      "to show peaks and or valleys in the timeline, which can indicate spikes in activity or downtime"
    ],
    "answer": 3,
    "explanation": "The timeline visualizes event distribution over time. Peaks indicates bursts of activity. Valleys indicate reduced or missing activity. This helps identify anomalies, trends, outages, or sudden changes at a glance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-47",
    "domain": "searching",
    "q": "What can be configured using the edit job settings menu?",
    "options": [
      "Export the result to CSV format",
      "Add the job results to a dashboard",
      "Schedule the job to rerun in 10 minutes",
      "Change job lifetime from 10 minutes to 7 days"
    ],
    "answer": 3,
    "explanation": "The edit job settings menu allows you to modify properties of the running or completed search job, including extending the job lifetime. This controls how long the job and its results are retained before being removed.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-48",
    "domain": "lookups",
    "q": "Which command can be used to validate or review a lookup file?",
    "options": [
      "lookup",
      "outputlookup",
      "inputlookup",
      "table"
    ],
    "answer": 2,
    "explanation": "Running it with a leading pipe allows Splunk to load the lookup directly and verify that the file exists, is accessible, and is properly formatted.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-49",
    "domain": "transforming",
    "q": "Which statement is true about the top command?",
    "options": [
      "It returns the top 10 results",
      "It displays the output in table format",
      "It returns the count and percent columns per row",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "The top command returns the most common values of a field, defaults to the top 10 results, displays the output in a table format, and includes both count and percent columns for each value unless configured otherwise.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-50",
    "domain": "alerts",
    "q": "Which of the following is true about Splunk alerts?",
    "options": [
      "Alerts are based on searches that are either run on a scheduled interval or in real time",
      "Alerts are based on searches and when triggered will only send an email notification",
      "Alerts are based on searches and require cron to run on schedule interval",
      "Alerts are based on searches that are run exclusively as real time"
    ],
    "answer": 0,
    "explanation": "Splunk alerts are built on saved searches and can be configured to run either on a schedule or in real time. When alert conditions are met, the configured alert actions are triggered.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-51",
    "domain": "transforming",
    "q": "What is the purpose of using a by clause with the stats command?",
    "options": [
      "to group the results by one or more fields",
      "to compute numerical statistics on each field",
      "to specify how the values in a list are delimited",
      "to partition the input data based on the split by fields"
    ],
    "answer": 0,
    "explanation": "The by clause in the stats command groups events based on one or more specified fields and then computes the requested statistics separately for each group. This is how stats produces aggregated results per field value instead of a single overall result.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-52",
    "domain": "searching",
    "q": "How do you add or remove fields from search results?",
    "options": [
      "Use field plus to add and field minus to remove",
      "Use table plus to add and table minus to remove",
      "Use fields plus to add and fields minus to remove",
      "Use fields plus to add and fields minus to remove"
    ],
    "answer": 2,
    "explanation": "The fields command controls which fields are included or excluded from search results. Using fields plus field names explicitly adds fields to the results while fields minus field name removes fields from the results.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-53",
    "domain": "fields",
    "q": "A field exists in search results but isn't being displayed in the field sidebar. How can it be added to the fields sidebar?",
    "options": [
      "Click all fields and select the field to add it to selected fields",
      "Click interesting fields and select the field to add it to selected fields",
      "Click selected fields and select the field to add it to interesting fields",
      "This scenario isn't possible because all fields returned from a search always appear in the field sidebar"
    ],
    "answer": 0,
    "explanation": "Click all fields and select the field to add it to selected fields. Fields that exist in the search results but are not currently shown in the sidebar can be found under all fields. From there, a field can be added to selected fields so it appears in the field sidebar for easier access.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-54",
    "domain": "fields",
    "q": "In the field sidebar, which character denotes alpha numeric field values?",
    "options": [
      "hash,",
      "percent,",
      "A,",
      "A hash"
    ],
    "answer": 3,
    "explanation": "In the field sidebar, the aash icon indicates that a field contains both alphabetic and numeric values. Splunk uses these icons to quickly convey the data type characteristics of field values.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-55",
    "domain": "reports",
    "q": "What is the main requirement for creating visualizations using the Splunk UI?",
    "options": [
      "Your search must transform event data into Excel file format first",
      "Your search must transform event data into XML formatted data first",
      "Your search must transform event data into statistical data tables first",
      "Your search must transform event data into JSON formatted data first"
    ],
    "answer": 2,
    "explanation": "Splunk visualizations are built on transforming searches. Commands such as stats, chart, time chart, top, and rare convert raw events into aggregated tables, which the Splunk UI can then render as charts, graphs, and other visualizations.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-56",
    "domain": "language",
    "q": "What syntax is used to link key value pairs in search strings?",
    "options": [
      "Action plus purchase",
      "Action equals purchase",
      "Action pipe purchase",
      "action equal purchase"
    ],
    "answer": 1,
    "explanation": "In Splunk search syntax, key value pairs are linked using the equal sign. This specifies that the field action must have the value purchase for an event to match.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-57",
    "domain": "basics",
    "q": "What user interface component allows for time selection?",
    "options": [
      "time summary",
      "Time range picker",
      "Search time picker",
      "Data source time statistics"
    ],
    "answer": 1,
    "explanation": "The time range picker is the user interface component in Splunk that allows users to select the time window for a search. It supports preset, relative, real time, and custom time ranges.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-58",
    "domain": "searching",
    "q": "Which of the following searches will return results where fail 400 and error exist in every event?",
    "options": [
      "error and fail and 400",
      "error or fail and 400",
      "error and fail or 400",
      "error or fail or 400"
    ],
    "answer": 0,
    "explanation": "This search requires all three terms error, fail and 400 to be present in every return event. The parenthesis makes the logic explicit but effectively this is equivalent to error and fail and 400.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-59",
    "domain": "searching",
    "q": "When placed early in a search, which command is most effective at reducing search execution time?",
    "options": [
      "dedup,",
      "Rename,",
      "Sort minus,",
      "fields plus"
    ],
    "answer": 3,
    "explanation": "Placing fields early in a search limits the number of fields that Splunk must carry forward through the pipeline. This reduces memory usage and processing overhead which can significantly improve search execution time especially on large result sets.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-60",
    "domain": "reports",
    "q": "How can other users gain access to a saved report?",
    "options": [
      "The owner of the report can edit permissions from the edit drop-down",
      "Only users with an admin or power user role can access other users reports",
      "Anyone can access any reports marked as public within a shared Splunk deployment",
      "The owner of the report must clone the original report and save it to their user account"
    ],
    "answer": 0,
    "explanation": "In Splunk, access to a saved report is controlled through permissions. The report owner can share it by editing permissions, making it available to specific roles or to all users within the app or globally.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-61",
    "domain": "transforming",
    "q": "What is the primary use for the rare command?",
    "options": [
      "to sort field values in descending order",
      "To return only fields containing five or fewer values",
      "to find the least common values of a field in a data set",
      "To find the fields with the fewest number of values across a data set"
    ],
    "answer": 2,
    "explanation": "The rare command is used to identify infrequently occurring field values. It is effectively the inverse of the top command and is commonly used for anomaly detection and spotting unusual behavior.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-62",
    "domain": "fields",
    "q": "What happens when a field is added to the selected fields list in the field sidebar?",
    "options": [
      "Splunk will rerun the search job in verbose mode to prioritize the new selected field",
      "Splunk will highlight related fields as a suggestion to add them to the selected fields list",
      "Custom selections will replace the interesting fields that Splunk populated into the list at search time",
      "The selected field and its corresponding values will appear underneath the events in the search results"
    ],
    "answer": 3,
    "explanation": "Adding a field to selected fields causes Splunk to display that field and its values directly with each event in the events tab, making the data immediately visible without expanding individual events.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-63",
    "domain": "fields",
    "q": "By default, which of the following is a selected field?",
    "options": [
      "action,",
      "client IP,",
      "category LD,",
      "sourcetype"
    ],
    "answer": 3,
    "explanation": "By default, Splunk includes certain metadata fields in selected fields such as sourcetype, source, and host. These fields are always available and displayed because they are indexed metadata.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-64",
    "domain": "language",
    "q": "According to Splunk best practices, which wildcard placement is most efficient?",
    "options": [
      "*fail",
      "f*ail",
      "fail*",
      "*fail*"
    ],
    "answer": 2,
    "explanation": "Splunk best practice is to place wild cards at the end of the term. Trailing wild cards allow Splunk to efficiently leverage index terms whereas leading or embedded wild cards prevent efficient index usage and significantly degrade performance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-65",
    "domain": "searching",
    "q": "Which command automatically returns percent and count columns when executing searches?",
    "options": [
      "top,",
      "stats,",
      "table,",
      "percent"
    ],
    "answer": 0,
    "explanation": "The top command automatically returns both count and percent columns for each value by default. It is designed to show the most frequent field values along with how often they occur and the percentage of the total.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-66",
    "domain": "lookups",
    "q": "Which of the following describes lookup files?",
    "options": [
      "Lookup fields cannot be used in searches",
      "Lookups contain static data available in the index",
      "Lookups add more fields to results returned by a search",
      "Lookups pull data at index time and add them to search results"
    ],
    "answer": 2,
    "explanation": "Lookup files are used at search time to enrich events by matching field values to external data and appending additional fields to the search results.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-67",
    "domain": "searching",
    "q": "Which search matches only events with status code 404?",
    "options": [
      "status>=404",
      "status>404 status<405",
      "status=40*",
      "status>403 status<405"
    ],
    "answer": 3,
    "explanation": "So this search returns only events where status code is greater than 403 and less than 405. That range includes only the value 404.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-68",
    "domain": "searching",
    "q": "What transforms raw data into events and distributes the results into an index?",
    "options": [
      "index,",
      "search head,",
      "indexer,",
      "forwarder"
    ],
    "answer": 2,
    "explanation": "The indexer receives raw data, parses it into individual events, assigns timestamps and metadata, and writes those events into indexes. It is the component that transforms raw data into searchable events and distributes them into the appropriate index.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-69",
    "domain": "basics",
    "q": "Which Splunk component is primarily responsible for saving indexed data?",
    "options": [
      "Search head",
      "Heavy forwarder",
      "Indexer",
      "Universal forwarder"
    ],
    "answer": 2,
    "explanation": "The indexer is the Splunk component responsible for writing data to disk, indexing events, and managing data retention. All searchable data is ultimately stored on indexers.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-70",
    "domain": "basics",
    "q": "Data sources being opened and read applies to",
    "options": [
      "None of the above,",
      "indexing phase,",
      "parsing phase,",
      "input phase, E license metering"
    ],
    "answer": 3,
    "explanation": "Data sources being opened and read occurs during the input phase where raw data is collected from files, streams or network sources before any parsing, transformation or indexing takes place.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-71",
    "domain": "searching",
    "q": "Splunk's index-time process can be broken down into how many phases?",
    "options": [
      "Three",
      "Two",
      "Four",
      "One"
    ],
    "answer": 0,
    "explanation": "Splunk's index time process is broken down into three main phases. Input, parsing, and indexing. During input, data is collected. During parsing, events are broken, timestamps are extracted, and metadata is assigned. During indexing, the processed events are written to disk and stored in indexes.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-72",
    "domain": "basics",
    "q": "Where does licensing meter happen?",
    "options": [
      "indexer,",
      "parsing,",
      "heavy forwarders,",
      "input"
    ],
    "answer": 1,
    "explanation": "Splunk licensing is based on the amount of data indexed per day and the license meter measures data volume during the parsing phase before indexing occurs. This ensures that all incoming data is accounted for regardless of whether it is later filtered or indexed.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-73",
    "domain": "language",
    "q": "What is Search Assistant in Splunk?",
    "options": [
      "A feature available only to administrators",
      "A feature that does not exist",
      "A feature that suggests ways to complete the search string",
      "A tool that indexes raw data"
    ],
    "answer": 2,
    "explanation": "Search assistant in Splunk provides real-time guidance while typing SPL. It suggests commands, fields, functions, and syntax to help users build correct and efficient search strings.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-74",
    "domain": "searching",
    "q": "The new data uploaded in Splunk are shown in",
    "options": [
      "real time,",
      "10 minutes,",
      "overnight download,",
      "30 minutes"
    ],
    "answer": 0,
    "explanation": "New data uploaded or ingested into Splunk becomes searchable and visible almost immediately. Splunk indexes data continuously, allowing users to see new events in real time without waiting for batch or scheduled processing.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-75",
    "domain": "searching",
    "q": "Which of the statements is correct regarding the click and drag option in the timeline?",
    "options": [
      "The new result after selecting the range by dragging filters the events and displays the most recent first",
      "There is no functionality like click and drag in Splunk's timeline",
      "Using this option executes a new query",
      "This doesn't execute a new query"
    ],
    "answer": 3,
    "explanation": "Clicking and dragging on the timeline narrows the time range of the existing search results. Splunk filters the current job to the selected time window without rerunning the search.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-76",
    "domain": "fields",
    "q": "In the Splunk web interface, what defines an interesting field?",
    "options": [
      "the field with the lowest entropy relative to the core search",
      "the field that exists in at least 20% of the events in the search",
      "the numeric field within the data which allows its use in charts and time charts",
      "the field with the highest entropy relative to the core search"
    ],
    "answer": 1,
    "explanation": "In the Splunk web interface, interesting fields are determined based on how frequently a field appears across the return events. By default, a field must exist in at least 20% of the events to be classified as interesting and shown in the interesting fields list.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-77",
    "domain": "searching",
    "q": "What is the proper SPL terminology for specifying a particular index in a search?",
    "options": [
      "Index name equals index name",
      "Indexer name equals index name",
      "Indexer equals index name",
      "Index equals index name"
    ],
    "answer": 3,
    "explanation": "In SPL, specifying the index is done using the index field with an equals operator. This tells Splunk exactly which index or indexes to search, improving accuracy and performance.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-78",
    "domain": "lookups",
    "q": "How can results from a specified static lookup file be displayed?",
    "options": [
      "Lookup command",
      "Input lookup command",
      "Settings lookups input",
      "Settings lookups upload"
    ],
    "answer": 1,
    "explanation": "The input lookup command is used to directly display the contents of a static lookup file in search results without requiring any event data. It reads the lookup table itself and returns the rows as search results which is the correct method when the goal is to view or inspect the lookup data.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-79",
    "domain": "language",
    "q": "When is the pipe character used in search strings?",
    "options": [
      "before clauses",
      "before commands",
      "before arguments",
      "before functions"
    ],
    "answer": 1,
    "explanation": "It separates commands in the search pipeline, allowing sequential processing of data. For example, filtering events first, then transforming them with stats.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-80",
    "domain": "searching",
    "q": "Which of the following does Splunk retain a search job?",
    "options": [
      "10 minutes,",
      "15 minutes,",
      "1 day,",
      "7 days"
    ],
    "answer": 0,
    "explanation": "By default, Splunk retains a search job for 10 minutes after it completes. This retention period applies to ad hoc searches and allows users to view results, inspect job details, or export data shortly after execution. After the time expires, the search job is automatically removed unless explicitly saved or TTL is extended through configuration.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-81",
    "domain": "basics",
    "q": "Which of the following Splunk components typically resides on the machines where data originates?",
    "options": [
      "indexer,",
      "Forwarder,",
      "search head,",
      "deployment server"
    ],
    "answer": 1,
    "explanation": "The forwarder is installed on machines where data originates. Its role is to collect logs, metrics, and other machine data, then securely forward that data to an indexer for processing and storage. Forwarders are lightweight and designed to have minimal performance impact on source systems.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-82",
    "domain": "alerts",
    "q": "What determines the scope of data that appears in a scheduled report?",
    "options": [
      "All data accessible to the user role will appear in the report",
      "All data accessible to the owner of the report will appear in the report",
      "All data accessible to all users will appear in the report until the next time the report is run",
      "The owner of the report can configure permissions so that the report uses either the user role or the owner's profile at runtime"
    ],
    "answer": 1,
    "explanation": "A scheduled report in Splunk runs under the security context of its owner. This means the search executes using the owner's roles, capabilities, and index access regardless of who later views the report output.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-83",
    "domain": "language",
    "q": "When writing searches in Splunk, which of the following is true about booleans?",
    "options": [
      "they must be lowerase",
      "they must be uppercase",
      "they must be in quotations",
      "they must be in parentheses"
    ],
    "answer": 1,
    "explanation": "In Splunk search processing language, boolean operators such as and or, and not must be written in uppercase for the search parser to interpret them correctly. Lowercase boolean keywords are treated as literal search terms instead of logical operators.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-84",
    "domain": "searching",
    "q": "Which search returns failure events from index netfw, or warn/critical events from index netops?",
    "options": [
      "index=netfw failure OR index=netops warn OR critical",
      "(index=netfw failure) OR (index=netops (warn OR critical))",
      "index=netfw (failure OR index=netops) (warn OR critical)",
      "index=netfw AND failure AND index=netops AND warn AND critical"
    ],
    "answer": 1,
    "explanation": "The parenthesis explicitly control boolean precedence. So the or conditions apply exactly as described in the question.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-85",
    "domain": "transforming",
    "q": "Which search places the pipe correctly before a transforming command?",
    "options": [
      "index=main stats | count BY host",
      "index=main error | stats count BY host",
      "| index=main error stats count BY host",
      "index=main | error stats count BY host"
    ],
    "answer": 1,
    "explanation": "All search criteria come before the pipe and the stats command with its arguments come after it.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-86",
    "domain": "transforming",
    "q": "Which of the following constraints can be used with the top command?",
    "options": [
      "Limit",
      "Use perk",
      "Add totals",
      "field count"
    ],
    "answer": 0,
    "explanation": "The top command in Splunk supports the limit constraint to control how many values are returned in the results. This is commonly used to restrict output to the top end values for a given field.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-87",
    "domain": "language",
    "q": "When running searches, command modifiers in the search string are displayed in what color?",
    "options": [
      "red,",
      "blue,",
      "orange,",
      "highlighted"
    ],
    "answer": 2,
    "explanation": "In the Splunk search processing language editor, command modifiers such as by, as over, and where are syntax highlighted in orange to distinguish them from commands, fields, strings, and operators.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-88",
    "domain": "reports",
    "q": "Which of the following represents the Splunk recommended naming convention for dashboards?",
    "options": [
      "description group object",
      "Group description object",
      "group object description",
      "object group description"
    ],
    "answer": 2,
    "explanation": "Splunk recommends naming dashboards using the group object description format. This structure groups related dashboards together, clearly identifies what the dashboard is about, and then provides additional descriptive detail. It improves organization, searchability, and consistency in environments with many dashboards.",
    "source": "Cleaned Community Bank"
  },
  {
    "id": "b3-89",
    "domain": "searching",
    "q": "Which of the following is a Splunk search best practice?",
    "options": [
      "Filter as early as possible",
      "Never specify greater than one index",
      "Include as few search terms as possible",
      "Use wild cards to return more search results"
    ],
    "answer": 0,
    "explanation": "Applying filters early in the search reduces the volume of data that Splunk needs to scan and process. This improves search performance, lowers resource consumption, and is a core best practice when writing efficient Splunk searches.",
    "source": "Cleaned Community Bank"
  }
]
};
