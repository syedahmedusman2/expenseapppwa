
// export var cacheName = 'demo-app';
// export var filesToCache = [
//   '/',
//   '/app.js',
//   '/style.css',
//   '/index.html',  
//   '/components/AddTransaction.js',
//   '/components/Balance.js',
//   '/components/Header.js',
//   '/components/IncomeExpense.js',
//   '/components/Transaction.js',
//   '/components/TransactionList.js',
//   '/context/AppReducer.js',
//   '/GlobalState.js',
// ];

// // var self = this;


// // Install a service worker
// window.self.addEventListener('install', event => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(cacheName)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(filesToCache);
//       })
//   );
// });

// // Cache and return requests
// window.self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });

// // Update a service worker
// window.self.addEventListener('activate', event => {
//   var cacheWhitelist = ['pwa-task-manager'];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });