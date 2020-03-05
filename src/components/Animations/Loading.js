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
    animationDelay: '20s',
    zIndex: 1
  })

  static styleCircle = ({ props }) => ({
    border: '10px solid black',
    borderRadius: '100%',
    height: props.diameter,
    left: '50%',
    opacity: props.opacity,
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: props.diameter,
    zIndex: 1
  })

  // handleRest = () => {
  //   this.forceUpdate()
  // }

  render() {
    return (
      <div>
        <Spring
          reset
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
        >
          {props => <div style={Loading.styleBackground({ props })} />}
        </Spring>
        <Spring
          reset
          from={{ opacity: 1, diameter: 0 }}
          to={{ opacity: 0, diameter: 100 }}
          // onRest={this.handleRest}
        >
          {props => <div style={Loading.styleCircle({ props })} />}
        </Spring>
      </div>    
    )
  }
}

export default Loading
