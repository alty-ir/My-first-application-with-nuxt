importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/077fabfa2a44fc35aa46.js",
    "revision": "4c138706b6302e5ef1439b9d30e803cd"
  },
  {
    "url": "/_nuxt/6b65d5d85b01dd836af3.js",
    "revision": "5413e4eb8a1704ff306d0e1a770c9a70"
  },
  {
    "url": "/_nuxt/726de9039c62dddc146e.js",
    "revision": "3c741d3c82d9c615ddd9f824b1e9636d"
  },
  {
    "url": "/_nuxt/d4837cab8b7e799aa791.js",
    "revision": "ad3e45261d365984b5a395acf777ac4a"
  },
  {
    "url": "/_nuxt/d8631d1ee29d892663c1.js",
    "revision": "791bd575d18414cdd6fc1c640f47099a"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
