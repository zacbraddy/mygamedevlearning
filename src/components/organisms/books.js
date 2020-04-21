import React from 'react'
import Section from '../atoms/section'
import SectionContent from '../molecules/section-content'
import BookHeart from '../images/book-heart'

export default () => (
  <Section classname="bg-inverse">
    <SectionContent
      heading="I read books!"
      headingColour="text-primary-400"
      butttonHref="/books"
      buttonText="Check out all dem book I read"
    >
      <div className="flex items-center justify-center w-64 h-64 max-w-xs mb-8 border-8 rounded-full lg:mb-0 text-inverse bg-tertiary-400 border-secondary-400">
        <BookHeart className="w-32 h-32 fill-current stroke-current" />
      </div>
      <div className="max-w-sm mb-8 text-lg font-bold font-body text-primary-400 lg:mb-0">
        I read like....
        <br />
        ...
        <br />
        ...a metric heck tonne of books
        <br />
        <br />
        Might make me a weird Game Dev
        <br />
        <br />I just think books make for a structure for your learning
      </div>
    </SectionContent>
  </Section>
)
