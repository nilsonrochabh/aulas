    // ---
    // layout: null
    // ---

    // const staticCacheName = 'nilson-rocha-2019-03-02-14-40';

    // const filesToCache = [
    //   { % for page in site.pages_to_cache % }
    //     '{ { page } }',
    //   { % endfor % }
    //   { % for post in site.posts limit: 6 % }
    //     '{ { post.url } }',
    //   { % endfor % }
    //   { % for asset in site.files_to_cache % }
    //     '{ { asset } }',
    //   { % endfor % }
    // ];

// Cache on install
this.addEventListener("install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
    })
  )
});
