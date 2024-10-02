import React, {useState} from 'react'
import './App.css' // Import the CSS file
import Header from './components/Header'
import ReviewsSection from './components/ReviewsSection'
import ReviewForm from './components/ReviewForm'
import Footer from './components/Footer'

const App = () => {
  const [reviews, setReviews] = useState([
    {
      title: 'Great Product',
      date: '2023-10-01',
      name: 'Alice',
      summary: 'I really enjoyed using this product. It exceeded my expectations!',
    },
    {
      title: 'Not Bad',
      date: '2023-09-15',
      name: 'Bob',
      summary: 'The product is decent, but there is room for improvement.',
    },
    // Add more reviews as needed
  ])

  const addReview = (newReview) => {
    setReviews([...reviews, newReview])
  }

  return (
    <div>
      <Header />
      <main>
        <h1>Reviews Website Prompt Project</h1>
        <ReviewsSection reviews={reviews} />
        <ReviewForm addReview={addReview} />
      </main>
      <Footer />
    </div>
  )
}

export default App
