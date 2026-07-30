# Changelog

## v2.0.0 — Deployable Mock Exam Bank 3

- Verified the 89-question Bank 3 dataset is embedded in `data.js`.
- Added the dedicated Bank 3 launcher to the existing Splunk Exam Hub.
- Generates randomized 60-question attempts without duplicate IDs.
- Randomizes answer choices while preserving the correct-answer mapping.
- Uses the existing 57-minute timed exam flow.
- Includes explanations, domain scoring, and local attempt history.
- Updated README deployment notes and timed-session support for Bank 3.
- Updated the offline cache name for immediate deployment.

## v1.2 — Mock Exam Bank 3

- Added a new 89-question mock exam bank from the cleaned Splunk question dataset.
- Added a dedicated Mock Exam Bank 3 launcher card.
- Generates a randomized 60-question, 57-minute exam on each attempt.
- Uses domain-aware selection and randomized answer order.
- Includes post-submission explanations and domain scoring.
- Records Bank 3 attempts in mock history.
- Updated the service-worker cache version.