/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.grinko.co.uk',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/404', '/500'],
    transform: async (config, path) => {
        if (path === '/404' || path === '/500') return null
        return {
            loc: path,
            changefreq: 'weekly',
            priority: path === '/' ? 1.0 : 0.8,
            lastmod: new Date().toISOString(),
        }
    },
}
