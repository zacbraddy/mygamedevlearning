import React from 'react'
import { Link } from 'gatsby'

export default ({ children, href }) => (
  <Link
    to={href}
    className="block mt-4 mr-8 text-xl font-bold lg:inline-block lg:mt-0 text-inverse hover:text-tertiary-400"
  >
    {children}
  </Link>
)
