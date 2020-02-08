import React from 'react'
import { Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

const MySpring = ({ children }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 1000

      return (
        <Spring
          to={{
            transform: `translateY(${mount ? 0 : '100px'})`,
            opacity: mount ? 1 : 0,
          }}
          config={{
            duration: ms,
          }}
        >
          {props => <div style={props}>{children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

const SpringLink = ({ to, key, className, children }) => (
  <TransitionLink to={to} key={key} className={className} exit={{ length: 1 }} entry={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export { MySpring, SpringLink }
