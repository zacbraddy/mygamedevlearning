import React from 'react'
import Section from '../atoms/section'
import SectionContent from '../molecules/section-content'
import zacPhoto from '../../images/me.jpeg'
import Arrow from '../images/arrow'

export default () => (
  <Section className="bg-primary-400">
    <SectionContent
      heading="About Stuff"
      headingColour="text-inverse"
      buttonHref="/about"
      buttonText="Wanna read about me and this site?"
    >
      <div className="max-w-sm mb-8 text-lg font-bold font-body text-inverse lg:mb-0">
        Hey! I'm Zac
        <br />
        <br />
        Some places I call myself TinfoilSaint
        <br />
        Some places I call myself ZackerTheHacker
        <br />
        <br />
        Not sure who you know me as but...HI!
      </div>
      <div className="hidden w-20 lg:block">
        <div className="w-24 mb-4 text-lg font-bold text-inverse">
          That's me!
        </div>
        <Arrow className="fill-tertiary stroke-secondary" />
      </div>
      <div className="max-w-xs mb-8 lg:mb-0">
        <img
          className="rounded-full"
          src={zacPhoto}
          alt="Zac Braddy doing his best instagram pose"
        />
      </div>
    </SectionContent>
  </Section>
)
