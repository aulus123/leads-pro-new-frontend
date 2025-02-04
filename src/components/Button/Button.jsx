/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconMail } from "../../icons/IconMail";
import "./style.css";

export const Button = ({
  type,
  stateProp,
  className,
  icon = <IconMail className="icon-mail" />,
  text = "Login with Email",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "with-icon",

    state: stateProp || "default",
  });

  return (
    <button
      className={`button ${state.type} ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {(state.state === "default" || state.type === "just-icon") && <>{icon}</>}

      {state.state === "hover" && state.type === "with-icon" && (
        <img className="icon-mail" alt="Mail" src="/img/mail.svg" />
      )}

      {state.type === "with-icon" && (
        <div className="login-with-email">{text}</div>
      )}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  type: PropTypes.oneOf(["just-icon", "with-icon"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
};
