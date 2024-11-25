import { createContext, useState } from "react";
import { calculatePrice, DUMMY_PRODUCTS } from "../../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantity:() =>{},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        const newPrice = calculatePrice(product.price, product.discount);

        updatedItems.push({
          id: id,
          name: product.title,
          price: newPrice,
          quantity: 1,
          color: "black",
          image: product.images[0],
        });
      }
      return {
        items: updatedItems,
      };
    });
  }
  function handleUpdateItemQuantity(id) {
    setShoppingCart((prevShoppingCart) => {
      let updatedItems = [...prevShoppingCart.items];
      const existingCartItemIndex = updatedItems.findIndex((product) => product.id === id);
      const existingCartItem = updatedItems[existingCartItemIndex];
      
      if (existingCartItem.quantity >1) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;

        return {
          items: updatedItems,
        };
      }
      updatedItems = updatedItems.filter((product) => product.id !== id);

      return {
        items: updatedItems,
      };
    })
  }

  function handleRemoveCartItem(id) {
    setShoppingCart((prevShoppingCart) => {
      let updateditems = [...prevShoppingCart.items];
      updateditems = updateditems.filter((product) => product.id !== id);
      updateditems
      return {
        items: updateditems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    removeCartItem: handleRemoveCartItem,
    updateItemQuantity:handleUpdateItemQuantity
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
