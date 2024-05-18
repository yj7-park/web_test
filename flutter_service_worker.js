'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "58c629b50585f1b142b8265ef8395662",
".git/config": "1ad3afc48630d45f630ad9b51180ddee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4452bc3473a49966e909aab08930749f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc390599cffe8e60c3c77f134c0867f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1310072a117efa2e522be9b66c924cf",
".git/logs/refs/heads/main": "a1310072a117efa2e522be9b66c924cf",
".git/logs/refs/remotes/origin/HEAD": "a504a30f6bfb069dfc0acd8d0d855cdd",
".git/logs/refs/remotes/origin/main": "5dbedb6ecc34395ca5debcde551eed0c",
".git/objects/00/88999dc32a6c06ccc155900dc6e62c3253d6aa": "386dc43e7762caf99fbde5768d76745e",
".git/objects/03/107efa9a24bddc42eb71fb9b6a59c1b5b3da5c": "c47ea83db2c3504349a3f73b5e421651",
".git/objects/03/2d6c6cfa3be4a2fc075c774ebb40fbfa40a38b": "9fb4c7b1e4070801cdc5df10b3b615b6",
".git/objects/08/7b78650044b157d5a27b396980c1808d275ed4": "3c7178e7f4059d36afb4bdac6aa9b4e9",
".git/objects/09/eaa66c9dcaf53b84c739da15867bc0f352fee2": "ccc3b390b90b1e91516b4d696a3682a7",
".git/objects/0b/fef803623999fe51a753274c49dd8d2a0cc817": "1e4ad6e0b081306ebac1e14f9dc0c222",
".git/objects/0d/a9bbe2d892ecc885f0d4f6117f42bedb998792": "627be5c54e3af028b60e98225237d676",
".git/objects/0e/0b734c8fe51782e2938d07f0a42793574318c1": "7bd8067493e77de30d4f7e878a912d3c",
".git/objects/0f/436654d8c2e1a9469c174e17c274e94fb01f36": "71dfd9048bebc44d68e8d035810147fd",
".git/objects/0f/c4725964062d2066c902f934e7e675afdad7b7": "dce58e4fee985bcaeecf667ff63784e6",
".git/objects/0f/e7d68a395574a6b1c8c671505a1ac43fae04eb": "58d69b48c3fbd629116634a5b189cb52",
".git/objects/14/0302f9edc1473c86374347519b52fa4c2ac768": "fb9f5053453f26a57779ccee68bbbe11",
".git/objects/15/43fc4ef8572839af9f584b04e2fd976280b03f": "3cd5d38992be4bb5abbe6f86e3bb26ae",
".git/objects/1b/9750e17a845afd213b65650dbbe92d05d5c14b": "938c0df3bbb2022163201e12a1d85430",
".git/objects/1c/41d539a162df82c6d576ba446f994c0f52352e": "67ad4bec935eb80bbb9ea32c2712d5c3",
".git/objects/1e/c882232eac6d9864645b54b24ee0f734090299": "e7e4619480aaad9ddd28b4665112f79f",
".git/objects/1e/e1a3e0124a5751e921aa9958b60034fb2a22d6": "a5249259a604c95a8789873c6e492bfa",
".git/objects/1e/e5d9b09c67c6929dd11fc62620f43544b007ac": "f551c199255bf989e6d428d6e027617e",
".git/objects/1f/4c03824b25f643b3bcfb280d21d74e917aa7d4": "3efb783cf0eb4f76389b7cba9c86bc61",
".git/objects/20/bb301ca16f62bf317aef8409eee42811f29f65": "87a6504ec3fbc3f84f9ac8cd2667cc62",
".git/objects/21/1a6102be9e12fdf2c8f38e8e6dd6d731cfcb98": "80786bf92b8257e9410dd08e46d79476",
".git/objects/2d/419dde9d1f3efceddd3abba7523f61f359fb3c": "29debc840667c97f826872a06269c1c4",
".git/objects/2d/77b18d72c6eb4c3ea299ef1d30e36d3b5a604b": "8203f3fe625a4915331f9267acac0b49",
".git/objects/2f/3159ac63ffe3a2f45d0ad86e4883ad9964301f": "194ea3e2b09e3f1e6267a056446fa08c",
".git/objects/2f/910299060d2f285b9a9f2f81d0f5cb2535c7f9": "c3e1858831a4e72955e990bada995bd3",
".git/objects/31/3f45184dd52f5b3fd7382f9336d8874932e924": "bdd14815d8e50a5d0eca148a6783721b",
".git/objects/36/009d61d002d3e0e0983f004408d4f8b8588d5e": "359e5bb60a65734d3fec0de3121371d2",
".git/objects/36/ffec2b8a5d1af06f9a9d62b1aeecc03375c5c8": "0a255934d28abc3679ddfc2c4a3c8a75",
".git/objects/37/5695852dc9fe4c4758246e1aaa9e271a2ccad0": "07a8eb2350bb05b02b0ae80ca0fc769b",
".git/objects/39/204bd60316b825ab6255c6f378d092aef2eec2": "e4427c0e75de7bfe6706131c002ade59",
".git/objects/3b/32a28137cfb6bf9969c1743dd5bc092b949b4c": "521037aecbf35d56f76d35b2cd114dbf",
".git/objects/3d/0bc3cd7d1e2e878cf07230300369168d44ff97": "e1934c4ace9f6b4fef7e9f8d9a325314",
".git/objects/40/f045c62b5e944c30c74da76c97d1458d64154a": "7509c121b68a7fd8478ad07b87b63b0b",
".git/objects/41/3b4b9d873dfeb5d680fc5cd169e6658439f3bf": "c0f78c944c3803ac0fca4fa3709cf5c5",
".git/objects/43/9287e1df0c6eebb37a50c4bcee27cbc6479864": "3f7dcec4d1e5de18ecc3c76c751900f6",
".git/objects/43/d243dec3029fe0ba797db6b0ac82c4276ca189": "1b76ef6fbce61b9fecaafe169e2f4f53",
".git/objects/44/0d6dfb4a21eda441fbdea30c6e98d40ff04622": "0ca4abe461da15897b6425bf36f14138",
".git/objects/44/555a50a50c4f89d1ac6e1559bae758b820b523": "88985fe61d59c23adf35b48917bd5a71",
".git/objects/46/5f3b525b0fd0da93e2bcf57d736945a75c6d97": "4e53504a6372c5062b1b679b4eb6e8c6",
".git/objects/4b/8c2fc25e0570ecb9a244b3b311506936751972": "c2b09afc9c16dbae61757ba697896094",
".git/objects/4d/199aafd98a2a8981deb998325e902f99116eb6": "930d9e71129e76970a6c4d9ad8a2ab96",
".git/objects/4d/8ee913edf04db31ec0f5e2bdc1f39eeb145852": "cc3e63f4b3767f0f67d45d386e8f3c40",
".git/objects/50/4fcc465e05424c6bd436f81c8ed2099508bd94": "76ce14da318df9018801d06661dddcd5",
".git/objects/51/d4b671706394bbd72a52878afd0a199fd4cabe": "970fdc60a6d92300ff772d5c8588077b",
".git/objects/53/0e2bd6fa47cdbd127574bcc892d2cba390d376": "f20ddb51b65ecfa36b00fad2fca22d0b",
".git/objects/53/13d76b78edc5338543b46a93d692d923dc9d08": "415b55eb6e09cdc1c7d159fd52159622",
".git/objects/55/62ed952a34e7988e2ca2e489638389bce641e6": "1bdb9d03cfcb56ceb259f94d21f2f269",
".git/objects/57/82a7dadef800ace3f6d863b2ce1278931da4b1": "8d36aaf9af03b17c33b15db1677a9121",
".git/objects/57/99ee938d5dd85ba87c47a95f86705f15863758": "0d17586ec75a7bb866e2e2f458061676",
".git/objects/57/b5cdafd51a463d3e417d3091329bb748030638": "3d65ecb01ab4a6e5ddbb41b886a2c256",
".git/objects/58/405731b39848d709976eb4c422797b47dec4ef": "ccc98e368537a032a9670da68eaf068c",
".git/objects/58/6ee15c320df5f9e495432d77b18a9cfd7164b9": "9e944286ea7630307b8075744831bc4f",
".git/objects/58/8778ba6f5685c20ace71524a52b9438c49f432": "53e6bef14e1793d6fd3dc7945f23fffb",
".git/objects/5a/69267332a28bac02fe181cee588c3788bb8acc": "44eb2efea4f01d3c3adb23c60c3a0a18",
".git/objects/5b/836335508c2eb9f75d5dc0ea040ff142f812f3": "bf37d4c106e5136a4406cf9ff5a83bf9",
".git/objects/5b/b9c95492703c585423d809d9d54963153bfdf3": "a85043f375cfe824aaa16859b88b8152",
".git/objects/5c/70a66e3ae3c47909335fad26a3f3f47c177926": "06a9c12e878d5e09320dd175583977da",
".git/objects/5d/98af63cece995ab0c9e0d496bffbed824ce113": "3bf9aba57962f45839264daf94b5eb2e",
".git/objects/5f/f553af3a22a5b2ef723e16ece48ba2e5b36865": "497c03fbf9ab06f918d492c5086d5335",
".git/objects/60/23471e775acdef67efb68ace5200d2389a9d9f": "6c9dabac8877640ee134d51bcfbb0460",
".git/objects/66/169f77f4f2f88649dd4a908cfd226d01f69aee": "59cb23107eb886886e5b49af944d01de",
".git/objects/6a/b2826df1753b0a0ace6abc72a7a2437c9eb0b1": "eb807451e1724dc1a0b37cad02747c72",
".git/objects/6b/46192b993f3f9891469a8e80f3d714c5f1b7c7": "021df84f06da22c8880880211db9da0e",
".git/objects/6e/ae99b6c473911f4e1adcf0ad75c55ec0e1d7eb": "2286ac3ac7413415fd4327d1adc5162f",
".git/objects/76/586fb8dba933dd746791ddd5170431ebac6d83": "1ab2637478a3d7762f66a1a3f986d749",
".git/objects/78/cfc861228ec75533ef61e63f99688852b55017": "f2831693cd23545355cb5ca8f1395bf4",
".git/objects/7c/0b6f14e415b6d6896bf807d9e511ad2848b45c": "8a23596ce1dc2c51571eaff1355fed54",
".git/objects/80/9afbf1562c0f9e0a003790258564d365f3faf5": "0d59d1736c64f8713231aa15b4e44d68",
".git/objects/82/625f2e8a15b641ece3e982bbb168f85e86b7ce": "955195f31294f3bdb066c547a1d26b71",
".git/objects/84/b8e5cd0727547d6dd1511c857fc510ecf0b683": "7f355307a5929e04b52be7133c87b226",
".git/objects/84/fd4d751090ef4132e5a554063a9a5ca023dd3b": "786f1968746f37290e39d81b2abb182a",
".git/objects/87/1a03fe4928f07fb81bf28ef4730ec1303d6b5f": "5f6ac9730376d25a458c0c86dc2250cb",
".git/objects/8b/4080c75f765c27c3a2eafdc3e68dd109db7488": "09295a80768c557bf6d8e7d1f8774ca2",
".git/objects/8c/a4b36c34b20d7d9bbf1f4f0206ad0a22819b62": "0a09425a4c4c021849b28017e1cfece1",
".git/objects/8e/b37a10be3d27e244e232be1a2acf76fe6d44d3": "f35f0f726f102d8ac7fd3da3846d470a",
".git/objects/8f/7dbb0ce3bd68bd3069c918b9d4026737fa8670": "e8c6be4aaa6bf8eae5dc1787b9c343c1",
".git/objects/8f/fd41c24cc43155f1b29d066935c552327103ba": "acbb567b0ba484319390b9c256d755b4",
".git/objects/90/445d060f84c69f269ea5f462213a17c9a92a04": "2074f759fc096237d8b3ab42bba6620b",
".git/objects/92/f06a8fd9e553f8f693f3295eab70d6edafacfb": "56ce907eb0ef923a0212a97eb3cdbf95",
".git/objects/9e/592489104556c88a5a439a12510e5352e36133": "9ecfafa4050dd892cd8d0cd582c627a2",
".git/objects/a2/168a5be8782ca1dcd14640b25ef2a5e153ff83": "4c2ed200ccce98deae15435d4d707246",
".git/objects/a2/205809e9d31d88e46a5ea88352cb4a6e6a7815": "0e6378ae44dae2529584814720070eab",
".git/objects/a2/7ca2a5ee2a78ebb523ca4405dcbc150354fff5": "64f734db55f16580ff91372594651b21",
".git/objects/a8/b6a86c883fd7f2672d4c20796467ee93f2a865": "530d54cb783d4d432aba2994f7120621",
".git/objects/aa/53c04e7cb8ca2986c0b3f6d8d38ee9d49705b7": "e7c2c9134a5b9ff29979fb0ab6e1fae0",
".git/objects/ab/ae16dcae62a7c3ca56eb372139a3b3a35e0d85": "c8bcad8ac2074ecad47118f5adbcbf15",
".git/objects/af/fb13bda7bef47fc64230b65cf32e6669c9bfd9": "6de1347dc9eaeba81d4b04ed7faa64d7",
".git/objects/b0/37335fdf40781f5955ab7fb70acb25152f5294": "385d8824ec55a543ec7ab21a36e96a34",
".git/objects/b6/2642c319613d7c553cfb296c05f82c485fbdce": "1c8ff73376a43a6cef0143e69bbfceb7",
".git/objects/ba/3e0b18b63c7d9da9d9aa220dc5fb18fac11d27": "9d7657c3efd9e0be5deb07444cfd88d7",
".git/objects/ba/db399ea13b18259a7b82715e381f584e119fc4": "255cc7a88fa16f48c97544ba3df661d5",
".git/objects/bf/343355bb248eba73c59c9dee3ae2a81cd2a63d": "ebf0df0cca94e2e53ab9ac6e51b76e12",
".git/objects/bf/7f3b9e511b3e2ffdd2ff6900af422183b922c1": "d57941702602fd30247326937d8b81a5",
".git/objects/c0/5a5c5ad5f9cf434442c55ee079b88b6c1e2664": "23b91b56a3fc2444b116b7bfbd5db67f",
".git/objects/c0/9e6029d15f21c2729a9e364fd9cfee525526f3": "8699a3ea304643ca5a6fccf044e83de0",
".git/objects/c0/ea6f72a5271ca7cf2f7d6d6909b673b1a869dc": "837a601c8935926a35721ff21fa92a0e",
".git/objects/c1/e80cafb0273e727e2f0d15dcf3703c3c06e584": "6c7cd04c1c9d338821863b7a0ab815cb",
".git/objects/c9/3632d5767e451a19de425c490ea7e7bdb55718": "b8910fa1fcd1c51ad2f09291309b2c27",
".git/objects/ca/8d4ddd9e554e3a2f5d2d8d534197f4d9a523ba": "701d9bab79d196c039c94f77d70fa359",
".git/objects/cb/f1519bb077d2eae2c7c9f20880b12b9902e3dd": "d7e6f61321dc402bdda7a034248e2dc7",
".git/objects/cc/0eb67f1eb861b08dc739d90c895b8fbd3ba73d": "06342172f404383c8ed3b79dc4998f08",
".git/objects/ce/1a1d5ae3baf26354c52143b46b4d8ea66d742a": "c90b330b30848e5a89b439409b1293a6",
".git/objects/ce/eddb99b6930aae8eea1ec3877ac439360120c0": "f1f31c586ad03d9dd0ad20919cdb3029",
".git/objects/cf/8eaf87a7ca2b52a7e0eca0c96e78c06830f098": "f70abb391c6e1f9c6e8e70815b7aabdd",
".git/objects/d6/cccbd1df785c41bc529ab515c4d4c31a21129d": "00cf8f0d6c21c9c353fcf0f98f90ddef",
".git/objects/d7/16b33bbcdeb13b3a7f4305fd08f9a50e95dd4f": "3e113df4655efbe1053ab90f8baeebc9",
".git/objects/d7/e713e2d441dc39ab8b06d8e8bfeb1e0b0927ef": "142198b4864d0d07156431de539abb7f",
".git/objects/d9/2dc04e07726e8b03cbcea520a32beb108b6366": "641515db4647a395dd7770070daa381a",
".git/objects/db/6437d9e4388958147d19d094b9f75ab2fd833f": "6abb434f5c94a55b5d993fd87ca76b2a",
".git/objects/dc/44b0312c7096b76022fc8e9f5dd31f9116686c": "801777279f7def471e0351c3589a6a17",
".git/objects/dc/7a706e11942b593879388c00a5053afb10a37e": "0406aff2eb7f0ba3cb463d695832854a",
".git/objects/dc/f760e5f2f3952a5c5ecd3ef265af190e8397d3": "4db7a018df85c609a863e077e3ce49de",
".git/objects/de/ea1aba43167fcd5c079409432acfd7374f1183": "86ea4bd68771e5c6fdeb1eba640e85cb",
".git/objects/df/27d207fde181ba05ba2d772fc272d2388662ea": "e1d316f002864f1ecc78a6b3406375cf",
".git/objects/e0/7e138dbd9feadd123c824a72da450914dfde43": "42a4b6c45ee85b5b9d61c6bf8a76c887",
".git/objects/e2/4f0c3bafe6da348d8b4b891a70cce82ce47677": "25b9bba457c429f79274d80e01a9a510",
".git/objects/e3/a1cdb8d60e85ffb1619bce96b115e08514a780": "11389e7215c7b469928785113d213539",
".git/objects/ec/c562ae68dfe47e26ae8c500a02c23dc1ff27a5": "42d7b880ad496d7bd29535a133a60714",
".git/objects/ee/14606eea848118314ef0d16e664b19f38c30bd": "fe683185f74f584be29618e26177f4c9",
".git/objects/ef/706730bcb89d84c9e8e14ebd48d22602c38dc8": "ca56bca0ff8d8536ceeabf1c940ba603",
".git/objects/ef/e60885fa15d383bdfb7a42a4e80553469fcaf9": "62f66c6563ce78c9de24052a2f10aa23",
".git/objects/f3/fd38248717f9a37b07bd3f1619614115a756c5": "3440a41520c9a8b72f4d7ba24711df10",
".git/objects/f4/5ea872cc24ff0c8c11a4a8c6baa4594949be3b": "1df6ea6189aff287f07a0c7f146bebc9",
".git/objects/f4/b2b91b0ecd007381b70b5d900e4921497586e4": "688b02a9fc40df7ce0078c2fa15de957",
".git/objects/f5/3809a244b7118d0b3810723a42918e6f7ca9d7": "07f1e1cc44a3da44cea4063310488275",
".git/objects/f5/f6ea5e94247c77f6568ec35ac4910deda3b2d5": "7a3d1a34e32c78efda5f2dfa50de27cf",
".git/objects/f8/61449925b20896122f9bebf84a677f8d13aeab": "f6f448c027c034858a1fcf6fd5abab16",
".git/objects/fe/50f2b30d4bb9cd893d398fca577d8fb501946e": "2925bc35e685730baa04fb24087f74c3",
".git/objects/fe/b99af22a09c44a7988f1be0262dc9a39e4748e": "02bee123e220bc373e44aa70abf1d666",
".git/objects/ff/05b00bf9d3cb0bae69889d995639ffc06451ce": "d6ed71d1a00f1c561fe9ca60bd511309",
".git/objects/pack/pack-0493cd64616b7fcb246d3243cedc05ae408e66c3.idx": "f138725aec6770283bb2f5740c65d409",
".git/objects/pack/pack-0493cd64616b7fcb246d3243cedc05ae408e66c3.pack": "e2b20fa3a20fcaafb6c4ab6c1db8afcd",
".git/ORIG_HEAD": "f1c2ada8f3d549f274321c6484c040ac",
".git/packed-refs": "792f23ea0c6f10e7710b0a54f68cab61",
".git/refs/heads/main": "f1c2ada8f3d549f274321c6484c040ac",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f1c2ada8f3d549f274321c6484c040ac",
"assets/AssetManifest.bin": "c44955a7eebcf5cad81618fa4b5e90fc",
"assets/AssetManifest.bin.json": "02cb20cb218a6fd9d001bb6a766d1ae9",
"assets/AssetManifest.json": "4ef8a98c1c39c0db60b84cf2ba5eed09",
"assets/assets/images/bg.jpg": "a47be4a14d12da2d8db7b932a8fbfd83",
"assets/assets/images/home-1.jpg": "fd5e741d4fc493943ef784da025bbee3",
"assets/assets/images/logo.jpg": "27199bce97233e9a9c2a8eddcbaf0e29",
"assets/assets/images/price.png": "a8d1bbe0407378b93dfb7460874ea1aa",
"assets/assets/images/small_logo.jpg": "c6be9d523f494cb6c493c98461de48da",
"assets/assets/images/small_logo.png": "a5e681c8fb2e036ad4d83673cff5b6e1",
"assets/assets/images/small_logo2.jpg": "0ff709b1e330db2bff374d0ea9a80148",
"assets/assets/images/test.xlsx": "497a48553b37c46a2dda736c8d4650db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cbfc09a9eb663495a64697b1c030f816",
"assets/NOTICES": "ad4134ba3c46247ff1e6483be326f957",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c53693ca49fcb8b18b9e14c9b77a9088",
"/": "c53693ca49fcb8b18b9e14c9b77a9088",
"main.dart.js": "2301c633fd94427c59499fbc2b93cd51",
"manifest.json": "55987604545bad5ee82e67ffa9564f59",
"version.json": "249e1884f03cb41f236bed8a93126ce7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
