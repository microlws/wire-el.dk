// import AsyncComponent from "component/AsyncComponent"
import HomeRoute from "route/HomeRoute"
import ServiceRoute from "route/ServiceRoute"
import OfferRoute from "route/OfferRoute"
import HeatingRoute from "route/HeatingRoute"
import ContactRoute from "route/ContactRoute"
import Error404Route from "route/Error404Route"

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeRoute,
  },
  {
    path: "/tilbud",
    exact: true,
    component: OfferRoute,
  },
  {
    path: "/services",
    exact: true,
    component: ServiceRoute,
  },
  {
    path: "/varmepumper",
    exact: true,
    component: HeatingRoute,
  },
  {
    path: "/kontakt",
    exact: true,
    component: ContactRoute,
  },
  {
    path: "*",
    component: Error404Route,
  },
]

/*
const routes = [
  {
    path: "/",
    exact: true,
    component: AsyncComponent(() => import("route/HomeRoute"))
  },
  {
    path: "/tilbud",
    exact: true,
    component: AsyncComponent(() => import("route/OfferRoute"))
  },
  {
    path: "/kontakt",
    exact: true,
    component: AsyncComponent(() => import("route/ContactRoute"))
  },
  {
    path: "*",
    component: AsyncComponent(() => import("route/Error404Route"))
  }
]
*/

export default routes
