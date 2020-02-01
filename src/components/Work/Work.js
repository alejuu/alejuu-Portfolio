import React from 'react'
import SingleWork from './SingleWork'

const Work = ({ work }) => {
  console.log(work);
  
  return (
    <div>
      This is our Work component
      <SingleWork />
    </div>
  )
}

export default Work