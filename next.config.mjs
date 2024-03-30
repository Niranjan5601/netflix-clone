/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        domains: ['rb.gy', 'image.tmdb.org'],
    },
};

export default nextConfig;
