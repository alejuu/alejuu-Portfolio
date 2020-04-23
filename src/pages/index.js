import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { BackgroundIndexTransitionSpring, OpacityTransitionSpring, TransitionSpringLink } from '../components/Animations/IndexAnimations'

const index = () => {
  return (
    <Layout>
      <SEO
        keywords={[`alejuu`, `webdeveloper`, `react`, `ui`]}
        title='Home'
      />
      <BackgroundIndexTransitionSpring className='w-full h-full'>
        <div className='grid grid-cols-6 row-gap-0 gap-4 h-full'>
          <div className='relative z-20 h-screen-1/2 md:h-full col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2'>
            <div className='flex flex-col items-center h-full'>
              <div className='invisible h-20 w-20 mt-auto'/>
              <div className='rounded-full h-32 w-32 md:h-48 md:w-48 flex items-center justify-center bg-white'>
                <span className='font-serif font-bold text-6xl tracking-tight underline'>A</span>
              </div>
              <div className='text-center md:text-left h-20 mb-auto'>
                <h1 className='font-bold text-2xl md:text-3xl text-white tracking-wide font-bold mt-2 md:mt-4'>Alejandro Juarez</h1>
                <h2 className='font-serif font-normal text-1xl md:text-2xl text-white'>Web Developer</h2>
              </div>
            </div>
          </div>
          <div className='h-screen-1/2 md:h-full col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4'>
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='relative z-10 max-w-screen-sm w-1/2 p-4'>
                <OpacityTransitionSpring className='h-full w-full text-center md:text-left text-white'>
                  <h3 className='text-4xl md:text-6xl tracking-wide font-bold'>About</h3>
                  <h3 className='text-4xl md:text-6xl tracking-wide font-bold'>
                    <TransitionSpringLink to='/work'>Work</TransitionSpringLink>
                  </h3>
                  <h3 className='text-4xl md:text-6xl tracking-wide font-bold'>Contact</h3>
                </OpacityTransitionSpring>
              </div>
            </div>
          </div>
        </div>
      </BackgroundIndexTransitionSpring>   
    </Layout>
  )
}

export default index
