import React from 'react'
import Card from '../atoms/card'
import CardHeaderRow from '../molecules/card-header-row'

export default ({ children, headerText, headerSrc, headerAlt }) => (
  <Card>
    <CardHeaderRow src={headerSrc} alt={headerAlt}>
      {headerText}
    </CardHeaderRow>
    {children}
  </Card>
)
