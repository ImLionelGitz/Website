import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/contact', '/portfolio']
        },
        sitemap: 'https://liger.netlify.app/sitemap.xml'
    }
}