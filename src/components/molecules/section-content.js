import React from 'react'
import PageLink from '../atoms/page-link'

export default ({
  heading,
  headingColour,
  children,
  buttonHref,
  buttonText,
  invertOnMobile,
}) => (
  <div className="flex flex-col items-center w-full my-16">
    <div
      className={`mb-8 text-4xl font-bold font-heading ${headingColour} md:text-4xl`}
    >
      {heading}
    </div>
    <div
      className={`flex ${
        invertOnMobile ? 'flex-col' : 'flex-col-reverse'
      } items-center w-full mb-4 lg:flex-row lg:justify-between`}
    >
      {children}
    </div>
    <PageLink href={buttonHref}>{buttonText}</PageLink>
  </div>
)
