'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "40cba928fffd06be97d607ee343e1899",
"assets/AssetManifest.bin.json": "c51fabf2478e4791ace6c30b2767a1d7",
"assets/AssetManifest.json": "1f93f1ebbc523e99d9ae93646ea06945",
"assets/assets/images/(%25EC%259B%25B9%25EC%2582%25AC%25EC%259D%25B4%25ED%258A%25B8%2520%25EC%259A%25A9)%2520%25EB%25B0%25B0%25EA%25B2%25BD%2520%25EC%25A0%259C%25EA%25B1%25B0%2520%25EA%25B0%2580%25EA%25B2%25A9%25ED%2591%259C.png": "021f8c6eae26f97e9d1523d1a1ccb6b0",
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
"assets/assets/images/price1.png": "7086b3dbc91795a8cfc5933613341057",
"assets/assets/images/price2.png": "c55b22b9999c2fbd497da5ec3cc140d5",
"assets/assets/images/price3.png": "a8d1bbe0407378b93dfb7460874ea1aa",
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
"assets/fonts/MaterialIcons-Regular.otf": "a1347ef3ee0d55affb0f65812ad95bd6",
"assets/NOTICES": "2c64414673be852e8ee2b5d4b7475dc1",
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
"flutter_bootstrap.js": "051632060997b96f3ddd4a5c0449079d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc5913b9c3d28f744a6103793be8442c",
"/": "fc5913b9c3d28f744a6103793be8442c",
"main.dart.js": "acd261a4f5ab15cb96064410a6cdf255",
"manifest.json": "55987604545bad5ee82e67ffa9564f59",
"version.json": "249e1884f03cb41f236bed8a93126ce7",
"web_test/.git/COMMIT_EDITMSG": "40daa909ff4c88494115c275294ffee5",
"web_test/.git/config": "4e43ca1383af9e7fa699adea7871dfa6",
"web_test/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web_test/.git/FETCH_HEAD": "ce5388564754759a465fb3681c879d74",
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
"web_test/.git/index": "99d5731777acfcd1681d003be23ade4b",
"web_test/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web_test/.git/logs/HEAD": "117eae645303aea9c4799008c4dc8f84",
"web_test/.git/logs/refs/heads/main": "117eae645303aea9c4799008c4dc8f84",
"web_test/.git/logs/refs/remotes/origin/HEAD": "cbe15a0e989679251ee1b7a2673f9c26",
"web_test/.git/logs/refs/remotes/origin/main": "45e6bdc01dff42866de8fb005cff289b",
"web_test/.git/objects/01/412ba4433b635c845fe0d441a13f7ad6e18471": "b0a90599b7bafc948cdf9154dbaf3392",
"web_test/.git/objects/01/936ff711582ecd367dcbce30a1f76a5602e2ff": "d35c82d584fe79749101b5cd6f9a54a2",
"web_test/.git/objects/03/14e30f1cea56f18a3b275c0a4aa21b573378a4": "ba85310338b0154a9d01dbeae1745641",
"web_test/.git/objects/03/7f5fb90f0ece35a400e99038df554efe7c6de9": "b0f652fec6691528bbbe8e424e9decd9",
"web_test/.git/objects/03/cb003495533c58bab7eb54919b2eaa94d1fdc2": "13d96792b42c88a9eb8f9af98b71c300",
"web_test/.git/objects/05/2617650ea72520cd49074afaa3792b04e36420": "507bdd631e13401d1232b0540815f09e",
"web_test/.git/objects/06/78162af05be36cb03a6b7a01f6dda2c27b80cd": "d1bbca38569179f3e7e87299913ee88c",
"web_test/.git/objects/07/aa696f25e3093f96ccff1087a8df1ff0905ed4": "5133a1b6ac82725ad4d7b2c0d8e76e89",
"web_test/.git/objects/07/b7a90a66e795fa381036c76f4e61d46f00bb84": "7fb9606abaa470f282a82f7ba0ed8b09",
"web_test/.git/objects/09/f8fb8ce4e53afb2137a593b21377bf3c355a19": "2f5c63a0b22bfac2e306c02193cbce15",
"web_test/.git/objects/0a/2bde14853b0a8fc0755912b2b2ef1b5ee997be": "4bcdea5ae0fdf539936f5ecc185af25c",
"web_test/.git/objects/0a/5cc35166f1bd7d425964bfb451598d745e0bba": "cc3ba357cd13882bb1dce8c1e1adf1f4",
"web_test/.git/objects/0c/38cd56b23534c82d2c2f98e34391683d582057": "477d45192331c4af7740c07199afc0a2",
"web_test/.git/objects/0e/b69233578ab22ec153efbd5e41aff9e425018f": "24c9ade8a1bd70726d1cf0c3482db83c",
"web_test/.git/objects/0f/874ea2fc241172022e346759e1db7a5ce022b5": "708cd24f95531a4fdad6b10948bdb17f",
"web_test/.git/objects/12/816e5308168079c8f7b9b731aba5ee6fe2b985": "09ac339d9e99abdcfa1aaa9eda6b2808",
"web_test/.git/objects/13/f22e5582d13b206118055e5dc03716fe1423fd": "e355d4decd28077e33fa124015e3c7e0",
"web_test/.git/objects/1c/0edc8b0489d82dfad6c5f2817f11c4bccf155f": "f49e1d277846ec8e923c460867fdf3b4",
"web_test/.git/objects/1c/ad48d32dc00613e16879f2b5ba295208d8c4c1": "678fa69d2ad5dc0ec36e9c61d98b463e",
"web_test/.git/objects/21/82f954edd6042befbe556bed337bf8071677ca": "2463d8c1d7dfcd5ee7a9f28bc02c868b",
"web_test/.git/objects/21/d27a17344ac58645372df58b1229e406c45e00": "56495cc2ae2d905185ee7d4991698224",
"web_test/.git/objects/22/9ab3929134074013528ae9760b8143e40ba20f": "20720c0b2a08a42db62050059c4feae1",
"web_test/.git/objects/22/ccfebf4c33391ded88fefbfee5615e46acd857": "382d57df80fe425905f69f78cc335600",
"web_test/.git/objects/22/d187e620340c0635782d0b0712570a821291a0": "9527f665bf0f8e0c2068a96ba9774065",
"web_test/.git/objects/25/c19590e03b0f9a689eec26ddf988dd8dbff14d": "31539dda82c0f7273f6ec250cea2cfc9",
"web_test/.git/objects/27/ab3cc3106fa8825726641dcba6ffecf0434eef": "38ed814d7243c0f4d2bbda3c80aabefa",
"web_test/.git/objects/29/4934fc6551f280eee938183471d4c193fe8fd6": "93895ac6c66f5104244f4e2c3d448070",
"web_test/.git/objects/2a/49f7e20c1324763310b642af2236d8ae232671": "2929e8a4342880f27a04ee34e527b410",
"web_test/.git/objects/2b/7caa6013e31d777c88a216b874406866397621": "b6692c57a7b41649a8ee563b9721ef67",
"web_test/.git/objects/2c/741accd0c1c958087be6fd71f21deaba1f8f29": "3e5dd8e9919956f8eed71ce65c2c746d",
"web_test/.git/objects/32/f74b20879d261cd5bee85bb96fc038cb9e23a5": "cb4a4c479335cfc2e09d6b789687ceec",
"web_test/.git/objects/33/ba3b82e940832b76cd2cedf991cf8f950c8ed8": "7c55c3392cc26549c3a3d858c41dea6f",
"web_test/.git/objects/38/eccb9e76286a05792d55f8d5549235c76b3eb3": "94d10ddd180c1f1bd323351f2413bc1f",
"web_test/.git/objects/3a/c301ba13761343dd65be21eee30558eb5152b7": "154fb14b066ef1dc0ac07554465ff49a",
"web_test/.git/objects/3b/e7da9b56588cdc85629b4c980cee81f62268af": "cf8f4699c8be5af6ee70e0f84bc7954b",
"web_test/.git/objects/3d/71cf2462a3ce8fe5710efdd49cada7deb53172": "ff9bd23a14777029a7496be0d94b657b",
"web_test/.git/objects/3e/b6bab71db25b27306274e1d1dede1b908bc343": "9f87ad80323162cb216e667b916957be",
"web_test/.git/objects/40/bbc1b184419f6b5c85b7b301c3376ecec8f5b0": "fa6244ee8f51cb60f06b9e7929875efe",
"web_test/.git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
"web_test/.git/objects/43/8b74492ba19d6a6453e41fc0a677b0e558f464": "78d7809c932e266d6f03877e11b73f74",
"web_test/.git/objects/43/97ad2af1a58055589bd5508af7c133b979b6a2": "b74b474e167d3af9e852d64655f4173c",
"web_test/.git/objects/48/28d6c1ae63e5acc25492623a1d3c8a85ad999b": "b3e51ab366daf52fc148dd46d35cee78",
"web_test/.git/objects/48/d68a34fbc787999b86e6b3513dc057d753fdb6": "b83c88cae79d8e6871a3f84c0a4aae2a",
"web_test/.git/objects/49/225fee4f86451594515ed2e5d58cc0f6d882f6": "698564521af0fbc731c6582160a65a5e",
"web_test/.git/objects/4a/3fb0fdab6e60bf2cb655cdeecb667f7f2c39d2": "5b9054b2a5204e8ba3d140e8ac87af04",
"web_test/.git/objects/4c/23a6c71ff554955ab958bc62a83cc21cc84a0c": "4fc4450d2975c5da8b714cf2d353cdda",
"web_test/.git/objects/4d/611ffe8cfdfa41e6489099e56c1578b1c096a0": "181274136d9473508a786a3921021b37",
"web_test/.git/objects/4d/774c29c759bc1b8ac4075d42db17f044850024": "746092d243195162f0ea9fbcc9ddaa6e",
"web_test/.git/objects/4f/fc98c913f035e16c54e77dce886a9c51552da0": "bc2f2053086cd8c18b9c2de781a2e915",
"web_test/.git/objects/52/1f701b6f63b020981eeb3492c56a9adff30f93": "ff89db1252a297262cc8951e9a5ba801",
"web_test/.git/objects/54/08525a399c613c0460e5b75f77782a498a536d": "f5ba46e7c6bce83e9397b8bba58493b1",
"web_test/.git/objects/57/0589f6cc042fa8c2e527223adb0df7d368f4ba": "753b880534f139a732bb94c30734ff89",
"web_test/.git/objects/59/9f296caa2ec7912c058674c96dff4f5464fa89": "86efd021e86459262544ffc315242242",
"web_test/.git/objects/5a/1c18d0fe0ca351a3dd859976db076c5e37b557": "3802f6d2ffe53381beb914fe76027990",
"web_test/.git/objects/5b/df0ff380d642313b5de691f3738b6535282d60": "ad44b7a780f6b8e46c773968bcba5909",
"web_test/.git/objects/5d/0e2c1306c49baa97227f14ed00ae74261a08a2": "ef32616d2c8bfd011cc686eba7685e0e",
"web_test/.git/objects/5d/306ea50fe0e81662f374a39f907e85072a241c": "0a2d3f6cff47a610ed78ee0e68247581",
"web_test/.git/objects/62/c37ea823d454a5c8fbc95deb46417c55ad0466": "66387cd012aaf2d4e008d680db7b7c9c",
"web_test/.git/objects/65/96c699a10603a37fa0b7719e81e0912bbb7bef": "3603f18e81d9fdaf7518b9de0d73dd75",
"web_test/.git/objects/6a/09d143114f17462e82c013936bc66ec39e0a15": "3e28fb09878db96b35723e47d19a9f60",
"web_test/.git/objects/6a/97b5ef8468eeffb97e698347b94a8ee7cf38d3": "c47520c7ce06334fbd36a370fb5f79b2",
"web_test/.git/objects/6f/79cf45bdd796fba4ddf724d4689cc38d655afe": "fa591944190339da6f87c0422d0c5920",
"web_test/.git/objects/6f/bea93283804ab9e3743ccd3cad283db272eda0": "adb16c5ca66d7a49892d98b69fbab5d6",
"web_test/.git/objects/70/2078b2f9b99483369133e270ce19034cf28666": "8733a2be49bd01b5d3433f9746fb6889",
"web_test/.git/objects/71/6c39d26d39ff2b87be2f1e1dc8143f249c806f": "a84fa0438eb53f38da1c1c7c5ec09c49",
"web_test/.git/objects/72/407052143f028f56da5f93195a48d267f2f08b": "fb276181777dbd41feb571754a18c75e",
"web_test/.git/objects/72/6bce2e3de2759b9798b3bbf404ab6e7090bcff": "ce987a6610783fe31ab908f09e633067",
"web_test/.git/objects/73/df24b5d13ff10ff8187aafdf03d6770806e103": "a79400bc45627d20e3e109b12a5dcb83",
"web_test/.git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
"web_test/.git/objects/79/1cf8b8b579fc7a01d3734a95caaa86e1e0c30a": "d8eb8f068491e151211715f42c39f065",
"web_test/.git/objects/7c/4a7d310225805d1fcb2ed542a1b282b7fed041": "df88ee58dd155ce09d606ea3347b70bb",
"web_test/.git/objects/7c/e5435d0b3ca369458b8da41d50123674d68341": "67cbdb7566925d79f95c112d1fd94fa9",
"web_test/.git/objects/7f/c033ff38bf6b5341f58cb8e30f85bc21f1fc60": "a4b345f002dc71f55b1d8c983839e3f8",
"web_test/.git/objects/7f/efe965bf1f199da771ba8cbd02f55c08acc2c3": "2717ea8d39c7de68ecafc7f3d71f1c51",
"web_test/.git/objects/80/860621422964afa830d7e904884a4e367eae99": "e17ca29d5ee00a178717ce8baed7d2de",
"web_test/.git/objects/80/de17f80df6185081b01d4b67bb51bea291027a": "a7559ca7d3e3c5ee44d8553dc528e0a9",
"web_test/.git/objects/83/be337480ff762c934fd40a559d512c76bcc619": "d634d779a2bf08fe7aafe20eb5b13366",
"web_test/.git/objects/85/1ba4f5215ad89ff328b07b4d54898a8bf4fb13": "5f078251e569291eeeb3fd81b68e295a",
"web_test/.git/objects/88/287d93c1f1778f00d237fd99a46bd8fb3091ee": "08b4cbd5194d34fb3c655c83e8b8ed06",
"web_test/.git/objects/88/48d7169c05c1e2393802f3a4ea690763a986db": "2b633c8f268377b33ec402a63d0e6fc5",
"web_test/.git/objects/89/15582518ce4ac2b47a7716083ae42604c50454": "9098dc35b1722e3b53a3eb70e1750382",
"web_test/.git/objects/89/17db5736ba3ff6f3bf6bda4801b197220f30d9": "1bcf30d2aeb356edc1cf60744f237fbe",
"web_test/.git/objects/89/ce544cca4e318436d2a1e9e873d3a175ca2583": "d94a8ae96f005a1a1e24185ab4f241e3",
"web_test/.git/objects/89/f2fa355ced292e8d79ef6619642fb6a3f4d8ac": "2cb3e2b04b11eca9f89dc9efd111f5d6",
"web_test/.git/objects/8a/a91de4580555c5b6397d3db994027676757f0e": "30e798399ca558a40ae6cf545e880b83",
"web_test/.git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
"web_test/.git/objects/8d/82c09561fca02c61b1ba71dbd5a2f8fbd53672": "634d0e1bdc05685b480c0aa478d32576",
"web_test/.git/objects/8d/912775c3f6b34a52a3eef8926f4748f65539e8": "7017bbf86982b22ee51f4b7c05410819",
"web_test/.git/objects/8e/b9aaff08e38e17fc1fc6eabbe7043b586934a7": "de64fefea2e0467ed6382a773a966a05",
"web_test/.git/objects/8f/2041b67d906e22b079248be134515c7a5c5855": "642f1f708c8e420ef2f537e58b24257f",
"web_test/.git/objects/8f/784641d5e53e83649eb003fdad4ecac0a0e4f3": "54de888d4bf92a9797db0779cbe4e9a4",
"web_test/.git/objects/8f/f9c3691c9cb9506d8608fce8daa6fc7a6f36f4": "121c3f6b56cb8f32b592d3a200e11997",
"web_test/.git/objects/90/dcd426652c7b1d40e8119ef27997de1b33fa74": "8a7d911fc27f9cf99ee782dc716bedd8",
"web_test/.git/objects/91/571920ea3f69d2172f37e20a9c3138e0bd9bd6": "6592a92dd789dd78587a9246cefd6806",
"web_test/.git/objects/93/0f9f9816f5741f27c5c3b850ea52909b658afa": "a8ea018dc918911d7da06742447c4a2b",
"web_test/.git/objects/93/d6c7de06a37e054e09b04ab10fe534f8ee7ba5": "12e527399f997cbc29385b81e4240dca",
"web_test/.git/objects/94/1be16e697e8e26ba1fe89f4b378c169a236dfc": "276e9e60eea4edeeb638f29b7ff45e43",
"web_test/.git/objects/95/656817cc7a810c8524d5efd14035325ecbdf4a": "9ae32137072dd5f3a46836bfd60e0591",
"web_test/.git/objects/9e/a6bb2c8f9ce4458501c4f33b06766cfdcc430f": "19c59b93a6ee182cdf5be46411a9e7d0",
"web_test/.git/objects/9f/e52b6b9135125b903e783a0a9129381085632e": "953e6a0bb278cb818eaf2d41e65d9962",
"web_test/.git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
"web_test/.git/objects/a4/2851a9215ba7ee32c0eba754ded42d1c1478d1": "c02a96b6366b38ee8ad143aee16b73df",
"web_test/.git/objects/a5/5d488d55096682e0758ed7b1c8bd28a4c92c18": "2d3722e57ed89078693e62ddd82f506d",
"web_test/.git/objects/a7/c8618dca22f67880096f27d0dccbd973260de2": "83a07ff991744ff2ef05913d1f2ee82e",
"web_test/.git/objects/a9/09483b9cd9111d3d4e8e1d93fe9bc37a714f45": "30cd6024700fb4d37b3a156b5c7233ab",
"web_test/.git/objects/ac/4bdba0f9986fe87f85dfd3337db206eef21e38": "77b0aeb975182f94c00f69f5315f7ee6",
"web_test/.git/objects/ac/b748072c9b4292d20795805aea6434dcfc5db8": "3579da4327e08d38661af3e445920fab",
"web_test/.git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
"web_test/.git/objects/ae/8ddecae2208b60b4300fee0a30f15929a1f78b": "392f4dba15ddc0c3aa3bf15db3c3c7c3",
"web_test/.git/objects/b0/c6568b7f73e418a820c1c5681559ca64f072af": "d4dc5948c09b50f28efdd2daf1f0c951",
"web_test/.git/objects/b5/b63b16e223ee2df772a49d566792cf7bd46aee": "4d901866545fd24a01c0bd4764f36a8f",
"web_test/.git/objects/b9/934a90717633f502cf71d7b99dcc494727f512": "c77b495558854da258e343b03678ecf5",
"web_test/.git/objects/ba/6b19fcbdb8831dfab9139e3156ae60807c87bf": "4c00cbc3019285f4c613a9dc197a6ae9",
"web_test/.git/objects/bb/ebe00ee2ebf855ad876d0379dc020b25389a2d": "8edbdf8498f993e5142b4579db44b285",
"web_test/.git/objects/bc/398504740421105ec4199dd7cce58af721deed": "af630dc262390197cb124efbd235df80",
"web_test/.git/objects/bc/697d08d2d2a554901d66d14d8bbf484fc4a66f": "858c3245904d4f05aaab66e3a35d4449",
"web_test/.git/objects/bd/67f3440d9d06ef21836ce4e77c7eac15c57199": "583c1ac4f15bd9dd520ab1286f321d59",
"web_test/.git/objects/be/3aa78d56ae66b80d9bfd107d34427f4abeaf0d": "2337e32df2a05c87e6a8f7796acee288",
"web_test/.git/objects/be/8b0f6a415d4b0c78e3cafc7ce38094b6b7b872": "69c44c8c3cecd2cfa840d33e328e6e68",
"web_test/.git/objects/c0/4718a8a02daf1db66caa4114e8a5c7f99c6960": "8c7b47054ddd95de53c6922ffe5c1fe8",
"web_test/.git/objects/c1/a89dc7d278ab7283b155d76112a1778e2c39ec": "cda04ff25c3727d073555f95804c5af6",
"web_test/.git/objects/c1/f8573dd7a4a3c84a4051bf1a54acbde68c28a9": "1cca6ed202b31f2853fe7b76b9f9d3f2",
"web_test/.git/objects/c2/d316d116bf1b9142a4b70889700b4341a6aaaa": "0d2f1c8c820363dc59309dab7cc13855",
"web_test/.git/objects/c7/908e3051430fe3980cbc00ffad6d896cf732a3": "fb568a7241b2d121c010e397d2216e4e",
"web_test/.git/objects/c7/c5de41e7782bbc89683274b5b6d24f9a0c4d92": "bdd69b6dd3c3beb6eeb521b73f26ab91",
"web_test/.git/objects/cb/60f32075dfdb3384087dcd2fa45738a76c5294": "c83099d89a759014f6a0af37333aa0c7",
"web_test/.git/objects/cb/fec42618c343fed3954cc5fd0a7c15c0068985": "2545b63b7665a3e6bfdb329db0a20b5e",
"web_test/.git/objects/ce/e4f165d029dec0fd628d41c5b0847159a1b553": "23756cd775c1035cf8bcc17338a86cfd",
"web_test/.git/objects/cf/1edda9775d6955f6a56ca2e96384507b82b943": "cdb99255e1132b1a541809a9b9e2b7f4",
"web_test/.git/objects/d0/33361bbe35a7eb75c31942eefb4558d568c133": "35a0dd67333d84131e1edad340a0a354",
"web_test/.git/objects/d1/cea57a643c9e5650a6508e8f1ac826cba4a8e5": "54da6390f62b8dd2ef9fdd149934a23b",
"web_test/.git/objects/d2/ec83327937206d58fa0842e4933a630bdb823a": "f00aae6f8ed1d1cc81c4de084a3d5bc8",
"web_test/.git/objects/d3/ce8a7f23ed54f57e56e7ce5cba05993ad33fbb": "74eeecad086e3ef956069f74d86dfd64",
"web_test/.git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
"web_test/.git/objects/d7/62b442864009fd81193813d8d041dbeae89c92": "8fa55e508a89dbf02fc8ac22a22a3e1b",
"web_test/.git/objects/d9/52a75455d51e62ffbd993f00271e27bf5fbe09": "ced01a8a7379e5fbbbb3e91ba3d8777c",
"web_test/.git/objects/dd/560ff3b1c6c67a70943b155d77ac059e76293a": "5e7b7d0c5dea05479c43d1abb0feafe2",
"web_test/.git/objects/e0/f8083e802550e467d8fac777f1135f1ebf2211": "11aea9b61ab45f02b221f11f85eac566",
"web_test/.git/objects/e1/09cc83d7265fcdf6322f1919809de54634c084": "d47132924f8c34f980adcb2dc1d31a0b",
"web_test/.git/objects/e2/937dd8e0ba5beb5505ab36232e257495b0080e": "fbf2c84bf2646905517851e07bdec5f1",
"web_test/.git/objects/e3/2bc5a7e00ee34c95c938ef67e6eb141847f47e": "96b6d087884444d07a6d7e1189ec6ea8",
"web_test/.git/objects/e5/570109a7d55f363aad5d1dc3008d0ec8487c50": "ff13233c30e5d16611b543a3ad444d25",
"web_test/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"web_test/.git/objects/e7/9dcb6cd1b4bdb685c05ad63baaa9af12499397": "1b4fe971b94f63a92409c07510cfb3b6",
"web_test/.git/objects/e8/5204bdfb7e55d21d62b6f13d702d1b35d69fe1": "668783ceb81477e0c1e564d07214946e",
"web_test/.git/objects/ea/b514cacc9d8c5735cc072aec5e2032a38b9e24": "dbfbe07c4f61a644c0ca4bda083c9f1d",
"web_test/.git/objects/ec/c98446136fdd240238603be7de68c483fd8ae1": "14c87f1c9056e45dbe7b08f79dc0fad9",
"web_test/.git/objects/ed/2d82b26cc9fa66e0faa9ffd02ed019c6f430ef": "d073ec87b22c3bf9157fb2f3169bc864",
"web_test/.git/objects/f3/8671ec992b24cbe7f36ce7d3379d6d96f44dc5": "1cea869d52db3d907f17e1ef27b5d428",
"web_test/.git/objects/f3/dfd88056c4c9f046e4c8bb0cd0530d3e24fbfd": "c864e5105cd32016f5922ae221b297f3",
"web_test/.git/objects/f6/6df3d7a0700e70387bb6e7adf40a6932decf5a": "9a3c4a28abbb1c0848a2856aae324610",
"web_test/.git/objects/fb/9357c90c04ed812e1642591a84607c8572e5b6": "7d1e5c70f5fd30640ff2da230a53b627",
"web_test/.git/objects/fc/0e2d9f78e41d0475bd6eee7b76a48d9b280a73": "b5174c151dfcf70194b5d4e5afcc41db",
"web_test/.git/objects/fe/5d898766caaff2c473db7fe2cc5bf1f497ef87": "05cea9bef586524dc6fdcfa452e08cff",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.idx": "df6ee55f8556f025fa03f0a34a49b40b",
"web_test/.git/objects/pack/pack-9acd36cb9aa4e5783c2c63603e6cc185794f1ae9.pack": "8dd712701a3bedc70c23800e6e047635",
"web_test/.git/ORIG_HEAD": "32d5f596c1fe26ef248343c06c10368d",
"web_test/.git/packed-refs": "c9e17940c61c4131efb48d41cc9641ba",
"web_test/.git/refs/heads/main": "43b32c08693e1a0cf50a4ab3a4b43610",
"web_test/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"web_test/.git/refs/remotes/origin/main": "43b32c08693e1a0cf50a4ab3a4b43610",
"web_test/assets/AssetManifest.bin": "40cba928fffd06be97d607ee343e1899",
"web_test/assets/AssetManifest.bin.json": "c51fabf2478e4791ace6c30b2767a1d7",
"web_test/assets/AssetManifest.json": "1f93f1ebbc523e99d9ae93646ea06945",
"web_test/assets/assets/images/(%25EC%259B%25B9%25EC%2582%25AC%25EC%259D%25B4%25ED%258A%25B8%2520%25EC%259A%25A9)%2520%25EB%25B0%25B0%25EA%25B2%25BD%2520%25EC%25A0%259C%25EA%25B1%25B0%2520%25EA%25B0%2580%25EA%25B2%25A9%25ED%2591%259C.png": "021f8c6eae26f97e9d1523d1a1ccb6b0",
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
"web_test/assets/assets/images/price1.png": "7086b3dbc91795a8cfc5933613341057",
"web_test/assets/assets/images/price2.png": "c55b22b9999c2fbd497da5ec3cc140d5",
"web_test/assets/assets/images/price3.png": "a8d1bbe0407378b93dfb7460874ea1aa",
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
"web_test/assets/fonts/MaterialIcons-Regular.otf": "a1347ef3ee0d55affb0f65812ad95bd6",
"web_test/assets/NOTICES": "2c64414673be852e8ee2b5d4b7475dc1",
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
"web_test/flutter_bootstrap.js": "dbe5782ea579fad27dfef976bf65796b",
"web_test/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web_test/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web_test/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web_test/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web_test/index.html": "ccf616ec0489c10dcc9f2bac678a760d",
"web_test/main.dart.js": "316e3fbde0cd42d8c1a608a8fa3da3e9",
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
