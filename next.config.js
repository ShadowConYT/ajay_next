/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        REACT_APP_DB_URI: process.env.REACT_APP_DB_URI,
    },
}

module.exports = nextConfig