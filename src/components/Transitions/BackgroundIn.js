import React from 'react'
import { Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

const MySpringBackgroundIn = ({ children }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 1000

      return (
        <Spring
          to={{
            fill: mount ? '#70C1B3' : '#247BA0',
            background: `linear-gradient(to bottom, ${mount ? '#B2DBBF' : '#B2DBBF'} ${mount ? '50%' : '0%'}, ${mount ? '#F3FFBD' : '#247BA0'} 100%)`
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

const SpringLink = ({ to, className, children }) => (
  <TransitionLink to={to} className={className} exit={{ length: 1 }} entry={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export { MySpringBackgroundIn, SpringLink }
