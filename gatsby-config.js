/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'pw0l91q9jpdw',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'd0fwAudrNeqeXLto_akSMA9A3IkT20bylH3uBTLNbvI',
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ]
}
