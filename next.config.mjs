/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'image.tmdb.org'

            },
            {
                protocol:'https',
                hostname:'rb.gy'
            },
            {
                protocol:'https',
                hostname:'occ-0-2086-2164.1.nflxso.net'
            }
        ],
        dangerouslyAllowSVG: true,
        // domains: ['rb.gy', 'image.tmdb.org'],
    },
};

export default nextConfig;
