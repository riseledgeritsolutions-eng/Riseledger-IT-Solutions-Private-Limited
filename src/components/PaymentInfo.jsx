import React from 'react';

const PaymentInfo = () => {
  const paymentFeatures = [
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
        </svg>
      ),
      title: 'Secure Transactions',
      description: 'All payments are encrypted and processed securely through trusted payment gateways.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      ),
      title: 'Instant Processing',
      description: 'Payments are processed instantly with real-time confirmation and notifications.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
      ),
      title: 'Multiple Payment Options',
      description: 'Accept payments via Easypaisa, JazzCash, and other popular payment methods.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ),
      title: 'Easy Integration',
      description: 'Simple integration process to start accepting payments within minutes.',
      gradient: 'from-green-500 to-teal-500'
    },
  ];

  return (
    <section id='payment-info' className='py-20 px-6 sm:px-16 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span className='text-primary font-semibold text-sm'>Payment Solutions</span>
          </div>

          <h2 className='font-poppins font-bold text-4xl md:text-5xl text-darkGray mb-6'>
            Why Choose Our
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
              Payment Solution
            </span>
          </h2>

          <p className='text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed'>
            Simple, secure, and reliable payment collection for your business needs
          </p>
        </div>

        {/* Payment Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {paymentFeatures.map((feature, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100'
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className='font-poppins font-bold text-lg text-darkGray mb-2 group-hover:text-primary transition-colors'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Methods Details */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Easypaisa */}
          <div className='group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl'></div>

            <div className='relative z-10'>
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                <img
                  src='/Easypaisa Logo.jpg'
                  alt='Easypaisa'
                  className='h-16 w-auto object-contain'
                />
                <span className='bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold'>
                  Coming Soon
                </span>
              </div>

              <p className='text-gray-700 text-base leading-relaxed mb-6'>
                Accept payments from over 10 million Easypaisa users across Pakistan. Easy mobile wallet transactions with instant confirmation.
              </p>

              <div className='space-y-3'>
                {['Real-time transaction updates', 'No hidden charges', '24/7 availability'].map((item, i) => (
                  <div key={i} className='flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl'>
                    <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <span className='text-sm font-medium text-gray-700'>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* JazzCash */}
          <div className='group relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-red-200 hover:border-red-400'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl'></div>

            <div className='relative z-10'>
              <div className='flex flex-wrap items-center gap-3 mb-6'>
                <img
                  src='/JazzCash New Logo PNG, SVG, AI Vector – Free Download.jpg'
                  alt='JazzCash'
                  className='h-16 w-auto object-contain'
                />
                <span className='bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold'>
                  Coming Soon
                </span>
              </div>

              <p className='text-gray-700 text-base leading-relaxed mb-6'>
                Reach millions of JazzCash users with seamless mobile wallet integration. Fast, secure, and reliable payment processing.
              </p>

              <div className='space-y-3'>
                {['Instant payment confirmation', 'Secure payment gateway', 'Wide merchant network'].map((item, i) => (
                  <div key={i} className='flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl'>
                    <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <span className='text-sm font-medium text-gray-700'>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
