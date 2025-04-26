import React from "react";

const SectionWrapper = ({ children, noTopPadding }) => {
  return (
    <section className={`px-5 py-8 sm:py-16 lg:py-28 sm:px-8 md:px-8 lg:px-16 ${noTopPadding ? '' : 'pt-24'}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
