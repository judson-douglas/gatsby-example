/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Tutorial',
    description: 'some random description',
    author: '@johndoe',
    data: ['item1', 'item2'],
    person: { name: 'peter', age: 32 }
  },
  plugins: [`gatsby-plugin-styled-components`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3woydiqx3owi`,
        accessToken: `uNcAZlWN8c3HeasCZVcJX5Vta9yIYcwPHcbJR9PxOaE`,
      }
    }]
}
