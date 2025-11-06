import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='w-full flex py-4 sm:py-6 justify-between items-center navbar bg-white shadow-md px-4 sm:px-8'>
      {/* Logo/Brand */}
      <div
        onClick={() => navigate('/')}
        className='cursor-pointer'
      >
        <img
          src='/Web-Collect-hub-logo-png.png'
          alt='CollectHub IT Solutions'
          className='h-10 sm:h-12 md:h-14 object-contain'
        />
      </div>

      {/* Navigation Links - Hidden on mobile, visible on tablet+ */}
      <ul className='list-none hidden md:flex justify-end items-center gap-4 lg:gap-8'>
        <li
          onClick={() => scrollToSection('home')}
          className='font-poppins font-medium cursor-pointer text-[14px] lg:text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection('payment-info')}
          className='font-poppins font-medium cursor-pointer text-[14px] lg:text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Why Choose Us
        </li>
        <li
          onClick={() => scrollToSection('substores')}
          className='font-poppins font-medium cursor-pointer text-[14px] lg:text-[15px] text-darkGray hover:text-primary transition-all'
        >
          Substores
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
