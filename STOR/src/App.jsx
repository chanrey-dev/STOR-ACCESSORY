import { useState } from "react";
import "./App.css";
import "./Index.css";
import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Categories from "./components/Categories";
import Create from "./components/Categories/Create";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          index: true,
          element: <Breadcrumbs />,
        },
        {
          path: "categories",
          element: <Categories />,
          children: [
            {
              path: "create",
              element: <Create />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
