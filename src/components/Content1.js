import React from "react";

function Content1({ children, className }) {
  return (
    <p className={`text-2xl pb-4 max-md:text-xl max-md:pb-2 ${className}`}>
      {children}
    </p>
  );
}

export default Content1;
