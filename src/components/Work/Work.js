import React from 'react'
import SingleWork from './SingleWork'

const Work = ({ work }) => {
  // console.log(work);
  
  return (
    <section className='h-full w-full'>
      <div className='flex flex-wrap'>
        {work.map(({ node }) => {
          return <SingleWork key={node.id} work={node} />
        })}
      </div>
    </section>
  )
}

export default Work