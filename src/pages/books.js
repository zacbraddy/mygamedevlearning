import React from 'react'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Section from '../components/atoms/section'
import bookContent from '../content/books'
import ReviewItem from '../components/organisms/review-item'

export default () => (
  <Layout>
    <Header>Books</Header>
    <Section className="py-8 font-bold bg-primary-400 text-inverse">
      In my opinion books are the best knowledge gained per how spent available.
      They're boring yes but if you can push through you can gain a lot of
      insight from people's experience. Unfortunately it seems that due to that
      boredom factor there isn't a huge market for books in Game
      Development/Design as far as I can see. None the less, below is a list of
      books that I have had recommended to me that I either have read or I plan
      to read.
    </Section>
    <Section>
      {bookContent.map((book, idx) => (
        <ReviewItem key={idx} {...book} />
      ))}
    </Section>
  </Layout>
)
