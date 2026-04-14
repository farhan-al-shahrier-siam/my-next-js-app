/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      // https://i.ibb.co.com/8LfLDby4/images-3.jpg
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/8LfLDby4/images-3.jpg',
        search: '',
      },
    ],
  },
};

export default nextConfig;
