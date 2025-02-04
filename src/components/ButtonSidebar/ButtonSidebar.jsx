/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Ticket } from "../../icons/Ticket";
import "./style.css";

export const ButtonSidebar = ({
  state,
  className,
  icon = <Ticket className="ticket-1" color="#64748B" />,
  text = "Company",
}) => {
  return (
    <div className={`button-sidebar ${state} ${className}`}>
      {icon}
      <div className="company">{text}</div>
    </div>
  );
};

ButtonSidebar.propTypes = {
  state: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
};
