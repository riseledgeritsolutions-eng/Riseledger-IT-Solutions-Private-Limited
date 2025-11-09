import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className='w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-6 sm:px-16'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo/Brand */}
          <div
            onClick={() => navigate('/')}
            className='cursor-pointer group'
          >
            <img
              src='/Riseledger-logo-Png.png'
              alt='Riseledger IT Solutions'
              className='h-12 md:h-14 object-contain transition-transform group-hover:scale-105'
            />
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            <li
              onClick={() => scrollToSection('home')}
              className='font-poppins font-medium cursor-pointer text-[15px] text-gray-700 hover:text-primary transition-all relative group'
            >
              Home
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
            </li>
            <li
              onClick={() => scrollToSection('features')}
              className='font-poppins font-medium cursor-pointer text-[15px] text-gray-700 hover:text-primary transition-all relative group'
            >
              Services
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
            </li>
            <li
              onClick={() => scrollToSection('substores')}
              className='font-poppins font-medium cursor-pointer text-[15px] text-gray-700 hover:text-primary transition-all relative group'
            >
              Clients
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('footer')}
                className='bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-secondary hover:shadow-lg transition-all duration-300'
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {isMenuOpen ? (
              <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 space-y-2 border-t border-gray-100'>
            <div
              onClick={() => scrollToSection('home')}
              className='block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all cursor-pointer'
            >
              Home
            </div>
            <div
              onClick={() => scrollToSection('features')}
              className='block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all cursor-pointer'
            >
              Services
            </div>
            <div
              onClick={() => scrollToSection('substores')}
              className='block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all cursor-pointer'
            >
              Clients
            </div>
            <div
              onClick={() => scrollToSection('footer')}
              className='block px-4 py-3 bg-primary text-white hover:bg-secondary rounded-lg transition-all cursor-pointer text-center font-semibold'
            >
              Contact Us
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
