import React from 'react'
import SingleWork from './SingleWork'

const Work = ({ work }) => {
  // console.log(work);
  
  return (
    <div className='h-full w-full max-w-screen-lg grid grid-cols-6 row-gap-0 gap-4'>
      {work.map(({ node }) => {
        return <SingleWork key={node.id} work={node} />
      })}
    </div>
  )
}

export default Work