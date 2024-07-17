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
"flutter_bootstrap.js": "6c4aa201157dea957b4af812b630d208",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6223e57d8b7882b62a4c2f9a970dd185",
"/": "6223e57d8b7882b62a4c2f9a970dd185",
"main.dart.js": "c1d41d217e519150c03be0abfcc7f212",
"manifest.json": "55987604545bad5ee82e67ffa9564f59",
"version.json": "249e1884f03cb41f236bed8a93126ce7",
"web_test/.git/COMMIT_EDITMSG": "89a10f9838f6b257596e1224915dfd49",
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
"web_test/.git/index": "f5ecd8a05be99ff8772512316b93426d",
"web_test/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web_test/.git/logs/HEAD": "d0a52a7babdf7a057dffc224c864b3d8",
"web_test/.git/logs/refs/heads/main": "d0a52a7babdf7a057dffc224c864b3d8",
"web_test/.git/logs/refs/remotes/origin/HEAD": "cbe15a0e989679251ee1b7a2673f9c26",
"web_test/.git/logs/refs/remotes/origin/main": "29acc5cce7ce3331ec411761becc13ff",
"web_test/.git/objects/0a/5cc35166f1bd7d425964bfb451598d745e0bba": "cc3ba357cd13882bb1dce8c1e1adf1f4",
"web_test/.git/objects/1c/0edc8b0489d82dfad6c5f2817f11c4bccf155f": "f49e1d277846ec8e923c460867fdf3b4",
"web_test/.git/objects/2b/7caa6013e31d777c88a216b874406866397621": "b6692c57a7b41649a8ee563b9721ef67",
"web_test/.git/objects/33/ba3b82e940832b76cd2cedf991cf8f950c8ed8": "7c55c3392cc26549c3a3d858c41dea6f",
"web_test/.git/objects/3b/e7da9b56588cdc85629b4c980cee81f62268af": "cf8f4699c8be5af6ee70e0f84bc7954b",
"web_test/.git/objects/52/1f701b6f63b020981eeb3492c56a9adff30f93": "ff89db1252a297262cc8951e9a5ba801",
"web_test/.git/objects/5d/306ea50fe0e81662f374a39f907e85072a241c": "0a2d3f6cff47a610ed78ee0e68247581",
"web_test/.git/objects/6f/bea93283804ab9e3743ccd3cad283db272eda0": "adb16c5ca66d7a49892d98b69fbab5d6",
"web_test/.git/objects/73/df24b5d13ff10ff8187aafdf03d6770806e103": "a79400bc45627d20e3e109b12a5dcb83",
"web_test/.git/objects/7c/4a7d310225805d1fcb2ed542a1b282b7fed041": "df88ee58dd155ce09d606ea3347b70bb",
"web_test/.git/objects/7f/c033ff38bf6b5341f58cb8e30f85bc21f1fc60": "a4b345f002dc71f55b1d8c983839e3f8",
"web_test/.git/objects/80/860621422964afa830d7e904884a4e367eae99": "e17ca29d5ee00a178717ce8baed7d2de",
"web_test/.git/objects/88/48d7169c05c1e2393802f3a4ea690763a986db": "2b633c8f268377b33ec402a63d0e6fc5",
"web_test/.git/objects/89/ce544cca4e318436d2a1e9e873d3a175ca2583": "d94a8ae96f005a1a1e24185ab4f241e3",
"web_test/.git/objects/8a/a91de4580555c5b6397d3db994027676757f0e": "30e798399ca558a40ae6cf545e880b83",
"web_test/.git/objects/8d/912775c3f6b34a52a3eef8926f4748f65539e8": "7017bbf86982b22ee51f4b7c05410819",
"web_test/.git/objects/90/dcd426652c7b1d40e8119ef27997de1b33fa74": "8a7d911fc27f9cf99ee782dc716bedd8",
"web_test/.git/objects/93/0f9f9816f5741f27c5c3b850ea52909b658afa": "a8ea018dc918911d7da06742447c4a2b",
"web_test/.git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
"web_test/.git/objects/a5/5d488d55096682e0758ed7b1c8bd28a4c92c18": "2d3722e57ed89078693e62ddd82f506d",
"web_test/.git/objects/a7/c8618dca22f67880096f27d0dccbd973260de2": "83a07ff991744ff2ef05913d1f2ee82e",
"web_test/.git/objects/b5/b63b16e223ee2df772a49d566792cf7bd46aee": "4d901866545fd24a01c0bd4764f36a8f",
"web_test/.git/objects/ba/6b19fcbdb8831dfab9139e3156ae60807c87bf": "4c00cbc3019285f4c613a9dc197a6ae9",
"web_test/.git/objects/c2/d316d116bf1b9142a4b70889700b4341a6aaaa": "0d2f1c8c820363dc59309dab7cc13855",
"web_test/.git/objects/cb/60f32075dfdb3384087dcd2fa45738a76c5294": "c83099d89a759014f6a0af37333aa0c7",
"web_test/.git/objects/cf/1edda9775d6955f6a56ca2e96384507b82b943": "cdb99255e1132b1a541809a9b9e2b7f4",
"web_test/.git/objects/e2/937dd8e0ba5beb5505ab36232e257495b0080e": "fbf2c84bf2646905517851e07bdec5f1",
"web_test/.git/objects/e3/2bc5a7e00ee34c95c938ef67e6eb141847f47e": "96b6d087884444d07a6d7e1189ec6ea8",
"web_test/.git/objects/e5/570109a7d55f363aad5d1dc3008d0ec8487c50": "ff13233c30e5d16611b543a3ad444d25",
"web_test/.git/objects/ea/b514cacc9d8c5735cc072aec5e2032a38b9e24": "dbfbe07c4f61a644c0ca4bda083c9f1d",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.idx": "df6ee55f8556f025fa03f0a34a49b40b",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.pack": "8dd712701a3bedc70c23800e6e047635",
"web_test/.git/packed-refs": "c9e17940c61c4131efb48d41cc9641ba",
"web_test/.git/refs/heads/main": "bba9a3facf5c91b112eb5475d18d3967",
"web_test/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"web_test/.git/refs/remotes/origin/main": "bba9a3facf5c91b112eb5475d18d3967",
"web_test/assets/AssetManifest.bin": "ff036f6f30f4daecbf48ab0e3e6a6642",
"web_test/assets/AssetManifest.bin.json": "cac7236fede7048115df330fe2cfaa01",
"web_test/assets/AssetManifest.json": "024dc3478d4db067a7bdda41c0a3a493",
"web_test/assets/assets/images/bg.gif": "881def9b087ac9aafd8a0ee1f5f568fe",
"web_test/assets/assets/images/bg.jpg": "a47be4a14d12da2d8db7b932a8fbfd83",
"web_test/assets/assets/images/bg.mp4": "01aee05df3770712d94b4c2dc2c86cdd",
"web_test/assets/assets/images/bg2.gif": "79c4e2528882afe55ecf056f6e3cd3ac",
"web_test/assets/assets/images/bg3.gif": "5df9da041119437ef8759c9450529263",
"web_test/assets/assets/images/download.gif": "5a34135d390945822a0f9e198a9fa496",
"web_test/assets/assets/images/home-1.jpg": "fd5e741d4fc493943ef784da025bbee3",
"web_test/assets/assets/images/KakaoTalk_20240703_230007660.jpg": "8a6d4ddc5dd09ad2a272df023007d3d3",
"web_test/assets/assets/images/KakaoTalk_20240703_230007660_01.jpg": "4daaf67b51d34ac0abfb181623ab7fb2",
"web_test/assets/assets/images/KakaoTalk_20240703_230007660_02.jpg": "5bef14515cc758d82ddf227d37231346",
"web_test/assets/assets/images/kakao_talk.png": "1ebcbc6e4d87d19a8b3e1cbb18e55cb6",
"web_test/assets/assets/images/kakao_talk2.png": "f79318fa183c94bdde913190c6e389a5",
"web_test/assets/assets/images/logo.jpg": "27199bce97233e9a9c2a8eddcbaf0e29",
"web_test/assets/assets/images/price.jpg": "9bf748831fdf1a953d6fe2833ea23f4a",
"web_test/assets/assets/images/price.png": "21738d987dcbb08f911c4e25dcb74432",
"web_test/assets/assets/images/price2.png": "a8d1bbe0407378b93dfb7460874ea1aa",
"web_test/assets/assets/images/skypeid_help_1.png": "88ababbf8d9651f10897e0ddecd04488",
"web_test/assets/assets/images/skypeid_help_2.png": "e70cb3ca83bee3b84ff60599b05bd828",
"web_test/assets/assets/images/skypeid_help_3.png": "3c594845bed63b36f9aac43fc4f3e7fa",
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
"web_test/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"web_test/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"web_test/assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"web_test/assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"web_test/assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"web_test/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"web_test/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"web_test/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"web_test/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"web_test/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"web_test/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"web_test/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"web_test/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"web_test/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"web_test/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"web_test/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"web_test/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web_test/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"web_test/flutter_bootstrap.js": "f0c55eb1bf152f165cc24abb7f9c7bf8",
"web_test/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web_test/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web_test/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web_test/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web_test/index.html": "c2f4e7e98de866c8c2bf33885ca3a9c9",
"web_test/main.dart.js": "fc025270d042eebba5eb904cda899ffe",
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
