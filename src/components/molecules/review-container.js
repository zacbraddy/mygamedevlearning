import React, { useState } from 'react'

export default ({ children }) => {
  const [showingReviews, setShowingReviews] = useState(false)
  return (
    <div className="border-t-2 border-secondary-400">
      <div className="text-lg font-bold text-center text-primary-400">
        Reviews
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={() => setShowingReviews(!showingReviews)}
          className="px-4 py-2 font-bold border-4 rounded border-secondary-400 bg-tertiary-400 text-secondary-400"
        >
          {showingReviews ? 'Hide' : 'Show'}
        </button>
      </div>
      <div className={`${showingReviews ? '' : 'hidden'}`}>{children}</div>
    </div>
  )
}
