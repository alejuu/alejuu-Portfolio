import React from 'react'
import { Spring } from 'react-spring/renderprops'

const OpacitySpring = ({ children, className }) => {
  return (
    <Spring
      reset
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 2965, duration: 1500 }}
    >
      {props => <div className={className} style={props}>{children}</div>}
    </Spring> 
  )
}

const BoxSpring = ({ children, className }) => {
  return (
    <Spring
      reset
      from={{ transform: `translateX(${-100}vw)` }}
      to={{ transform: `translateX(0)` }}
      config={{ delay: 1300, duration: 1800 }}
    >
      {props => <div className={className} style={props}>{children}</div>}
    </Spring> 
  )
}

export { OpacitySpring, BoxSpring }
