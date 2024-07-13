import React, { useState, useEffect } from 'react';
import './companylist.css'
import { useNavigate } from 'react-router-dom';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:6003/CompanyList');
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleCompanyClick = (companyId) => {
    navigate(`/CompanyDetail/${companyId}`);
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    // Filter companies based on the search term (company name)
    const filteredCompanies = companies.filter(company =>
      company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCompanies(filteredCompanies);
  };

  const handleUpdate = (companyId) => {
    navigate(`/UpdateCompany/${companyId}`);
  };

  const handleDelete = (companyId) => {
    // Filter out the company to be deleted from the state
    const updatedCompanies = companies.filter(company => company._id !== companyId);
    setCompanies(updatedCompanies);
    // Perform deletion in backend here (optional)
  };


  return (
    <div className='container'>
    <div className='companylist'>
     
      <h2>Company List</h2>
      <div className="search-container">
          <input
            type="text"
            placeholder="Search by company name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Search</button>
          </div>
      {companies.map((company) => (
        <div key={company._id} className="company-card">
          <h3><div className='title'>{company.companyName}</div></h3>
          <p> <span>Industry:</span> {company.industry}</p>
          <p><span>Location:</span> {company.location}</p>
          {/* <button onClick={(e) => handleCompanyClick()}>For details</button> */}
        
          <div className='card-actions'>
              {/* <button onClick={() => handleCompanyClick(company._id)}>Details</button> */}
              <button onClick={() => handleUpdate(company._id)}>Update</button>
              <button onClick={() => handleDelete(company._id)}>Delete</button>
            </div>
        </div>
        
      ))}

    </div>
    </div>
  );
};

export default CompanyList;
