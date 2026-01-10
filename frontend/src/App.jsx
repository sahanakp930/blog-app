import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import BlogDetails from './pages/BlogDetails'
import EditBlog from './pages/EditBlog'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
