/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.deyiconsultants.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api', '/api/*'],
  // Build time is not the date a page's content changed. Omit lastmod until
  // reliable per-page modification dates are available.
  autoLastmod: false,
  transform: async (_config, path) => ({ loc: path }),
  // Contact uses searchParams and is rendered on demand, so it is not included
  // in the generator's list of prerendered pages.
  additionalPaths: async () => [{ loc: '/contact' }],
};
