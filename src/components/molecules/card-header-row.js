import React from 'react'

export default ({ src, alt, children }) => (
  <div className="flex flex-col items-center w-full md:border-b-2 md:flex-row border-secondary-400">
    <div className="w-full md:border-r-2 md:w-64 border-secondary-400">
      <img src={src} alt={alt} />
    </div>
    <div className="flex-grow m-4 text-lg font-bold text-center border-b-2 md:border-none border-secondary-400 md:text-left text-primary-400">
      {children}
    </div>
  </div>
)
