import React from "react";

const SectionWrapper = ({ children, noTopPadding }) => {
  return (
    <section className={`px-5 py-16 lg:py-28 md:px-8 lg:px-16 ${noTopPadding ? '' : 'pt-24 lg:pt-32'}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
