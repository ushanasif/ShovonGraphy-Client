import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Albums from "../pages/Albums";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminGallery from "../pages/Admin/AdminGallery";
import AdminAlbums from "../pages/Admin/AdminAlbums";
import AdminSingleAlbum from "../pages/Admin/AdminSingleAlbum";
import AdminPackage from "../pages/Admin/AdminPackage";
import AdminSlider from "../pages/Admin/AdminSlider";
import Package from "../components/Package";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "albums/:id",
        element: <AdminSingleAlbum />,
      },
      {
        path: "packages",
        element: <Package />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "admin/login",
        element: <Login />,
      },
      {
        path: "admin/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/admin/dashboard",
    element:   <AdminDashboard />,
    children: [
      {
        path: "gallery",
        element: <AdminGallery />,
      },
      {
          path: 'slider',
          element: <AdminSlider />
      },
      {
        path: "albums",
        element: <AdminAlbums />
      },
      {
        path: "albums/:id",
        element: <AdminSingleAlbum />,
      },
      {
        path: "package",
        element: <AdminPackage />,
      },
    ],
  },
]);

export default router;
