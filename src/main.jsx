import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import ErrorPage from './Pages/Shared/ErrorPage';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
