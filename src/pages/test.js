import React from 'react'
import { MySpringBackgroundOut, SpringLink } from '../components/Transitions/BackgroundOut'

// const styles = {
//   container: { height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
//   shape: { width: 300, height: 300, willChange: 'transform' }
// }
// const color = '#247BA0'
// const scale = 0.6
// const shapes = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
// const rotation = '0deg'

const test = () => {
  return (
    <section>
      <SpringLink to="/test2">to test 2</SpringLink>
      <MySpringBackgroundOut />

    </section>
    
  )
}

export default test
