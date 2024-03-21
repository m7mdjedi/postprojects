import React from "react";

const Button = (props) => {
  return (
    <button
      disabled={props.allowed}
      className={`px-3  py-2 rounded-lg text-white dark:bg-lime-600 bg-red-600
       disabled:bg-red-200 
       hover:enabled:border-red-600
       hover:dark:enabled:border-lime-600
       border-2
        hover:enabled:text-red-600 
        hover:dark:enabled:text-lime-600 
        hover:enabled:bg-white
        text-xl 
        font-semibold ${
        props.allowed ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
