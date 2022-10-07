const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};
const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  try {
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst({ request: event.request }));
});
self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "./css/normalize.css",
      "./css/style.css",
      "./image/apple-touch-icon.png",
      "./image/favicon.ico",
      "./manifest/manifest.webmanifest",
      "./manifest/icon-192x192.png",
      "./manifest/icon-256x256.png",
      "./manifest/icon-384x384.png",
      "./manifest/icon-512x512.png",
      "./variables/variables.js",
      "./Modules/AddList/AddList.js",
      "./Modules/AddUlHeight/AddUlHeight.js",
      "./Modules/ArrangeList/ArrangeList.js",
      "./Modules/ClearItem/ClearItem.js",
      "./Modules/DoneList/DoneList.js",
      "./Modules/FocusList/FocusList.js",
      "./Modules/FocusNewList/FocusNewList.js",
      "./Modules/GetItem/GetItem.js",
      "./Modules/GrabList/GrabList.js",
      "./Modules/InteractionAddButton/InteractionAddButton.js",
      "./Modules/RemoveEmptyList/RemoveEmptyList.js",
      "./Modules/RemoveList/RemoveList.js",
      "./Modules/ScrollToBottom/ScrollToBottom.js",
      "./Modules/SetItem/SetItem.js",
      "./Modules/SortDOMTopOrder/SortDOMTopOrder.js",
      "./Modules/SortList/SortList.js",
      "./index.html",
      "./main.js",
      "./sw.js",
    ])
  );
});
