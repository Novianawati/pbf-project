/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  basePath: process.env.NODE_ENV === 'production' ? '/my-sakai-app' : '',
  publicRuntimeConfig: {
    contextPath: process.env.NODE_ENV === 'production' ? '/my-sakai-app' : ''
  },
  env:{
    BACKEND_URL:'http://localhost:8000'
  }
}

module.exports = nextConfig
