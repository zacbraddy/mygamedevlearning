import React from 'react'

export default ({ children, className }) => (
  <section className={`flex justify-center ${className}`}>
    <div className="w-full max-w-4xl mx-4">{children}</div>
  </section>
)
