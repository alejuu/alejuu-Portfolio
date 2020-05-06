import React from 'react'
import Navbar from './Navbar'
import { OpacityTransitionSpring } from './Animations/Springs'

const layout = ({ children }) => {
  // const url = window.location.href;
  // console.log(url);
  
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <OpacityTransitionSpring className='w-full h-full'>
          {children}
        </OpacityTransitionSpring>
      </main>
    </>
  )
}

export default layout