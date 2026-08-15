# Editing website content

Every piece of text/data shown on the site lives in this folder as plain JS files —
none of it is mixed into the page/component code. To update the site, edit the file
below that matches what you want to change, save, and the site updates. You never
need to touch anything outside `src/data/`.

| File | What it controls |
|---|---|
| `site.js` | Event name/dates/location, Discord link, nav bar links, social links, footer credit, Code of Conduct URL |
| `home.js` | Home page hero subtitle, stats bar, and section copy |
| `readiness.js` | "Coming soon" toggles — see below |
| `schedule.js` | Weekend talks/labs (Day 1, Day 2), hackathon build week, and venues |
| `speakers.js` | Speaker cards (name, photo, bio, talk, links) |
| `team.js` | Organizing team cards (name, photo, role, link) |
| `sponsors.js` | Sponsor/partner tiles (name, logo, link) |
| `workshops.js` | "Who should attend", "what you'll learn", this year's focus tracks, tools, judging criteria, submission requirements |
| `faq.js` | FAQ questions & answers, grouped by `category` |
| `contact.js` | Contact channel cards + venue map query/note |
| `register.js` | Registration form endpoint + dropdown options |
| `learn.js` | Learning resources page — links grouped by category |

Each file exports plain arrays/objects — add, remove, or edit entries following the
existing shape and the corresponding page updates automatically.

## "Coming soon" toggles

`readiness.js` has two switches:

```js
export const READY = {
  schedule: false,
  speakers: false,
}
```

While `schedule` is `false`, the Schedule page, the "Schedule at a glance" section
on Home, and the session breakdown on Workshops all show a "coming soon" panel
instead of the draft session times in `schedule.js`. Same idea for `speakers` and
the Speakers page. Flip a flag to `true` once that content is confirmed and you
want it live — no other changes needed, the real data is already in place underneath.

Sponsors don't use this toggle since we already have a few confirmed — instead,
`sponsors.js` has a `{ placeholder: true, name: 'More soon' }` entry that renders
as a dashed "more soon" tile. Delete it once you have another confirmed sponsor to
add, or add more real entries above it.

## Uploading photos & logos

| What | Where | Field | Recommended format |
|---|---|---|---|
| Speaker photo | `public/speakers/yourfile.jpg` | `speakers.js` → `photo: '/speakers/yourfile.jpg'` | Square JPG/PNG, ~500×500px, face centered |
| Organizer photo | `public/speakers/yourfile.jpg` | `team.js` → `photo: '/speakers/yourfile.jpg'` | Same as above |
| Sponsor logo | `public/sponsors/yourfile.png` | `sponsors.js` → `logo: '/sponsors/yourfile.png'` | PNG with transparent background (SVG also works), roughly 400×160px, logo filling most of the frame |
| Site logo (header) | `public/logo.svg` (or `.png`) | `site.js` → `LOGO_URL: '/logo.svg'` | SVG ideal (crisp at any size); a square PNG (~200×200px, transparent background) also works |

Leave `photo`/`logo`/`LOGO_URL` as an empty string (`''`) to fall back to the
default look (initials avatar for people, plain text name for sponsors, the
glowing dot mark for the site logo) until you have the real file. File names
can be anything — just make sure the path you put in the data file matches
exactly (case-sensitive).

**Organizer links:** if you don't have a LinkedIn (or other) link for someone
yet, leave `url: ''` in `team.js` — their card just won't be clickable until
you add one, no broken link.

**Browser tab icon:** separate from the header logo above — that one's set in
`public/favicon.svg` directly (referenced from `index.html`), not through a
data file. Swap that file for your own SVG if you want the tab icon to match.

## Registration form backend

The Register page has one form with three paths — **Participant**, **Volunteer**,
**Sponsor** — picked with a pill switcher at the top. Name, email, dietary
restrictions, accessibility needs, and the Code of Conduct checkbox are shared
across all three; a phone number is asked (optionally) for Volunteers and
Sponsors only; the rest changes based on the selected role (see `ROLES` and the
`*_OPTIONS` arrays in `register.js`).

Participants and Volunteers both get the same "background" section — a
None/Beginner/Intermediate/Advanced scale for Quantum computing, Programming,
Qiskit, and Linear algebra (`BACKGROUND_TOPICS` in `register.js` — add/remove a
topic there and it shows up on both forms automatically, but remember to also
update `BACKGROUND_KEYS`/`BACKGROUND_HEADERS` in the Apps Script below to
match). Participants are also asked whether they're local and able to attend
in person (`LOCAL_OPTIONS`).

Name is always required. Email is always required. Dietary restrictions is
required for Participants only (defaults to "None" so it's never left blank);
for Volunteers and Sponsors it's optional. Everything else is optional unless
noted.

`FORM_ENDPOINT` is where it all submits to. It's wired up to work with a free
Google Apps Script "Web App" backed by a Google Sheet, with each role writing
to its own tab so the three lists don't end up mixed together in one messy
sheet. Here's how to set that up (all free, no account beyond a Google account
needed):

