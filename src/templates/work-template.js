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
      <section className='w-full h-full'>
        <div className='grid grid-cols-6 row-gap-0 gap-4 h-full'>
          <div className='h-screen-1/2 md:h-full col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4'>
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='relative z-10 max-w-screen-sm w-1/2 bg-black p-4'>
                <div className='h-full w-full text-center md:text-left text-white'>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <a href={link} target='_blank' rel='noopener noreferrer'>Open site</a>
                  <hr></hr>
                  <SpringLink className='bg-yellow-600' to='/work'>back to work</SpringLink>
                </div>
              </div>
            </div>
          </div>
          <div className='relative z-20 h-screen-1/2 md:h-full col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-black'>
            <div className='flex flex-col justify-center items-center h-full'>
              <div className='w-32 md:w-48 flex items-center justify-center'>
                <div className='h-full w-full'>
                  <Image fluid={image.fluid} alt={title} /> 
                </div>
              </div>
            </div>   
          </div>
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
        fluid(maxWidth: 192) {
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