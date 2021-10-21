'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e04b8fa6649271062228d4ca57bfa6b",
".git/config": "b939f141e6740e9bf63d28cdd7a412a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "8c357a6ab9ea336f2d8c0e96648765a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "296f61c3c12835ec89d83615f960a4b7",
".git/logs/refs/heads/master": "296f61c3c12835ec89d83615f960a4b7",
".git/logs/refs/remotes/origin/master": "ab8c0f2be85cd54ad511b5eda5a90891",
".git/objects/01/4ef67e5664acf89be0a8914756ed32afb80367": "aca5ec15f99232d0368a2c746a222e00",
".git/objects/06/b297ab87b6da984f23af1cac2f8db611e93151": "3287d6d4a92403f6237b89187400f0f9",
".git/objects/08/1a60853453c667eb19a451aa068b758dd427a7": "7070e83901d4e7f83fa72cba11c5d186",
".git/objects/09/17faf260652b838972bbfdc4b63142f9f21415": "ec278187e5a6ef97230bf4c7b7f5e6c8",
".git/objects/09/678d99952f9400514082af51282276164c4e9e": "20d780d43a4c7d90fe537142cfb75bdd",
".git/objects/0b/bf47ae73e4eded426be58618f1432c035bc5fb": "b78d3a7adbdaa8a574753a066f5c3705",
".git/objects/0c/4f31ad0f8cb5fa899187d6d14e2a22dd68a470": "992b3e1e3548456ab30a8447722c5b31",
".git/objects/13/6041f89ae1d9c0cb726f7b470baed39d4490f9": "1dfeb354e1deb6b445208cf2e4a20fd3",
".git/objects/13/badf159129b9df46b2f27ed177e2681f84d2c1": "fca760d60fd57a4d52f8f04a051d818d",
".git/objects/14/e95a1bcc8d8f1cf7c4173bb78b271a78e93824": "13d7b95f535b4d3f1bf65d904b23ba43",
".git/objects/1d/2ae59b045220d3570d14fb45f0be91ac1ec9d1": "fc76be0acc03b596f4da2815c5429f9e",
".git/objects/1f/d9a96e6e85b4254b70293addeb23e4196781eb": "f6c0806c348c35687fa38c91af636184",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/070d1077481db320221adfa9d07e8f67f5f1bd": "76385323915f5061614c7332f02470c4",
".git/objects/23/97c24b61713ea21d05c7a345d23c0effc25d71": "8bd2dede181f0ffa79da3c74c22e1570",
".git/objects/27/a1745e28479ef2b5e349d39cdd46e1d542895c": "fa9efecf3865050df5605320604924fa",
".git/objects/27/bbef992a57ac4ab1d3d5e6afd5fa617bf305db": "6e1fffc2fa21f3ce6c7d9b676910c53f",
".git/objects/28/2d6bbd8c5ba0aac2fd59a73df8ac6dd902317b": "368fb337f3a743135f055dc6414090ab",
".git/objects/28/4df10aea6b9fca0237055c3436167ea52228b9": "8728c4cc7222059f831aac503e8ffe5b",
".git/objects/31/958b4cebc00c8cc49b7162aefb066fde909461": "c4baa76a88bf977610ad725491defdfe",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/749571418f089b6b4e57bfb438db8a592c96fb": "9fb41954f57be4e83e7004ce34862ee7",
".git/objects/37/8c95c9b49637d4ad4a0cc3850cb0156cd2c6a4": "c0909bdd847fa17390cf6c161e0b9f10",
".git/objects/38/0656eea008e5f641bef3245dc6e660b95ddf6b": "03d46549e4b9c49161767d94118cb3a2",
".git/objects/39/13a4e0e4bbef5c9ebd8690242d90309e890800": "9ae77fcf19fc1a1e304e66918b1b3a4c",
".git/objects/39/974b377e6b2d8b81a7ec77c132da43fade703b": "aeff6c0697c50600444dc218cc008604",
".git/objects/3a/57b2d249504ea57b67347ec462cb9e58a881a4": "ff2c4a8d78d1b6fe8fbe22c9fd3bf8c2",
".git/objects/3b/cb391564c0970b0a23254224afdb907b32ac03": "4a1adefffa3cc0b27ace9ce6f2342ce4",
".git/objects/3c/061021bb153d608e08586eb445e21c8d8d81f1": "99342a951e984a388174568e989af5f2",
".git/objects/3c/a3d16f0e56ff04a1e8fdc858921cc86ce8f948": "762bbacec0701474b57c484718e02a30",
".git/objects/3e/b7a9c4a51835a7fd170aec094903ac495d8438": "76d98fd03a920fc846b5e9faa0601b63",
".git/objects/3e/bb45bb6c0b765be827ed817e16d34ab0bf5876": "68d3ffde9be4892faa5fc6140ed28e9f",
".git/objects/3f/0ea8c74a88d203fe256c4ba206269a6bd6e3b2": "1388bcb669ecacaec9a312aeb07ab397",
".git/objects/3f/7f8a4e6da98d9308ff4e332d479ff7a4851ea1": "ae09944292497537b4e3f486727c54d0",
".git/objects/43/4ded7e2e6edab1958b986c5bf9a11a56bdf0e0": "3302ad563a4153a083855f338c6127cd",
".git/objects/43/756591fd98beedb87e84ddd840998f0b5fd311": "6fc68bdf0e399fed7a8c68cf22a151c3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ab8cef4e822b8cebcfbe0e38a5c1e1bba434d8": "656e79b4e8d1da3c58e5eec2a2905ade",
".git/objects/4a/2f77df38fb86f7cb75f770ee371ee6da0e282f": "ad274acbe3f7ac44414944204e83d483",
".git/objects/4c/eb1ab9ea6c35c853710d8f2eb4af22cfdf8eb8": "1545e322d9b2bd82c907868e44a1f565",
".git/objects/4e/85f91b9927fe16428559466d58414edba74187": "1125000d5ef580cd5d66b460336af7a1",
".git/objects/51/8bb3522df5c5b7220aabd398c8cfb0a3226507": "4a7e9fc367b039f9bc3bdbc4951730c7",
".git/objects/52/1caa8be9fddd7cfb7f2e34df4549c2110040d5": "94be8a89c4290ffe32940dd50469bb18",
".git/objects/53/de91902baeecc45dcf9f8de1dd59c9bd150839": "f07b23d8e54d6461826756c7849c45fd",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/54/37a9786c406c6806eb1f16f1019ae309e1054c": "011a84ba3aebc9e37e6e103c1fdce2e0",
".git/objects/54/464850958e3da5f9ee894451e09f4f8deacf82": "0a45fa4db625e0523efb3e4de1a2bf09",
".git/objects/54/7b1972f5aeab6d790d4d4c90c47cbaad2910a4": "fe9a1c2754ad358fcbb8af5620212f1b",
".git/objects/54/ce0aea82884850c66cebc5425725db7e7b3082": "36016e8f8fec700c980434fee507ca46",
".git/objects/55/168caf9cd8e41c1f43aed35a619542f8c2c792": "429f55c448c93f22f275fd0cb158cfa6",
".git/objects/55/5b4fe19129c613f7fe498fd7c9c6b1cb199661": "af1ba3ab076d10a4748f6564f71bbaa8",
".git/objects/57/43d49ddc017ab29b7649a72aef166f0a6ac287": "5430df7116f2ed6cc69125830d8c0290",
".git/objects/57/cc7a5537eb8dd2e75a4ebb51b2f31f2f56d463": "5805123d73a0bfab7606ec4587015199",
".git/objects/5d/f68590d2d04c47caaaa0ef101264f7432aa89c": "1358c532a5e5d2d24b5f3f744778e692",
".git/objects/5e/35ba3e09bf4a74133636c305b0d9f219b39edc": "b84181142f98f600ee3ebf2670478517",
".git/objects/64/976ad1238455d29dd115aaf014275d35d19999": "72985e3be4cad2b37511fe05a9c0692a",
".git/objects/64/c038b4c178d0aa001e7fe1c0587bda02862a90": "9178d8455802389097292949c2306839",
".git/objects/66/790e91ed153e27fe403f8e6f553c67c807fcce": "5f1549325cbb2029f3305385238cb88e",
".git/objects/69/ba23d9112c076cafb6859419b8665143181ef2": "3599238b2c4041755d5e5464ccf02d98",
".git/objects/6a/11b22509d0a022a9e0de4b6ae1de5f4c238cee": "3357da399f30620c86b0a4e7776e297b",
".git/objects/6a/4dd35b0e17bad44a5fbb8ca86faecd522c3699": "d87cff14edc3f102b6943b6f7662a26a",
".git/objects/6b/cb94f04fd53465ff544cb5d6d93a7e5343bf0c": "d75ace4e719527deaa3534ce0f363156",
".git/objects/6c/20884379bed0b05c69c239fa9fd23259178cc8": "6973e7a72572993c21dc221d871ad89c",
".git/objects/6e/aed7d2dd6719e5e4834e8d1a6a3931ad8186db": "933ea4446d23b1665e5c343b8aad81cf",
".git/objects/70/912273c4611de5d0468229a9277699b202bd74": "356b2a1b6ac689a583e36c7ea71b6596",
".git/objects/70/be0c2969bc5f52dd63565ffb7dba50f8ac2878": "d19185fe7e2bc195c659ea430295592f",
".git/objects/71/dd1dcfd8ef11a3717a615d2c4ab945eed6e970": "4027f071a12c1d0391f5a09416d0d3de",
".git/objects/73/ab04dd064b1fdb7af15e47d4eaacd0eb82f9af": "1707ee78025a87efdcf1b05bab8b2573",
".git/objects/76/a3c54871fe237fb0be661011ed03d1322341f0": "0a3450a6fb1eb3bd2340bd60455c0305",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/77/7faa16d4392e907990445d4148146f34955850": "48209e8ed959a9aa584924d1dfb85857",
".git/objects/79/227c8164f0f111dc4d47398dc36a1830adef15": "fbd5a8a75fddeb2d745a796e2e13b4c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/2cd4261e7cf95083f17c8b750648929acd999a": "77cdcb9a6397cbf5f7e60173975798d9",
".git/objects/7c/f7e5a87ac2ee61f838b6ee79df9034c45a0639": "bc6b453bc4c4181bbf31966514c0422d",
".git/objects/7d/a4cea3a7fc8f560e9535d807cf9604c20428e0": "304eb909bf6fde47daff9d49afd510c3",
".git/objects/82/1f0265433fd72fb4574012c4dc4ec0356241bb": "582aaf3346020c97a241aee94cdac7d8",
".git/objects/83/c35366dac48329355eb9cc6d01db27a9da29ae": "66462e5499635c8dc4c39dd94ba1cd55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7f8d7579fc38ec36cdbe6eb6af49d95ba4440e": "623d30c9a78565e7a064848cb7344907",
".git/objects/8a/3ecc8fbb34cd44ad5278644d96e8ab749b95b0": "93d4139aea433877a8c1d115b2331589",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/06e66a8b1f4dd85a5380bccffeea387711d9ea": "0b8ccd5cc023279000fc5af859bb70ba",
".git/objects/8d/62749ba98042869ccead8b70d83b2b9b0e83af": "12d2a16748f7a570374b2cc54b9ea980",
".git/objects/8f/c8332182d80af2ddc4effbc7ab82b9dc424caf": "096e746b5f3d6b45fb0763863124140f",
".git/objects/90/2d73bcc09c4bf99770fd4d5187ed83605fa4a4": "2e537d5dd3b68d1dce70042ac221150f",
".git/objects/93/239b83c0dffcb634cecd0fedd2622b888a7b0c": "cc488b93dfda0a1ed0164e1da67cf996",
".git/objects/93/4c04acfb71a8e99bfd1682cc0df8136aaebe9e": "0937644bd940d707772299c3e1601748",
".git/objects/98/f1af1e4d9c6904d94ddb1bf8cf9a5ef27e540d": "1ac2fefd4db5692582351f4cc4e0dd54",
".git/objects/9b/17406d38b1dfdaaaaac7cba4b3126f51b8107a": "3ca7b645cae669cc03433f31b9ac505c",
".git/objects/9f/1e3e926b1fa4680f64c9b0515f0544d126f8bb": "e80fa73bc814e5022644d81fb72e02be",
".git/objects/9f/898ea5f83253c64b17d867ce0cf3d902bf3838": "85b2b855447aefedc94ee9bc7837498d",
".git/objects/a0/960fa87ca8b214551a928247e38d92996af1e1": "d0562bf308a658dc93c002cbeebc9f43",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/cc72c84cf4c3c61aba5da9cd8fa85f271c95cb": "41d398106f3ea963948c22581cbaa6a7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/e0f27b1155c411682b84717dda844a0fdde269": "18b9eeefd58b33033da6845794b6a31b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ed9fb2815278e3a05876c2e4a4726d92cc6d3b": "6a90eee66e7ae7ebf1cac4df22193640",
".git/objects/b4/93d658077aed5bdf411d6b742ad1a8e90c94c6": "45fd6b076f26a37bd5d1bbdb21e7985a",
".git/objects/b4/af2455c0953a091c2cc41cb8392fc927bdb788": "811bff88a2289560aea41c197b273f3d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ba93f542c69741ad7ee8ca5b145ed92ffb244c": "f3e7421644bfaebf4611c462497e06d3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/1cf5f5a54cd0353683e27a10a9103f3850cfa0": "e78e107af3486d4a16d6f25bc9526443",
".git/objects/bb/24588b04b7097abfe08350c981852713097e5b": "cc57d761205d2a0f506d8f0845a87bd7",
".git/objects/bc/49a285d5fe57239b7d090236f5c40fb2ee397e": "0feb5290c38700f027eee098abb7aa6e",
".git/objects/bd/53d6f33831b4c6d0df621b62a623b3d6f7591f": "43b384c690a960123d92b341650f72ab",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/1f0cd9980dd03cb528f3d1524f76601dbc6d5a": "9b3f49b229faf0ddf6ee37b31afbcd1e",
".git/objects/be/3a1dd66eea62d76dfa6365d787cfa8ca18812b": "ace832b3fb6284681429220c5b3d063d",
".git/objects/be/668c04f2d3905d3a68ef8fe0a878a67190417b": "d662cf4fe04584201b06cbc09001226d",
".git/objects/be/d05199e34f36f96a831eac93e4c692a1dbecea": "0adfcfd83421899f848987d926cdc707",
".git/objects/c1/d22d101e9384aec9a3e6b3e61f20d5480c8983": "e14c6fa40063d2016dfed8b065f86856",
".git/objects/c3/1f11f6a08648e65b046e3e4a026a47b4ffe942": "01aacfee03a4fa8cadbf53490b76b14f",
".git/objects/c4/21d5aac784f87e2ee937583510e5d11fee5da7": "98a4baac019c7b3306faa90bccdf729d",
".git/objects/c4/2a51203b99d0380df9c5f92e29042b8a2f5266": "2aaf29ec0339dfe6d65cdeda7ff5576b",
".git/objects/c4/df894c1ab1346129f802253e2aa00423f7b1ab": "a4a91060840f9b0ac87b36fc0d330b51",
".git/objects/c8/5a653b5833e4769ecc21ea64473de0b3b5cb1e": "25613ec76b3530ed1b693d47326cc3bc",
".git/objects/cf/1f88f7a0a0da9567d6341e127db2e6c2323966": "674a392adb4db72296073e209414edc3",
".git/objects/d2/00cfce39d6496a73ec52d39319a99d1be42fa7": "c8c8bc93d97a7758e1a704c976cd34fb",
".git/objects/d3/c02bd5914c239fb241b206018c9355798cae2c": "7c1e887b0c1c631b0073360821301916",
".git/objects/d4/8132e66761ce66f535a1d565fabe190f01638f": "3a3ab38f6afcaabf0fe419d4fa13544c",
".git/objects/d5/d5ab3c1eb909fd24efedb720a35c2d3d911693": "1e0d499336944b0391ae6c078d3655b7",
".git/objects/d5/ea51150eaa6bc992e4d3d5cd3887e1a39dcc05": "dfb4f5be952d969bde8a27274590e052",
".git/objects/d7/150469da2c57d7bee735bf70cf84dff3b55e48": "a152ab2c2829146a7c7f03b085b4f03b",
".git/objects/d9/e071c8d8b614df99669921f5cfba579fd5e984": "fc7a74115d3dfef5151090c4afa17426",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/dc/06d78225519e1dac338bfd14be97af54da39f4": "705360ff8d3049c36b1d624a1e0bb84a",
".git/objects/de/15133ff211a6f1566e338dd23dde9e4ac79daf": "a10bfab4be8004d5ef7bc9ca5dde8f7c",
".git/objects/de/dd42328a398b796f06304aaafce529af667849": "738f44511172e79b0370f0095856db4e",
".git/objects/df/035b3321901387eaae70459709896bedcdddf2": "06a2ca906e660f0e65acd668946c94d0",
".git/objects/e0/40ba71eeddf4f053e50d2e05712ab946c460e1": "41325d3a2629af6bad1038e67d4a8350",
".git/objects/e1/a96576bee4e9b9c081914a37c1785c26421a8d": "3d8e409729a3ff5f0c607beb51545f63",
".git/objects/e3/74f7a36dd942641fcc509ef9fba11c540e08cc": "62043dbd6c32ee9c44ca90c772d05c25",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/866ebdf33bcd93bffee7aba7242ed61f88accd": "a308224cf973a5b9e06a0919e6b08d54",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/742aa4636a7ea327fa6b919ceaaaa724a90b46": "7218d725518c7c0845b4900115ceecb6",
".git/objects/e9/92c44ce053f3a5a0f47b89301ad5edfa54dd49": "7968bfc0e6234a1d83bbc49b6f1f01ec",
".git/objects/ea/091fa92bf48eb796e79ee28335b0bb00dc52c4": "23ceaf6e8b725e6a355ec76cc3709a18",
".git/objects/ef/46db86ce8be515b3d736a70c5819c4c0ed2cb5": "70522932f09fd1930afaccb23fbea030",
".git/objects/f0/200493cc38c4f581dda2e85d29925e2f17184d": "19a3247eeed354665f0a67deb21130be",
".git/objects/f3/1d1cbb5b76589ccfb9d276a2299c25bbcfac2c": "115cea19fb98da61a8f48abd0cf480d9",
".git/objects/f3/7c3a5f38081d79cfbf496389348693c47f8b0e": "57c3cf38fc49b7cb42fcd264268f8535",
".git/objects/f5/ee63676343eaf5c39e7cbe3b16f7d7698464d1": "eab0c8909b912627ec53cdd120ef1f3e",
".git/objects/f8/d0aa0f3f9218656bb5c921edbc98b6c4d40c52": "52d597af73f286629a5956699eb015d8",
".git/objects/fa/53dcae2905afff59ae3c0fcf7e32d03977a6df": "9da6be2c69fddbd01e99d0934b526760",
".git/objects/fa/7edd079f194a8d443b7c815f51e891fe051e58": "01b8004b995f38caad3f549c91080376",
".git/objects/fa/aeb62b9578f96039c135703471247e9c45a3f5": "f6207ad781a7df836477fd55f330fe13",
".git/objects/fb/41b10a410c2d731ee63bb4ddff8d5f7baa7583": "4575b07a324cb64de36f8c604699364f",
".git/objects/fd/be7e01ed2c534f4c90820798b2ad9eb5f98a2f": "f7c7f73defbfcefbee2d47959000a193",
".git/refs/heads/master": "f4127af0f0f1aff2e00da28974e44149",
".git/refs/remotes/origin/master": "f4127af0f0f1aff2e00da28974e44149",
"assets/AssetManifest.json": "1a86a92b0634800ccd71828673f13168",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/14852952531471638247.jpg": "1251aaeb41a67eb9f34cc782d53b6888",
"assets/assets/images/dashboard/bank.svg": "941c0480bea8bdc6ca7d29fc0b4640fc",
"assets/assets/images/dashboard/calendar.svg": "5da24f42cc2eac5ba7f84b37d2163055",
"assets/assets/images/dashboard/card.png": "299e694bfe68985abd9c4e3ea19802d2",
"assets/assets/images/dashboard/clipboard.svg": "908a3ba351834d8111a9184f96ee1d15",
"assets/assets/images/dashboard/credit-card.svg": "e20c5068e78d4d9a1c719e93f7e84ef6",
"assets/assets/images/dashboard/document.svg": "3495668510842cd9097776c7db2cd607",
"assets/assets/images/dashboard/drop.svg": "7b8b2af526b2e2512c2682f889fef14f",
"assets/assets/images/dashboard/electricity.svg": "b5f6b7666493bd2736f57883b466bb52",
"assets/assets/images/dashboard/home.svg": "63f7eabb7a7d78c178031926c3c9973a",
"assets/assets/images/dashboard/invoice.svg": "f7d19983441244e6bd59d7b121b34da0",
"assets/assets/images/dashboard/logo.png": "a83a702a6c2a584d5c357ee8b4d657c7",
"assets/assets/images/dashboard/mac-action.svg": "2527f1ab853e49d4d5e9802369653b97",
"assets/assets/images/dashboard/man.jpeg": "3667d100cf087238f2cdf0a45a6c587c",
"assets/assets/images/dashboard/pie-chart.svg": "23d3f5bae0abfbd169de394912e752af",
"assets/assets/images/dashboard/ring.svg": "6ed7f9f01871f426e979afb4e2252bf2",
"assets/assets/images/dashboard/salary.svg": "1462f937a1198cff1a8838bbea1cc7b2",
"assets/assets/images/dashboard/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/images/dashboard/transfer.svg": "d4e0e58b46a323d2b0dcb37ec672f2ce",
"assets/assets/images/dashboard/trophy.svg": "e036099c505d72b2455e1f8388e6376d",
"assets/assets/images/dashboard/wifi.svg": "c83a375863190fc9862addc8fab99d49",
"assets/assets/images/express_logo.png": "6bae73ae99fee4dc50c72057d0afad21",
"assets/FontManifest.json": "7cdecf73764aaefe4886b2a020c53d96",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d64f30134de53dcb9db9ef5b99ac0f8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "563e523ad5b3446b6ba59e74359e660a",
"/": "563e523ad5b3446b6ba59e74359e660a",
"main.dart.js": "dac5269afb26ae132acf10b2b1f166d6",
"manifest.json": "8e5ed65bb4089753a2ccb096b29904b7",
"version.json": "a323fadad31e935544193955d6363abd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
