import React from 'react'
import { MySpringBackgroundIn, SpringLink } from '../components/Transitions/BackgroundIn'

const styles = {
  container: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
  shape: { width: 300, height: 300, willChange: 'transform' }
}
const color = '#70C1B3'
// const scale = 1.5
const shapes = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
// const rotation = '45deg'

const test = () => {
  return (
    <section>
      <MySpringBackgroundIn>
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
      </MySpringBackgroundIn>
      <SpringLink to="/test">to test </SpringLink>
    </section>
    
  )
}

export default test
