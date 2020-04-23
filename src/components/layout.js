import React from 'react'
import Navbar from './Navbar'
import { BackgroundSVGSpring } from '../components/Animations/IndexAnimations'

const layout = ({ children }) => {
  // const url = window.location.href;
  // console.log(url);
  
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        {children}
      </main>
      <div className='fixed top-0 left-0 h-full w-full'>
        <BackgroundSVGSpring />
      </div>
    </>
  )
}

export default layout