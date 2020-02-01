import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const WorkTemplate = ({ data }) => {
  const {
    title,
    image,
    link,
    description: { description }  
  } = data.work

  return (
    <Layout>
      <section>
        <div>
          <div>
            <Image fluid={image.fluid} alt={title} />
        
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
          <span>{link}</span>
          <Link to="/work">back to work</Link>
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
`

export default WorkTemplate