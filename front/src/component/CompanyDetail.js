import React, { useState, useEffect } from 'react';
// import CompanyList from './CompanyList'
import './companydetail.css'
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  //const navigate = useNavigate();

  
  useEffect(() => {
    fetchCompanyDetails();
  }, [companyId]);

  const fetchCompanyDetails = async () => {
    try {
      const response = await fetch(`http://localhost:6003/CompanyList/${companyId}`);
      const data = await response.json();
      setCompany(data);
    } catch (error) {
      console.error('Error fetching company details:', error);
    }
  };

  if (!company) {
    return <div>Loading...</div>;
  }

  
      return (
        <div>
          <h2>{company.companyName}</h2>
          <p><strong>Industry:</strong> {company.industry}</p>
          <p><strong>Location:</strong> {company.location}</p>
          <p><strong>Description:</strong> {company.description}</p>
          {/* Add more details as needed */}
          <h1>HEllo how are you</h1>
        </div>
      );
    };

export default CompanyDetail


// return (

      {/* <h1 >ADitya Private LTD</h1>
      <img  className='image1'></img>
      <img  className='image2'></img>
      <img  className='image3'></img>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p> */}
