'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3e48c7f5b2afd16f21d93a28777dcfda",
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
".git/index": "32b63e9840ae391c5b4d608baab146b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d4f567a6f1f36f83ffd42f99d94b92a",
".git/logs/refs/heads/master": "3d4f567a6f1f36f83ffd42f99d94b92a",
".git/logs/refs/remotes/origin/master": "ca20360c70a9c2bb71ac760bb2f14a90",
".git/objects/13/6041f89ae1d9c0cb726f7b470baed39d4490f9": "1dfeb354e1deb6b445208cf2e4a20fd3",
".git/objects/1f/d9a96e6e85b4254b70293addeb23e4196781eb": "f6c0806c348c35687fa38c91af636184",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/070d1077481db320221adfa9d07e8f67f5f1bd": "76385323915f5061614c7332f02470c4",
".git/objects/23/97c24b61713ea21d05c7a345d23c0effc25d71": "8bd2dede181f0ffa79da3c74c22e1570",
".git/objects/27/a1745e28479ef2b5e349d39cdd46e1d542895c": "fa9efecf3865050df5605320604924fa",
".git/objects/28/4df10aea6b9fca0237055c3436167ea52228b9": "8728c4cc7222059f831aac503e8ffe5b",
".git/objects/31/958b4cebc00c8cc49b7162aefb066fde909461": "c4baa76a88bf977610ad725491defdfe",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/0656eea008e5f641bef3245dc6e660b95ddf6b": "03d46549e4b9c49161767d94118cb3a2",
".git/objects/3a/57b2d249504ea57b67347ec462cb9e58a881a4": "ff2c4a8d78d1b6fe8fbe22c9fd3bf8c2",
".git/objects/3f/0ea8c74a88d203fe256c4ba206269a6bd6e3b2": "1388bcb669ecacaec9a312aeb07ab397",
".git/objects/43/756591fd98beedb87e84ddd840998f0b5fd311": "6fc68bdf0e399fed7a8c68cf22a151c3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/85f91b9927fe16428559466d58414edba74187": "1125000d5ef580cd5d66b460336af7a1",
".git/objects/52/1caa8be9fddd7cfb7f2e34df4549c2110040d5": "94be8a89c4290ffe32940dd50469bb18",
".git/objects/54/7b1972f5aeab6d790d4d4c90c47cbaad2910a4": "fe9a1c2754ad358fcbb8af5620212f1b",
".git/objects/54/ce0aea82884850c66cebc5425725db7e7b3082": "36016e8f8fec700c980434fee507ca46",
".git/objects/55/168caf9cd8e41c1f43aed35a619542f8c2c792": "429f55c448c93f22f275fd0cb158cfa6",
".git/objects/69/ba23d9112c076cafb6859419b8665143181ef2": "3599238b2c4041755d5e5464ccf02d98",
".git/objects/6a/11b22509d0a022a9e0de4b6ae1de5f4c238cee": "3357da399f30620c86b0a4e7776e297b",
".git/objects/6a/4dd35b0e17bad44a5fbb8ca86faecd522c3699": "d87cff14edc3f102b6943b6f7662a26a",
".git/objects/6b/cb94f04fd53465ff544cb5d6d93a7e5343bf0c": "d75ace4e719527deaa3534ce0f363156",
".git/objects/70/be0c2969bc5f52dd63565ffb7dba50f8ac2878": "d19185fe7e2bc195c659ea430295592f",
".git/objects/73/ab04dd064b1fdb7af15e47d4eaacd0eb82f9af": "1707ee78025a87efdcf1b05bab8b2573",
".git/objects/79/227c8164f0f111dc4d47398dc36a1830adef15": "fbd5a8a75fddeb2d745a796e2e13b4c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3ecc8fbb34cd44ad5278644d96e8ab749b95b0": "93d4139aea433877a8c1d115b2331589",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/62749ba98042869ccead8b70d83b2b9b0e83af": "12d2a16748f7a570374b2cc54b9ea980",
".git/objects/9b/17406d38b1dfdaaaaac7cba4b3126f51b8107a": "3ca7b645cae669cc03433f31b9ac505c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/d22d101e9384aec9a3e6b3e61f20d5480c8983": "e14c6fa40063d2016dfed8b065f86856",
".git/objects/c4/21d5aac784f87e2ee937583510e5d11fee5da7": "98a4baac019c7b3306faa90bccdf729d",
".git/objects/c4/2a51203b99d0380df9c5f92e29042b8a2f5266": "2aaf29ec0339dfe6d65cdeda7ff5576b",
".git/objects/cf/1f88f7a0a0da9567d6341e127db2e6c2323966": "674a392adb4db72296073e209414edc3",
".git/objects/d4/8132e66761ce66f535a1d565fabe190f01638f": "3a3ab38f6afcaabf0fe419d4fa13544c",
".git/objects/e3/74f7a36dd942641fcc509ef9fba11c540e08cc": "62043dbd6c32ee9c44ca90c772d05c25",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/866ebdf33bcd93bffee7aba7242ed61f88accd": "a308224cf973a5b9e06a0919e6b08d54",
".git/objects/f0/200493cc38c4f581dda2e85d29925e2f17184d": "19a3247eeed354665f0a67deb21130be",
".git/refs/heads/master": "1826b1c5637a9b9ce207149de6fa5a3a",
".git/refs/remotes/origin/master": "1826b1c5637a9b9ce207149de6fa5a3a",
"assets/AssetManifest.json": "38005a498a519eeeb22940c8ec257f31",
"assets/assets/images/14852952531471638247.jpg": "1251aaeb41a67eb9f34cc782d53b6888",
"assets/assets/images/express_logo.png": "6bae73ae99fee4dc50c72057d0afad21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "96e57651fa08670a1b70824a8997ff88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "563e523ad5b3446b6ba59e74359e660a",
"/": "563e523ad5b3446b6ba59e74359e660a",
"main.dart.js": "1f64cc3bcfda5ed5f6533d8112d29f64",
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
