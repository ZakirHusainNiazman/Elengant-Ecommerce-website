import { useState,useEffect } from "react";

import cssClasses from "./Shop.module.css";
import ProductCard from "../../ui/product-card/ProductCard.jsx";
import { DUMMY_PRODUCTS, calculatePrice } from "../../dummy-products.js";
import { useSelector } from "react-redux";

function Products({layout,priceRange, category }) {
  const [productsToShow, setProductsToShow] = useState(12);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  // this function will number of Products to show
  function handleProductsToShow() {
    setProductsToShow((prevState) => prevState + prevState);
    }
    
     useEffect(() => {
       if (layout === "grid") {
         setProductsToShow(9);
       }
     }, [layout]);

  
  var PRODUCTS = [
    ...DUMMY_PRODUCTS.map((product) => {
      return { ...product };
    }),
  ];

  if (category !== "all") {
    PRODUCTS = PRODUCTS.filter((product) => product.category === category);
  }
  
  if (priceRange.end !== null) {
      PRODUCTS = PRODUCTS.filter(
        (product) =>
          product.price >= priceRange.start && product.price <= priceRange.end
      );
    }

    return (
      <>
        <div
          className={`${cssClasses["products-con"]} ${cssClasses[`${layout}`]}`}
        >
          {PRODUCTS.slice(0, productsToShow).map((product) => {
            const isInWishlist = wishlistItems.some((item)=>item.id === product.id)
            return (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                productName={product.title}
                price={product.price}
                layout={layout}
                status={product.status}
                stars={product.stars}
                discount={product.discount}
                pid={product.id}
                isAdded={isInWishlist}
              />
            );
          })}
        </div>
        <button
          className={cssClasses["show-more-btn"]}
          onClick={handleProductsToShow}
        >
          Show More
        </button>
      </>
    );
}

export default Products;
