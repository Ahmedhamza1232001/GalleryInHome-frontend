import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './checkout.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const CheckOut = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalSum = queryParams.get('total');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    country: 'United States',
    address: '',
    town: '',
    zipCode: '',
    phoneNo: '',
    comment: '',
    paymentMethod: "CashOnDelivery",

  });



  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data or send it to an API

    const paymentMethod = formData.paymentMethod;
    
    if (paymentMethod === 'CashOnDelivery') {

    // Redirect to the confirmation page with the form data in the URL
    const url = `/ConfirmationPage?firstName=${encodeURIComponent(
      formData.firstName
    )}&lastName=${encodeURIComponent(formData.lastName)}&companyName=${encodeURIComponent(
      formData.companyName
    )}&email=${encodeURIComponent(
      formData.email
    )}&country=${encodeURIComponent(
      formData.country
    )}&address=${encodeURIComponent(
      formData.address
    )}&town=${encodeURIComponent(
      formData.town
    )}&zipCode=${encodeURIComponent(
      formData.zipCode
    )}&phoneNo=${encodeURIComponent(
      formData.phoneNo
    )}&comment=${encodeURIComponent(
      formData.comment
    )}`;

    localStorage.setItem('checkoutFormData', JSON.stringify(formData));

    window.location.href = url;}
    else if (paymentMethod === 'CreditCard') {
        // Open the PayPal payment page
        // You can add your own logic to open the PayPal page here.
        window.open('https://www.paypal.com', '_blank');

      }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  return (
    <div className='cart-table-area section-padding-100'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <div className='checkout_details_area mt-50 clearfix'>
              <div className='cart-title'>
                <h2>Checkout</h2>

                {/* form of checkout */}
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='Company Name'
                        name='companyName'
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <Form.Select
                        className='form-select'
                        aria-label='Default select example'
                        name='country'
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option>United States</option>
                        <option value='1'>United Kingdom</option>
                        <option value='2'>Germany</option>
                        <option value='3'>Egypt</option>
                        <option value='4'>France</option>
                        <option value='5'>India</option>
                        <option value='6'>Australia</option>
                        <option value='7'>Canada</option>
                      </Form.Select>
                    </div>
                    <div className='col-12 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='Address'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='Town'
                        name='town'
                        value={formData.town}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='text'
                        placeholder='Zip Code'
                        name='zipCode'
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <Form.Control
                        className='form-control'
                        size='lg'
                        type='number'
                        min={0}
                        placeholder='Phone No'
                        name='phoneNo'
                        value={formData.phoneNo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='col-12 mb-3'>
                      <FloatingLabel controlId='floatingTextarea2'>
                        <Form.Control
                          className='form-control'
                          as='textarea'
                          placeholder='Leave a comment about your order'
                          style={{ height: '200px' }}
                          name='comment'
                          value={formData.comment}
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </div>
 
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            {/* Cart total information */}
            <div className='cart-summary'>
              <h5>Cart Total</h5>
              <ul>
                <li>
                  <span>Subtotal:</span>
                  <span>0.00 EGP</span>
                </li>
                <li>
                  <span>Delivery:</span>
                  <span>Free</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span>{totalSum} EGP</span>
                </li>
              </ul>
              <div className='payment-method'>
                {['CashOnDelivery', 'CreditCard'].map((method) => (
                  <div key={method} className='mb-3'>
                    <Form.Check
                      className='check'
                      type='radio'
                      name='paymentMethod'
                      label={method === 'CashOnDelivery' ? 'Cash on Delivery' : 'Credit Card'}
                      id={`inline-${method}`}
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleInputChange}
                    />
                    {method === 'CreditCard' && (
                      <img
                        className='paypalimage'
                        src='images/paypal.png.webp'
                        alt='Paypal'
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className='cart-btn mt-100'>
                <Button
                  className='btn amado-btn w-100'
                  as='input'
                  type='submit'
                  value='Order Now'
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
