import React from 'react';
import { Hero, Stats, Business, SubStores, Footer, PaymentInfo, FAQ } from '../components';

const Home = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Business/Features Section */}
      <Business />

      {/* Payment Info Section */}
      <PaymentInfo />

      {/* SubStores Section */}
      <SubStores />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
