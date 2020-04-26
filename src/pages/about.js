import React from 'react'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Card from '../components/atoms/card'
import Section from '../components/atoms/section'
import CardHeaderRow from '../components/molecules/card-header-row'
import zacPhoto from '../images/me.jpeg'
import ExternalLink from '../components/atoms/external-link'

export default () => (
  <Layout>
    <Header>About</Header>
    <Section>
      <Card>
        <CardHeaderRow src={zacPhoto} alt="Zac giving a big thumbs up">
          Everything you ever wanted to know about me and this site
        </CardHeaderRow>
        <div className="p-4 text-sm font-bold text-primary-400">
          <p>
            Hey, I'm Zac. In some places I call myself ZackerTheHacker and other
            places I call myself TinfoilSaint.
          </p>
          <br />
          <p>
            I am a software developer by day. Right now I'm a Lead Developer and
            Architect at{' '}
            <ExternalLink href="https://koodoo.co.uk">Koodoo</ExternalLink>
          </p>
          <br />
          <p>
            I've learned a number of lessons throughout the course of my career
            as a software developer but none more important than how to
            effective learn new skills
          </p>
          <br />
          <p>
            So when I decided that I was going to pull my Game Developer boots
            back on after a LONG break I knew there were a couple of things that
            were going to be important to my personal development as a game
            creator
          </p>
          <br />
          <p>
            My journey was inevitably going to be very similar to the one I've
            had in software development and in that journey the things that I've
            found that have accelerated my learning the most have been:
          </p>
          <br />
          <p>
            <ol class="ml-8 list-decimal">
              <li>
                Leveraging my current skills and knowledge to accelerate my
                learning of this new skill
              </li>
              <li>Finding people who know a lot more than me</li>
              <li>Listening to everything they say</li>
              <li>Taking on board their advice and recording it</li>
              <li>Using their advice to direct my learning</li>
              <li>Using their advice to build things</li>
              <li>USING THEIR ADVICE TO BUILD THINGS!!!</li>
            </ol>
          </p>
          <br />
          <p>
            So, enter this site. Building a website to record the things that
            I'm told to look at and learn from by other means that I'm not only
            listening to people better than me but I'm actually recording what
            they're telling me. It leverages the skills I already have to
            accelerate my learning and helps centralise the knowledge I'm
            collecting. By reviewing the things I'm ready, writing and watching
            I'm able to try and crystalise the things I'm learning in my own
            mind. Hopefully by doing this I can more effectively build things
            with the knowledge I'm collecting
          </p>
          <br />
          <p>
            Possible best of all is the fact that by recording things like this
            I can maybe help people who are behind me in my journey and help
            give them a leg up on their learning
          </p>
        </div>
      </Card>
    </Section>
  </Layout>
)
