const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
    unoptimized: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: "export",
  trailingSlash: true,
  reactStrictMode: false,
};
