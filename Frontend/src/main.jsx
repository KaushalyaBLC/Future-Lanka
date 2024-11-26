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
import HigherEducation from './Components/HigherEducation/HigherEducation.jsx';
import IndustryPage from './Pages/IndustryPage/IndustryPage.jsx';
import Cluster from './Pages/Cluster/Cluster.jsx';
import { CareerSearch } from './Components/DiscoverJobmarket/CareerSearch.jsx';
import CareerSearchResults from './Pages/CareerSearchResults/CareerSearchResults.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Loading from './Pages/Loading.jsx';

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
  {
    path: "/career/search/:career",
    element: (
        <CareerSearchResults/>
    ),
  },
  {
    path: "/careers/manufacturing",
    element: (
        <IndustryPage industry="manufacturing"/>
    ),
  },
  {
    path: "/careers/:industry/:cluster",
    element: (
        <Cluster/>
    ),
  },
  {
    path: "/careers/healthcare",
    element: (
        <IndustryPage industry="healthcare"/>
    ),
  },
  {
    path: "/careers/agriculture",
    element: (
        <IndustryPage industry="agriculture"/>
    ),
  },
  {
    path: "/careers/it",
    element: (
        <IndustryPage industry="it"/>
    ),
  },
  {
    path: "/careers/automobile",
    element: (
        <IndustryPage industry="automobile"/>
    ),
  },
  {
    path: "/careers/construction",
    element: (
        <IndustryPage industry="construction"/>
    ),
  },
  {
    path: "/education",
    element: (
        <HigherEducation/>
    ),
  },
  {
    path: "/skill",
    element: (
        <Skills/>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
