/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions']
  }
};

export default nextConfig;
