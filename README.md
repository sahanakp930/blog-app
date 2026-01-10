# Simple Blog Application

A clean, beginner-friendly blog application built with React, Node.js, Express, and MongoDB Atlas. Perfect for college mini-projects and academic submissions.

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios/Fetch** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB Atlas** (cloud database)
- **Mongoose** ODM
- **CORS** for cross-origin requests

## 📁 Project Structure

```
blogApp/
├── .env                    # Environment variables (shared)
├── README.md              # This file
├── backend/               # Backend server
│   ├── models/
│   │   └── Blog.js        # Blog schema/model
│   ├── routes/
│   │   └── blogRoutes.js  # API routes
│   ├── package.json       # Backend dependencies
│   └── server.js          # Express server
└── frontend/              # React frontend
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx # Navigation component
    │   ├── pages/
    │   │   ├── Home.jsx           # Blog list page
    │   │   ├── CreateBlog.jsx     # Create blog page
    │   │   ├── BlogDetails.jsx    # Blog details page
    │   │   └── EditBlog.jsx       # Edit blog page
    │   ├── App.jsx        # Main app component
    │   ├── main.jsx       # Entry point
    │   └── index.css      # Tailwind CSS
    ├── index.html
    ├── package.json       # Frontend dependencies
    ├── tailwind.config.js
    ├── postcss.config.js
    └── vite.config.js
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier is sufficient)
- Git (optional)

### Step 1: Clone/Download the Project
```bash
# If using git
git clone <repository-url>
cd blogApp

# Or download and extract the zip file
```

### Step 2: Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free M0 cluster)
4. Create a database user with username and password
5. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

### Step 3: Configure Environment Variables
1. Open the `.env` file in the root directory
2. Update the `MONGODB_URI` with your connection string:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/blogApp?retryWrites=true&w=majority

# Backend Port
PORT=5000

# Frontend API URL (used by React)
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Install Dependencies

#### Backend Dependencies
```bash
cd backend
npm install
```

#### Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 5: Run the Application

#### Start Backend Server
```bash
cd backend
npm start
# or for development with auto-restart
npm run dev
```
Backend will run on `http://localhost:5000`

#### Start Frontend Development Server
Open a new terminal:
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:3000`

## 📱 Application Features

### Core Functionalities (5 Required)
1. **Create Blog Post** - Add new blog with title and content
2. **View All Blogs** - Home page showing all blog posts
3. **View Single Blog** - Detailed view of individual blog post
4. **Edit Blog Post** - Modify existing blog content
5. **Delete Blog Post** - Remove blog posts

### Additional Features
- **Created Date** - Automatic timestamp for each blog
- **Form Validation** - Basic validation for empty fields
- **Responsive Design** - Works on desktop and mobile
- **Clean UI** - Simple and intuitive interface

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | Get all blog posts |
| GET | `/api/blogs/:id` | Get single blog post |
| POST | `/api/blogs` | Create new blog post |
| PUT | `/api/blogs/:id` | Update blog post |
| DELETE | `/api/blogs/:id` | Delete blog post |

## 🎨 UI Components

### Pages
- **Home Page** (`/`) - Grid layout of all blog posts
- **Create Blog** (`/create`) - Form to create new blog
- **Blog Details** (`/blog/:id`) - Full blog post view
- **Edit Blog** (`/edit/:id`) - Form to edit existing blog

### Navigation
- Simple navbar with "Home" and "Create Blog" buttons
- Responsive design with hover effects

## 🔧 Environment Configuration

### Shared .env File
The project uses a single `.env` file in the root directory that serves both frontend and backend:

- **Backend** reads: `MONGODB_URI` and `PORT`
- **Frontend** reads: `VITE_API_URL` (Vite automatically prefixes with `VITE_`)

This approach simplifies configuration and ensures consistency between frontend and backend.

## 📝 Database Schema

```javascript
// Blog Model
{
  title: String (required),
  content: String (required),
  createdAt: Date (default: current date)
}
```

## 🚀 Deployment Notes

### Backend Deployment
- Update `MONGODB_URI` to production MongoDB Atlas string
- Set `PORT` environment variable as required by hosting service

### Frontend Deployment
- Update `VITE_API_URL` to production backend URL
- Build with `npm run build`
- Deploy `dist` folder to hosting service

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your MongoDB Atlas connection string
   - Check if your IP is whitelisted in Atlas
   - Ensure database user has correct permissions

2. **CORS Error**
   - Backend should be running on port 5000
   - Frontend should be running on port 3000
   - Check CORS configuration in server.js

3. **Environment Variables Not Working**
   - Ensure `.env` file is in root directory
   - Backend uses `../.env` path to access it
   - Frontend variables must start with `VITE_`

4. **Tailwind CSS Not Working**
   - Run `npm install` in frontend directory
   - Check `tailwind.config.js` and `postcss.config.js`
   - Ensure `index.css` includes Tailwind directives

## 📚 Learning Outcomes

This project demonstrates:
- **Full-stack Development** - Frontend + Backend + Database
- **REST API Design** - Proper HTTP methods and status codes
- **Database Integration** - MongoDB with Mongoose ODM
- **Modern Frontend** - React hooks, routing, and state management
- **Responsive Design** - Tailwind CSS utility classes
- **Environment Management** - Shared configuration approach

Perfect for academic demonstrations and viva explanations!
