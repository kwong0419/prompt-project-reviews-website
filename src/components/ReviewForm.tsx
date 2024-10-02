import React, {useState} from 'react'

const ReviewForm = ({addReview}) => {
  interface Errors {
    title?: string
    date?: string
    name?: string
    content?: string
  }

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    if (!title) newErrors.title = 'Title is required'
    if (!date) newErrors.date = 'Date is required'
    if (!name) newErrors.name = 'Name is required'
    if (!content) newErrors.content = 'Review content is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const newReview = {
        title,
        date,
        name,
        summary: content,
      }
      addReview(newReview)
      setTitle('')
      setDate('')
      setName('')
      setContent('')
      setErrors({})
    }
  }

  return (
    <section>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
          {errors.date && <p style={{color: 'red'}}>{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="content">Review:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          {errors.content && <p style={{color: 'red'}}>{errors.content}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ReviewForm
