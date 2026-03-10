import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import { config } from "./constants/config";

const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Tech = lazy(() => import("./components/sections/Tech"));
const Works = lazy(() => import("./components/sections/Works"));
const Feedbacks = lazy(() => import("./components/sections/Feedbacks"));
const Contact = lazy(() => import("./components/sections/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 overflow-x-hidden">
        <div className="hero-layered-bg bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div className="h-24" />}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0 bg-radial-grid">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
