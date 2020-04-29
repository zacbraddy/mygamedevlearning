import React from 'react'
import Card from '../atoms/card'

export default ({ children, headerText, headerSrc, score }) => (
  <Card>
    <div>
      <div className="w-full h-56 md:h-146">{headerSrc}</div>
      <div className="flex flex-col m-4 text-lg font-bold text-primary-400">
        <div className="my-4">{headerText}</div>
        {score && <div className="my-4">Score: {score} out of 100</div>}
      </div>
    </div>
    {children}
  </Card>
)
