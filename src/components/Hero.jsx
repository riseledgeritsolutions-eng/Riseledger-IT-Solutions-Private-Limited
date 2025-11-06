import styles from '../style'
import { useNavigate } from 'react-router-dom'
import { discount ,robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='home' className={`${styles.paddingY} bg-white`}>
      <div className={`${styles.flexCenter} flex-col text-center xl:px-0 sm:px-16 px-6`}>
        <div className='inline-flex items-center py-[6px] px-4 bg-orange-gradient rounded-[10px] mb-4 shadow-md'>
          <svg className='w-[32px] h-[32px] text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
          </svg>
          <p className='ml-2 text-[14px] font-medium'>
            <span className='text-white'>Multiple Stores</span>{" "}
            <span className='text-white'>One Platform</span>
          </p>
        </div>

        <h1 className='font-poppins font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-darkGray leading-[36px] sm:leading-[48px] md:leading-[54px] lg:leading-[60px] max-w-4xl px-4'>
          Your Ultimate{" "}
          <span className='text-gradient'>Multi-Store Marketplace</span>
        </h1>

        <p className='text-gray-600 text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] max-w-2xl mt-5 px-4'>
          Discover amazing products from multiple trusted stores all in one place. Shop from our curated collection of verified sellers offering quality products with secure Easypaisa & JazzCash payment options.
        </p>

        {/* Payment Method Badges */}
        <div className='flex gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap justify-center items-center px-4'>
          <div className='bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[16px] shadow-lg'>
            Easypaisa
          </div>
          <div className='bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-[14px] sm:text-[16px] shadow-lg'>
            JazzCash
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 w-full max-w-md px-4'>
          <button
            onClick={() => document.getElementById('substores')?.scrollIntoView({ behavior: 'smooth' })}
            className='bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-[14px] sm:text-[15px] hover:bg-secondary transition-all duration-300 shadow-md w-full sm:w-auto'
          >
            Browse Stores
          </button>
          <button
            onClick={() => document.getElementById('payment-info')?.scrollIntoView({ behavior: 'smooth' })}
            className='border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold text-[14px] sm:text-[15px] hover:bg-dimOrange transition-all duration-300 w-full sm:w-auto'
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
