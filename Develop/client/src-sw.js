// TODO: Implement asset caching
registerRoute(
  // Define the route for caching assets (e.g., JavaScript files, stylesheets, images, etc.)
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image',

  // Define the strategy for asset caching (e.g., CacheFirst, StaleWhileRevalidate, etc.)
  new CacheFirst({
    cacheName: 'assets-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // Adjust this based on your caching needs
      }),
    ],
  })
);
