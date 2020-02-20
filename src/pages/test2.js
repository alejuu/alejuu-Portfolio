import React from 'react'
import { MySpringBackgroundIn, SpringLink } from '../components/Transitions/BackgroundIn'

const test = () => {
  return (
    <section>
      <SpringLink className='relative z-10' to='/test'>to test </SpringLink>
      <MySpringBackgroundIn /> 
    </section> 
  )
}

export default test
