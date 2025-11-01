import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";

// Layout principal (avec header & footer)
const MainLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

// Layout sans header/footer
const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Layout principal */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} loader={productsData} />
          <Route path="/cart" element={<Cart />}  />

        </Route>

        {/* Layout sans header/footer */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/registration" element={<Registration />}></Route>
        </Route>
      </>
    )
  );

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}
