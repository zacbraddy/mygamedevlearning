import React from 'react'

const ArsTechnicaEmbed = (
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/videoseries?list=PLKBPwuu3eCYkScmqpD9xE7UZsszweVO0n"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Ars Technica War Stories series playlist"
  ></iframe>
)

const TimRuswickEmbed = (
  <iframe
    height="100%"
    width="100%"
    src="https://www.youtube.com/embed/videoseries?list=PL34tw91iHmmrqZl0WD3ZOuKcdqAVrcbtj"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Tim Ruswick top picks playlist"
  ></iframe>
)

export default [
  {
    headerSrc: ArsTechnicaEmbed,
    headerText: 'Ars Technica - War Stories series',
    score: 88,
    content: `This series is just so gosh darn good, is a large reason for why I got back into games dev in the first place. I love to hear the stories of software development "turned up to 11" there's just so much distilled wisdom here and I really enjoy consuming it. I've already watched quite a few of these but now I'm starting down my path again in earnest I think I'll go back and rewatch some of these to review them.`,
    tags: ['Super wisdom', 'Big picture lessons'],
  },
  {
    headerSrc: TimRuswickEmbed,
    headerText: 'Tim Ruswick - Top picks',
    content: `This is another guy that got me seriesly thinking about getting back into games, seems a bit like a "Gary V" for the indie dev crowd. The main difference between this guy and Gary V is that this guy seems to actually care about his audience in a capacity outside of trying to market to them. He goes through a lot of soft skills things but also shares game design and dev insight. I'm going to enjoy going through the top picks on his channel and seeing what I can glean from them.`,
    tags: [`Business & marketing`, 'Game design', 'Game programming'],
  },
]
