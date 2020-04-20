import React from 'react'
import { Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

const BackgroundSpring = () => {
  return (
    <Spring
      from={{ opacity: 1, zIndex: 100 }}
      to={{ opacity: 0, zIndex: -1 }}
      config={{ precision: 0.1, delay: 1200 }}
    >
      {props => <div className='absolute top-0 left-0 h-full w-full bg-black transition-opacity duration-500' style={props} />}
    </Spring> 
  )
}

const CircleSpring = ({ children, className }) => {
  return (
    <Spring
      from={{ opacity: 1, height: '100px', width: '100px', zIndex: 100 }}
      to={{ opacity: 0, height: '500px', width: '500px', zIndex: -1 }}
      config={{ tension: 0.5, friction: 0.5, precision: 0.1 }}
    >
      {props => <div className='relative visible flex justify-center items-center border-solid border-8 border-white rounded-full -m-full' style={props}>{children}</div>}
    </Spring>
  )
}

const OpacitySpring = ({ children, className }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 2965, duration: 1500 }}
    >
      {props => <div className={className} style={props}>{children}</div>}
    </Spring> 
  )
}

const SlideSpring = ({ children, className }) => {
  return (
    <Spring
      from={{ transform: `translateX(${-100}vw)` }}
      to={{ transform: `translateX(0)` }}
      config={{ delay: 1300, duration: 1800 }}
    >
      {props => <div className={className} style={props}>{children}</div>}
    </Spring> 
  )
}

const SlideTransitionSpring = ({ children, className }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 1000

      return (
        <Spring
          to={{ transform: `translateX(0)` }}
          config={{ duration: ms }}
        >
          {props => <div className={className} style={props}>{children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

const SlideTransitionSpringLink = ({ to, className, children }) => (
  <TransitionLink to={to} className={className} exit={{ length: 1 }} entry={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export { BackgroundSpring, CircleSpring, OpacitySpring, SlideSpring, SlideTransitionSpring, SlideTransitionSpringLink }
