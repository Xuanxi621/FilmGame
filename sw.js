const SHELL_CACHE = "filmgame-shell-v1";
const ASSET_CACHE = "filmgame-assets-v1";

function isSameOriginRequest(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

function isNavigationRequest(request) {
  return request.mode === "navigate" || request.destination === "document";
}

function getCacheNameForUrl(url) {
  const pathname = url.pathname.toLowerCase();
  if (pathname.endsWith(".html") || pathname.endsWith(".htm") || pathname.endsWith(".css") || pathname.endsWith(".js")) {
    return SHELL_CACHE;
  }

  return ASSET_CACHE;
}

async function cacheResponse(cacheName, request, response) {
  if (!response || !response.ok || response.status !== 200) {
    return response;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  return response;
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    return await cacheResponse(cacheName, request, response);
  } catch {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw new Error(`Offline and no cache available for ${request.url}`);
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  return await cacheResponse(cacheName, request, response);
}

async function cacheAssets(assetUrls) {
  if (!Array.isArray(assetUrls) || !assetUrls.length) {
    return;
  }

  const cache = await caches.open(ASSET_CACHE);

  for (const assetUrl of assetUrls) {
    if (typeof assetUrl !== "string" || !assetUrl) {
      continue;
    }

    let url;
    try {
      url = new URL(assetUrl, self.location.href);
    } catch {
      continue;
    }

    if (url.origin !== self.location.origin) {
      continue;
    }

    try {
      const response = await fetch(url.href, { cache: "reload", credentials: "same-origin" });
      if (response.ok && response.status === 200) {
        const cache = await caches.open(getCacheNameForUrl(url));
        await cache.put(url.href, response.clone());
      }
    } catch {
      // Ignore failed warmup requests. The page can still load from network.
    }
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== ASSET_CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  const data = event.data ?? {};
  if (data.type !== "CACHE_ASSETS") {
    return;
  }

  event.waitUntil(cacheAssets(data.assets));
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !isSameOriginRequest(request)) {
    return;
  }

  if (isNavigationRequest(request)) {
    event.respondWith(networkFirst(request, SHELL_CACHE));
    return;
  }

  const destination = request.destination;
  if (destination === "script" || destination === "style") {
    event.respondWith(networkFirst(request, SHELL_CACHE));
    return;
  }

  if (destination === "image" || destination === "video" || destination === "audio" || destination === "font") {
    event.respondWith(cacheFirst(request, ASSET_CACHE));
    return;
  }

  event.respondWith(networkFirst(request, ASSET_CACHE));
});
