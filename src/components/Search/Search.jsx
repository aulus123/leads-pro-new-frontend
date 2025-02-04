/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSearch2 } from "../../icons/IconSearch2";
import "./style.css";

export const Search = ({ className, text = "Search company..." }) => {
  return (
    <div className={`search ${className}`}>
      <div className="menu-item">
        <IconSearch2 className="icon-search" />
        <div className="search-company">{text}</div>
      </div>
    </div>
  );
};

Search.propTypes = {
  text: PropTypes.string,
};
