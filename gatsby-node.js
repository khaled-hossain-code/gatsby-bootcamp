const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  let response
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  try {
    response = await graphql(
      `
        query {
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `,
      { limit: 1000 }
    )
  } catch (errors) {
    throw errors
  }

  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
