import './newProduct.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { TiCloudStorage } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';

const NewProduct =() =>{

    return(
        <Card className='addCard'>
            <Card.Body className='card-body p-4'>
                <Card.Title className='card-title'>
                    <h5>Add New Product</h5>
                </Card.Title>
                <hr></hr>
                <Form className="form-body mt-4">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='border border-3 p-4 rounded'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    <Form.Control  placeholder="Enter Product Title" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea"
                                                  placeholder=""
                                                  style={{ height: '100px' }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Images</Form.Label>
                                    <div className='imageuploadify well'>
                                        <div className='imageuploadify-overlay'><i><TiCloudStorage/></i></div>
                                        <div className='imageuploadify-images-list text-center'>
                                            <i><TiCloudStorage/></i>
                                            <span className='imageupload-message'>Drag & Drop Your File(S) Here To Upload</span>
                                            <Button className='btn btn-default'>or select file to upload</Button>
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='border border-3 p-4 rounded'>
                                <div className='row g-3'>
                                    <Form.Group  className='col-12'>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control  placeholder="00.00" />                       
                                    </Form.Group >
                                    <Form.Group  className='col-12'>
                                        <Form.Label>Compare at Price</Form.Label>
                                        <Form.Control  placeholder="00.00" />                       
                                    </Form.Group >
                                    <Form.Group  className='col-12'>
                                        <Form.Label className='form-label'>Catagory</Form.Label>
                                        <Form.Select aria-label="Default select example" className='form-select'>
                                            <option></option>
                                            <option value="1">Chairs</option>
                                            <option value="2">Beds</option>
                                            <option value="3">Accesories</option>
                                            <option value="4">Furniture</option>
                                            <option value="5">Home Deco</option>
                                            <option value="6">Dressings</option>    
                                            <option value="7">Tables</option>                                         
                                        </Form.Select>                      
                                    </Form.Group >
                                    <Form.Group  className='col-12'>
                                        <Form.Label className='form-label'>Brands</Form.Label>
                                        <Form.Select aria-label="Default select example" className='form-select'>
                                            <option></option>
                                            <option value="1">Amado</option>
                                            <option value="2">Ikea</option>
                                            <option value="3">The Factory</option>
                                            <option value="4">Artdeco</option>
                                            <option value="5">Furniture Inc</option>                                      
                                        </Form.Select>                      
                                    </Form.Group >
                                    <div className='col-12'>
                                        <Button className='btn btn-default'>Save Product</Button>
                                    </div>                                                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NewProduct;