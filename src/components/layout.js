import React from 'react'
import Navbar from './Navbar'
import { MySpring } from '../components/react-spring-animation'

const layout = ({ children }) => {
  // const url = window.location.href;
  // console.log(url);
  
  return (
    <>
      <Navbar />
      <MySpring>
        <main className='h-screen'>
          {children}
        </main>
      </MySpring>      
    </>
  )
}

export default layout