import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import ProductPage from "./pages/ProductPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SubLayout from "./components/layouts/SubLayout.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import OrderCompletPage from "./pages/OrderCompletePage.jsx";
import store from "./store/index.js";
import UserAccountPage from "./pages/UserAccountPage.jsx";
import AuthLayout from "./components/layouts/auth-layout/AuthLayout.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";

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
          { index: true, element: <HomePage /> },
          { path: "/shop/:category?", element: <ShopPage /> },
          { path: "/product/:pid?", element: <ProductPage /> },
          { path: "/blogs", element: <BlogPage /> },
          { path: "/blogs/:id?", element: <BlogPostPage /> },
        ],
      },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/Checkout/:shippingType?",
        element: <CheckoutPage />,
      },
      {
        path: "/order-completed",
        element: <OrderCompletPage />,
      },
      {
        path: "/user-account",
        element: <UserAccountPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
