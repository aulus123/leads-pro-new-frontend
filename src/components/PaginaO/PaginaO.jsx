/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Ellipsis2 } from "../../icons/Ellipsis2";
import { ButtonNect } from "../ButtonNect";
import { ButtonNumber } from "../ButtonNumber";
import { ButtonPrev } from "../ButtonPrev";
import "./style.css";

export const PaginaO = ({ property1, className }) => {
  return (
    <div className={`pagina-o ${className}`}>
      <ButtonPrev className="design-component-instance-node" state="disable" />
      <ButtonNumber selected text="1" />
      <ButtonNumber text="2" />
      <ButtonNumber text="3" />
      <div className="ellipsis-wrapper">
        <Ellipsis2 className="ellipsis" />
      </div>

      <ButtonNect className="design-component-instance-node" />
    </div>
  );
};

PaginaO.propTypes = {
  property1: PropTypes.oneOf(["pag-1"]),
};
