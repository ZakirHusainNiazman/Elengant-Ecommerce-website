import { useState } from "react";
import Footer from "../components/shared/footer/Footer.jsx";
import Header from "../components/product-page/header/Header.jsx";

import cssClasses from "../components/product-page/ProductPage.module.css";
import CustumerReviews from "../components/product-page/body/CustumerReviews.jsx";
import MostAskedQuestion from "../components/product-page/body/MostAskedQuestion.jsx";
import AdditionalInfo from "../components/product-page/body/AdditionalInfo.jsx";
import TabButton from "../components/product-page/body/TabButton.jsx";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Path from "../ui/hero-section/Path.jsx";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [selectedInfo, setSelectedInfo] = useState("additional-info");
  const { pid } = useParams('p2');

  const productId = pid || 'p4';
  
  

  function handleSelectedInfo(selectedInfo) {
    setSelectedInfo(selectedInfo);
  }


  const product = DUMMY_PRODUCTS.find((product) => (product.id === productId));
  const questions = product.questions;
  const reviews = product.custumerReviews;
  const productDetails = {
    details: product.details,
    packaging: {
      width: product.measurements.width,
      height: product.measurements.height,
      weight: product.measurements.weight,
      length: product.measurements.length,
    },
  };


  return (
    <>
      <section
        className={`${cssClasses["product-section-body"]} ${cssClasses["container"]}`}
      >
        <Path array={["Home", "Shop", "Living Room", "Product"]} />
        <Header {...product} />
        <ul className={cssClasses["product-info-navigation"]}>
          <TabButton
            onSelect={() => handleSelectedInfo("additional-info")}
            isSelected={selectedInfo === "additional-info"}
          >
            Additional Info
          </TabButton>
          <TabButton
            onSelect={() => handleSelectedInfo("questions")}
            isSelected={selectedInfo === "questions"}
          >
            Questions
          </TabButton>
          <TabButton
            onSelect={() => handleSelectedInfo("reviews")}
            isSelected={selectedInfo === "reviews"}
          >
            Reviews
          </TabButton>
        </ul>
        {selectedInfo === "additional-info" && (
          <AdditionalInfo details={productDetails} />
        )}
        {selectedInfo === "questions" && (
          <MostAskedQuestion questions={questions} />
        )}
        {selectedInfo === "reviews" && <CustumerReviews reviews={reviews} />}
      </section>
    </>
  );
}

export default ProductPage;
