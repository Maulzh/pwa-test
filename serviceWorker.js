const staticPWATest = "pwa-test-v1"

const assets = [
    "/",
    "/index.html",
    "/second.html",
    "/style.css",
    "/script.js",
    "/images/icons/icon-72x72.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(caches.open(staticPWATest).then(cache => {
        cache.addAll(assets)
    }))
})