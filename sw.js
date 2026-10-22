self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // PWABuilderの基本チェックを通すための最小限の記述です
});
