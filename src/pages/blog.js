import React from "react"
import {graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const renderPosts = posts => {
    return posts.map(post => {
      const { title, date } = post.node.frontmatter
      return (
        <li>
          <h2>{title}</h2>
          <p>{date}</p>
        </li>
      )
    })
  }

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>{renderPosts(data.allMarkdownRemark.edges)}</ol>
    </Layout>
  )
}

export default BlogPage
