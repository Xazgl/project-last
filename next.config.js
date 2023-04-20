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
    domains: ['s1.maxposter.ru','media.cm.expert']
  },
};



