import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NewService } from "./NewService";

const StyledServices = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--gray-50);

  .sidebar {
    width: 16rem;
    background-color: var(--red-600);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-icon {
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--blue-600);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  .logo-text {
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
  }

  .nav-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: white;
    font-size: 0.875rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &.active {
      background-color: var(--red-700);
    }
  }

  .nav-icon {
    font-size: 1.25rem;
  }

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dropdown {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.15);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    option {
      background-color: var(--red-600);
      color: white;
    }
  }

  .main-content {
    margin-left: 16rem;
    flex: 1;
    min-height: 100vh;
    background-color: var(--gray-50);
  }

  .services-list {
    padding: 2rem;
    position: relative;
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .new-service-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--blue-600);
    color: white;
    padding: 0.625rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 10;

    &:hover:not(:disabled) {
      background-color: var(--blue-700);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--gray-400);
    }
  }

  .services-table {
    width: 100%;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .table-header {
    display: grid;
    grid-template-columns: 6fr 3fr 3fr;
    padding: 1rem 1.5rem;
    background-color: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
    font-weight: 500;
    color: var(--gray-600);
    font-size: 0.875rem;
  }

  .table-row {
    display: grid;
    grid-template-columns: 6fr 3fr 3fr;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--gray-200);
    align-items: center;
    font-size: 0.875rem;
    color: var(--gray-700);

    &:hover {
      background-color: var(--gray-50);
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  .action-btn {
    padding: 0.375rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--gray-100);
    }
  }

  .edit-btn {
    color: var(--blue-600);
  }

  .delete-btn {
    color: var(--red-600);
  }

  .empty-state {
    text-align: center;
    padding: 3rem 0;
    color: var(--gray-500);
    font-size: 0.875rem;
  }

  .loading {
    text-align: center;
    padding: 3rem 0;
    color: var(--gray-500);
    font-size: 0.875rem;
  }
`;

const Services = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('list'); // 'list' or 'new'
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      fetchServices();
      fetchOffices();
    } else {
      setServices([]);
      setOffices([]);
      setSelectedOffice(null);
    }
  }, [selectedCompany]);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:3000/companies');
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const fetchServices = async () => {
    if (!selectedCompany) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/services');
      const data = await response.json();
      const filteredServices = data.filter(
        service => service.id_company === selectedCompany
      );
      setServices(filteredServices);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOffices = async () => {
    try {
      const response = await fetch(`http://localhost:3000/offices?companyId=${selectedCompany}`);
      const data = await response.json();
      setOffices(data);
    } catch (error) {
      console.error('Error fetching offices:', error);
    }
  };

  const handleCompanyChange = (event) => {
    const companyId = event.target.value;
    const parsedId = companyId === '' ? null : parseInt(companyId);
    console.log('Selected company ID:', parsedId); // Debug log
    setSelectedCompany(parsedId);
    setView('list'); // Reset to list view when company changes
    setShowServices(true); // Show services when company is selected
    fetchServices(); // Fetch services when company changes
  };

  const handleOfficeChange = (event) => {
    const officeId = event.target.value;
    setSelectedOffice(officeId === '' ? null : parseInt(officeId));
  };

  const handleServicesClick = () => {
    setShowServices(true);
  };

  const handleNewService = () => {
    if (!selectedCompany) {
      console.log('No company selected'); // Debug log
      return;
    }
    console.log('Creating new service for company:', selectedCompany); // Debug log
    setShowServices(true);
    setView('new');
    console.log('View state updated to:', 'new'); // Debug log
  };

  const handleBackToList = () => {
    console.log('Returning to list view'); // Debug log
    setView('list');
    fetchServices(); // Refresh services list
  };

  const renderContent = () => {
    if (!showServices) {
      return null;
    }

    if (view === 'new') {
      if (!selectedCompany) {
        return <div className="empty-state">Please select a company first</div>;
      }
      return (
        <NewService 
          onBack={handleBackToList} 
          companyId={selectedCompany} 
          onServiceCreated={(newService) => {
            console.log('Service created callback:', newService); // Debug log
            fetchServices();
          }}
        />
      );
    }

    return (
      <div className="services-list">
        <div className="content-wrapper">
          <div className="header">
            <h1 className="title">Services</h1>
            <button 
              className="new-service-btn" 
              onClick={() => {
                console.log('New Service button clicked');
                handleNewService();
              }}
              disabled={!selectedCompany}
            >
              <span>+</span>
              <span>New Service</span>
            </button>
          </div>

          <div className="services-table">
            <div className="table-header">
              <div>Description</div>
              <div>Commission</div>
              <div>Actions</div>
            </div>

            {loading ? (
              <div className="loading">Loading...</div>
            ) : services.length === 0 ? (
              <div className="empty-state">
                {selectedCompany ? 'No services found' : 'Select a company to view services'}
              </div>
            ) : (
              services.map(service => (
                <div key={service.id_service} className="table-row">
                  <div>{service.nm_service}</div>
                  <div>${service.commission || '0.00'}</div>
                  <div className="actions">
                    <button className="action-btn edit-btn">✏️</button>
                    <button className="action-btn delete-btn">🗑️</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <StyledServices>
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">🎧</div>
            <span className="logo-text">Leads Pro</span>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-buttons">
            <button className="nav-button">
              <span className="nav-icon">📊</span>
              <span>Dashboard</span>
            </button>
            <button className="nav-button">
              <span className="nav-icon">🏢</span>
              <span>Company</span>
            </button>
            <button className="nav-button">
              <span className="nav-icon">📍</span>
              <span>Office</span>
            </button>
            <button className="nav-button">
              <span className="nav-icon">👥</span>
              <span>Representative</span>
            </button>
            <button 
              className={`nav-button ${showServices ? 'active' : ''}`}
              onClick={handleServicesClick}
            >
              <span className="nav-icon">💰</span>
              <span>Services</span>
            </button>
            <button className="nav-button">
              <span className="nav-icon">🎯</span>
              <span>Leads</span>
            </button>
          </div>

          <div className="dropdowns">
            <select
              value={selectedCompany || ''}
              onChange={handleCompanyChange}
              className="dropdown"
            >
              <option value="">Select Company</option>
              {companies.map(company => (
                <option key={company.id_company} value={company.id_company}>
                  {company.nm_company}
                </option>
              ))}
            </select>

            <select
              value={selectedOffice || ''}
              onChange={handleOfficeChange}
              className="dropdown"
              disabled={!selectedCompany}
            >
              <option value="">Select Office</option>
              {offices.map(office => (
                <option key={office.id_office} value={office.id_office}>
                  {office.nm_office}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </StyledServices>
  );
};

export default Services;
