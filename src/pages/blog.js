import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout";
import blogStyles from './blog.module.scss';

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
            fields {
              slug
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
      const { slug } = post.node.fields
      return (
        <li className={blogStyles.post}>
          <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{date}</p>
          </Link>
        </li>
      )
    })
  }

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>{renderPosts(data.allMarkdownRemark.edges)}</ol>
    </Layout>
  )
}

export default BlogPage
