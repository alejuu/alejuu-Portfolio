import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

// export default () => (
//   <Layout>
//     <h1>alejuu</h1>
//     <h2>Port</h2>
//   </Layout>
// )

const index = () => {
  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `webdeveloper`, `react`, `ui`]}
        title="Home"
      />
      <h1>alejuu</h1>
      <h2>Portfolio</h2>
    </Layout>
  )
}

export default index
