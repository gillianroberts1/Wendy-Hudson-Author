import React from "react";
import heroImg from "../assets/heroImg.png";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper noTopPadding={false}>
      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-none">
          <img
            src={heroImg}
            alt="image of castle, book and hills"
            className="rounded-lg shadow-md w-full lg:w-[616px] lg:h-[640px] object-cover sm:w-full sm:h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 text-left order-1 lg:order-none">
          <h1>Discover the Thrilling World of Wendy Hudson</h1>
          <p>
            Wendy Hudson weaves captivating tales that blend romance and
            suspense, drawing readers into her intricate plots. Explore her
            published works and join her on an exhilarating journey through love
            and intrigue.
          </p>
          <div className="flex flex-row flex-wrap justify-start gap-4">
            <Link
              to="/about"
              className="min-w-fit bg-accent text-white px-4 py-2 rounded-md hover:bg-opacity-80 text-center"
            >
              Learn More
            </Link>
            <Link
              to="/books"
              className="min-w-fit text-foreground px-4 py-2 border border-accent rounded-md hover:bg-accent/10 text-center"
            >
              Explore Wendy's Books
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
