import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Simple Blog
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Create Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
