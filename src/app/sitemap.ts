import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://liger.netlify.app/',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 1
        },

        {
            url: 'https://liger.netlify.app/videos',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.7
        },

        {
            url: 'https://liger.netlify.app/games',
            lastModified: new Date(),
            changeFrequency: 'never',
            priority: 0.3
        }
    ]
}