import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const apiUrl = `http://localhost:5000/api/blogs` // Temporary fix
      console.log('Fetching from:', apiUrl) // Debug line
      const response = await fetch(apiUrl)
      console.log('Response status:', response.status) // Debug line
      console.log('Response headers:', response.headers.get('content-type')) // Debug line
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs')
      }
      const data = await response.json()
      setBlogs(data)
      setLoading(false)
    } catch (err) {
      console.error('Fetch error:', err) // Debug line
      setError(err.message)
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error('Failed to delete blog')
        }
        // Refresh blogs after deletion
        fetchBlogs()
      } catch (err) {
        setError(err.message)
      }
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Loading blogs...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Blog Posts</h1>
      
      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No blog posts yet.</p>
          <Link 
            to="/create" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Create First Blog
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.content}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div className="flex space-x-2">
                <Link 
                  to={`/blog/${blog._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Read More
                </Link>
                <Link 
                  to={`/edit/${blog._id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors text-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
