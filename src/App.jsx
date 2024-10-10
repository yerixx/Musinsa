import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          path: "",
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: (
            <PrivateRoute
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
