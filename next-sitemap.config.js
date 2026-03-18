/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toddharris.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/blog', '/blog/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/blog/'] },
    ],
  },
};
