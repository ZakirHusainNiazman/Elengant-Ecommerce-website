import { useSelector } from "react-redux";
import { HiXMark } from "react-icons/hi2";

import AccountBodyWrapper from "../AccountBodyWrapper";
import image from "../../../assets/products-images/lamp1.svg";

import cssClasses from "./WishList.module.css";
import Button from "../../../ui/buttons/Button";

function WishList() {
  const items = useSelector((state) => state.wishlist.items);
  console.log(items);

  return (
    <AccountBodyWrapper title="Your Wishlist">
      <div className={cssClasses["item-main-wrapper"]}>
        <menu className={cssClasses["table-header"]}>
          <li className={cssClasses["header"]}>Product</li>
          <li className={cssClasses["header"]}>Price</li>
          <li className={cssClasses["header"]}>Action</li>
        </menu>
        {items.map((item) => (
            <div key={item.id} className={cssClasses["item-wrapper"]}>
              <div className={cssClasses["product-info"]}>
                <HiXMark size={33} />
                <img
                  className={cssClasses["product-image"]}
                  src={item.image}
                  alt=""
                />
                <div>
                <h3 className={cssClasses["title"]}>{item.name}</h3>
                  <p className={cssClasses["sub_title"]}>Color: {item.color}</p>
                </div>
              </div>
            <p className={cssClasses["price"]}>{ item.price }</p>
              <Button className={cssClasses.btn}>add to cart</Button>
            </div>
        ))}
      </div>
    </AccountBodyWrapper>
  );
}

export default WishList;
