// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Layout Comparison: Bootstrap vs Tailwind</h1>
      
      <div className="card">
        <nav>
          <Link to="/bootstrap" className="button">Bootstrap Version</Link>
          {" | "}
          <Link to="/tailwind" className="button">Tailwind Version</Link>
        </nav>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>

      <Routes>
        <Route 
          path="/bootstrap" 
          element={<iframe 
            src="/src/bootstrap-version/index.html"
            style={{ width: '100%', height: '600px', border: '1px solid #ccc', marginTop: '20px' }} 
          />} 
        />
        <Route 
          path="/tailwind" 
          element={<iframe 
            src="/src/tailwind-version/index.html"
            style={{ width: '100%', height: '600px', border: '1px solid #ccc', marginTop: '20px' }} 
          />} 
        />
      </Routes>

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </Router>
  )
}

export default App
