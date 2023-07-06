import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Albums from "../pages/albums/Albums";
import Login from "../pages/authentication/Login";
import Charts from "../pages/charts/Charts";
import Favorite from "../pages/favorite/Favorite";
import Genres from "../pages/genres/Genres";
import Home from "../pages/home/Home";
import Recent from "../pages/recent/Recent";
import Tracks from "../pages/tracks/Tracks";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/albums",
        element: <Albums></Albums>,
      },
      {
        path: "/tracks",
        element: <Tracks></Tracks>,
      },
      {
        path: "/genres",
        element: <Genres></Genres>,
      },
      {
        path: "/favTracks",
        element: <Favorite></Favorite>,
      },
      {
        path: "/recentlyPlayed",
        element: <Recent></Recent>,
      },
      {
        path: "/charts",
        element: <Charts></Charts>,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
