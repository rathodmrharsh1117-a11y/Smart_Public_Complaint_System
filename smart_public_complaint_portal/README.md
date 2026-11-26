# CivicConnect — Smart Public Complaint Portal

A responsive front-end demo for reporting community problems and tracking their status. Built with HTML, CSS, and vanilla JavaScript.

## Features
- Report roads and potholes, garbage, streetlights, public safety concerns, water supply, noise, public property, and other issues.
- Enter a title, location, description, priority, and optional contact details.
- Generate a complaint reference ID for each report.
- Search by reference ID and track the complaint status and latest authority note.
- Authority desk to search complaints, update statuses, and add public notes.
- Public complaint list with status filtering.
- Dashboard counters for total, in-progress, and resolved reports.
- Responsive design for desktop and mobile.
- Browser `localStorage` persistence.

## What is new in this version
- Modern green/gold visual refresh (`theme.css` loads after `style.css`).
- Emergency top bar, "Why CivicConnect", call-to-action band, emergency helplines and FAQ sections.
- Professional footer with social media links, newsletter sign-up, quick links, contact details and legal pages.
- Back-to-top button, scroll animations and a sticky header shadow (`extras.js`).
- Replace the placeholder social URLs, address, email and phone in `index.html` (footer and top bar) with your real details.

## Run locally
1. Extract the ZIP archive.
2. Open `index.html` in a modern browser, or open the folder in VS Code and use Live Server.
3. Submit a test report. Copy the reference ID and use the Track complaints page.
4. Open Authority desk to change its status and add a note.

## Important limitations
This is a student-project front-end demo. It does not send reports to a real municipality or authority. Data is stored only in the browser/device used, and anyone with access to that browser profile may be able to view or change it. The Authority desk is not protected by real authentication. Do not enter sensitive personal data. For a real deployment, add a backend/API, database, verified authority accounts and role-based access, secure file uploads, privacy controls, spam prevention, audit logs, and backups. For emergencies or immediate danger, contact local emergency services directly.

## Suggested production stack
Frontend: HTML, CSS, JavaScript
Backend: PHP or Node.js
Database: MySQL or PostgreSQL
Authentication: verified citizen and authority accounts with role-based permissions
