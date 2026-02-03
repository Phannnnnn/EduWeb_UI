import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import HomePage from "../page/HomePage/HomePage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
    ],
  },
]);
