import React from 'react'
import Card from '../atoms/card'
import ImageCardHeaderRow from '../molecules/image-card-header-row'

export default ({ children, headerText, headerSrc, headerAlt, score }) => (
  <Card>
    <ImageCardHeaderRow src={headerSrc} alt={headerAlt}>
      <div>
        <div>{headerText}</div>
        {score && <div>Score: {score} out of 100</div>}
      </div>
    </ImageCardHeaderRow>
    {children}
  </Card>
)
