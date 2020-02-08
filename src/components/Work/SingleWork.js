import React from 'react'
import Image from 'gatsby-image'
import { SpringLink } from  '../react-spring-animation'

const SingleWork = ({ work }) => {
  const { title, slug, image } = work

  return (
    <article>
      <div>
        <Image fluid={image.fluid} alt={title} />
        <h3>{title}</h3>
        <SpringLink to={`/work/${slug}`}>details</SpringLink>
      </div>
    </article>
  )
}

export default SingleWork
