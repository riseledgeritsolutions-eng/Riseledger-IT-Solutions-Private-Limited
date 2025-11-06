import React from 'react';
import styles from '../style';

const PaymentInfo = () => {
  const paymentFeatures = [
    {
      icon: (
        <svg className='w-12 h-12 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
        </svg>
      ),
      title: 'Secure Transactions',
      description: 'All payments are encrypted and processed securely through trusted payment gateways.',
    },
    {
      icon: (
        <svg className='w-12 h-12 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      ),
      title: 'Instant Processing',
      description: 'Payments are processed instantly with real-time confirmation and notifications.',
    },
    {
      icon: (
        <svg className='w-12 h-12 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
      ),
      title: 'Multiple Payment Options',
      description: 'Accept payments via Easypaisa, JazzCash, and other popular payment methods.',
    },
    {
      icon: (
        <svg className='w-12 h-12 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ),
      title: 'Easy Integration',
      description: 'Simple integration process to start accepting payments within minutes.',
    },
  ];

  return (
    <section id='payment-info' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-lightGray`}>
      <div className={`${styles.boxWidth}`}>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-12 px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-darkGray mb-3'>
            Why Choose Our <span className='text-gradient'>Payment Solution</span>
          </h2>
          <p className='text-gray-600 text-[14px] sm:text-[15px] max-w-2xl mx-auto'>
            Simple, secure, and reliable payment collection for your business needs
          </p>
        </div>

        {/* Payment Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {paymentFeatures.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200'
            >
              <div className='flex justify-center mb-4'>{feature.icon}</div>
              <h3 className='font-semibold text-[17px] text-darkGray mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-[13px] leading-[20px]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Methods Details */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          {/* Easypaisa */}
          <div className='bg-white rounded-lg p-8 border-2 border-green-500 hover:shadow-xl transition-all duration-300'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-bold text-[18px]'>
                Easypaisa
              </div>
              <span className='bg-primary text-white px-3 py-1 rounded-full text-[12px] font-semibold'>
                Coming Soon
              </span>
            </div>
            <p className='text-gray-600 text-[14px] leading-[22px] mb-4'>
              Accept payments from over 10 million Easypaisa users across Pakistan. Easy mobile wallet transactions with instant confirmation.
            </p>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                Instant payment confirmation
              </li>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                No hidden charges
              </li>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                24/7 availability
              </li>
            </ul>
          </div>

          {/* JazzCash */}
          <div className='bg-white rounded-lg p-8 border-2 border-red-500 hover:shadow-xl transition-all duration-300'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold text-[18px]'>
                JazzCash
              </div>
              <span className='bg-primary text-white px-3 py-1 rounded-full text-[12px] font-semibold'>
                Coming Soon
              </span>
            </div>
            <p className='text-gray-600 text-[14px] leading-[22px] mb-4'>
              Reach millions of JazzCash users with seamless mobile wallet integration. Fast, secure, and reliable payment processing.
            </p>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                Real-time transaction updates
              </li>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                Secure payment gateway
              </li>
              <li className='flex items-center gap-2 text-[13px] text-gray-700'>
                <svg className='w-5 h-5 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                Wide merchant network
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
