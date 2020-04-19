import React from 'react'

export default ({ children, className }) => (
  <section className={`flex justify-center ${className}`}>
    <div className="max-w-3xl mx-4">{children}</div>
  </section>
)
