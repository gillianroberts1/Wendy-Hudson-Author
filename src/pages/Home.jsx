import React from "react";
import Footer from "../layout/Footer";
import Feature from "../components/Feature";
import BooksSection from "../components/BooksSection";
import Hero from "../components/Hero";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <BooksSection />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
