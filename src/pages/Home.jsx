import React from 'react';
import { Hero, Stats, FeaturedProducts, SubStores, Footer, PaymentInfo } from '../components';
import styles from '../style';

const Home = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Payment Info Section */}
      <PaymentInfo />

      {/* Main Content */}
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          {/* <FeaturedProducts /> */}
          <SubStores />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
