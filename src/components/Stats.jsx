import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-white py-6 sm:py-8 px-4`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 min-w-[140px] flex justify-center sm:justify-start items-center flex-row m-2 sm:m-3`}>
          <h4 className='font-poppins font-semibold text-[28px] xs:text-[32px] sm:text-[40px] leading-[36px] xs:leading-[40px] sm:leading-[53px] text-darkGray'>{stat.value}</h4>
          <p className='font-poppins font-normal text-[13px] xs:text-[15px] sm:text-[20px] leading-[18px] xs:leading-[21px] sm:leading-[26px] text-gradient uppercase ml-2 sm:ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
