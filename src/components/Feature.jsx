import React from "react";
import featureBook from "../assets/featureBook.png";
import SectionWrapper from "./SectionWrapper";

const Feature = () => {
  return (
    <SectionWrapper>
      <div className="w-full max-w-[1312px] mx-auto flex flex-col lg:flex-row gap-y-12 lg:gap-x-20">
        {/* Left side */}
        <div className="w-full lg:w-1/2 order-0 lg:order-none">
          <h2>Wendy’s latest masterpiece - The Island Between Us</h2>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 text-left order-1 lg:order-none">
          <div className="space-y-8">
            <p>
              Dive into a world of passion and suspense with Wendy Hudson's most
              recent book. This captivating tale promises to keep you on the
              edge of your seat.
            </p>

            {/* Reviews section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="p-2">
                <h4 className="text-foreground mb-2">
                  What readers are saying
                </h4>
                <p className="italic text-base">
                  "A gripping tale of love and loss, set against the backdrop of
                  a breathtaking island. Wendy Hudson's storytelling is nothing
                  short of magical."
                </p>
              </div>

              {/* Review 2 */}
              <div className="p-2">
                <h4 className="text-foreground mb-2">
                  Praise from the experts
                </h4>
                <p className="italic text-base">
                  "Wendy Hudson delivers a masterclass in emotional
                  storytelling. A beautifully crafted novel, rich with suspense
                  and heartfelt moments that linger long after the last page."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={featureBook}
        alt="image of the feature book"
        className="w-full mt-12 rounded-lg"
      />
    </SectionWrapper>
  );
};

export default Feature;
