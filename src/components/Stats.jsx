import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  const icons = [
    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
    </svg>,
    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    </svg>,
    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
    </svg>
  ]

  const gradients = [
    'from-teal-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-blue-500 to-indigo-500'
  ]

  return (
    <section className='py-16 px-6 sm:px-16 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className='relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group'
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index % 3]} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                {icons[index % 3]}
              </div>

              {/* Value */}
              <div className='mb-2'>
                <h3 className='font-poppins font-bold text-5xl text-darkGray group-hover:text-primary transition-colors'>
                  {stat.value}
                </h3>
              </div>

              {/* Title */}
              <p className='font-poppins text-gray-600 text-base font-medium uppercase tracking-wide'>
                {stat.title}
              </p>

              {/* Decorative element */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${gradients[index % 3]} opacity-5 rounded-tl-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
