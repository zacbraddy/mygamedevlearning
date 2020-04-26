import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/organisms/about'
import Books from '../components/organisms/books'
import Videos from '../components/organisms/videos'
import Podcasts from '../components/organisms/podcasts'
import Header from '../components/organisms/header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>ZackerTheHacker's Game Dev Journal</Header>
    <About />
    <Books />
    <Videos />
    <Podcasts />
  </Layout>
)

export default IndexPage
