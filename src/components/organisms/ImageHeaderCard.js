import React from 'react'
import Card from '../atoms/card'
import CardHeaderRow from '../molecules/card-header-row'

export default ({ children, headerText, headerSrc, headerAlt, score }) => (
  <Card>
    <CardHeaderRow src={headerSrc} alt={headerAlt}>
      <div>
        <div>{headerText}</div>
        {score && <div>Score: {score} out of 100</div>}
      </div>
    </CardHeaderRow>
    {children}
  </Card>
)
