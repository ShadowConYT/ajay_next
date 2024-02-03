/** @type {import('next').NextConfig} */


const nextConfig = {
    env:{
        dbKey:"https://ajay-portfolio-db-default-rtdb.firebaseio.com/.json"
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**'
            },
            {
                protocol: 'http',
                hostname: '**'
            }
        ]
    }
}

module.exports = nextConfig