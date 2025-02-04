/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Building2_1 } from "../../icons/Building2_1";
import { Building2_4 } from "../../icons/Building2_4";
import { CircleDollarSign } from "../../icons/CircleDollarSign";
import { Handshake2 } from "../../icons/Handshake2";
import { Headset } from "../../icons/Headset";
import { LayoutDashboard2 } from "../../icons/LayoutDashboard2";
import { MapPin3 } from "../../icons/MapPin3";
import { MapPin4 } from "../../icons/MapPin4";
import { Users2 } from "../../icons/Users2";
import { Wrench } from "../../icons/Wrench";
import { ButtonSidebar } from "../ButtonSidebar";
import { Contexto } from "../Contexto";
import "./style.css";

export const Sidebar = ({
  className,
  contextoIcon = <Building2_4 className="icon-instance-node" />,
  override = <MapPin3 className="icon-instance-node" />,
  buttonSidebarState = "selected",
  buttonSidebarIcon = (
    <LayoutDashboard2 className="icon-instance-node-2" color="#2563EB" />
  ),
  buttonSidebarIcon1 = <Building2_1 className="icon-instance-node-2" />,
  buttonSidebarIcon2 = <MapPin4 className="icon-instance-node-2" />,
  buttonSidebarIcon3 = <Handshake2 className="icon-instance-node-2" />,
  buttonSidebarState1 = "default",
  buttonSidebarIcon4 = (
    <Wrench className="icon-instance-node-2" color="#64748B" />
  ),
  buttonSidebarIcon5 = <Users2 className="icon-instance-node-2" />,
  buttonSidebarIcon6 = <CircleDollarSign className="icon-instance-node-2" />,
}) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="logo">
        <div className="icon">
          <Headset className="headset-instance" />
        </div>

        <div className="company-name">Leads</div>
      </div>

      <div className="div">
        <Contexto
          className="contexto-instance"
          icon={contextoIcon}
          text="Company"
        />
        <Contexto className="contexto-instance" icon={override} text="Office" />
      </div>

      <img className="line" alt="Line" src="/img/line-4.svg" />

      <div className="menu">
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon}
          state={buttonSidebarState}
          text="Dashboard"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon1}
          state="default"
          text="Company"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon2}
          state="default"
          text="Office"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon3}
          state="default"
          text="Representative"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon4}
          state={buttonSidebarState1}
          text="Services"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon5}
          state="default"
          text="Leads"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={buttonSidebarIcon6}
          state="default"
          text="Commission Report"
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  buttonSidebarState: PropTypes.string,
  buttonSidebarState1: PropTypes.string,
};
