import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/Head";

const BlogPage = () => {
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
      <Head title="Blog" />
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {renderPostsFromContentFul(data.allContentfulBlogPost.edges)}
      </ol>
    </Layout>
  )
}

export default BlogPage
