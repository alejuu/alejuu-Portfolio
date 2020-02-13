import React from 'react'
import Work from '../components/Work/Work'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `web development`, `react`, `gatsby`]}
        title='Work' 
      />
      <Work work={data.workEntry.edges} />
    </Layout>
  )
}

export const getWork = graphql`
  query {
    workEntry:allContentfulWork {
      edges {
        node {
          id:contentful_id
          title
          slug
          image:featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          link
          description {
            description
          }
        }
      }
    }
  }
`

export default WorkPage