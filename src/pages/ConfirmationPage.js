import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');
  const lastName = queryParams.get('lastName');
  const companyName = queryParams.get('companyName');
  const email = queryParams.get('email');
  const country = queryParams.get('country');
  const address = queryParams.get('address');
  const zipCode = queryParams.get('zipCode');
  const town = queryParams.get('town');
  const phoneNo = queryParams.get('phoneNo');
  const comment = queryParams.get('comment');
  const totalSum = queryParams.get('totalSum');
  

  return (
    <div>
      <h1>Confirmation Page</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Company Name: {companyName}</p>
      <p>Company Name: {email}</p>
      <p>Company Name: {country}</p>
      <p>Company Name: {address}</p>
      <p>Company Name: {town}</p>
      <p>Company Name: {zipCode}</p>
      <p>Company Name: {phoneNo}</p>
      <p>Company Name: {comment}</p>
      <p>Company Name: {totalSum}</p>
      {/* Display other form input values as needed */}
    </div>
  );
};

export default ConfirmationPage;
