import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StoreDashboard from './pages/StoreDashboard';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './utils/AuthProvider';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/store",
        element: <StoreDashboard/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
