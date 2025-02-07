import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { Building2_3 } from "../../icons/Building2_3";
import { ChevronDown2 } from "../../icons/ChevronDown2";
import "./style.css";

export const Contexto = ({
  className,
  icon = <Building2_3 className="building" />,
  text = "Select...",
  options = [],
  onSelect,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`contexto ${className}`} ref={dropdownRef}>
      <div 
        className="contexto-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="frame">{icon}</div>
        <div className="state">{text}</div>
        <ChevronDown2 className={`chevron-down ${isOpen ? 'rotated' : ''}`} />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={type === 'company' ? option.id_company : option.id_office}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {type === 'company' ? option.nm_company : option.nm_office}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Contexto.propTypes = {
  text: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  type: PropTypes.oneOf(['company', 'office']),
};
