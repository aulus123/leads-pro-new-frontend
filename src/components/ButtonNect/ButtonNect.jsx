/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ChevronRight2 } from "../../icons/ChevronRight2";
import "./style.css";

export const ButtonNect = ({ className }) => {
  return (
    <div className={`button-nect ${className}`}>
      <div className="text-wrapper-2">Next</div>

      <ChevronRight2 className="chevron-right" />
    </div>
  );
};
