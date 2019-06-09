import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  // markdown query to get posts from blogPosts folder
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //           html
  //           excerpt
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do,YYYY")
          }
        }
      }
    }
  `)

  const renderPostsFromMD = posts => {
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

  const renderPostsFromContentFul = posts => {
    return posts.map(post => {
      const { title, slug, publishedDate } = post.node
      
      return (
        <li className={blogStyles.post}>
          <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{publishedDate}</p>
          </Link>
        </li>
      )
    })
  }



  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {/* {renderPostsFromMD(data.allMarkdownRemark.edges)} */}
        {renderPostsFromContentFul(data.allContentfulBlogPost.edges)}
      </ol>
    </Layout>
  )
}

export default BlogPage
