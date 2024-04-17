
const CACHE_NAME = 'herhq-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ["/chunks/138-6d2d42f47991a0f7.js","/chunks/664-bd157c0c144b8096.js","/chunks/675-9fcdb742a32f88a7.js","/chunks/framework-5429a50ba5373c56.js","/chunks/main-e1c73aa1a92f6e5c.js","/chunks/pages/_app-c61cc756e86fecb9.js","/chunks/pages/_error-5a00309fd5f4b49e.js","/chunks/pages/admin-d38235aa49886f9e.js","/chunks/pages/ambassador-c6fdb5e6767dad1f.js","/chunks/pages/buy/[product]-54967b467de445d0.js","/chunks/pages/buy/checkout-f58e7237a04a68ad.js","/chunks/pages/buy/processing-d391bd5b38d3bc6c.js","/chunks/pages/buy-585354f4a8e1344b.js","/chunks/pages/cart-58d27c709a7b47c9.js","/chunks/pages/components/admin/inputOrder-020e03eeddf64930.js","/chunks/pages/components/admin/order-412bc89875eb6970.js","/chunks/pages/components/admin/product-66f20cd38f4cf847.js","/chunks/pages/components/common/addproduct-10ee3c2dcf3e32d5.js","/chunks/pages/components/common/contact-7aca9b3c3a9530db.js","/chunks/pages/components/common/footer-4506b25e881057ed.js","/chunks/pages/components/common/header-5a088b6d557990f0.js","/chunks/pages/components/common/product-d0d1e0abfb2b881f.js","/chunks/pages/components/home/ambassador-3e73e196d6964252.js","/chunks/pages/components/home/cardone-4406045aad78070c.js","/chunks/pages/components/home/varities-98eefcf9fc9abcc1.js","/chunks/pages/components/user/signup-527c98dac65369b3.js","/chunks/pages/contact-80662ca42a10c3b1.js","/chunks/pages/deals-73e4b3eafdda6d27.js","/chunks/pages/index-07639d9f8807fc56.js","/chunks/pages/liked-3d9d5cc62796af45.js","/chunks/pages/orders-1a65a9897abba0c8.js","/chunks/pages/policies-1449bd06d3793dff.js","/chunks/pages/questions-2f2277fb5b3500e2.js","/chunks/pages/shipment-52298ae6d055fdf6.js","/chunks/pages/sizeChart-eff241bfa2fe077f.js","/chunks/pages/user/forget-730e046433cb3b6e.js","/chunks/pages/user/login-b056222498221540.js","/chunks/pages/user/signup-058556ab7d9dd126.js","/chunks/pages/user-dfb38825198b6cb5.js","/chunks/polyfills-c67a75d1b6f99dc8.js","/chunks/webpack-b8f8d6679aaa5f42.js","/css/5ef1019dd2f2a6a4.css","/css/afae9e63cb862dc7.css","/fdk85w7W02fPoMF_Wl706/_buildManifest.js","/fdk85w7W02fPoMF_Wl706/_ssgManifest.js"].map((url) => {
          return fetch(url).then((response) => {
            if (response.ok) {
              return cache.put(url, response);
            }
            throw new Error('Failed to cache ' + url);
          });
        })
      );
    })
    .then(() => {
      console.log('Service worker installation complete');
    })
    .catch((error) => {
      console.error('Service worker installation failed:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName.startsWith('herhq-cache-') && cacheName !== CACHE_NAME;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

