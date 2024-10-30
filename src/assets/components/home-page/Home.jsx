import React from 'react'
import Header from './header/Header';
import Categories from './categories/Categories';
import NewArrival from './new-arrivals/NewArrival';
import Features from './co-features/Features';
import Banner from './banner/Banner';
import Articles from './articles/Articles';

function Home() {
  return (
      <>
      <Header />
      <Categories />
      <NewArrival />
      <Features />
      <Banner />
      <Articles />
      <Footer />
    </>
  );
}

export default Home