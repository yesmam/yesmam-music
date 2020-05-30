/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Cosmic Cowboy Media",
    description: "Cosmic Cowboy",
    siteUrl: "https://cosmiccowboymedia.com"
  },
  plugins: [
    // Add gatsby-theme-musician to your site
    {
      resolve: "gatsby-theme-musician",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        pwaName: 'Cosmic Cowboy'
      }
   },
    // Add gatsby-plugin-mailchimp
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // Find the POST URL for signing up to your list with an embedded form
        endpoint: 'https://cosmiccowboymedia.us4.list-manage.com/subscribe/post?u=69e27a61fe1116ab8b7ba1669&amp;id=4edf744fb7',
      },
    },
     // Add gatsby-plugin-favicon
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: 'Cosmic Cowboy' // Inferred with your package.json
      }
    },
  ]
};
