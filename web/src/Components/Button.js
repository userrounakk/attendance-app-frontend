import React from "react";

function Button({ onClick, children, className, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "font-sans text-xl m-9 py-5 px-10 bg-primary text-white " + className
      }
    >
      {children}
    </button>
  );
}

export default Button;
