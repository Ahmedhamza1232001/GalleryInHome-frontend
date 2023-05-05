import './newProduct.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { TiCloudStorage } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';
import { AiOutlineCaretDown } from "react-icons/ai";


const NewProduct =() =>{
    const { register, handleSubmit,formState:{errors} } = useForm();
    const submition = (data) => {
        console.log(data)
    }
    return(
        <Card className='addCard'>
            <Card.Body className='card-body p-4'>
                <Card.Title className='card-title'>
                    <h5>Add New Product</h5>
                </Card.Title>
                <hr></hr>
                <form onSubmit={handleSubmit(submition)} className="form-body mt-4">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='border border-3 p-4 rounded'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    {<span style={{ color:"red"}}>{errors.title?.message}</span>}
                                    <input type='text' className='form-control' name="title" placeholder="Enter Product Title" {...register("title",{required:"  is requierd*"})} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Description</Form.Label>
                                    {<span style={{ color:"red"}}>{errors.description?.message}</span>}
                                    <Form.Control as="textarea"
                                        placeholder="Enter Product Description"
                                        style={{ height: '100px' }} name="description"
                                        {...register("description",{required:"  is requierd*"})} 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Images</Form.Label>
                                    {<span style={{ color:"red"}}>{errors.image?.message}</span>}
                                    <div className='imageuploadify well'>
                                        <div className='imageuploadify-overlay'><i><TiCloudStorage/></i></div>
                                        <div className='imageuploadify-images-list text-center'>
                                            <i><TiCloudStorage/></i>
                                            <span className='imageupload-message'>Drag & Drop Your File(S) Here To Upload</span>
                                            <label className='btn btn-default'>or select file to upload
                                                <input type='file' name="image"
                                                    style={{ display: "none" }}
                                                    {...register("image",{required:"  is requierd*"})}
                                                />
                                            </label>
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
                                        {<span style={{ color:"red"}}>{errors.price?.message}</span>}
                                        <Form.Control placeholder="00.00" name="price" {...register("price", { required:"  is requierd*" })}/>                       
                                    </Form.Group >
                                    <Form.Group  className='col-12'>
                                        <Form.Label>Compare at Price</Form.Label>
                                        <Form.Control  placeholder="00.00" />                       
                                    </Form.Group >
                                    <Form.Group  className='col-12'>
                                        <Form.Label className='form-label'>Catagory</Form.Label>
                                        {<span style={{ color:"red"}}>{errors.Catagory?.message}</span>}
                                        <Form.Select aria-label="Default select example" className='form-select' name="Catagory" {...register("Catagory", { required:"  is requierd*" })}>
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
                                        {<span style={{ color:"red"}}>{errors.brands?.message}</span>}
                                        <Form.Select aria-label="Default select example" className='form-select'  name="brands" {...register("brands", { required:"  is requierd*" })} >
                                            <option value="1">Amado</option>
                                            <option value="2">Ikea</option>
                                            <option value="3">The Factory</option>
                                            <option value="4">Artdeco</option>
                                            <option value="5">Furniture Inc</option>                                      
                                        </Form.Select>                      
                                    </Form.Group >
                                    <div className='col-12'>
                                        <button className='btn btn-default'>Save Product</button>
                                    </div>                                                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Card.Body>
        </Card>
    )
}

export default NewProduct;