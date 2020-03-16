import React, { PureComponent } from 'react'
import { Spring } from 'react-spring/renderprops'

class Loading extends PureComponent {
  static styleBackground = ({ props }) => ({
    background: 'black',
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    opacity: props.opacity,
    transition: 'opacity 0.5s',
    zIndex: props.zIndex
  })

  static styleCircle = ({ props }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '10px solid white',
    borderRadius: '100%',
    height: props.diameter,
    opacity: props.opacity,
    width: props.diameter,
    zIndex: props.zIndex
  })

  // handleRest = () => {
  //   this.forceUpdate()
  // }

  render() {
    return (
      <div>
        <Spring
          reset
          from={{ opacity: 1, zIndex: 1 }}
          to={{ opacity: 0, zIndex: -1 }}
          config={{ tension: 1, friction: 1, precision: 0.1, delay: 50 }}
        >
          {props => <div style={Loading.styleBackground({ props })} />}
        </Spring>
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <div className='grid grid-cols-6 row-gap-0 gap-4 h-full'>
            <div className='h-screen-1/2 md:h-full col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2'>
              <div className='flex flex-col items-center justify-center h-full'>
                <Spring
                  reset
                  from={{ opacity: 1, diameter: 100, zIndex: 1 }}
                  to={{ opacity: 0, diameter: 500, zIndex: -1 }}
                  // onRest={this.handleRest}
                >
                  {props => 
                    <div style={Loading.styleCircle({ props })}>
                      <span className='font-serif text-6xl text-white'>A</span>
                    </div>
                  }
                </Spring>
              </div>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}

export default Loading
