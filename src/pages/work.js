import React from 'react'
import Work from '../components/Work/Work'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { BackgroundWorkTransitionSpring } from '../components/Animations/Springs';

const WorkPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <SEO
          keywords={[`alejuu`, `web development`, `react`, `gatsby`]}
          title='Work' 
        />
        <div className='w-full h-full'>
          <div className='relative z-20 flex flex-col items-center justify-center w-full h-full'>
            <Work work={data.workEntry.edges} />
          </div>
        </div>  
      </Layout>
      <BackgroundWorkTransitionSpring />
    </div>
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
            fluid(maxHeight: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            fixed(height: 150) {
              ...GatsbyContentfulFixed_withWebp
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