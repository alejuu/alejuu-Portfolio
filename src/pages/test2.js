import React from 'react'
import { MySpringBackgroundIn, SpringLink } from '../components/Transitions/BackgroundIn'

// const styles = {
//   container: { height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'background' },
//   shape: { width: 300, height: 300, willChange: 'transform' }
// }
// const color = '#70C1B3'
// const scale = 1.5
// const shapes = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
// const rotation = '45deg'

const test = () => {
  return (
    <section>
      <SpringLink to="/test">to test </SpringLink>
      <MySpringBackgroundIn />
 
    </section>
    
  )
}

export default test
