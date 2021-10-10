/** @type {import('next').NextConfig} */
const nextEnv = require('next-env');
 
const withNextEnv = nextEnv();
 
module.exports = withNextEnv({
  reactStrictMode: true,
  env: {
    token: 'a2ad4d5d2ec007e53ccfd6f8504057',
  },
});

module.exports = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
}
