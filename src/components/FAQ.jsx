import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg'>
      <button
        onClick={onClick}
        className='w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50'
      >
        <h3 className='font-poppins font-semibold text-lg text-darkGray pr-4'>
          {question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className='w-5 h-5 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </button>

      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className='px-6 pb-6 text-gray-600 leading-relaxed'>
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What payment methods do you support?',
      answer: 'We currently support Easypaisa and JazzCash for payment collection. These are the most popular mobile wallet payment methods in Pakistan, allowing your customers to pay securely and conveniently.'
    },
    {
      question: 'How quickly are payments processed?',
      answer: 'All payments are processed instantly in real-time. You and your customers receive immediate confirmation once a transaction is completed. This ensures transparency and builds trust with your buyers.'
    },
    {
      question: 'Is there a setup fee or monthly charge?',
      answer: 'We offer flexible pricing plans based on your business needs. Contact us for detailed pricing information and we\'ll create a custom package that works for your transaction volume and requirements.'
    },
    {
      question: 'How secure are the transactions?',
      answer: 'Security is our top priority. All transactions are encrypted using industry-standard SSL/TLS protocols. We implement advanced security measures to protect both merchant and customer data, ensuring 100% secure payment processing.'
    },
    {
      question: 'Can I integrate this with my existing e-commerce store?',
      answer: 'Yes! Our payment solution is designed for easy integration with popular e-commerce platforms including Shopify, WooCommerce, and custom-built stores. Our technical team will assist you with the integration process.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including technical integration assistance, transaction monitoring, and customer service. Our team is available to help you resolve any issues and ensure smooth payment operations for your business.'
    },
    {
      question: 'How do I receive my collected payments?',
      answer: 'Payments collected through our platform are settled to your designated bank account or mobile wallet on a regular schedule. Settlement frequency can be discussed based on your business requirements.'
    },
    {
      question: 'Can I track all my transactions?',
      answer: 'Absolutely! We provide a comprehensive dashboard where you can view all transactions in real-time, track payment status, generate reports, and monitor your business performance with detailed analytics.'
    }
  ];

  return (
    <section id='faq' className='py-20 px-6 sm:px-16 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4'>
            <div className='w-2 h-2 bg-primary rounded-full'></div>
            <span className='text-primary font-semibold text-sm'>FAQ</span>
          </div>

          <h2 className='font-poppins font-bold text-4xl md:text-5xl text-darkGray mb-6'>
            Frequently Asked
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
              Questions
            </span>
          </h2>

          <p className='text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed'>
            Find answers to common questions about our payment collection services
          </p>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className='mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8'>
          <h3 className='font-poppins font-bold text-2xl text-darkGray mb-3'>
            Still have questions?
          </h3>
          <p className='text-gray-600 mb-6'>
            Our team is here to help. Get in touch with us for more information.
          </p>
          <button
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-gradient-to-r from-primary to-tertiary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2'
          >
            Contact Us
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
