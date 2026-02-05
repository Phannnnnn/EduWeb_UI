import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import HomePage from "../page/HomePage/HomePage";
import JellyfishInforPage from "../page/JellyfishInforPage/JellyfishInforPage";
import CourtPage from "../page/CourtPage/CourtPage";
import OpenningSchedulePage from "../page/Openning-Schedule/OpenningSchedulePage";
import NewsPage from "../page/News/NewsPage";
import CurriculumPage from "../page/Curriculum/CurriculumPage";
import KnowledgePage from "../page/Knowledge/KnowledgePage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "jellyfish-infor", element: <JellyfishInforPage /> },
          { path: "court", element: <CourtPage /> },
          { path: "openning-schedule", element: <OpenningSchedulePage /> },
          { path: "curriculum", element: <CurriculumPage /> },
          { path: "knowledge", element: <KnowledgePage /> },
          { path: "news", element: <NewsPage /> },
        ],
      },
    ],
  },
]);
