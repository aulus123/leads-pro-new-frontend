import React, { useState } from "react";
import styled from "styled-components";

const StyledNewService = styled.div`
  padding: 2rem;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray-600);
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--gray-100);
    }
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--gray-900);
  }

  .form {
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--gray-700);
  }

  .input {
    padding: 0.75rem;
    border: 1px solid var(--gray-200);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    outline: none;

    &:focus {
      border-color: var(--blue-600);
      box-shadow: 0 0 0 2px var(--blue-100);
    }
  }

  .select {
    padding: 0.75rem;
    border: 1px solid var(--gray-200);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: var(--gray-700);
    background-color: white;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: var(--blue-600);
      box-shadow: 0 0 0 2px var(--blue-100);
    }
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--blue-600);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--blue-700);
    }
  }
`;

export const NewService = ({ onBack, companyId, onServiceCreated }) => {
  const [description, setDescription] = useState('');
  const [commission, setCommission] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!companyId) {
      console.log('No company ID provided');
      return;
    }
    
    setIsSubmitting(true);
    const data = {
      nm_service: description,
      id_company: companyId,
      commission: commission ? parseFloat(commission) : null
    };
    console.log('Submitting service:', data);

    try {
      const response = await fetch('http://localhost:3000/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newService = await response.json();
        console.log('Service created:', newService);
        if (onServiceCreated) {
          onServiceCreated(newService);
        }
        onBack();
      } else {
        const error = await response.text();
        console.error('Failed to create service:', error);
      }
    } catch (error) {
      console.error('Error creating service:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledNewService>
      <div className="header">
        <button className="back-button" onClick={onBack}>
          ← Back to Services
        </button>
        <h1 className="title">New Service</h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Description</label>
          <input
            type="text"
            className="input"
            placeholder="Enter service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Commission</label>
          <input
            type="number"
            className="input"
            placeholder="Enter commission amount"
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
            step="0.01"
            min="0"
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting || !description.trim()}
        >
          {isSubmitting ? 'Creating...' : 'Create Service'}
        </button>
      </form>
    </StyledNewService>
  );
};

export default NewService;
