import TermsConditions from "../components/termcondition";
import PrivacyPolicy from "../components/privacyPolicy";
import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home/page"));
const About = lazy(() => import("../pages/about/page"));
const Products = lazy(() => import("../pages/products/page"));
const ProductsOverview = lazy(() => import("../pages/products-overview/page"));
// const ProductDetail = lazy(() => import("../pages/product-detail/page"));
const Services = lazy(() => import("../pages/services/page"));
const NotFound = lazy(() => import("../pages/NotFound"));

import ProductDetailPage from "../pages/product-detail/page";
import EducationalSignsPage from "../pages/educational-signs/page";

import DogStationServicesPage from "../pages/dog-station-services/page";
import DogWasteBags from "../pages/dog-waste-bags/page";
import TrashCans from "../pages/trash-cans/page";

import ConcreteInstallationPage from "../pages/concrete-installation/page";
import DogWasteStationInstallationPage from "../pages/dog-waste-station-installation";
import InstallationServicesPage from "../pages/installation-services";
import DogStationServicesPages from "../pages/dog-station-services-1";
const Blog = lazy(() => import("../pages/blog/page"));
const BlogDetail = lazy(() => import("../pages/blog-detail/page"));

const routes: RouteObject[] = [
  {
    path: "/terms",
    element: <TermsConditions />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
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
    path: "/dog-waste-station-installation", // alias for legacy link
    element: <DogWasteStationInstallationPage />,
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
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/installation-services",
    element: <InstallationServicesPage />,
  },
  {
    path: "/dog-station-services-1",
    element: <DogStationServicesPages />,
  },
];

export default routes;
