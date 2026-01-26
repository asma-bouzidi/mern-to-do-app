# MERN Todo App

A modern, full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a complete task management solution with a beautiful, responsive user interface.

![Todo App Preview](./frontend/public/preview.png)

## ✨ Features

- **Create Todos** - Add new tasks with a single click
- **Edit Todos** - Modify task text inline with easy-to-use edit mode
- **Delete Todos** - Remove unwanted tasks from your list
- **Toggle Completion** - Mark tasks as complete or incomplete
- **View Details** - Click on any task to view its full details including timestamps
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Beautiful gradient backgrounds with smooth animations
- **Real-time Updates** - Instant feedback and state management

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing

## 📁 Project Structure

```
mern-to-do-app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── models/
│   │   └── todo.model.js      # Todo Mongoose model
│   ├── routes/
│   │   └── todo.route.js      # API routes for todos
│   ├── server.js              # Express server entry point
│   └── .env                   # Environment variables
├── frontend/
│   ├── public/
│   │   └── vite.svg          # Vite logo
│   ├── src/
│   │   ├── assets/           # Static assets
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   └── HomeComponent.jsx    # Main todo list component
│   │   │   └── todo/
│   │   │       └── TodoComponent.jsx    # Individual todo details
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
├── .gitignore                # Git ignore rules
├── package.json              # Root package.json (backend scripts)
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher recommended)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-to-do-app.git
   cd mern-to-do-app
   ```

2. **Set up the backend**
   ```bash
   # Navigate to backend directory
   cd backend
   
   # Install backend dependencies
   npm install
   
   # Create environment file
   cp .env.example .env
   
   # Configure your environment variables (see below)
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/mern-todo-app
   
   # Or use MongoDB Atlas:
   # MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-todo-app
   ```

4. **Set up the frontend**
   ```bash
   # Navigate to frontend directory
   cd ../frontend
   
   # Install frontend dependencies
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   # From the backend directory
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   # From the frontend directory
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   # From the frontend directory
   npm run build
   
   # Then run the backend in production mode
   # From the backend directory
   npm start
   ```

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get a single todo by ID |
| POST | `/api/todos` | Create a new todo |
| PATCH | `/api/todos/:id` | Update a todo (text and/or completed) |
| DELETE | `/api/todos/:id` | Delete a todo |

### Request/Response Examples

**Create Todo**
```json
// POST /api/todos
// Body:
{
  "text": "Buy groceries"
}

// Response:
{
  "text": "Buy groceries",
  "completed": false,
  "_id": "64f8a1b2c9e77a0012345678",
  "createdAt": "2024-09-15T10:30:00.000Z",
  "updatedAt": "2024-09-15T10:30:00.000Z"
}
```

**Update Todo**
```json
// PATCH /api/todos/:id
// Body (partial update):
{
  "completed": true
}

// Response:
{
  "_id": "64f8a1b2c9e77a0012345678",
  "text": "Buy groceries",
  "completed": true,
  "createdAt": "2024-09-15T10:30:00.000Z",
  "updatedAt": "2024-09-15T11:00:00.000Z"
}
```

## 🎨 User Interface

### Home Page
The main page displays:
- A clean input field to add new tasks
- A list of all todos with completion status
- Edit and delete buttons for each task
- Visual indicators for completed tasks

### Todo Details Page
Clicking on any task takes you to a detailed view showing:
- Task description
- Completion status
- Creation timestamp
- Last update timestamp

## 🔧 Configuration

### Backend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGO_URI` | MongoDB connection string | mongodb://localhost:27017/mern-todo-app |

### Frontend Configuration

The frontend is configured to proxy API requests to the backend during development. This is set up in `vite.config.js`.

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 📦 Building for Production

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Set NODE_ENV to production**
   ```bash
   # In backend/.env
   NODE_ENV=production
   ```

3. **Start the production server**
   ```bash
   cd backend
   npm start
   ```

The production build serves the React app from the `frontend/dist` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

**Made with ❤️ using MERN Stack**

