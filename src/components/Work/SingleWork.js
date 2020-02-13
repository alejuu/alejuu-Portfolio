import React from 'react'
import Image from 'gatsby-image'
import { SpringLink } from  '../react-spring-animation'
import Styles from './work.module.css'

const SingleWork = ({ work }) => {
  const { title, slug, image } = work

  return (
    <div className='flex-1 bg-gray-800 p-2'>
      <article className='bg-black shadow-xl overflow-hidden p-6'>
        <div className={Styles.articleImage}>
          <Image fluid={image.fluid} alt={title} /> 
        </div>
        <div classNamme='d-flex flex-column justify-center items-center'>
          <h3 className='text-lg text-white'>{title}</h3>
          <SpringLink className='bg-yellow-600 hover:text-red-600' to={`/work/${slug}`}>details</SpringLink>
        </div>      
      </article>
    </div>
  )
}

export default SingleWork
