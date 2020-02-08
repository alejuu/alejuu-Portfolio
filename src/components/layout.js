import React from 'react'
import Navbar from './Navbar'
import { MySpring } from '../components/react-spring-animation'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MySpring>
        <main>{children}</main>
      </MySpring>      
    </>
  )
}

export default layout