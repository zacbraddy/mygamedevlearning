import React from 'react'
import { Link } from 'gatsby'
import './styles.css';

export default ({ children, href }) => (
  <Link
    to={href}
    className="mt-4 mr-8 nav-link text-xl font-bold border-b-4 border-transparent font-heading lg:mt-0 text-inverse hover:text-tertiary-400 hover:border-tertiary-400 leading-5"
  >
    {children}
  </Link>
)
