import React, { useState } from 'react';
import axios from "axios"
import CompanyList from './CompanyList';
import { navigate, useNavigate } from 'react-router-dom';
import './companyform.css'

const CompanyForm = () => {
 
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:6003/CompanyForm",{companyName,industry,location})
     .then(result =>{
      console.log(result);
      navigate('/CompanyList');
     })
    .catch(err=>console.log(err));
   
  };


  return (
    <div className='card'>
       <h1>Add Company</h1>
       <div className='companyform'>
    <form onSubmit={handleInputChange}>
      <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
         onChange={e=>setCompanyName(e.target.value)}
          required
        />
      <br />
      <label>Industry:</label>
        <input
          type="text"
          name="industry"
         
          onChange={e=>setIndustry(e.target.value)}
          required
        />
      <br />
      <label> Location:</label>
        <input
          type="text"
          name="location"
          
          onChange={e=>setLocation(e.target.value)}
          required
        />
      
      <br />
      <button className='btn' type="submit" onClick={(e) =>{handleInputChange(e)}} >Add Company</button>
    </form>
    </div>

    </div>
  );
};

export default CompanyForm;