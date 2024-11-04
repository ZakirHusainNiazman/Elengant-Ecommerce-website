import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import ProductPage from './pages/ProductPage.jsx'
import Home from './pages/Home.jsx'
import RootLayout from './RootLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <ProductPage /> },
    ],
  },
]);

function App() {

  

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
