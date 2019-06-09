const path = require("path")

//add a field in node
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

//create page dynamically
exports.createPages = async ({ graphql, actions }) => {
  let response
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  try {
    response = await graphql(
      `
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
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

  response.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields;

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