1. **Create the sheet.** Go to [sheets.google.com](https://sheets.google.com)
   and make a new blank spreadsheet named something like
   "Qiskit Fall Fest Registrations". You don't need to create or name tabs
   yourself — the script below creates **Participants** (Timestamp | Name | Email | Status | Program | Local Attendance | Team Status | Background: Quantum | Background: Programming | Background: Qiskit | Background: Linear Algebra | Dietary | Accessibility
), **Volunteers** (Timestamp | Name | Email | Phone | Background Notes | Background: Quantum | Background: Programming | Background: Qiskit | Background: Linear Algebra | Available Days | Help With | Dietary | Accessibility
), and
   **Sponsors** tabs (with the right header row) automatically the first time
   each one is needed, so a missing/misnamed tab can't silently break
   submissions.

2. **Open the script editor.** From the sheet, go to
   **Extensions → Apps Script**. Delete whatever's in `Code.gs` and paste this:

   ```js
   // Order matches BACKGROUND_TOPICS in src/data/register.js — update both
   // together if you add/remove/reorder a topic.
   var BACKGROUND_KEYS = ['background_quantum', 'background_programming', 'background_qiskit', 'background_linear_algebra']
   var BACKGROUND_HEADERS = ['Background: Quantum', 'Background: Programming', 'Background: Qiskit', 'Background: Linear Algebra']

   function backgroundValues(data) {
     return BACKGROUND_KEYS.map(function (key) { return data[key] })
   }

   function dietaryText(data) {
     // 'Other' comes with a free-text follow-up field — fold the two into one cell
     return data.dietary === 'Other' && data.dietary_other
       ? `Other: ${data.dietary_other}`
       : data.dietary
   }

   function getOrCreateSheet(ss, name, headers) {
     let sheet = ss.getSheetByName(name)
     if (!sheet) {
       sheet = ss.insertSheet(name)
       sheet.appendRow(headers)
     }
     return sheet
   }

   function doPost(e) {
     try {
       const data = JSON.parse(e.postData.contents)
       const ss = SpreadsheetApp.getActiveSpreadsheet()

       if (data.role === 'volunteer') {
         const sheet = getOrCreateSheet(ss, 'Volunteers', [
           'Timestamp', 'Name', 'Email', 'Phone', 'Background Notes',
         ].concat(BACKGROUND_HEADERS, ['Available Days', 'Help With', 'Dietary', 'Accessibility']))
         sheet.appendRow([
           new Date(), data.name, data.email, data.phone, data.volunteer_background,
         ].concat(backgroundValues(data), [
           (data.volunteer_days || []).join(', '), data.volunteer_help,
           dietaryText(data), data.accessibility,
         ]))
       } else if (data.role === 'sponsor') {
         const sheet = getOrCreateSheet(ss, 'Sponsors', [
           'Timestamp', 'Name', 'Email', 'Organization', 'Role', 'Website',
           'Phone', 'Support Type', 'Notes', 'Dietary', 'Accessibility',
         ])
         sheet.appendRow([
           new Date(), data.name, data.email, data.org_name, data.org_role,
           data.org_website, data.phone, data.sponsor_support, data.sponsor_notes,
           dietaryText(data), data.accessibility,
         ])
       } else {
         const sheet = getOrCreateSheet(ss, 'Participants', [
           'Timestamp', 'Name', 'Email', 'Status', 'Program', 'Local Attendance', 'Team Status',
         ].concat(BACKGROUND_HEADERS, ['Dietary', 'Accessibility']))
         sheet.appendRow([
           new Date(), data.name, data.email, data.status_type, data.program,
           data.local_attendance, data.team,
         ].concat(backgroundValues(data), [dietaryText(data), data.accessibility]))
       }

       return ContentService
         .createTextOutput(JSON.stringify({ success: true }))
         .setMimeType(ContentService.MimeType.JSON)
     } catch (err) {
       // Reported back to the site as a real failure instead of a raw 500 —
       // check Apps Script's "Executions" tab (left sidebar) for the full trace.
       return ContentService
         .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
         .setMimeType(ContentService.MimeType.JSON)
     }
   }
   ```

3. **Deploy it.** Click **Deploy → New deployment**, gear icon → type
   **Web app**. Set "Execute as" to **Me**, and "Who has access" to
   **Anyone**. Click **Deploy**, then **Authorize access** and click through
   the "Google hasn't verified this app" warning (it's your own script, that
   warning is expected). Copy the URL it gives you — it ends in `/exec`.

4. **Paste that URL** into `FORM_ENDPOINT` in `register.js`. That's it — the
   frontend is already set up to talk to it (see `src/pages/Register.jsx`).

**If you edit the script later**, changes don't go live automatically — go to
**Deploy → Manage deployments**, edit the existing deployment, and bump the
version, otherwise the old script keeps running.

**If you add/rename fields** in the Register form later, update the matching
`appendRow([...])` block above to match — the order you list values in is the
order they land in columns.

**If one role works but the others don't** (e.g. Participant shows the "you're
on the list" message but Volunteer/Sponsor don't): you're very likely running
an older copy of this script — paste the version above in full (don't merge it
with an older one), then redeploy per the note above. The version here
auto-creates any missing tab and won't throw on that anymore; if it still
fails, open **Executions** in the Apps Script left sidebar and open the failed
run to see the exact error.

**Note:** since this uses `fetch` without triggering a CORS preflight, the site
can tell whether the submission succeeded or failed (unlike a plain Google
Form, which can only fire-and-forget), so the success/error state on the
Register page is a real signal, not a guess.
