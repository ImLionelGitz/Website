/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ww2.freelogovectors.net',
            },
        ],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
        ],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
            },
        ],
    },
}

module.exports = nextConfig
