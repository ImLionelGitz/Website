import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   /* config options here */
   reactCompiler: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**', // Wildcard to allow all hostnames
            port: '',
            pathname: '**',
         },
      ],
   },
}

export default nextConfig
