import React from 'react'
import Section from '../atoms/section'

export default ({ children }) => (
  <Section>
    <header className="my-16 text-4xl font-bold text-center text-primary-400 font-heading md:my-32 md:text-5xl">
      {children}
    </header>
  </Section>
)
