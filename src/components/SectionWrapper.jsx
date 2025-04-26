import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <section className="pt-20 px-5 py-8 md:px-8 lg:px-16 lg:py-28">
      {children}
    </section>
  );
};

export default SectionWrapper;
// This component is a wrapper for sections of the website, providing consistent padding and margin.
// It can be used to wrap different sections like the hero, feature, and books section.
// The `children` prop allows you to pass in any content you want to display within the section.
// This is useful for maintaining a consistent layout and styling across different parts of the website.