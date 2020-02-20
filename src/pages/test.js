import React from 'react'
import { MySpringBackgroundOut, SpringLink } from '../components/Transitions/BackgroundOut'

const test = () => {
  return (
    <section>
      <SpringLink className='relative z-10' to='/test2'>to test 2</SpringLink>
      <MySpringBackgroundOut />
    </section>   
  )
}

export default test
