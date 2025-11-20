import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/page"));
const About = lazy(() => import("../pages/about/page"));
const Products = lazy(() => import("../pages/products/page"));
const ProductsOverview = lazy(() => import("../pages/products-overview/page"));
const ProductDetail = lazy(() => import("../pages/product-detail/page"));
const Services = lazy(() => import("../pages/services/page"));
const NotFound = lazy(() => import("../pages/NotFound"));

import ProductDetailPage from "../pages/product-detail/page";
import EducationalSignsPage from "../pages/educational-signs/page";

import DogStationServicesPage from "../pages/dog-station-services/page";
import DogWasteBags from "../pages/dog-waste-bags/page";
import TrashCans from "../pages/trash-cans/page";

import ConcreteInstallationPage from "../pages/concrete-installation/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products-overview",
    element: <ProductsOverview />,
  },
  {
    path: "/product/commander",
    element: <ProductDetailPage />,
  },
  {
    path: "/educational-signs",
    element: <EducationalSignsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dog-station-services",
    element: <DogStationServicesPage />,
  },
  {
    path: "/dog-waste-bags",
    element: <DogWasteBags />,
  },
  {
    path: "/trash-cans",
    element: <TrashCans />,
  },
  {
    path: "/concrete-installation",
    element: <ConcreteInstallationPage />,
  },
];

export default routes;
