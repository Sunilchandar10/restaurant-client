import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <Routes>
          <Route path="/" element={<h1>Welcome to Home</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
