import React from "react";

function Heading2({ children, className }) {
  return (
    <h2
      className={`text-4xl font-bold pb-8 max-md:text-2xl max-md:pb-5 ${className} leading-normal`}
    >
      {children}
    </h2>
  );
}

export default Heading2;
