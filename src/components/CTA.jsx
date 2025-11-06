import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[100%] mt-5`}>

          🎮 Game Development – From concept to launch, we build top-tier games for all platforms. <br/>
          🎨 Game Design & UI/UX – Stunning visuals and intuitive gameplay experiences.<br/>
          🛠️ Game Optimization – Smooth performance and high FPS for seamless play.
          <br/>
          🔗 Multiplayer & Online Integration – Scalable multiplayer solutions with secure networking.<br/>
          🚀 AR/VR & AI-Powered Games – Cutting-edge immersive experiences with futuristic tech.<br/>
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        {/* <Button /> */}
      </div>
    </section>
  )
}

export default CTA
