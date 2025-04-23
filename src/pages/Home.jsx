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
    
    
      
      <h1 className="text-primary ">
        Hello world!
      </h1>
    <button className="bg-accent ">Click me</button>
    <p className="">Testing font family</p>
    <Footer />
    </>
  );
};

export default Home;
