import React from 'react'
import Section from '../atoms/section'
import SectionContent from '../molecules/section-content'
import MicrophoneAlt from '../images/microphone-alt'

export default () => (
  <Section className="bg-inverse">
    <SectionContent
      heading="I listen to podcasts!"
      headingColour="text-primary-400"
      buttonHref="/podcasts"
      buttonText="I wanna hear those"
      invertOnMobile={true}
    >
      <div className="flex items-center justify-center w-64 h-64 max-w-xs mb-8 border-8 rounded-full lg:mb-0 text-inverse bg-tertiary-400 border-secondary-400">
        <MicrophoneAlt className="w-32 h-32 fill-current stroke-current" />
      </div>
      <div className="max-w-sm mb-8 text-lg font-bold font-body text-primary-400 lg:mb-0">
        Podcasts seem like the best mix of books and videos
        <br />
        <br />
        They are popular but also they talk about
        <br />
        stuff in a more structured way
        <br />
        <br />
        <br />
        This is probably how I'll learn the most
      </div>
    </SectionContent>
  </Section>
)
