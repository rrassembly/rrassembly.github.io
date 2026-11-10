# R&R Assembly Services

A phone app for estimates, jobs, invoices, customers and equipment maintenance. It runs in any phone's web browser and installs to the home screen like a normal app.

**Open it:** https://rrassembly.github.io/

## Put it on your phone
- **iPhone:** open the link in Safari, tap Share, then **Add to Home Screen**.
- **Android (Samsung, Pixel…):** open the link in Chrome, tap the ⋮ menu, then **Install app** or **Add to Home screen**.

After the first visit it works with no signal. Updates arrive on their own the next time you open it with a connection.

## Updates
Every change pushed to this repository goes live at the address above within about a minute, and phones load the newest version the next time the app is opened with a signal.

## Your data
Everything is saved on the phone itself. Make a backup now and then from **More → Settings and prices → Backup**. The backup file can be loaded on a new phone.

## Files
- `index.html` – the whole app
- `manifest.webmanifest`, `icons/` – home-screen name and icon
- `sw.js` – lets the app open without a signal and picks up new versions
