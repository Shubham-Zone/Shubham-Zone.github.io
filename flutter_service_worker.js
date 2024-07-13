'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ccd9f62f8bc3401f40e2bcd904895078",
".git/config": "98780de4c700072952cc7cdcb5eb4e54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "db6feb731d1bf05c0e1d47b3634ad3dd",
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
".git/index": "b59db84d449fed829a80aaa00aca2762",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9fa9943d711af8c7ca6ed8fcb6d989c",
".git/logs/refs/heads/main": "b4fa711f2de6c72ece0b2155749c11b8",
".git/logs/refs/remotes/origin/main": "227d6205f114ccab6414aa363c8c98be",
".git/objects/02/f9907b8c9dce9855e882fe3cbfa7cc08fa5356": "a3e0ad271f7800a7e5dda9b2fe6ea765",
".git/objects/06/a42fe421f8e5670164c8ba27324c8908e66237": "cc9ecfcca9fed0013c141b99787f0fa5",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/0c/ec5e07e595ac6cc621639158c1684a1757e25f": "ac4530b3387d16740e6becf82e9a1fe4",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/6cbf64a4b55d553491e9901847300fa8749c0f": "bb611e82477917244279e8854df94860",
".git/objects/12/d948d0b6420c7b23d095113c1d86b6ab8dc017": "85915319df4540241b4bfc0fca05459e",
".git/objects/16/f30ef30d061c202f9f893d78a5760421525b3c": "f8cc42b4bc168cbe40b2426c22d670c5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6ed33129f175c848e79688bacc5d93c02e6a28": "5b1b6c751286231319efdd3a6cbea6b2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/ebe9bb81a14087ad91d3acde75bc135252a33a": "b0699c23f96579c4d0ccf22d67c01868",
".git/objects/22/0991c51cf1887846e330f13158700233657138": "a96b244c02ee2195e28a42221d40f7d1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/45139564310991e3f7d21ada448a95b521a022": "22043c6db1502ea7f71abe01d33ff0df",
".git/objects/29/33d00fa97a68af318e179926dd3f94c7beb224": "079f1439a3ac21341488678dbe863264",
".git/objects/29/605294dcf0f65732bd9f1979d38b99316f77fd": "3c35a8b2850d931ce3271ad5788c6a63",
".git/objects/2a/9b76f884f404560c12715a650c0f21e8bf2b8d": "4e6b567a0b5d53fa67799917844b744d",
".git/objects/2c/e5b116122b5d3fc7788111c9f5ada4f435cfcc": "56f7162e9b3dc5e0965642ffb0506204",
".git/objects/37/b5c94a6dfab3b2efcf6cc4d19f2e33b0a245bb": "6f330ebd5ddbedbc25843c70f771c895",
".git/objects/3c/eb37e69d37e1ca7ffae8610f1c64025a96acd9": "451edf0178d5f6e347c166a4108cf8ac",
".git/objects/3e/bbaf2a23cf58d344d248e4c8d627934f5827e3": "c61f60747bf29a21c1c3470c263ffff1",
".git/objects/42/0aacda1d1b71f05dd5df2170f73ba200191901": "9e1c68c3d8d5ef7b1096aae1716dbc4a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/45b44a49785dd9ffc51d8c3b814dfed0fef933": "517aab1a6d9a31ddced2a1ca387d7027",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/8b6b2d9d7664d6ee2972e7ebf17df7b125b013": "e279f557a846f24113ce28fd9113340f",
".git/objects/50/da1039274025b4736d1ea20ee65f9b992eb7d9": "25039823385b4f65f18760e581f0fcad",
".git/objects/55/1a07ec6235ddc7bbf784ef00d9ff23677105aa": "14ec213c7473eecbfff7e772696fc6e4",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/20774e97e707d186eef04f48a44265406216b8": "48ad285fc4d29fc7f115c66ec34813f4",
".git/objects/5d/0dac894a258a06112d5839c77b9c83342050ae": "8b165625b73dd14ffbba1eef7fcb480c",
".git/objects/5d/9425af36aabbe61fca5b7b5854bc98ead35e28": "91c5084a6e8549ef476a4b4387151d6b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/9186216354f21ca2d0c286fbb6fe91c13333b2": "6d4f3016219c8b90831dae2f3e13ee46",
".git/objects/67/b11c73d1a8f4ba963445140c3da0c96aacdbb8": "dd6e69c0563794e61054759aed4931fb",
".git/objects/69/172fb6d6c464383cd68f7e2714a23a7f692ab9": "c3f450633e8938afb56093a1d1d9cf3b",
".git/objects/6a/471b56f9cb4c6d71bfc4495e0017eb992e4a3f": "5a733fe9e1078c74b7cd1218c949b902",
".git/objects/6f/5055f862dd990e9d39ff035464a89076e51ce1": "97ef2f236043fe8ea20be4be523ddebe",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/c97a21673e69ddcd8c210cf7c9ba4be72488f8": "b2af342e8d4429e5731fc614242b78bb",
".git/objects/76/026b2c0a67b207a35c348987b1a7723474a9d5": "eca986dc44c857b5aae5a0d4eb09166d",
".git/objects/7b/0816b17a5ee1f7ddfbadbf1530873585426d8d": "f8d8a8482bc634a5d5beafd4f9ecca46",
".git/objects/7b/8664099a8fe5e743da2119775c45d422620a87": "761aa9393078d5af1782230ce1ee4ffd",
".git/objects/7d/7c1e5bea641c6df1dd4d701ef210faf548c135": "9f6657e2056ad33a7c4d040b2bbb8d08",
".git/objects/80/d0aff22bf3df9a91a3cfb359c92b53576970de": "4800c272f4d6dcd64cc5b9751b0f7b1c",
".git/objects/84/11641cb06513e4561854a251511277c2d4ddb4": "823fe6edca3333ae4acde2b543c9f2fd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/251d298f609fcf0506fbb7fcc9b2aaf7599b02": "be787ae866373848dab655570af80428",
".git/objects/91/78b8c06dc82149b9903e80faee114292a30d3b": "1f751abe9c4cbf3098e54a729910462e",
".git/objects/93/a49dc4e655fd8021ed495fe4a7ea0ade0c29c0": "1dcf1caf3dab807f59d403371612c69a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/7b239c5fc1ad3af38a2976f0d5795e0c081aa5": "461ef8c800972c72a7d4557b56ba9f2f",
".git/objects/9b/bd7cc41acfd99e9ca86b1cee66ba43526bcb36": "9e2c422532f15a81b6b4485c7826379f",
".git/objects/9d/2454cc24da024d0128c16720e4432349fee4b1": "957ef1f9d34a37cd241202ae27bb0a3f",
".git/objects/a2/a28f4cb92a9c4c2b1ed8b788f7d21bc25f31a9": "3cde1eea1a055bedf8169e1a5bd504fd",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/a9/89a39ce7856598dc8d7cca6c14249cf7bba3c8": "22eecbe56dd4e62eb2040d9266c311b9",
".git/objects/a9/b83ffb05891dafeeec06ed12f23cbc5843e65d": "dc61e92a60ef4e0b390800c52e5dfceb",
".git/objects/ad/0231a497751ffc522a11410c1a2ee983f88477": "68d592b4045146d80fbb2532de658516",
".git/objects/ad/6b77a2578a4318beb0001f7fcc005a8ba0595f": "fbfcdcc8fd902179fc040bf3cc01153b",
".git/objects/af/de24cc00e57dd7a5abf0836de1fae0f764ee6b": "883a80af99f92208717f0e744045dc62",
".git/objects/b0/7f2e46c40ed37c9f1439e3807d6c38346e5532": "6019c4d9630b2636394ba9cbc365d9c5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/416eaea7457ddc1f7f6b61302bb9827be1548c": "088272ff48aa76a3dca509a37a701d02",
".git/objects/b6/9a3cfb380647b0272439a502a49125b72ee0c4": "bff7fd02627c9b476a57b7bf5ad8cf05",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/426e60ee80db2c41cf89e860be3c0071e54fae": "cc347c147abf7898473c2b621f1ffb67",
".git/objects/cc/83e25f816abdce8d2034d2d2a821ed16b36ee7": "d84cba3db299872151ccb981a72772f4",
".git/objects/cd/f545e587371999600dc58d3c1492d4f1bec703": "8c2a2a627abb9bb7cf1525ddda1c1039",
".git/objects/ce/7e007ca0ba4df1e9b8909f647c5f2bc33b226b": "2a202e1fa691bc41ea86b4c0bd1237b0",
".git/objects/cf/787e93addcf8d43d784617c75de4457d2d08af": "4740fd4156d082c7e2fd637f518b94f2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/87075515722b92bf92fa604a65478c998e6972": "f5fe2d224cc85d5f5b1b34d19557463b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/d978ddbe686b7bc0ce0ac8f9d73c90a28a2357": "e3036cb67ca169a9cb6efdbc9c6c0f1f",
".git/objects/dd/248b309967fecfd8722bf7fa237c5eadaed55d": "cf02dd2d05bbde0803107ebfaef0d478",
".git/objects/e0/12a70a85e0cd1ca2b12b41b9578a57d2f97a21": "2ee94bfca46868114f3e3e7eb68eb103",
".git/objects/e0/dff7c1c1493087e21c712f0e2e094907e9e9f9": "2de8dbbeb926d24dcb23da58c8add5fa",
".git/objects/e3/850ae9a18426f42534c13772731363ba3524f6": "6a6d0f9f844fe1ad0a3ab650c4e76131",
".git/objects/ea/0e5cc0fd1654be8275be323346c946b502f0cb": "e164cd34d562f90e86f80d7faeb03ca0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d58cc0b710f07f70fc4a784180fc304668e85e": "c749862c48e41ea439d049a302a28ddf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/f843d2e89d7f0c1dc2a72ef0f3d8782ac2bf2e": "115955aba40a32a05e16344b16af0813",
".git/objects/f7/74445fb3c39969b8845024fb05cf84689f7544": "097c3d2bb05d1ff0844e3d1eb334f09f",
".git/objects/fb/94ca50f55f89dfad574bd822cdf2cea8337e4b": "37f30c1ad8d98f409e35e2fbc8506935",
".git/objects/fc/eb6376b62fee6bef365d690d90ea936550615d": "b7615c8145889de0eafbaae00a9d2e1f",
".git/objects/fe/1d528a01a4350e83775eed597aabe3db4e7fd0": "b29f83e9ad41a37f2f6accb2adaef882",
".git/objects/ff/44837d7da373199f52f5aecea52d9482cfcf95": "a4b6a1da0ded4c84e44a9175683020eb",
".git/objects/ff/e18254bd515fa9143116b39c71244ba6e1c43c": "18a5bcfad170d6c8b1f5ca742ddf80e8",
".git/ORIG_HEAD": "feb6fdb828ddeeee93318f3239de13de",
".git/refs/heads/main": "052525b8d984a4c7977347a1e4687150",
".git/refs/remotes/origin/main": "052525b8d984a4c7977347a1e4687150",
"assets/AssetManifest.bin": "f625a40a587e2b141de00a38c57691c1",
"assets/AssetManifest.bin.json": "eff62f3d88ea1cde8fe6110df81f3b0f",
"assets/AssetManifest.json": "b5a73644ac3211c7fc26af96491fb8df",
"assets/assets/images/b1.jpg": "40b44003a9e305bb66135de2ef36efe2",
"assets/assets/images/bck2.jpg": "b8a0f2a8d241c967e2b14e36e51a627a",
"assets/assets/images/codingninjas.png": "700818250d48af800996683e8b8f6285",
"assets/assets/images/du.jpg": "51b4176f4b763bbe98f899fb50dc0214",
"assets/assets/images/gfg.png": "f9c138594985c68b1aa2f5cada1cda18",
"assets/assets/images/git.png": "56e0c643b50ebc157667363bdd0e309a",
"assets/assets/images/leetcode.png": "b90505957f4e70478b3406b1f72710b5",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/lottie1.png": "63f3788e0e21304184791097b81e80cc",
"assets/assets/images/lottie2.png": "d94e6395b0bae44f556e9db6df373210",
"assets/assets/images/lottie3.png": "4b6ad6ce99c397aa27bd4d1d46f3d063",
"assets/assets/images/mnm.jpg": "95bb9f38c16f7a5cf193c4190554915d",
"assets/assets/images/profile.jpg": "3e75a08ed029296fb0acce62f796db0d",
"assets/assets/images/self.png": "c044c9191d6ef4c9196f0b4f5d755117",
"assets/assets/images/ymca.png": "b731658b84b483b085334ffe543a5113",
"assets/assets/lottie/animation1.json": "820fe3f1820431901ca5a62d9c276e00",
"assets/assets/lottie/animation2.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/animation3.json": "838dee70f11609332e3cb33b2b51e272",
"assets/assets/lottie/animation4.json": "404749e5ff6a44e40388f7885515472c",
"assets/assets/lottie/animation5.json": "a48a9a3cc5271ddc29d697abb1354b04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f9ed53eaad7408f43501a8b5c47e391",
"assets/NOTICES": "def7e71e902ef872f3d697f302c92685",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter_bootstrap.js": "0ee1df3f6f44505630fe102e0e772266",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2135c76feb05bdbe44cdb11486acfac9",
"/": "2135c76feb05bdbe44cdb11486acfac9",
"main.dart.js": "be8ac9891fde619cd518b91a8ab8853c",
"manifest.json": "1fb2ae789c1fe014721aeb94a8b5453a",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
