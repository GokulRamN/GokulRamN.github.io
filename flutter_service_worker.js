'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4c8291d821289ffe998f6a43a21e6471",
"/": "4c8291d821289ffe998f6a43a21e6471",
"main.dart.js": "1e68bbdae8b02be273e9981ce23dc0b8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "a91d5cca176352e15ceb4f522c6e1369",
"icons/Icon-192.png": "00a40e25289ad5391abdb318fbb73c56",
"icons/Icon-maskable-192.png": "00a40e25289ad5391abdb318fbb73c56",
"icons/Icon-maskable-512.png": "91212b3546bf1920f8f19bff610bd5d0",
"icons/Icon-512.png": "91212b3546bf1920f8f19bff610bd5d0",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "887e2c7f231f006eea81b1aba8d975d7",
".git/objects/0d/ec71d0258e5a59755ba168cb845ad67c0765ec": "ea693100b6d317976f6cae2289a12de8",
".git/objects/0d/005f2146088910d2586ac44dee832612f8b093": "9a50d40cc10aa86f8f077bae8b176f46",
".git/objects/59/c7263d226bf77948cd03f5e2979b202d224c1a": "68852d076a6ac41d62ec473d7a5e2804",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/03/8ad184a27b30294102fa07625b670b946a364e": "b74a1bd5e442a2ffcf4cbd38373ff4f0",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/67/c711e0169b4b642a26d5a30efc9162f97713df": "50f71a2b5588d950789c7a127d33d334",
".git/objects/0b/fdc80886ed9684938df10d6ac51800ed2a8711": "e6e3e3b7bc68fb8ee6f6305b39db7368",
".git/objects/60/9a021186d370b5ba1addd7bc735efd5d66e7f9": "24b707a65688289dbd90fdedcdab398c",
".git/objects/34/fa137d3751d99bd6c826468c0366b04455417d": "23025d3261f6f58673dacb36d285d0ff",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/05/0f4cb6be4c179e15b61c684fa5f209caaae103": "d4a8f0d44c2faaaaa75a32eb2884f217",
".git/objects/a3/1842763f8654c4324c2c6fa44752793e7490c5": "de108021feeefe5709677350215ac1a5",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/a2/a8c715fa743f97825596f02c226744ba251626": "ba7edd1f479b107d7ac0c9e0d7597700",
".git/objects/f3/cc65747d243c3569e0b6483dddf3b16b1da9af": "202e80b3e6da5041d5501dc53951fe10",
".git/objects/c7/697383517737fd5a78037777f6a944d688a956": "97b51c3125320d16e7c7bf19713dea96",
".git/objects/c7/81c53cade09045cde0c02d9b786f92b565f986": "13ed3e51885c226870d23e5af73a7034",
".git/objects/ca/5c9168796c9760138f00ca97efed6f3e9a632f": "0b44ed3f1425c5bcb966673d22827488",
".git/objects/ca/111354b8ab2284c5b59db535101efbb6c09feb": "9a475372948197301039ec3576ece415",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/c1/2b9c960cbdb4dd0612ad81a01ac1770cf21ba4": "3473de3859f3be8617766a7a4c1648f9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/40a1992d7cfabbc6200db56eb9a4cbee2e2319": "ae3c9df307837bb460f1768576cce467",
".git/objects/89/05bbd40b818b85d67128b4787be4e8fc305ebf": "0e3cc8e240064a4f0ff9e5f80aefbec1",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/80/210a8bc15939d30149c6436fac74f93103f910": "a52a4dc24c6ca0ad49e10dd748f5a49f",
".git/objects/28/341f44330a964ba2510254dee2d19c5e3c77d1": "626cb40fc261245069707f05de5c572d",
".git/objects/8f/3129ec567894a49fb9f75b0c8980a13bac9f05": "2f829f54f6aa7355be9a944586afd224",
".git/objects/19/0adaac931ffd73485dc5a9a13875c89869c6f4": "3b4bf9dfa09c81936b5dfd61d702b3da",
".git/objects/4c/5a755ae56b588c9a5e04be12136f8be937393d": "082d34a0e6c69fc06204767171f36f27",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/37cb1e1cc8b443947077f977b33f626853636b": "fa5d222f141b43c4c3b922dedb78ebe2",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/6b/43fb676bc3e28403436ab63cac79937351fe8f": "0ed478b282a824203dbcc86fcbc8322e",
".git/objects/07/165b7a56bacea803532d916b9a2faa2238ad1e": "b97b7acb1d8946b906a98286a41fbee6",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/6e/0901fd56522a85e10e8df8e649e382f0d58fe7": "f7d45db4461b3c8ad0f1fef3eec39d97",
".git/objects/6e/dd1dff8c38882cd5a46df8ce8b954c8322bba6": "5c6b284c1653e6473a7f85670b0f24f7",
".git/objects/9a/e4fe2f7aace0425f23c5d6c0ae8c6499ee4dab": "61eacca84288f06f58553460aee30d1c",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/09/e28a8a0bfdbb7926c1a198e3f3645b00bf9c9c": "5fb4e44f4903de90b13e9fc704b5f44a",
".git/objects/5d/9341b5fa973169a098eaacf940d99dd36a04ca": "7add416135fe7512f753742208a0580a",
".git/objects/5d/c0a37a6023417baf5b7aa0c8e61cf1a0fcdd69": "cda6b6ba75606a0e329e1922cf5d5bd9",
".git/objects/54/de04dd6a790f0668f9d6fc13830f1edf38de25": "eb382a2cd7f4008a6c3cb48b891a5b86",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8f6e3083a8bfdf624c1b0d2b4344048b453734": "9ae71b2e1751e60229be48d1be69d279",
".git/objects/5e/75301879eda445e10a698300150b5b443f39b7": "a5ea25722090b98a60cdcd1c26481b76",
".git/objects/6d/3ea0c63767cee854e74c5aac3a3449e7bdde1f": "d8c0ba380e46d895cb02d563a0504118",
".git/objects/06/621bfbdadbd5f9772c68d1c1eb34f0310ad921": "21a5c8554a835515d7cd6f35960aaab6",
".git/objects/06/b3fd81f20e3dd4d08263f7e49f529179ac51f9": "6416ca6fe55de40d34ef60cd99cdeec6",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d3/e3bc0854a37d21c46208131188f9f2f04774cd": "8950d08df08c4583a36596218541786c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/d5ecd94357d94a6f21d9be6166b83c24704816": "5cf84320230c715cf9f8b44ad76361a5",
".git/objects/b8/3e49f871a319951dceef84534b183f225cf316": "7c33ef1e2d898e88d986dd7c32bcc811",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/aa/f97c5fc6ceca106e425bace0d6b42ffe36f00d": "73da2fe8c2127513b6879b17de8faf54",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/a8/cef9086755204f1d886abfd4b4eb10217fdbe8": "e3f26b7582314fa0e75dde7ddef9df8c",
".git/objects/de/3c53c78d90baa0957f75c165a1b73564e4172f": "94746a176ecccdc2ed1a503f774f73f8",
".git/objects/b0/74314fdea15ea2d74bfe5d96e320292991caaa": "f4bdc66b1521efd8d70e986c372b2fc4",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/cc/8affe130fa991c1a78ef66d8d9a4c268dca77c": "57eac03f281c00f9584ab7b3ee01cbc5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/3229b34bbe146e96fc80176e2bf34af53ca221": "d501c30203909f378924b94fa65b7e61",
".git/objects/c2/79097726ae0465100bec0a23b666c2e46f4aad": "97a95833e8db3772460a484d5a11c473",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/cb/8c780c1d3b4fa1f1cf868e04b4b7a42578e8f3": "27792e1bc550864228470538ab8f3225",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/77/7ec804eca5d44920c834adbd74c0d31de09181": "a1e199d2484938e8e301255b5d733279",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/84/bb811e5613b35a854dcd9eb64281dd3e9f6362": "d24da966e997a46eae7a91c3dfeb20d0",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/d29ed8e7cdbc8a4f8b3aee4903c69be53b9285": "c6aa19dfa03e5ba091ae2dbbf6b57be6",
".git/objects/15/d1673c7183e129c8daa268ce6c4606bab7ee0f": "823b8b0db3a4faf6a405eded57b0ab48",
".git/objects/12/05b6df5afe3bbfa72de237f16d45c6e064bcf2": "1b4fd90d50008c20b3cc07731aa840a9",
".git/objects/1d/7283369d946d180e672fb1c6e7cda02e93d396": "83a9228f0f0bccfb1b469b1ed61df78d",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/6951e6ac9ef3cc19da9405d3cdfba93e512b89": "991ee473c4271c46e60abd4f198450f1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ee002f01b48698bfed435473903608d",
".git/logs/refs/heads/main": "14f6d938c0067b45d260b2fd38cf5604",
".git/logs/refs/remotes/origin/main": "ae4a21606efabe6ab8009096fed27607",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0190f956cc3a7208c8880dcd5d6afb91",
".git/refs/remotes/origin/main": "0cfd56ce7daf800ce360ea94a7d43bfb",
".git/index": "881dab95aea60c597a4e6b256126e625",
".git/COMMIT_EDITMSG": "818e77b164a611900987c17c109a2b35",
".git/FETCH_HEAD": "4bdfde57622283413302599299cda0e0",
"assets/AssetManifest.json": "68e148e4fd7c0d099a349375c068e63b",
"assets/NOTICES": "5ef3f7c352ef9b1087d015f1a1ecdde8",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/AssetManifest.bin.json": "e70b237dc4269c561b8edc0db3f4d128",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ac7cad43cb09328d7c57c2ebe9813515",
"assets/fonts/MaterialIcons-Regular.otf": "515cc21caf0dd418bb5111328ed68a5a",
"assets/assets/certificate/cer5.jpg": "14d087088923f08ee9764897b4dc3efb",
"assets/assets/certificate/cer4.png": "4fae2767988c47fd40914c409a0ec57a",
"assets/assets/certificate/cer1.jpg": "a229f174fd0cf2ef15905aa85b3612aa",
"assets/assets/certificate/cer3.jpg": "820560161592f5995fc3d4518953c40d",
"assets/assets/certificate/cer2.jpg": "3bddac307462c7490df43018048cca4b",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/blockchain2.png": "8869ed8d861471d445c82389dd914a1f",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/05.png": "251055132736ce6865cf0e83d8538c0f",
"assets/assets/imgs/IMG_0107.png": "7023bbe6dcf4792053192047988c6213",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/backBG.jpg": "657fdf9bfc9571c07e8d4e2ef27d748a",
"assets/assets/imgs/blockchain.png": "9db3b9d3eeea2c256273aba57722c527",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi2.gif": "18a58b8fcb13949c2b0c19a2a0d74a2f",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
