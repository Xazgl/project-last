// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ['s1.maxposter.ru','media.cm.expert'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};



