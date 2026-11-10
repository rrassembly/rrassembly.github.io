/* Keeps the app working with no signal. Shows the saved copy right away and fetches updates in the background. */
const CACHE = "rr-app-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const ok = url.origin === location.origin || /cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (!ok) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const key = req.mode === "navigate" ? "./index.html" : req;
    const hit = await c.match(key, { ignoreSearch: req.mode === "navigate" });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(key, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
