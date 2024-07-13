// UpdateCompany.js

import React, { useState, useEffect } from 'react';

const UpdateCompany = ({ companyId }) => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');


  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await fetch(`http://localhost:6003/CompanyDetail/${companyId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch company details');
      }
      const data = await response.json();
      setCompany(data);
      setCompanyName(data.companyName);
      setIndustry(data.industry);
      setLocation(data.location);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSubmit = async (updatedCompanyData) => {
    try {
      // Perform update request to backend
      await fetch(`http://localhost:6003/UpdateCompany/${companyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCompanyData),
      });
      // Optionally, you can navigate back to the company list or show a success message
    } catch (error) {
      console.error('Error updating company details:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!company) {
    return <div>Company not found</div>;
  }

  // Render form to update company details
  return (
    <div>
      <h2>Update Company: {company.companyName}</h2>
      {/* Example form fields */}
      <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default UpdateCompany;
