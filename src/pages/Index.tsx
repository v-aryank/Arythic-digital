import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ResearchLab from "@/components/ResearchLab";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingCurtain from "@/components/LoadingCurtain";
import PageTransition from "@/components/PageTransition";

import { useLocation } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isLoaded) {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure Lenis and layout are ready
          setTimeout(() => {
            if ((window as any).lenis) {
              (window as any).lenis.scrollTo(element, { duration: 1.5 });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 300);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [isLoaded, location.hash]);

  return (
    <>
      <LoadingCurtain onComplete={() => setIsLoaded(true)} />
      <PageTransition>
        <SmoothScroll>
          <div className={`min-h-screen bg-background ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <ResearchLab />
            <About />
            <Contact />
            <Footer />
          </div>
        </SmoothScroll>
      </PageTransition>
    </>
  );
};

export default Index;
