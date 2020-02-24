import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { SpringLink } from '../components/react-spring-animation'
import Loading from '../components/Animations/Loading'

const index = () => {
  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `webdeveloper`, `react`, `ui`]}
        title='Home'
      />
      <section className='w-full h-full'>
      <div className='grid grid-cols-6 gap-4 h-full'>
        <div className='col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-black'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='rounded-full h-48 w-48 flex items-center justify-center bg-white'>
              <span className='font-serif font-bold text-6xl tracking-tight underline'>A</span>
            </div>
            <div className='text-left mt-6'>
              <h1 className='font-serif font-bold text-3xl text-white'>Alejandro Juarez</h1>
              <h2 className='font-serif font-bold text-2xl text-white'>Web Developer</h2>
            </div>
          </div>
        </div>
        <div className='col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='max-w-screen-sm'>
              <h3 className='text-6xl'>About</h3>
              <h3 className='text-6xl'>
                <SpringLink to='/work'>Work</SpringLink>
              </h3>
              <h3 className='text-6xl'>Contact</h3>
            </div>
            <Loading />
          </div>
        </div>
      </div>
      </section>   
    </Layout>
  )
}

export default index
