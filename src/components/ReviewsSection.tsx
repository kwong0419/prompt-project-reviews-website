import React from 'react'

const ReviewsSection = ({reviews}) => {
  return (
    <section className="reviews-section">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.title}</h3>
            <p>
              <em>{review.date}</em> by {review.name}
            </p>
            <p>{review.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ReviewsSection
