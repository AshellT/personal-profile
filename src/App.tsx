import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Works from "./components/sections/Works";
import { config } from "./constants/config";

const Experience = lazy(() => import("./components/sections/Experience"));
const Credentials = lazy(() => import("./components/sections/Credentials"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Proof = lazy(() => import("./components/sections/Proof"));
const Privacy = lazy(() => import("./components/pages/Privacy"));
const Terms = lazy(() => import("./components/pages/Terms"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Works />
    <Suspense fallback={<div className="h-24" aria-hidden />}>
      <Proof />
      <Experience />
      <Credentials />
      <Contact />
    </Suspense>
  </>
);

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as
      | string
      | undefined;
    if (!measurementId || typeof window === "undefined") return;

    const existing = document.getElementById("ga-gtag");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "ga-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.id = "ga-inline";
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(inline);
  }, []);

  return (
    <BrowserRouter>
      <div className="page-atmosphere relative z-0 min-h-screen overflow-x-hidden text-ink">
        <Navbar />
        <main>
          <Suspense fallback={<div className="h-24" aria-hidden />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
