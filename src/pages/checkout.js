import React from 'react';
import './checkout.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const CheckOut =() => {
    return(
        <div className='cart-table-area section-padding-100'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <div className='checkout_details_area mt-50 clearfix'>
                            <div className='cart-title'>
                                <h2>Checkout</h2>

                                {/* form of checkout */}
                                <form action='#' method='post'>
                                    <div className='row'>
                                        <div className='col-md-6 mb-3'>
                                            <Form.Control  className='form-control' size="lg" type="text" placeholder="First Name" />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="text" placeholder="Last Name" />
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="text" placeholder="Company Name" />
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="email" placeholder="Email" />
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <Form.Select className='form-select' aria-label="Default select example">
                                                <option >United States</option>
                                                <option value="1">United Kingdom</option>
                                                <option value="2">Germany</option>
                                                <option value="3">Egypt</option>
                                                <option value="4">France</option>
                                                <option value="5">India</option>
                                                <option value="6">Australia</option>
                                                <option value="7">Canada</option>
                                            </Form.Select>
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="text" placeholder="Address" />
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="text" placeholder="Town" />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="text" placeholder="Zip Code" />
                                        </div>
                                        <div className='col-md-6 mb-3'>
                                            <Form.Control className='form-control' size="lg" type="number" min={0} placeholder="Phone No" />
                                        </div>
                                        <div className='col-12 mb-3'>
                                            <FloatingLabel controlId="floatingTextarea2" >
                                                <Form.Control 
                                                className='form-control'
                                                as="textarea"
                                                placeholder="Leave a comment about your order"
                                                style={{ height: '200px' }}
                                                />
                                            </FloatingLabel>
                                        </div>
                                        <div className='col-12'>
                                            {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                className="check"
                                                type={type}
                                                label={`Create an account`}
                                                id={`default-${type}`}
                                              />
                                                <Form.Check
                                                className="check"
                                                type={type}
                                                label={`Ship to a different address`}
                                                id={`default-${type}`}
                                                />
                                            </div> ))}
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
                                <li><span>Subtotal:</span><span>$140.00</span></li>
                                <li><span>Delivery:</span><span>Free</span></li>
                                <li><span>Total:</span><span>$140.00</span></li>
                            </ul>

                            {/* Payment Method */}
                            <div className='payment-method'>
                                {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                    className="check"
                                    type={type}
                                    label={`Cash on Delivery`}
                                    id={`default-${type}`}
                                    />
                                    <div className="paypal">
                                        <Form.Check
                                        className="check"
                                        type={type}
                                        label={`Paypal`}
                                        id={`default-${type}`}
                                        />
                                        <img className='paypalimage' src="../images/paypal.png.webp" alt="Paypal"/>   
                                    </div>
                                </div> ))}
                            </div>
                            <div className='cart-btn mt-100'>
                                <Button className='btn amado-btn w-100' as="input" type="submit" value="Checkout" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;