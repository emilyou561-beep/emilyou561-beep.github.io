# Emily Ou — late-night desk

A static 3D portfolio. No build step: open with any static server (`python3 -m http.server`) or push to GitHub Pages.

- Words: `content.js`
- Photos: `img/photos/` (full) and `img/thumbs/` (wall + journal), file names match `photos` in content.js
- Project images: `img/projects/`
- Scene: `app.js` (three.js r170, vendored in `vendor/`, MIT)

Deploy on GitHub Pages: create a repo (e.g. `emilyou561-beep.github.io`), upload these files, Settings → Pages → deploy from `main` / root.
Fonts: Geist, Geist Mono, Caveat (SIL OFL), inlined in index.html.
