import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"

//this has to be exact as gatsby internally uses this function to query and pass data to component via props. query for contently
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do,YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json)}
    </Layout>
  )
}

export default Blog
