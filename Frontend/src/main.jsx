import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PassionId from './Components/PassionIdTool/PassionId.jsx';
import PassionTest from './Components/PassionIdTool/PassionTest.jsx';
import Jobmarket from './Components/DiscoverJobmarket/Jobmarket.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App/>
    ),
  },
  {
    path: "/passionId",
    element: (
        <PassionId/>
    ),
  },
  {
    path: "/passionId/test",
    element: (
        <PassionTest/>
    ),
  },
  {
    path: "/careers",
    element: (
        <Jobmarket/>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
