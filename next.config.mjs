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
           
        ],
        dangerouslyAllowSVG: true,
        
    },
};

export default nextConfig;
