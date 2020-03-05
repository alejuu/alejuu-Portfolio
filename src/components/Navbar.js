import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { globalHistory as history } from '@reach/router'
import { SpringLink } from '../components/react-spring-animation'

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteURL
        }
      }
    }
  `)

  const { location } = history
  // console.log( location.pathname )

  const homeUrl = location.pathname
  let homeClass = 'flex'
  if (homeUrl === '/') {
    homeClass = 'hidden'
  }
  const currentClass = homeClass

  return (
    <header>
      <div className='fixed z-10 top-auto transform rotate-90 mt-8'>
        <SpringLink to='/'>
          <span className='font-serif font-bold text-xl tracking-tight underline text-white'>
            {site.siteMetadata.title}
          </span>
        </SpringLink>
      </div>
      <div className={`${currentClass} flex-wrap items-center justify-end fixed z-10 w-full top-0 mx-auto p-2`}>
        <button
          className='block md:hidden border border-white flex items-center px-3 py-2 rounded'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/work`,
              title: `Work`
            },
          ].map(link => (
            <SpringLink className='block md:inline-block mt-4 md:mt-0 md:ml-6 font-serif text-white' activeClassName='underline' key={link.title} to={link.route}>{link.title}</SpringLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
