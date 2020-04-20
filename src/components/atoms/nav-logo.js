import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo'

export default () => (
  <div className="flex items-center mr-6">
    <Link to="/">
      <Logo
        id="nav-logo"
        className="fill-current text-inverse hover:text-tertiary-400"
      />
    </Link>
  </div>
)
