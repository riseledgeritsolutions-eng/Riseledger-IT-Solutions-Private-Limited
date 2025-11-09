import styles from '../style'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='home' className='relative overflow-hidden bg-gradient-to-br from-primary via-teal-600 to-secondary min-h-[80vh] flex items-center'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse delay-700'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-16 sm:py-24'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-white space-y-6'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
              <span className='w-2 h-2 bg-green-400 rounded-full animate-ping'></span>
              <span className='text-sm font-medium'>Riseledger IT Solutions</span>
            </div>

            <h1 className='font-poppins font-bold text-4xl sm:text-5xl md:text-6xl leading-tight'>
              Simplify Your
              <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200'>
                Payment Collection
              </span>
            </h1>

            <p className='text-lg text-teal-50 leading-relaxed max-w-xl'>
              Seamlessly collect payments from multiple stores using Easypaisa & JazzCash. We provide secure, reliable payment collection services for your e-commerce business.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={() => document.getElementById('substores')?.scrollIntoView({ behavior: 'smooth' })}
                className='group bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
              >
                View Our Clients
                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
                className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white hover:text-primary transition-all duration-300'
              >
                How It Works
              </button>
            </div>

            {/* Trust Badges */}
            <div className='flex flex-wrap gap-6 pt-8 items-center'>
              <div className='flex items-center gap-2'>
                <svg className='w-6 h-6 text-green-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <span className='text-sm font-medium'>Secure Payments</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-6 h-6 text-yellow-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
                <span className='text-sm font-medium'>Instant Processing</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className='hidden md:block'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-secondary to-tertiary rounded-3xl blur-2xl opacity-30'></div>
              <div className='relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl'>
                <div className='space-y-6'>
                  <div className='flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm'>
                    <div className='w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center'>
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                      </svg>
                    </div>
                    <div className='text-white'>
                      <div className='text-sm opacity-80'>Payment Methods</div>
                      <div className='font-bold text-lg'>Easypaisa & JazzCash</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm'>
                    <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center'>
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                      </svg>
                    </div>
                    <div className='text-white'>
                      <div className='text-sm opacity-80'>100% Secure</div>
                      <div className='font-bold text-lg'>Protected Transactions</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center'>
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </div>
                    <div className='text-white'>
                      <div className='text-sm opacity-80'>Real-Time</div>
                      <div className='font-bold text-lg'>Instant Confirmation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
