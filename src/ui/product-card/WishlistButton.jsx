import { motion } from "framer-motion";
import heartIcon from "../../assets/home-images/heart-icon.svg";
import fillHeartIcon from "../../assets/home-images/fill-heart-icon.svg";


import { IoMdHeartEmpty } from "react-icons/io";
import { PiHeartFill } from "react-icons/pi";
import { Link } from "react-router-dom";

import cssClasses from "./WishlistButton.module.css";

function WishlistButton({ isAdded, ...props }) {
  return (
    <Link {...props} className={cssClasses["wishlist-btn"]}>
      {isAdded ? (
        <motion.img
          className={cssClasses.icon}
          src={fillHeartIcon}
          alt=""
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        />
      ) : (
        <motion.img
          className={cssClasses.icon}
          src={heartIcon}
          alt=""
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        />
      )}
    </Link>
  );
}

export default WishlistButton;
