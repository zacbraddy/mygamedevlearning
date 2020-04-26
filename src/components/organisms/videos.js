import React from 'react'
import Section from '../atoms/section'
import SectionContent from '../molecules/section-content'
import CameraMovie from '../images/camera-movie'

export default () => (
  <Section className="bg-primary-400">
    <SectionContent
      heading="I watch videos!"
      headingColour="text-inverse"
      butttonHref="/videos"
      buttonText="Those vidyas I wanna hear bout em"
    >
      <div className="max-w-sm mb-8 text-lg font-bold font-body text-inverse lg:mb-0">
        Videos aren't my favourite way to learn
        <br />
        <br />
        but I'm told that lots of people in game dev learn this way
        <br />
        <br />
        I'm slowly adjusting
      </div>
      <div className="flex items-center justify-center w-64 h-64 max-w-xs mb-8 border-8 rounded-full lg:mb-0 text-inverse bg-tertiary-400 border-secondary-400">
        <CameraMovie className="w-32 h-32 fill-current stroke-current" />
      </div>
    </SectionContent>
  </Section>
)
