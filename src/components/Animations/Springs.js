import React from 'react'
import { Keyframes, animated, Spring } from 'react-spring/renderprops'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

const BackgroundSVGSpring = () => {
  const PathSpring = Keyframes.Spring(async next => {
    while (true) {
      await next({
        shape: 'M 0 350 L 150 300 L 200 375 L 350 275 L 475 325 L 650 250 L 800 375 L 800 600 L 0 600 Z',
        delay: 500
      })
      await next({
        shape: 'M 0 275 L 150 350 L 250 300 L 375 350 L 550 275 L 700 425 L 800 375 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 350 L 175 275 L 300 375 L 500 325 L 550 400 L 675 300 L 800 350 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 275 L 225 300 L 350 275 L 425 400 L 575 325 L 700 375 L 800 300 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 350 L 200 275 L 350 350 L 450 325 L 575 375 L 700 300 L 800 325 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 325 L 150 375 L 275 300 L 425 350 L 625 300 L 675 350 L 800 325 L 800 600 L 0 600 Z'
      })
    }
  })
  const StopOneSpring = Keyframes.Spring(async next => {
    while (true) {
      await next({
        stopColor: '#cfd9df',
        stopOpacity: 1
      })
      await next({
        stopColor: '#e2ebf0',
        stopOpacity: 1
      })
    }
  })
  const StopTwoSpring = Keyframes.Spring(async next => {
    while (true) {
      await next({
        stopColor: '#fdfbfb',
        stopOpacity: 1
      })
      await next({
        stopColor: '#ebedee',
        stopOpacity: 1
      })
    }
  })
  return (
    <div className='fixed top-0 left-0 h-full w-full'>
      <svg className='w-full h-screen transition ease-linear will-change-transform' version='1.1' viewBox='0 0 600 600' preserveAspectRatio='none'>
        <defs>
          <linearGradient id='grad-1' x1='0%' y1='0%' x2='100%' y2='0%'>
            <StopOneSpring native>
              {props =>
                <animated.stop offset='0%' style={props} />
              }
            </StopOneSpring>
            <StopTwoSpring native>
              {props =>
                <animated.stop offset='100%' style={props} />
              }
            </StopTwoSpring>
          </linearGradient>
        </defs>
        
        <PathSpring native>
          {props =>
            <animated.path id='path-1' stroke='white' strokeWidth='5' strokeDasharray='.2 5' d={props.shape} fill='url(#grad-1)' className='transition ease-linear will-change-background' />
          }
        </PathSpring>
      </svg>
    </div>
  )
}

const CircleSpring = ({ children }) => {
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

const OpcaityOutSpring = ({ children, className }) => {
  return (
    <Spring
      from={{ opacity: 1 }}
      to={{ opacity: 0 }}
    >
      {props => <div className={className} style={props}>{children}</div>}
    </Spring>
  )
}

// Page Transitions

const BackgroundIndexTransitionSpring = () => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 500

      return (
        <Spring
          native
          to={{
            background: `linear-gradient(to right, ${mount ? 'rgba(230, 233, 240, 0.5)' : 'rgba(230, 233, 240, 0.5)'} ${mount ? '50%' : '0%'}, ${mount ? 'rgba(139, 170, 170, 0.5)' : 'rgba(207, 217, 223, 0.5)'} 100%)`,
            zIndex: mount ? '-10' : '-10',
          }}
          config={{
            duration: ms,
          }}
        >
          {props => 
            <animated.div className='fixed inset-0 flex justify-center items-center h-screen w-full transition ease-linear will-change-background' style={props}>
              <Spring
                native
                to={{
                  transform: `scale3d(${mount ? 1.5 : 0.6}, ${mount ? 1.5 : 1.6}, ${mount ? 1.5 : 0.6}) rotate(${mount ? '45deg' : '0deg'})`,
                }}
                config={{
                  duration: ms,
                }}
              >
                {props => 
                  <animated.svg className='w-full h-screen transition ease-linear will-change-transform' version='1.1' viewBox='0 0 600 600' preserveAspectRatio='none' style={props}>
                    <Spring
                      native
                      to={{
                        fill: mount ? 'rgba(48,207,208,0.5)' : 'rgba(36,123,160,0.5)',
                      }}
                      config={{
                        duration: ms,
                      }}
                    >
                      {props => 
                        <animated.g className='transition ease-linear will-change-background' style={props}>
                          <Spring
                            native
                            to={{
                              shape: mount ? 'M 650 375 L 325 175 L 50 250 L 250 425 Z' : 'M 500 525 L 575 100 L 175 175 L 150 500 Z',
                            }}
                            config={{
                              duration: ms,
                            }}
                          >
                            {props => 
                              <animated.path id='path-1' d={props.shape} />
                            }
                          </Spring>                         
                        </animated.g>
                      }
                    </Spring>
                  </animated.svg>
                }
              </Spring>
            </animated.div>
          }
        </Spring>
      )
    }}
  </TransitionState>
)

