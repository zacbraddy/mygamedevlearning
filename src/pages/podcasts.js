import React from 'react'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Section from '../components/atoms/section'
import podcastContent from '../content/podcasts'
import ReviewItem from '../components/organisms/ReviewItem'

export default () => (
  <Layout>
    <Header>Podcasts</Header>
    <Section className="py-8 font-bold bg-primary-400 text-inverse">
      I'm not huge podcast consumer but they seem popular in the industry and
      their format means that I can get a little bit of the structured learning
      that I enjoy getting out of books. Podcasts often talk about specific
      topics in depth. It's also a great way for me to get introduced to names
      in the industry that I don't already know. Quite a lot of these were
      suggested to me by Ivory lion games on the Games Dev Underground discord.
    </Section>
    <Section>
      {podcastContent.map((podcast, idx) => (
        <ReviewItem key={idx} {...podcast} />
      ))}
    </Section>
  </Layout>
)
