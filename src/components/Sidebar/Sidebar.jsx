import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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

export const Sidebar = ({ className }) => {
  const [companies, setCompanies] = useState([]);
  const [offices, setOffices] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState(null);

  useEffect(() => {
    // Fetch companies
    fetch('http://localhost:3000/companies')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  useEffect(() => {
    // Fetch offices when a company is selected
    if (selectedCompany) {
      fetch('http://localhost:3000/offices')
        .then(response => response.json())
        .then(data => {
          const filteredOffices = data.filter(
            office => office.id_company === selectedCompany.id_company
          );
          setOffices(filteredOffices);
          setSelectedOffice(null); // Reset selected office when company changes
        })
        .catch(error => console.error('Error fetching offices:', error));
    } else {
      setOffices([]);
      setSelectedOffice(null);
    }
  }, [selectedCompany]);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleOfficeSelect = (office) => {
    setSelectedOffice(office);
  };

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
          icon={<Building2_4 className="icon-instance-node" />}
          text={selectedCompany ? selectedCompany.nm_company : "Select Company"}
          options={companies}
          onSelect={handleCompanySelect}
          type="company"
        />
        <Contexto
          className="contexto-instance"
          icon={<MapPin3 className="icon-instance-node" />}
          text={selectedOffice ? selectedOffice.nm_office : "Select Office"}
          options={offices}
          onSelect={handleOfficeSelect}
          type="office"
        />
      </div>

      <img className="line" alt="Line" src="/img/line-4.svg" />

      <div className="menu">
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<LayoutDashboard2 className="icon-instance-node-2" color="#2563EB" />}
          state="selected"
          text="Dashboard"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<Building2_1 className="icon-instance-node-2" />}
          state="default"
          text="Company"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<MapPin4 className="icon-instance-node-2" />}
          state="default"
          text="Office"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<Handshake2 className="icon-instance-node-2" />}
          state="default"
          text="Representative"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<Wrench className="icon-instance-node-2" color="#64748B" />}
          state="default"
          text="Services"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<Users2 className="icon-instance-node-2" />}
          state="default"
          text="Leads"
        />
        <ButtonSidebar
          className="button-sidebar-instance"
          icon={<CircleDollarSign className="icon-instance-node-2" />}
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
