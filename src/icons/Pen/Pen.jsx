/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Pen = ({ className }) => {
  return (
    <svg
      className={`pen ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.1739 6.81201C21.7026 6.28344 21.9997 5.56648 21.9998 4.81887C21.9999 4.07125 21.703 3.35422 21.1744 2.82551C20.6459 2.29681 19.9289 1.99973 19.1813 1.99963C18.4337 1.99954 17.7166 2.29644 17.1879 2.82501L3.84193 16.174C3.60975 16.4055 3.43805 16.6905 3.34193 17.004L2.02093 21.356C1.99509 21.4425 1.99314 21.5344 2.01529 21.6219C2.03743 21.7094 2.08285 21.7892 2.14673 21.853C2.21061 21.9168 2.29055 21.9621 2.37809 21.9841C2.46563 22.0061 2.55749 22.004 2.64393 21.978L6.99693 20.658C7.3101 20.5628 7.59511 20.3921 7.82693 20.161L21.1739 6.81201Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
