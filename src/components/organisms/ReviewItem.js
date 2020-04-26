import React from 'react'
import ImageHeaderCard from './ImageHeaderCard'
import Tag from '../atoms/tag'

export default ({ headerSrc, headerAlt, headerText, content, tags }) => (
  <ImageHeaderCard
    headerSrc={headerSrc}
    headerAlt={headerAlt}
    headerText={headerText}
  >
    <div className="p-4">{content}</div>
    <div className="flex flex-wrap p-4 border-t-2 border-secondary-400">
      {tags.map((tag, idx) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  </ImageHeaderCard>
)