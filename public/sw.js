if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),o={module:{uri:i},exports:r,require:t};s[i]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/138-6d2d42f47991a0f7.js",revision:"6d2d42f47991a0f7"},{url:"/_next/static/chunks/664-bd157c0c144b8096.js",revision:"bd157c0c144b8096"},{url:"/_next/static/chunks/675-9fcdb742a32f88a7.js",revision:"9fcdb742a32f88a7"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-e1c73aa1a92f6e5c.js",revision:"e1c73aa1a92f6e5c"},{url:"/_next/static/chunks/pages/_app-c61cc756e86fecb9.js",revision:"c61cc756e86fecb9"},{url:"/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",revision:"5a00309fd5f4b49e"},{url:"/_next/static/chunks/pages/admin-d38235aa49886f9e.js",revision:"d38235aa49886f9e"},{url:"/_next/static/chunks/pages/ambassador-c6fdb5e6767dad1f.js",revision:"c6fdb5e6767dad1f"},{url:"/_next/static/chunks/pages/buy-585354f4a8e1344b.js",revision:"585354f4a8e1344b"},{url:"/_next/static/chunks/pages/buy/%5Bproduct%5D-54967b467de445d0.js",revision:"54967b467de445d0"},{url:"/_next/static/chunks/pages/buy/checkout-f58e7237a04a68ad.js",revision:"f58e7237a04a68ad"},{url:"/_next/static/chunks/pages/buy/processing-d391bd5b38d3bc6c.js",revision:"d391bd5b38d3bc6c"},{url:"/_next/static/chunks/pages/cart-58d27c709a7b47c9.js",revision:"58d27c709a7b47c9"},{url:"/_next/static/chunks/pages/components/admin/inputOrder-020e03eeddf64930.js",revision:"020e03eeddf64930"},{url:"/_next/static/chunks/pages/components/admin/order-412bc89875eb6970.js",revision:"412bc89875eb6970"},{url:"/_next/static/chunks/pages/components/admin/product-66f20cd38f4cf847.js",revision:"66f20cd38f4cf847"},{url:"/_next/static/chunks/pages/components/common/addproduct-10ee3c2dcf3e32d5.js",revision:"10ee3c2dcf3e32d5"},{url:"/_next/static/chunks/pages/components/common/contact-7aca9b3c3a9530db.js",revision:"7aca9b3c3a9530db"},{url:"/_next/static/chunks/pages/components/common/footer-4506b25e881057ed.js",revision:"4506b25e881057ed"},{url:"/_next/static/chunks/pages/components/common/header-5a088b6d557990f0.js",revision:"5a088b6d557990f0"},{url:"/_next/static/chunks/pages/components/common/product-d0d1e0abfb2b881f.js",revision:"d0d1e0abfb2b881f"},{url:"/_next/static/chunks/pages/components/home/ambassador-3e73e196d6964252.js",revision:"3e73e196d6964252"},{url:"/_next/static/chunks/pages/components/home/cardone-4406045aad78070c.js",revision:"4406045aad78070c"},{url:"/_next/static/chunks/pages/components/home/varities-98eefcf9fc9abcc1.js",revision:"98eefcf9fc9abcc1"},{url:"/_next/static/chunks/pages/components/user/signup-527c98dac65369b3.js",revision:"527c98dac65369b3"},{url:"/_next/static/chunks/pages/contact-80662ca42a10c3b1.js",revision:"80662ca42a10c3b1"},{url:"/_next/static/chunks/pages/deals-73e4b3eafdda6d27.js",revision:"73e4b3eafdda6d27"},{url:"/_next/static/chunks/pages/index-07639d9f8807fc56.js",revision:"07639d9f8807fc56"},{url:"/_next/static/chunks/pages/liked-3d9d5cc62796af45.js",revision:"3d9d5cc62796af45"},{url:"/_next/static/chunks/pages/orders-1a65a9897abba0c8.js",revision:"1a65a9897abba0c8"},{url:"/_next/static/chunks/pages/policies-1449bd06d3793dff.js",revision:"1449bd06d3793dff"},{url:"/_next/static/chunks/pages/questions-2f2277fb5b3500e2.js",revision:"2f2277fb5b3500e2"},{url:"/_next/static/chunks/pages/shipment-52298ae6d055fdf6.js",revision:"52298ae6d055fdf6"},{url:"/_next/static/chunks/pages/sizeChart-eff241bfa2fe077f.js",revision:"eff241bfa2fe077f"},{url:"/_next/static/chunks/pages/user-dfb38825198b6cb5.js",revision:"dfb38825198b6cb5"},{url:"/_next/static/chunks/pages/user/forget-730e046433cb3b6e.js",revision:"730e046433cb3b6e"},{url:"/_next/static/chunks/pages/user/login-b056222498221540.js",revision:"b056222498221540"},{url:"/_next/static/chunks/pages/user/signup-058556ab7d9dd126.js",revision:"058556ab7d9dd126"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/5ef1019dd2f2a6a4.css",revision:"5ef1019dd2f2a6a4"},{url:"/_next/static/css/afae9e63cb862dc7.css",revision:"afae9e63cb862dc7"},{url:"/_next/static/g2sm17V2otjcEgO4Od6c-/_buildManifest.js",revision:"402d21d2c36569c8be8ceec7baaa62d9"},{url:"/_next/static/g2sm17V2otjcEgO4Od6c-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/ambassador/amb1.jpg",revision:"1f2377f0ab2aaf8bdd6f431ad70b6a6e"},{url:"/ambassador/amb2.jpg",revision:"c5275ca6ae43225fc4b0e5378dd570ae"},{url:"/ambassador/amb3.jpg",revision:"27b8ff5b331fb5d651b30e2174aa5531"},{url:"/ambassador/amb4.jpg",revision:"8e23cb2975894d8b464039ef96b1f31b"},{url:"/ambassador/amb5.jpg",revision:"0007ed08e7e005f0f25cdd1e0e9fc33d"},{url:"/icons/arrow_down.png",revision:"e2cdc4ae2bbe96a5ab295e07df793c57"},{url:"/icons/bikini.png",revision:"bd99bfd4b71c6164edeb98ddba23b103"},{url:"/icons/bikini2.png",revision:"f04e0f09111f2704508eef51bcfb49a1"},{url:"/icons/book.png",revision:"2aa85c8916a6c2a64bc6963f7d937bad"},{url:"/icons/carrols.jpg",revision:"8012364515ac7868b706efc61914caa9"},{url:"/icons/cart.png",revision:"10c3686611da620f3a396ed39c35fe08"},{url:"/icons/carted.png",revision:"46776a607b3ce510de82cec00ea30fe3"},{url:"/icons/coupon.png",revision:"42d2a757bf570dded048c022b0117c46"},{url:"/icons/cross.png",revision:"5742e734ab8b8c975c03261c8bc0628d"},{url:"/icons/dark/cart.png",revision:"1d2b4e386aabf509d76a828273f58dfc"},{url:"/icons/dark/heart.png",revision:"39a3072b0d060740f17703de521594b6"},{url:"/icons/dark/search.png",revision:"96fca3c3d69ae201453907850938e474"},{url:"/icons/dark/user.png",revision:"6f745361917731257cdc4cc2884ed45d"},{url:"/icons/deal.jpeg",revision:"adbeb98b36253ef41e0286f315d0f29e"},{url:"/icons/deals.png",revision:"821f2a7b3b8a2e044d346a0a53945a7c"},{url:"/icons/favicon.jpg",revision:"490945add1d2f110ceea5aff1b7a6faa"},{url:"/icons/heart.png",revision:"c8e2f8a78dddcb4bf24b3915efee2461"},{url:"/icons/heart1.png",revision:"9f10c309e2ec1ebe2dd7e48f478570a4"},{url:"/icons/liked.png",revision:"7dc28657ba8876390782fa43d06afd9a"},{url:"/icons/logo.png",revision:"aeb4835a86fc5c7daf4de44b14011a38"},{url:"/icons/mail.png",revision:"75fa97405ce8d8eb22415ad3e26a0b82"},{url:"/icons/mail1.png",revision:"340e8110c21fb08b8422750ed6150a8d"},{url:"/icons/search.png",revision:"24d60a55fafada53f98f110394878003"},{url:"/icons/secure.jpeg",revision:"7a54d2e7525bab5be4132ed29b07f914"},{url:"/icons/secure.png",revision:"56e436352e3ecad580c1dfd8c9b9c6b9"},{url:"/icons/tick.png",revision:"74a2d52c8245d07172c8a75426d241d5"},{url:"/icons/user.png",revision:"9721e5b03ad0803020d42f042f6fb53a"},{url:"/manifest.json",revision:"e57de628a07d87b9933d980f9c542cd1"},{url:"/product/extra1.jpg",revision:"84980cf414f7ea25848490c23f4e4ef1"},{url:"/product/extra2.jpg",revision:"382bb0432f6986e267445865581a88e1"},{url:"/product/extra3.jpg",revision:"301c424df95f688146cc1f0364c653c3"},{url:"/product/extra4.jpg",revision:"40622e2e6ef9237e3b183082c936badb"},{url:"/product/extra5.jpg",revision:"276412976b8a10fb30e1c95fb15f9836"},{url:"/product/heart-svgrepo-com.svg",revision:"9550ff6913789ed6433504997026f414"},{url:"/product/img1.jpg",revision:"2818fd4582abf4881b05ff88377da783"},{url:"/product/img10.jpg",revision:"9190947d69921fc7b253b79e82ff294b"},{url:"/product/img2.jpg",revision:"b7a03127e6e28ce238a3c901524cbc7b"},{url:"/product/img3.jpg",revision:"e58276a1da0a233d3f0c62b01db577a4"},{url:"/product/img4.jpg",revision:"ed4ab370a32947823c41669f74c03321"},{url:"/product/img5.jpg",revision:"b9e791a67026a034f683346215061187"},{url:"/product/img6.jpg",revision:"0325b6a5cbfbcbd1832d7a6b4a74075c"},{url:"/product/img7.jpg",revision:"f595c3b66878f2385a6499ab84c93d6e"},{url:"/product/img8.jpg",revision:"2c88f117b7ca16387e19d568cb33b37d"},{url:"/product/img9.jpg",revision:"6652666c1796dbc6d02bc79483123a5f"},{url:"/product/video.mp4",revision:"d0a4fe7fc98f79645f904676fed12c83"},{url:"/video/end.mp4",revision:"e26146e8f38cd2472ec19fb2114ed071"},{url:"/video/start.mp4",revision:"d0a4fe7fc98f79645f904676fed12c83"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
