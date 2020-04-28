import React from 'react'
import ImageHeaderCard from './ImageHeaderCard'
import Tag from '../atoms/tag'
import ReviewContainer from '../molecules/review-container'
import EpisodeReviewRow from '../molecules/episode-review-row'

export default ({
  headerSrc,
  headerAlt,
  headerText,
  content,
  tags,
  score,
  episodeReviews,
}) => (
  <ImageHeaderCard
    headerSrc={headerSrc}
    headerAlt={headerAlt}
    headerText={headerText}
    score={score}
  >
    <div className="p-4 text-primary-400">{content}</div>
    {episodeReviews && (
      <ReviewContainer>
        {episodeReviews.map(er => (
          <EpisodeReviewRow {...er} />
        ))}
      </ReviewContainer>
    )}
    <div className="flex flex-wrap p-4 border-t-2 border-secondary-400">
      {tags.map((tag, idx) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  </ImageHeaderCard>
)
