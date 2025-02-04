/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Building2_3 } from "../../icons/Building2_3";
import { ChevronDown2 } from "../../icons/ChevronDown2";
import "./style.css";

export const Contexto = ({
  className,
  icon = <Building2_3 className="building" />,
  text = "State",
}) => {
  return (
    <div className={`contexto ${className}`}>
      <div className="frame">{icon}</div>

      <div className="state">{text}</div>

      <ChevronDown2 className="chevron-down" />
    </div>
  );
};

Contexto.propTypes = {
  text: PropTypes.string,
};
