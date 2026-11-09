/* Sayko de poche — service worker : tout fonctionne hors ligne. */
const VERSION = 'sdp-v5.50.0';
const FILES = [
  './', './index.html', './app.js', './manifest.json',
  './amiri-400.woff2', './amiri-700.woff2', './serif-400.woff2', './serif-400i.woff2',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'
];
/* v5.50 : thème Rétro Fantasy 1998. Mis en cache au mieux : s'il manque un fichier, l'installation ne bloque pas. */
const RETRO = ['sorcier', 'hibou', 'dragon', 'gobelin', 'planete', 'gemme', 'lanterne-1', 'lanterne-2', 'ile', 'montre', 'cadre', 'fond'].map(n => './assets/theme-retro/' + n + '.png')
  .concat(['cinzel-decorative-700', 'inter-400', 'inter-600', 'inter-700'].map(n => './assets/theme-retro/' + n + '.woff2'));

self.addEventListener('install', e => {
  /* cache: 'reload' : on prend toujours les fichiers frais du serveur, jamais une vieille copie du navigateur */
  /* v5.18 : chaque fichier est demandé avec ?v=VERSION : ni le navigateur ni le CDN de GitHub ne peuvent renvoyer une vieille copie.
     Il est ensuite rangé sous son nom normal. */
  const get = (c, f) => fetch(new Request(f + (f.includes('?') ? '&' : '?') + 'v=' + VERSION, { cache: 'reload' })).then(r => { if (!r.ok) throw new Error('sw: ' + f); return c.put(f, r); });
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(FILES.map(f => get(c, f)))
    .then(() => Promise.all(RETRO.map(f => get(c, f).catch(() => {}))))));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

/* Cache d'abord (chargement instantané), réseau en secours. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    })
  );
});
