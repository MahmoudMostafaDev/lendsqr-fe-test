import React from 'react';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Auth from './pages/Auth';
import ForgetPassword from './pages/ForgetPassword';
import User from './pages/User';
import Users from './pages/Users';
import DashboardRootLayout from './pages/DashboardRootLayout';

const route = createBrowserRouter(

  [
    {
      path: "/",
      element: <Auth />,
      children:
        [
          {
            path: "",
            element: <Login />
          },
          {
            path: "forget-password",
            element: <ForgetPassword />
          },
        ]
    },
    {
      path: "/login",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <Login />
        },
        {
          path: "forget-password",
          element: <ForgetPassword />
        }
      ]
    },
    {
      path: "dashboard/users",
      element: <DashboardRootLayout />,
      children: [
        {
          path: "",
          element: <Users />
        },
        {
          path: ":id",
          element: <User />
        }
      ]
    }
  ]

)
function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
