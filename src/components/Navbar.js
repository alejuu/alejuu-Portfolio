import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useContext } from 'react'
import { globalHistory as history } from '@reach/router'
import { SpringLink } from '../components/react-spring-animation'

import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider'

const Navbar = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  // console.log(state)
  // console.log(dispatch)

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
  const pageUrl = location.pathname
  let logoClass = 'text-black'
  let navClass = 'flex'
  if (pageUrl === '/') {
    logoClass = 'text-white'
    navClass = 'hidden'
  }
  const logoCurrent = logoClass
  const navCurrent = navClass

  return (
    <header>
      <div className='fixed z-50 top-auto transform rotate-90 mt-8'>
        <SpringLink to='/'>
          <span className={`font-serif font-bold text-xl tracking-tight underline ${logoCurrent}`}>
            {site.siteMetadata.title}
          </span>
        </SpringLink>
      </div>
      <div className='fixed z-50 w-full top-0 mx-auto'>
        <div className={`${navCurrent} flex-wrap items-center justify-end p-2`}>
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
              <SpringLink className='block md:inline-block mt-4 md:mt-0 md:ml-6 font-serif text-black' activeClassName='underline' key={link.title} to={link.route}>{link.title}</SpringLink>
            ))}
          </nav>
        </div>
        {state.theme}
        <button type='button' onClick={() => {
          dispatch({type: 'TOGGLE_THEME'})
        }}>
          Toggle Theme
        </button>
      </div>
    </header>
  )
}

export default Navbar
