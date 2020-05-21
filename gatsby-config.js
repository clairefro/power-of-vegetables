/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    image: "/images/og/og-image.jpg", // Path to image in the 'static' folder,
    supportedLangs: ['en','fr','ja'], // for SEO alternate links
    website: "https://www.power-of-vegetables.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `images`,
       path: `${__dirname}/static/images/`,
     },
   },
   {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      }
    },
  ],
}
