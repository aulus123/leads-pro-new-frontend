/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import "./style.css";

export const ButtonPrev = ({ state, className }) => {
  return (
    <div className={`button-prev ${className}`}>
      <ChevronLeft1 className="chevron-left" />
      <div className="text-wrapper">Previous</div>
    </div>
  );
};

ButtonPrev.propTypes = {
  state: PropTypes.oneOf(["disable"]),
};
