import * as React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>JLFreedom's Thoughts</h1>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
            </BlogLink>
            <p>{ node.excerpt }</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />


export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;