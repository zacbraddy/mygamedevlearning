import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import zacPhoto from '../images/me.jpeg'
import Arrow from '../components/images/arrow'
import Section from '../components/atoms/section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <h1 className="my-16 text-4xl text-center text-primary-400 font-heading md:my-32 md:text-5xl">
        ZackerTheHacker's Game Dev Journal
      </h1>
    </Section>
    <Section className="bg-primary-400">
      <div className="flex flex-col-reverse items-center my-16 md:flex-row">
        <div className="text-lg text-center font-body text-inverse">
          Hey! I'm Zac.
          <br />
          <br />
          Some places I call myself ZackerTheHacker, some places I call myself
          TinfoilSaint.
          <br />
          <br />
          Not sure who you know me as but...HI!
        </div>
        <div className="hidden w-20 mx-8 md:block">
          <Arrow className="fill-tertiary stroke-secondary" />
          <div className="w-24 text-lg font-bold text-secondary-400">
            That's me!
          </div>
        </div>
        <div class="mb-4">
          <img className="rounded-full" src={zacPhoto} alt="A photo of zac" />
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
