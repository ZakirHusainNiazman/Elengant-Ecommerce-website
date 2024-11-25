import Header from "../components/home-page/header/Header";
import Categories from '../components/home-page/categories/Categories';
import NewArrival from '../components/home-page/new-arrivals/NewArrival';
import Features from '../components/home-page/co-features/Features';
import Banner from '../components/home-page/banner/Banner';
import Articles from '../components/home-page/articles/Articles';

function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <NewArrival />
      <Features />
      <Banner />
      <Articles />
    </>
  );
}

export default HomePage;