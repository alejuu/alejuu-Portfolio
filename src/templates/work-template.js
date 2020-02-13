import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'
import { SpringLink } from '../components/react-spring-animation'

const WorkTemplate = ({ data }) => {
  const {
    title,
    image,
    link,
    description: { description }  
  } = data.work

  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `web development`, `react`, `gatsby`, `${title}`]}
        title={title}
      />
      <section>
        <div>
          <div>
            <Image fluid={image.fluid} alt={title} />      
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
          <a href={link} target='_blank' rel='noopener noreferrer'>Open site</a>
          <hr></hr>
          <SpringLink className='bg-yellow-600' to='/work'>back to work</SpringLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug:String!){
    work:contentfulWork(slug:{eq:$slug}){
      id:contentful_id
      title
      slug
      image:featuredImage {
        fluid(maxWidth: 300, maxHeight: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      link
      description {
        description
      }   
    }
  }
`

export default WorkTemplate