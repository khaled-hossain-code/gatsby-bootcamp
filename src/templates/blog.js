import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

//this has to be exact as gatsby internally uses this function to query and pass data to component via props
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      },
      html
    }
  }
`
const Blog = (props) => {
  const {frontmatter, html } = props.data.markdownRemark;

  return <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: html}}>
      </div>
    </Layout>
}

export default Blog
