import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import Head from "../components/Head";

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
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { fields } = node.data.target;
        const alt = fields.title['en-US']
        const url = fields.file['en-US'].url
        
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog
