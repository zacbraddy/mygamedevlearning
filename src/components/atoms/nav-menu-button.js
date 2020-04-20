import React from 'react'

export default ({ onClick }) => (
  <div className="block lg:hidden">
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 border rounded text-secondary-400 border-secondary-400 hover:text-tertiary-400 hover:border-tertiary-400"
    >
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
)
