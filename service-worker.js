// Nama cache yang akan digunakan
const CACHE_NAME = "rasa-jogja-cache-v1";
// Daftar file yang akan disimpan dalam cache (App Shell)
const urlsToCache = [
  "index.html",
  "gudeg.html",
  "bakpia.html",
  "sate_klatak.html",
  "kopi-joss.html",
  "gudeg2.jpg",
  "bakpia.jpg",
  "sate-klatak.jpg",
  "kopi-joss.jpg",
  "tailwind.min.js",
  "fonts.css",
  "fonts/merriweather-v32-latin-700.woff2",
  "fonts/merriweather-v32-latin-regular.woff2",
];

// Proses saat service worker diinstal
self.addEventListener("install", (event) => {
  // Tunggu sampai semua file dalam daftar berhasil di-cache
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((err) => {
        console.error("❌ Gagal caching:", err);
      });
    })
  );
});

// Ambil dari cache jika offline
self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
