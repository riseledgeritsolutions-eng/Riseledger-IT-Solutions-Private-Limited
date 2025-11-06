import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Navbar } from './components'
// import Home from './pages/Home'

const App = () => {

  return (
    // <Router>
    //   <div className='bg-white w-full overflow-hidden min-h-screen'>
    //     {/* Navbar */}
    //     <div className='w-full sticky top-0 z-30'>
    //       <Navbar />
    //     </div>

    //     {/* Routes */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className='bg-gradient-to-br from-blue-50 to-indigo-100 w-full min-h-screen flex items-center justify-center'>
      <div className='text-center px-4'>
        <h1 className='text-5xl md:text-7xl font-bold text-gray-800 mb-4'>
          Coming Soon
        </h1>
        <p className='text-xl md:text-2xl text-gray-600 mb-8'>
          Riseledger IT Solutions (Private) Limited
        </p>
        <p className='text-lg text-gray-500'>
          We're working on something amazing. Stay tuned!
        </p>
      </div>
    </div>
  )
}

export default App