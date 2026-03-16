/** @type {import('next-sitemap').IConfig} */

module.exports = {

  siteUrl: 'https://g-netsolutions.com',   // Your live domain

  generateRobotsTxt: true,                 // Creates robots.txt automatically

  sitemapSize: 5000,                       // Splits sitemap if too many URLs

  changefreq: 'daily',                     // Default crawl frequency

  priority: 0.7,                           // Default priority for pages

  exclude: ['/admin/*', '/internal/*'],    // Exclude private/internal routes

  robotsTxtOptions: {

    policies: [

      { userAgent: '*', allow: '/' },      // Allow all public pages

      { userAgent: '*', disallow: ['/admin', '/internal'] }

    ],

    additionalSitemaps: [

      'https://g-netsolutions.com/sitemap.xml'

    ],

  },

};