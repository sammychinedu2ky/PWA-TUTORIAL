importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8185ea14edcd09e916cc0caef8d952f6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0207a3fb8f910281ef54cdcb7cfe7855"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "98303373476e3a52a2eb52c384ad4d61"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "596653adeebeaf8a7eb5f334821bf37d"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3eb10befcaa2254a474244d08442781a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "72773678117cfff44bf45d7fb33a92e2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "5210d5e3a45c9a8e701749842adb8a4b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "acd14c7fa4f4fda7b6fba3b87928c428"
  },
  {
    "url": "index.html",
    "revision": "361c3aa2dd7cf81dfd169205d34c3b03"
  },
  {
    "url": "manifest.json",
    "revision": "0b5467383e018c7f7846705b0ab6c669"
  },
  {
    "url": "package-lock.json",
    "revision": "af69b29f11b2d8462fda550d20671508"
  },
  {
    "url": "package.json",
    "revision": "deb806d928b5bef0ca819d08a99c7f00"
  },
  {
    "url": "server.js",
    "revision": "5e5a3ad135d3caf2d0e18f9e5fa94703"
  },
  {
    "url": "service-workersrc.js",
    "revision": "95cb16a718643105009e97145b6f6a9a"
  },
  {
    "url": "style.css",
    "revision": "fd18e298d18b42440583a524fde0330f"
  },
  {
    "url": "workbox-config.js",
    "revision": "1d1dd745c4dc5256b887782e421eb81c"
  }
]);

} else {
  console.log(`Error loading workbox`);
}