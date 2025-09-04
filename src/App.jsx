import "./App.css";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Skills from "../src/components/skills/Skills";
import Experience from "../src/components/experience/Experience";
import Qualification from "../src/components/qualification/Qualification";
import Work from "../src/components/work/Work";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";
import ScrollUp from "../src/components/scrollup/ScrollUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Analytics from "./Analytics";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "", // Default path
        element: (
          <>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Qualification />
            <Work />
            <Contact />
            <Footer />
            <ScrollUp />
            <Analytics />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
};

export default App;
