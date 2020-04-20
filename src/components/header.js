import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './images/logo'
import NavLinksList from './molecules/nav-links-list'

const Header = ({ siteTitle }) => (
  <nav className="fixed top-0 flex justify-center w-full p-4 bg-primary-400">
    <div className="flex flex-col items-center w-full h-24 overflow-hidden lg:h-auto lg:flex-row">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl lg:w-auto">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link to="/">
            <Logo id="nav-logo" className="fill-current text-inverse" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-4 lg:mt-0">
        <NavLinksList />
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
