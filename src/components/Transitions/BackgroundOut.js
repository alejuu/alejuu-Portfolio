import React from 'react'
import { Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

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
            <div className='flex justify-center items-center h-screen will-change-background' style={props}>
              <Spring
                to={{
                  transform: `scale3d(${mount ? 0.6 : 1.5}, ${mount ? 0.6 : 1.5}, ${mount ? 0.6 : 1.5}) rotate(${mount ? '0deg' : '45deg'})`,
                }}
                config={{
                  duration: ms,
                }}
              >
                {props => 
                  <svg className='will-change-transform' style={props} version='1.1' width='100%' height='100%'>
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
                              shape: mount ? 'M 350 200 L 400 250 L 350 300 L 350 550 L 400 600 L 800 600 L 800 0 L 350 0 L 400 50 L 350 100 L 400 150 Z' : 'M 550 450 L 600 500 L 650 500 L 700 550 L 750 550 L 800 600 L 800 0 L 350 350 L 400 400 L 450 400 L 500 450 Z',
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
