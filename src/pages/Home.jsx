import Header from "../components/home-page/header/Header";
import Categories from '../components/home-page/categories/Categories';
import NewArrival from '../components/home-page/new-arrivals/NewArrival';
import Features from '../components/home-page/co-features/Features';
import Banner from '../components/home-page/banner/Banner';
import Articles from '../components/home-page/articles/Articles';
import Footer from '../components/shared/footer/Footer';

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