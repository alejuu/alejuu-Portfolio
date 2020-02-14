import React from 'react'
import { MySpringBackgroundOut, SpringLink } from '../components/Transitions/BackgroundOut'

const styles = {
  container: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
  shape: { width: 300, height: 300, willChange: 'transform' }
}
const color = '#247BA0'
// const scale = 0.6
const shapes = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
// const rotation = '0deg'

const test = () => {
  return (
    <section>
      <MySpringBackgroundOut>
        <div style={{ ...styles.container }}>
          <svg
            style={{ ...styles.shape }}
            version="1.1"
            viewBox="0 0 400 400">
            <g fill={color} fillRule="evenodd" >
              <path id="path-1" d={shapes} />
            </g>
          </svg>
        </div>
      </MySpringBackgroundOut>
      <SpringLink to="/test2">to test 2</SpringLink>
    </section>
    
  )
}

export default test
