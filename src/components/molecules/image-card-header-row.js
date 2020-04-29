import React from 'react'

export default ({ src, alt, children }) => (
  <div className="flex flex-col items-center w-full md:flex-row">
    <div className="w-full md:w-64">
      <img src={src} alt={alt} />
    </div>
    <div className="flex-grow m-4 text-lg font-bold text-center border-b-2 md:border-none border-secondary-400 md:text-left text-primary-400">
      {children}
    </div>
  </div>
)
