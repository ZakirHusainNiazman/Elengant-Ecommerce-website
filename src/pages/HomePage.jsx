import Header from "../components/home-page/header/Header";
import Categories from '../components/home-page/categories/Categories';
import NewArrival from '../components/home-page/new-arrivals/NewArrival';
import Banner from "../ui/banner/Banner";
import Articles from '../components/home-page/articles/Articles';
import Features from "../components/shared/co-features/Features";


function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <NewArrival />
      <Features/>
      <Banner
        subTitle="SALE UP TO 35% OFF"
        title="HUNDREDS of New lower prices!"
        body="It’s more affordable than ever to give every room in your home a
            stylish makeover"
      />
      <Articles />
    </>
  );
}

export default HomePage;