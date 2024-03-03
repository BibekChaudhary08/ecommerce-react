import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import NoPage from './pages/nopage/NoPage'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/' element= {<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App