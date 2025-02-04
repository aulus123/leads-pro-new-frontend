/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Ticket = ({ color = "#64748B", className }) => {
  return (
    <svg
      className={`ticket ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.8333 4.16666V5.83332M10.8333 14.1667V15.8333M10.8333 9.16666V10.8333M1.66666 7.49999C2.3297 7.49999 2.96558 7.76338 3.43442 8.23222C3.90326 8.70106 4.16666 9.33695 4.16666 9.99999C4.16666 10.663 3.90326 11.2989 3.43442 11.7678C2.96558 12.2366 2.3297 12.5 1.66666 12.5V14.1667C1.66666 14.6087 1.84225 15.0326 2.15481 15.3452C2.46737 15.6577 2.8913 15.8333 3.33332 15.8333H16.6667C17.1087 15.8333 17.5326 15.6577 17.8452 15.3452C18.1577 15.0326 18.3333 14.6087 18.3333 14.1667V12.5C17.6703 12.5 17.0344 12.2366 16.5656 11.7678C16.0967 11.2989 15.8333 10.663 15.8333 9.99999C15.8333 9.33695 16.0967 8.70106 16.5656 8.23222C17.0344 7.76338 17.6703 7.49999 18.3333 7.49999V5.83332C18.3333 5.3913 18.1577 4.96737 17.8452 4.65481C17.5326 4.34225 17.1087 4.16666 16.6667 4.16666H3.33332C2.8913 4.16666 2.46737 4.34225 2.15481 4.65481C1.84225 4.96737 1.66666 5.3913 1.66666 5.83332V7.49999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
      />
    </svg>
  );
};

Ticket.propTypes = {
  color: PropTypes.string,
};
