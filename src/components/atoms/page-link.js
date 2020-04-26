import React from 'react'
import { Link } from 'gatsby'

export default ({ children, href }) => (
  <Link
    to={href}
    className="block p-4 text-xl font-bold text-center border-4 rounded border-secondary-400 bg-tertiary-400 font-heading lg:inline-block lg:mt-0 text-inverse hover:text-secondary-400 leading-5"
  >
    {children}
  </Link>
)
