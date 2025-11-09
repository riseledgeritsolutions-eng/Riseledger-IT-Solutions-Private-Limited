import React from 'react'
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => {
  const gradients = [
    'from-teal-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-blue-500 to-indigo-500'
  ]

  return (
    <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20'>
      {/* Decorative gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 3]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>

      <div className='relative z-10'>
        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index % 3]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <img
            src={icon}
            alt={title}
            className='w-8 h-8 object-contain brightness-0 invert'
          />
        </div>

        <h3 className='font-poppins font-bold text-xl text-darkGray mb-3 group-hover:text-primary transition-colors'>
          {title}
        </h3>

        <p className='font-poppins text-gray-600 text-[15px] leading-relaxed'>
          {content}
        </p>

        {/* Arrow icon that appears on hover */}
        <div className='mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all'>
          <span className='text-sm font-semibold'>Learn more</span>
          <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </div>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id='features' className='py-20 px-6 sm:px-16 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span className='text-primary font-semibold text-sm'>Our Services</span>
          </div>

          <h2 className='font-poppins font-bold text-4xl md:text-5xl text-darkGray mb-6'>
            You focus on sales,
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
              we handle your payments
            </span>
          </h2>

          <p className='text-gray-600 text-lg leading-relaxed'>
            With the right payment partner, you can streamline your transactions, enhance customer trust, and grow your business. At Riseledger IT Solutions, we provide secure payment collection services to help you succeed in e-commerce.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <button
            onClick={() => document.getElementById('substores')?.scrollIntoView({ behavior: 'smooth' })}
            className='group bg-gradient-to-r from-primary to-tertiary text-white px-10 py-4 rounded-xl font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3'
          >
            View Our Clients
            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Business
