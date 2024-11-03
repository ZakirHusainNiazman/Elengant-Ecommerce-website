import Footer from "../components/shared/footer/Footer.jsx";
import Header from "../components/product-page/header/Header.jsx";

import cssClasses from "../components/product-page/ProductPage.module.css";
import CustumerReviews from "../components/product-page/body/CustumerReviews.jsx";
import MostAskedQuestion from "../components/product-page/body/MostAskedQuestion.jsx";
import AdditionalInfo from "../components/product-page/body/AdditionalInfo.jsx";

function ProductPage() {
  return (
    <>
      <Header />
      <section
        className={`${cssClasses["product-section-body"]} ${cssClasses["container"]}`}
      >
        <ul className={cssClasses["product-info-navigation"]}>
          <li>
            <a href="">Additional Info</a>
          </li>
          <li>
            <a href="">Questions</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
        <CustumerReviews />
        <MostAskedQuestion />
        <AdditionalInfo />
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
