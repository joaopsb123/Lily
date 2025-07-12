module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api-auth?path=:path*'
      }
    ]
  }
}
