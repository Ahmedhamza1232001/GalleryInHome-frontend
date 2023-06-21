import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

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
    <div className="confirmation-page">
      <h1>Confirmation Page</h1>
      <table>
        <tbody>
          <tr>
            <td className="label">First Name:</td>
            <td className="value">{firstName}</td>
          </tr>
          <tr>
            <td className="label">Last Name:</td>
            <td className="value">{lastName}</td>
          </tr>
          <tr>
            <td className="label">Company Name:</td>
            <td className="value">{companyName}</td>
          </tr>
          <tr>
            <td className="label">Email:</td>
            <td className="value">{email}</td>
          </tr>
          <tr>
            <td className="label">Country:</td>
            <td className="value">{country}</td>
          </tr>
          <tr>
            <td className="label">Address:</td>
            <td className="value">{address}</td>
          </tr>
          <tr>
            <td className="label">Town:</td>
            <td className="value">{town}</td>
          </tr>
          <tr>
            <td className="label">ZipCode:</td>
            <td className="value">{zipCode}</td>
          </tr>
          <tr>
            <td className="label">PhoneNo:</td>
            <td className="value">{phoneNo}</td>
          </tr>
          <tr>
            <td className="label">Comment:</td>
            <td className="value">{comment}</td>
          </tr>
        </tbody>
      </table>
      <p className="total-sum">Total Price: {totalSum}</p>
      {/* Display other form input values as needed */}
    </div>
  );
};

export default ConfirmationPage;
