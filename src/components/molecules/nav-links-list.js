import React from 'react'
import NavLink from '../atoms/nav-link'

export default () => (
  <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
    <div className="flex flex-col text-sm lg:flex-row">
      <NavLink href="/about">About</NavLink>
      <NavLink href="/books">Books</NavLink>
      <NavLink href="/videos">Videos</NavLink>
      <NavLink href="/podcasts">Podcasts</NavLink>
    </div>
  </div>
)
