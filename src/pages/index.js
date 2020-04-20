import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import zacPhoto from '../images/me.jpeg'
import Arrow from '../components/images/arrow'
import Section from '../components/atoms/section'
import PageLink from '../components/atoms/page-link'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <header className="my-16 text-4xl font-bold text-center text-primary-400 font-heading md:my-32 md:text-5xl">
        ZackerTheHacker's Game Dev Journal
      </header>
    </Section>
    <Section className="bg-primary-400">
      <div className="flex flex-col items-center w-full my-16">
        <div className="mb-8 text-4xl font-bold font-heading text-inverse md:text-4xl">
          About Me
        </div>
        <div className="flex flex-col-reverse items-center w-full mb-4 lg:flex-row lg:justify-between">
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
            <img className="rounded-full" src={zacPhoto} alt="A photo of zac" />
          </div>
        </div>
        <PageLink href="/about-me">Wanna read more about me?</PageLink>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
