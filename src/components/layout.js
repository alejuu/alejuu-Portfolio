import React from 'react'
import Navbar from './Navbar'
// import { globalHistory as history } from '@reach/router'
// import { OpacityIndexTransitionSpring, OpacityWorkTransitionSpring } from './Animations/Springs'
import { OpacityTransitionSpring } from './Animations/Springs'

const layout = ({ children }) => {
  // // const url = window.location.href;
  // // console.log(url);
  // const { location } = history
  // // console.log( location.pathname )
  // const pageUrl = location.pathname
  // let OpacityTransitionSpring = OpacityIndexTransitionSpring
  // if (pageUrl === '/work') {
  //   OpacityTransitionSpring = OpacityWorkTransitionSpring
  // }
  // // const CurrentSpring = OpacityTransitionSpring
  // // console.log(CurrentSpring)
  // // console.log(OpacityTransitionSpring)
  
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