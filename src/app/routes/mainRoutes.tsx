import { createBrowserRouter } from "react-router-dom";

import QuestionsPage from "../../pages/landing/QuestionPage/QuestionPage";
import { AppLayout } from "../layout/ui/AppLayout";

export const MainRoutes = createBrowserRouter([
  {
    errorElement: <div>Страница не найдена!</div>,
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      }
    ]
  }

]);