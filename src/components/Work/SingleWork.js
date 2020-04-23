import React from 'react'
import Image from 'gatsby-image'
import { SpringLink } from  '../react-spring-animation'

const SingleWork = ({ work }) => {
  const { title, slug, image } = work

  return (
    <div className='col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 p-12'>
      <article className='h-full overflow-hidden p-6'>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='max-w-xs w-full'>
            <SpringLink to={`/work/${slug}`}>
              <Image fluid={image.fluid} alt={title} />
            </SpringLink> 
          </div>
        </div>  
      </article>
    </div>
  )
}

export default SingleWork
