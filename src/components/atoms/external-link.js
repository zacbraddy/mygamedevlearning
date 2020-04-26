import React from 'react'

export default ({ href, children }) => (
  <a
    href={href}
    className="underline text-secondary-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
