import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const index = () => {
  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `webdeveloper`, `react`, `ui`]}
        title='Home'
      />
      <section className='h-screen flex items-center justify-center'>
        <h1 className='bg-yellow-600 text-3xl font-bold inline-block my-8 p-3'>alejuu</h1>
        <h2 className='bg-yellow-400 text-2xl font-bold inline-block my-8 p-3'>
        Portfolio
        </h2>
      </section>
    </Layout>
  )
}

export default index
