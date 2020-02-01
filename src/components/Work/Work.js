import React from 'react'
import SingleWork from './SingleWork'

const Work = ({ work }) => {
  console.log(work);
  
  return (
    <section>
      <h2>my Work</h2>
      <div >
        {work.map(({ node }) => {
          return <SingleWork key={node.id} work={node} />
        })}
      </div>
    </section>
  )
}

export default Work