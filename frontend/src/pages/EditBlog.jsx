import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchBlog()
  }, [id])

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Blog not found')
        }
        throw new Error('Failed to fetch blog')
      }
      const data = await response.json()
      setTitle(data.title)
      setContent(data.content)
      setFetchLoading(false)
    } catch (err) {
      setError(err.message)
      setFetchLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })

      if (!response.ok) {
        throw new Error('Failed to update blog')
      }

      // Navigate to blog details page after successful update
      navigate(`/blog/${id}`)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading blog...</p>
      </div>
    )
  }

  if (error && !title && !content) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Blog Post</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter blog title..."
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
            Content *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-64 resize-none"
            placeholder="Write your blog content here..."
            required
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Updating...' : 'Update Blog'}
          </button>
          <button
            type="button"
            onClick={() => navigate(`/blog/${id}`)}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBlog
