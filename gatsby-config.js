/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* siteMetadata is used for user specific datas like email twitter handler etc */
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Khaled Hossain'
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`, //serve all static files in src folder
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark", // transform markdown file to html
  ],
}
