import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./connection/http";
import SportPage from "./pages/SportPage";
import EconomyPage from "./pages/EconomyPage";
import EarthPage from "./pages/EarthPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ErrorPage from "./pages/ErrorPage";
import ScrollTop from "./components/ScrollTop";
import OtherNewsPage from "./pages/OtherNewsPage";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sport",
          element: <SportPage />,
        },
        {
          path: "/other",
          element: <OtherNewsPage />,
        },
        { path: "/sport/:id", element: <NewsDetailPage /> },
        {
          path: "economy",
          element: <EconomyPage />,
        },
        { path: "economy/:id", element: <NewsDetailPage /> },
        {
          path: "/earth",
          element: <EarthPage />,
        },
        { path: "earth/:id", element: <NewsDetailPage /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/contact-us", element: <Contact /> },
        {
          path: "/:id",
          children: [{ index: true, element: <NewsDetailPage /> }],
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <ScrollTop />
        </RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
