import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import BrandsShowcase from '../components/BrandsShowcase';
import WhatWeDo from '../components/WhatWeDo';
import WhatWeBuild from '../components/WhatWeBuild';
import WhyStellar from '../components/WhyStellar';
import PortfolioSection from '../components/PortfolioSection';
import Reviews from '../components/Reviews';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      <Hero onOpenQuote={onOpenQuote} />
      <StatsBar />
      <BrandsShowcase onOpenQuote={onOpenQuote} />
      <WhatWeDo onOpenQuote={onOpenQuote} />
      <WhatWeBuild onOpenQuote={onOpenQuote} />
      <PortfolioSection onOpenQuote={onOpenQuote} />
      <WhyStellar />
      <Reviews />
    </>
  );
}
