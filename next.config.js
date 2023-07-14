/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : ['source.unsplash.com']
    },
    experimental: {
      serverActions : true
    },
    redirects: async () => {
        return [
          {
            source: "/github",
            destination: "https://github.com/ghiwwwan",
            permanent: true,
          },
          {
            source: "/feedback",
            destination: "https://github.com/steven-tey/novel/issues",
            permanent: true,
          },
          {
            source: "/email",
            destination: "mailto:iwwwan.io@gmail.com",
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
