import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import ProductPage from "./pages/ProductPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartContextProvider from "./store/cart-context/shopping-cart-context.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SubLayout from "./components/layouts/SubLayout.jsx";
import CartPage from "./pages/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SubLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/product", element: <ProductPage /> },
          { path: "/shop", element: <ShopPage /> },
        ],
      },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