const BackgroundWorkTransitionSpring = () => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 500

      return (
        <Spring
          native
          to={{
            background: `linear-gradient(to right, ${mount ? 'rgba(230, 233, 240, 0.5)' : 'rgba(230, 233, 240, 0.5)'} ${mount ? '0%' : '50%'}, ${mount ? 'rgba(207, 217, 223, 0.5)' : 'rgba(139, 170, 170, 0.5)'} 100%)`,
            zIndex: mount ? '-10' : '-10',
          }}
          config={{
            duration: ms,
          }}
        > 
          {props => 
            <animated.div className='fixed inset-0 flex justify-center items-center h-screen w-full transition ease-linear will-change-background' style={props}>
              <Spring
                native
                to={{
                  transform: `scale3d(${mount ? 0.6 : 1.5}, ${mount ? 1.6 : 1.5}, ${mount ? 0.6 : 1.5}) rotate(${mount ? '0deg' : '45deg'})`,
                }}
                config={{
                  duration: ms,
                }}
              >
                {props => 
                  <animated.svg className='w-full h-screen transition ease-linear will-change-transform' version='1.1' viewBox='0 0 600 600' preserveAspectRatio='none' style={props}>
                    <Spring
                      native
                      to={{
                        fill: mount ? 'rgba(36,123,160,0.5)' : 'rgba(48,207,208,0.5)',
                      }}
                      config={{
                        duration: ms,
                      }}
                    >
                      {props => 
                        <animated.g className='transition ease-linear will-change-background' style={props}>
                          <Spring
                            native
                            to={{
                              shape: mount ? 'M 500 525 L 575 100 L 175 175 L 150 500 Z' : 'M 650 375 L 325 175 L 50 250 L 250 425 Z',
                            }}
                            config={{
                              duration: ms,
                            }}
                          >
                            {props => 
                              <animated.path id='path-1' d={props.shape} />
                            }
                          </Spring>                         
                        </animated.g>
                      }
                    </Spring>
                  </animated.svg>
                }
              </Spring>
            </animated.div>
          }
        </Spring>
      )
    }}
  </TransitionState>
)

const OpacityTransitionSpring = ({ children, className }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 500

      return (
        <Spring
          native
          to={{
            transform: `translateY(${mount ? 0 : '100px'})`,
            opacity: mount ? 1 : 0
          }}
          config={{ 
            duration: ms,
            delay: 1500 
          }}
        >
          {props => <animated.div className={className} style={props}>{children}</animated.div>}
        </Spring>
      )
    }}
  </TransitionState>
)

const TransitionSpringLink= ({ to, className, activeClassName, onClick, children }) => (
  <TransitionLink 
    to={to} 
    className={className}
    activeClassName={activeClassName}
    onClick={onClick} 
    exit={{ length: 1 }} 
    entry={{ length: .5 }}
  >
    {children}
  </TransitionLink>
)

export { BackgroundSVGSpring, CircleSpring, OpcaityOutSpring, BackgroundIndexTransitionSpring, BackgroundWorkTransitionSpring, OpacityTransitionSpring, TransitionSpringLink }
