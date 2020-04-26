import React from 'react'
import Hamburger from '../images/hamburger'

export default ({ onClick }) => (
  <div className="block lg:hidden">
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 border-2 rounded outline-none text-secondary-400 border-secondary-400 hover:text-tertiary-400 hover:border-tertiary-400 focus:outline-none"
    >
      <Hamburger className="w-4 h-4 fill-current" />
    </button>
  </div>
)
