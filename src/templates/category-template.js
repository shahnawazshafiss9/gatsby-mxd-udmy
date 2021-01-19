import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {pageContext: { category }, } = props;
  const {data: {categories: {nodes: posts}}} = props

  return <Layout>
    <Hero />
    <Posts posts={posts} title={`Category / ${category}`} />
  </Layout>
}
export const query = graphql`
query GetCategories($category: String) {
  categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3, filter: {frontmatter: {category: {eq: $category}}}) {
    nodes {
      frontmatter {
        title
        slug
        readTime
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD MMM YYYY")
        category
        author
      }
      excerpt
    }
  }
}
`
export default CategoryTemplate
