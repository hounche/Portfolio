import React, { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";

// 🔽 AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // durée par défaut
      once: true       // équivalent de animateOnce
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </>
  );
}
