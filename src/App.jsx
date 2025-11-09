import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import Home from './pages/Home'

const App = () => {

  return (
    <Router>
      <div className='bg-white w-full overflow-hidden min-h-screen'>
        {/* Navbar */}
        <div className='w-full sticky top-0 z-30'>
          <Navbar />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App