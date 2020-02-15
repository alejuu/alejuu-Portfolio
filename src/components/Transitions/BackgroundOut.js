import React from 'react'
import { Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import Styles from './transition.module.css'

const MySpringBackgroundOut = ({ children }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 1000

      return (
        <Spring
          to={{
            background: `linear-gradient(to bottom, ${mount ? '#B2DBBF' : '#B2DBBF'} ${mount ? '0%' : '50%'}, ${mount ? '#247BA0' : '#F3FFBD'} 100%)`
          }}
          config={{
            duration: ms,
          }}
        > 
          {props => 
            <div className={Styles.container} style={props}>
              <Spring
                to={{
                  transform: `scale3d(${mount ? 0.6 : 1.5}, ${mount ? 0.6 : 1.5}, ${mount ? 0.6 : 1.5}) rotate(${mount ? '0deg' : '45deg'})`,
                }}
                config={{
                  duration: ms,
                }}
              >
                {props => 
                  <svg className={Styles.shape} style={props} version='1.1' viewBox='0 0 400 400'>
                    <Spring
                      to={{
                        fill: mount ? '#247BA0' : '#70C1B3',
                      }}
                      config={{
                        duration: ms,
                      }}
                    >
                      {props => 
                        <g style={props}>
                          <Spring
                            to={{
                              shape: mount ? 'M20,380 L380,380 L380,380 L200,20 L20,380 Z' : 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                            }}
                            config={{
                              duration: ms,
                            }}
                          >
                            {props => 
                              <path id='path-1' d={props.shape} />
                            }
                          </Spring>                         
                        </g>
                      }
                    </Spring>
                  </svg>
                }
              </Spring>
            </div>
          }
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

export { MySpringBackgroundOut, SpringLink }
