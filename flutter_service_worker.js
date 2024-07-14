'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ff036f6f30f4daecbf48ab0e3e6a6642",
"assets/AssetManifest.bin.json": "cac7236fede7048115df330fe2cfaa01",
"assets/AssetManifest.json": "024dc3478d4db067a7bdda41c0a3a493",
"assets/assets/images/bg.gif": "881def9b087ac9aafd8a0ee1f5f568fe",
"assets/assets/images/bg.jpg": "a47be4a14d12da2d8db7b932a8fbfd83",
"assets/assets/images/bg.mp4": "01aee05df3770712d94b4c2dc2c86cdd",
"assets/assets/images/bg2.gif": "79c4e2528882afe55ecf056f6e3cd3ac",
"assets/assets/images/bg3.gif": "5df9da041119437ef8759c9450529263",
"assets/assets/images/download.gif": "5a34135d390945822a0f9e198a9fa496",
"assets/assets/images/home-1.jpg": "fd5e741d4fc493943ef784da025bbee3",
"assets/assets/images/KakaoTalk_20240703_230007660.jpg": "8a6d4ddc5dd09ad2a272df023007d3d3",
"assets/assets/images/KakaoTalk_20240703_230007660_01.jpg": "4daaf67b51d34ac0abfb181623ab7fb2",
"assets/assets/images/KakaoTalk_20240703_230007660_02.jpg": "5bef14515cc758d82ddf227d37231346",
"assets/assets/images/kakao_talk.png": "1ebcbc6e4d87d19a8b3e1cbb18e55cb6",
"assets/assets/images/kakao_talk2.png": "f79318fa183c94bdde913190c6e389a5",
"assets/assets/images/logo.jpg": "27199bce97233e9a9c2a8eddcbaf0e29",
"assets/assets/images/price.jpg": "9bf748831fdf1a953d6fe2833ea23f4a",
"assets/assets/images/price.png": "21738d987dcbb08f911c4e25dcb74432",
"assets/assets/images/price2.png": "a8d1bbe0407378b93dfb7460874ea1aa",
"assets/assets/images/skypeid_help_1.png": "88ababbf8d9651f10897e0ddecd04488",
"assets/assets/images/skypeid_help_2.png": "e70cb3ca83bee3b84ff60599b05bd828",
"assets/assets/images/skypeid_help_3.png": "3c594845bed63b36f9aac43fc4f3e7fa",
"assets/assets/images/small_logo.jpg": "c6be9d523f494cb6c493c98461de48da",
"assets/assets/images/small_logo.png": "a5e681c8fb2e036ad4d83673cff5b6e1",
"assets/assets/images/small_logo2.jpg": "0ff709b1e330db2bff374d0ea9a80148",
"assets/assets/images/test.xlsx": "eb53c61bd81ecee276ce50d645d71ad6",
"assets/assets/images/tutors/Red.png": "d76e8fd536c45d769d1acad58344b822",
"assets/assets/images/tutors/Red2.png": "f6ce39ec9209d9364d00f43709dc2599",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7154c360255210612c92a6240b93945",
"assets/NOTICES": "61a0b28ab37a107d12750ef7a3b8bfd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a4cd92ea483b62f4a0e7d5a83064d1cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2a2c523172e87637eb6323c07aa4a6a",
"/": "c2a2c523172e87637eb6323c07aa4a6a",
"main.dart.js": "02e87b0f0045c91a0aeb4f3d9a9bf168",
"manifest.json": "55987604545bad5ee82e67ffa9564f59",
"version.json": "249e1884f03cb41f236bed8a93126ce7",
"web_test/.git/config": "4e43ca1383af9e7fa699adea7871dfa6",
"web_test/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web_test/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"web_test/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web_test/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web_test/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"web_test/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web_test/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web_test/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"web_test/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web_test/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web_test/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web_test/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web_test/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web_test/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"web_test/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web_test/.git/index": "2f0c26a5fca340c3cbee06ab2b10d9ef",
"web_test/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web_test/.git/logs/HEAD": "cbe15a0e989679251ee1b7a2673f9c26",
"web_test/.git/logs/refs/heads/main": "cbe15a0e989679251ee1b7a2673f9c26",
"web_test/.git/logs/refs/remotes/origin/HEAD": "cbe15a0e989679251ee1b7a2673f9c26",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.idx": "df6ee55f8556f025fa03f0a34a49b40b",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.pack": "8dd712701a3bedc70c23800e6e047635",
"web_test/.git/packed-refs": "c9e17940c61c4131efb48d41cc9641ba",
"web_test/.git/refs/heads/main": "2039b0da5ea99c2d8321dbd1df048bb6",
"web_test/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"web_test/assets/AssetManifest.bin": "0c82c45893e5602ee2ae4b671a92c397",
"web_test/assets/AssetManifest.bin.json": "352fbe0b0d8b990db2c20e58954dfe56",
"web_test/assets/AssetManifest.json": "910360aaae3f900f54fa11a93bcb6ed2",
"web_test/assets/assets/images/bg.jpg": "a47be4a14d12da2d8db7b932a8fbfd83",
"web_test/assets/assets/images/home-1.jpg": "fd5e741d4fc493943ef784da025bbee3",
"web_test/assets/assets/images/kakao_talk.png": "1ebcbc6e4d87d19a8b3e1cbb18e55cb6",
"web_test/assets/assets/images/kakao_talk2.png": "f79318fa183c94bdde913190c6e389a5",
"web_test/assets/assets/images/logo.jpg": "27199bce97233e9a9c2a8eddcbaf0e29",
"web_test/assets/assets/images/price.jpg": "9bf748831fdf1a953d6fe2833ea23f4a",
"web_test/assets/assets/images/price.png": "21738d987dcbb08f911c4e25dcb74432",
"web_test/assets/assets/images/price2.png": "a8d1bbe0407378b93dfb7460874ea1aa",
"web_test/assets/assets/images/small_logo.jpg": "c6be9d523f494cb6c493c98461de48da",
"web_test/assets/assets/images/small_logo.png": "a5e681c8fb2e036ad4d83673cff5b6e1",
"web_test/assets/assets/images/small_logo2.jpg": "0ff709b1e330db2bff374d0ea9a80148",
"web_test/assets/assets/images/test.xlsx": "eb53c61bd81ecee276ce50d645d71ad6",
"web_test/assets/assets/images/tutors/Red.png": "d76e8fd536c45d769d1acad58344b822",
"web_test/assets/assets/images/tutors/Red2.png": "f6ce39ec9209d9364d00f43709dc2599",
"web_test/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web_test/assets/fonts/MaterialIcons-Regular.otf": "a7154c360255210612c92a6240b93945",
"web_test/assets/NOTICES": "61a0b28ab37a107d12750ef7a3b8bfd9",
"web_test/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"web_test/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "a55f81d64486cd9da0f09dafc6be6b57",
"web_test/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "bca1fb292ea1f1df3af6d25d450afea8",
"web_test/assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"web_test/assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"web_test/assets/packages/youtube_player_iframe/assets/player.html": "46eac719558e3d276c0107defa689471",
"web_test/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"web_test/canvaskit/canvaskit.js": "4d65242fccdb38953e45f906580087a5",
"web_test/canvaskit/canvaskit.js.symbols": "68b4c27088ca664bd398c84602f6de11",
"web_test/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"web_test/canvaskit/chromium/canvaskit.js": "9fc614fc55d9c852d4cb69570e9eb2fa",
"web_test/canvaskit/chromium/canvaskit.js.symbols": "6d72c539b91c938625180cd26d5af7c7",
"web_test/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"web_test/canvaskit/skwasm.js": "01111146932af09cee166932d1a83d3c",
"web_test/canvaskit/skwasm.js.symbols": "ae71f1f1dabb12c89961a6be7d646b79",
"web_test/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"web_test/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"web_test/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web_test/flutter.js": "5bc83814f3f68c3e5f8f6b6bdeab1f50",
"web_test/flutter_bootstrap.js": "7456264927edbe320d34a2e7df46cd2a",
"web_test/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web_test/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web_test/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web_test/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web_test/index.html": "3630a7fa3d505a662f4708e3eac45d71",
"web_test/main.dart.js": "f0cea97d8f394553fb8cf1f57c553aff",
"web_test/manifest.json": "55987604545bad5ee82e67ffa9564f59",
"web_test/README.md": "ae937fa6ddbbebb40e44a3b77b3ee3de",
"web_test/version.json": "249e1884f03cb41f236bed8a93126ce7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
