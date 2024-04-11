import React from "react";

function Heading1({ children, className }) {
  return (
    <h1
      className={`text-6xl font-bold pb-8 max-md:text-4xl max-sm:text-3xl max-md:pb-5 text-white ${className}  leading-normal`}
    >
      {children}
    </h1>
  );
}

export default Heading1;
