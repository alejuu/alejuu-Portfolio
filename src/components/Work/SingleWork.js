import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const SingleWork = ({ work }) => {
  const { title, slug, image, link, description } = work

  return (
    <article>
      <div>
        <Image fluid={image.fluid} alt={title} />
        <Link to={`/work/${slug}`}>
          details
        </Link>
        <span>{link}</span>
      </div>
      <div >
        <h3>{title}</h3>
        <div>
        <p>{description.description}</p>
        </div>
      </div>
    </article>
    )
}

export default SingleWork
