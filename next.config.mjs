/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.junaidjamshed.com'
          },
        ],
      },
};

export default nextConfig;
