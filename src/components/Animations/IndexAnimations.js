import React from 'react'
import { Keyframes, animated, Spring } from 'react-spring/renderprops'
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

const BackgroundSvgSpring = () => {
  const PathSpring = Keyframes.Spring(async next => {
    while (true) {
      await next({
        shape: 'M 0 300 C 76 208 100 268 131 319 Q 194 423 333 322 Q 396 272 490 356 Q 583 418 648 325 Q 717 231 800 300 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 300 C 92 239 100 268 146 317 Q 237 412 345 296 Q 430 240 496 332 Q 598 402 657 347 Q 708 295 798 329 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M 0 300 C 88 262 100 268 162 314 Q 244 365 345 296 Q 428 263 496 332 Q 557 399 648 322 Q 723 273 799 291 L 800 600 L 0 600 Z'
      })

      await next({
        shape: 'M -1 271 C 73 305 100 268 162 314 Q 270 338 345 296 Q 437 269 496 332 Q 589 387 695 304 Q 723 273 799 291 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M -1 271 C 73 305 97 342 162 314 Q 254 254 330 296 Q 436 376 496 332 Q 580 265 695 304 Q 737 306 799 291 L 800 600 L 0 600 Z'
      })
      await next({
        shape: 'M -1 271 C 63 284 88 393 162 314 Q 266 229 335 318 Q 445 404 509 330 Q 578 212 695 313 Q 752 338 799 291 L 800 600 L 0 600 Z'
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
    <svg className='w-full h-screen' version='1.1' viewBox='0 0 600 600' preserveAspectRatio='none'>
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
          <animated.path className='bg-gradient-r-red-blue' id='path-1' stroke='white' strokeWidth='5' strokeDasharray='.2 5' d={props.shape} fill='url(#grad-1)' />
        }
      </PathSpring>
    </svg>
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

// Page Transitions

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

const BackgroundTransitionSpring = ({ children, className }) => (
  <TransitionState>
    {({ mount, current }) => {
      const ms = current.length * 1000

      return (
        <Spring
          to={{ 
            backgroundImage: `linear-gradient(90deg, ${mount ? '#e6e9f0' : '#2b5876'}, ${mount ? '#cfd9df' : '#4e4376'})`
          }}
          config={{ 
            duration: ms 
          }}
        >
          {props => <div className={className} style={props}>{children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

const TransitionSpringLink= ({ to, className, children }) => (
  <TransitionLink to={to} className={className} exit={{ length: 1 }} entry={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export { BackgroundSpring, BackgroundSvgSpring, CircleSpring, OpacitySpring, SlideSpring, SlideTransitionSpring, BackgroundTransitionSpring, TransitionSpringLink}
