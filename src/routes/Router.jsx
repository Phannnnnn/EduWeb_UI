import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import HomePage from "../page/HomePage/HomePage";
import NewsPage from "../page/News/NewsPage";
import CurriculumPage from "../page/Curriculum/CurriculumPage";
import KnowledgePage from "../page/Knowledge/KnowledgePage";
import About from "../page/AboutPage/About";
import CoursesPage from "../page/CoursesPage/CoursesPage";
import SchedulePage from "../page/SchedulePage/SchedulePage";
import Detail from "../page/Detail/Detail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "about", element: <About /> },
          { path: "courses", element: <CoursesPage /> },
          { path: "schedule", element: <SchedulePage /> },
          { path: "curriculum", element: <CurriculumPage /> },
          { path: "knowledge", element: <KnowledgePage /> },
          { path: "news", element: <NewsPage /> },
          { path: "detail/:id", element: <Detail /> },
        ],
      },
    ],
  },
]);
