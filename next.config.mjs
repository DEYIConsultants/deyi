/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'deyiconsultants.com' }],
      destination: 'https://www.deyiconsultants.com/:path*',
      permanent: true,
    }];
  },
};

export default nextConfig;
