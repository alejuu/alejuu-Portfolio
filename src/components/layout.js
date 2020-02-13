import React from 'react'
import Navbar from './Navbar'
import { MySpring } from '../components/react-spring-animation'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MySpring>
        <main className='h-screen flex items-center justify-center pt-12'>
          <section className='container flex items-center justify-center mx-auto'>
            {children}
          </section> 
        </main>
      </MySpring>      
    </>
  )
}

export default layout