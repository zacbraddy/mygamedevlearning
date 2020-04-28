import React from 'react'

export default ({ episodeTitle, score, content }) => (
  <div className="p-8 text-primary-400">
    <h3 className="py-2 text-lg font-bold">{episodeTitle}</h3>
    <div className="py-2">
      <b>Score:</b> {score} out of 100
    </div>
    <div className="py-2">{content}</div>
  </div>
)
