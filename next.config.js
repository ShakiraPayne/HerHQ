const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true
});

const nextConfig = withPWA({
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});


module.exports = nextConfig;