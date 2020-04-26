import React from 'react'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Section from '../components/atoms/section'

export default () => (
  <Layout>
    <Header>Videos</Header>
    <Section className="py-8 font-bold bg-primary-400 text-inverse">
      My problem with videos especially on YouTube is that there is such a low
      barrier to entry. Every man and his dog has a YouTube channel and not all
      of them have valuable information. Still this seems like a popular way for
      Game Developers to learn so I'll buy into it. Here is a curated list of
      the videos and YouTube channels I've found with good info and that I find
      entertaining and with hosts that seem knowledgable.
    </Section>
    <Section></Section>
  </Layout>
)
