import React from "react";
import { Button } from "../../components/Button";
import { PaginaO } from "../../components/PaginaO";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Building2_1 } from "../../icons/Building2_1";
import { Building2_4 } from "../../icons/Building2_4";
import { CircleDollarSign } from "../../icons/CircleDollarSign";
import { Handshake2 } from "../../icons/Handshake2";
import { LayoutDashboard2 } from "../../icons/LayoutDashboard2";
import { MapPin3 } from "../../icons/MapPin3";
import { MapPin4 } from "../../icons/MapPin4";
import { Pen3 } from "../../icons/Pen3";
import { Plus1 } from "../../icons/Plus1";
import { Trash2_3 } from "../../icons/Trash2_3";
import { Users2 } from "../../icons/Users2";
import { Wrench } from "../../icons/Wrench";
import "./style.css";

export const Services = () => {
  return (
    <div className="services">
      <Sidebar
        buttonSidebarIcon={
          <LayoutDashboard2 className="icon-instance-node-4" color="#64748B" />
        }
        buttonSidebarIcon1={<Building2_1 className="icon-instance-node-4" />}
        buttonSidebarIcon2={<MapPin4 className="icon-instance-node-4" />}
        buttonSidebarIcon3={<Handshake2 className="icon-instance-node-4" />}
        buttonSidebarIcon4={
          <Wrench className="icon-instance-node-4" color="#2563EB" />
        }
        buttonSidebarIcon5={<Users2 className="icon-instance-node-4" />}
        buttonSidebarIcon6={
          <CircleDollarSign className="icon-instance-node-4" />
        }
        buttonSidebarState="default"
        buttonSidebarState1="selected"
        className="sidebar-instance"
        contextoIcon={<Building2_4 className="icon-instance-node-3" />}
        override={<MapPin3 className="icon-instance-node-3" />}
      />
      <div className="table">
        <div className="frame-2">
          <div className="frame-3">
            <div className="text-wrapper-3">Services</div>

            <Button
              className="design-component-instance-node-2"
              icon={<Plus1 className="icon-instance-node-5" />}
              stateProp="default"
              text="New Services"
              type="with-icon"
            />
          </div>

          <Search
            className="design-component-instance-node-2"
            text="Search Services..."
          />
        </div>

        <div className="frame-4">
          <div className="frame-5">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Description</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-5">Tax Preparation</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-5">Webdesigne</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-5">Social Media</div>
            </div>
          </div>

          <div className="frame-7">
            <div className="div-wrapper">
              <div className="text-wrapper-6">COMMISSION</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-7">$50.00</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-7">$150.00</div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-7">$200.00</div>
            </div>
          </div>

          <div className="frame-8">
            <div className="div-wrapper">
              <div className="text-wrapper-4">ACTIONS</div>
            </div>

            <div className="frame-9">
              <Button
                className="button-instance"
                icon={<Pen3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
              <Button
                className="button-2"
                icon={<Trash2_3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
            </div>

            <div className="frame-9">
              <Button
                className="button-instance"
                icon={<Pen3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
              <Button
                className="button-2"
                icon={<Trash2_3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
            </div>

            <div className="frame-9">
              <Button
                className="button-instance"
                icon={<Pen3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
              <Button
                className="button-2"
                icon={<Trash2_3 className="icon-instance-node-5" />}
                stateProp="default"
                type="just-icon"
              />
            </div>
          </div>
        </div>

        <PaginaO className="paginao" property1="pag-1" />
      </div>
    </div>
  );
};
