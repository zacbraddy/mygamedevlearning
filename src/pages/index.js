import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/atoms/section'
import AboutMe from '../components/organisms/about-me'
import Books from '../components/organisms/books'
import Videos from '../components/organisms/videos'
import Podcasts from '../components/organisms/podcasts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <header className="my-16 text-4xl font-bold text-center text-primary-400 font-heading md:my-32 md:text-5xl">
        ZackerTheHacker's Game Dev Journal
      </header>
    </Section>
    <AboutMe />
    <Books />
    <Videos />
    <Podcasts />
  </Layout>
)

export default IndexPage
