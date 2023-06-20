import './newProduct.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { TiCloudStorage } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';
import { AiOutlineCaretDown } from "react-icons/ai";
import axios from 'axios';
import { BlobServiceClient } from '@azure/storage-blob';
import fetch from 'node-fetch';
import Buffer from 'buffer';
global.Buffer = Buffer.Buffer;

const NewProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const token = sessionStorage.getItem('token');
  
    const submitForm = async (data) => {
      try {

           // Create a connection to your Azure Blob Storage account
           const sasToken = '?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-08-24T06:47:18Z&st=2023-05-28T22:47:18Z&spr=https,http&sig=ZvV8SI08YrfwNIYIE56k7D9c2TW1f4BivtrXilnU%2BXU%3D'; // Replace with the actual SAS token

           const blobServiceClient = new BlobServiceClient(
             `https://galleryinhome.blob.core.windows.net?${sasToken}`
           );
           
    // Get a reference to the container where you want to store the images
    const containerClient = blobServiceClient.getContainerClient('fileupload');

    const file = data.image[0]; // Get the selected file

    // Read the file and convert it to a data URL
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = async () => {
      const fileDataUrl = fileReader.result;

  // Convert data URL to Blob
    const responnse = await fetch(fileDataUrl);
    const blob = await responnse.blob();

    // Upload the blob to Azure Blob Storage
    const fileName = `${Date.now()}-${file.name}`;
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    await blockBlobClient.uploadData(blob);

    const imageUrl = blockBlobClient.url;

        const response = await axios.post(
          'https://galleryinhome.azurewebsites.net/api/Stakeholder',
          {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price),
            discount: parseFloat(data.discount),
            color: data.color,
            images: [
              {
                name: imageUrl,
              }
            ],
            height: parseFloat(data.height),
            width: parseFloat(data.width),
            depth: data.depth,
            model: data.model,
            madeIn: data.madeIn,
            warranty: data.warranty,
            isFavo: data.isFavo,
            reel: data.reel,
            review: data.review,
            catagory: data.Catagory,
            brand: data.brands
        
        },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        // Handle any additional actions upon successful submission
      } ;}catch (error) {
        console.error(error);
        console.error(data.image[0].name);
        // Handle any errors that occur during the API request
      }
    };

    return(
        <Card className='addCard'>
            <Card.Body className='card-body p-4'>
                <Card.Title className='card-title'>
                    <h5>Add New Product</h5>
                </Card.Title>
                <hr></hr>
                <form onSubmit={handleSubmit(submitForm)} className="form-body mt-4">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='border border-3 p-4 rounded'>

                                <Form.Group className="mb-3">
                                    <Form.Label>Product Title</Form.Label>
                                    {<span style={{ color:"red"}}>{errors.title?.message}</span>}
                                    <input type='text' className='form-control' name="name" placeholder="Enter Product Title" {...register("name",{required:"  is requierd*"})} />
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
                                        <Form.Label>Discount</Form.Label>
                                        <Form.Control  placeholder="00.00" name="discount" {...register("discount", { required:"  is requierd*" })} />                       
                                    </Form.Group >


                                    <Form.Group  className='col-12'>
                                        <Form.Label>Height</Form.Label>
                                        <Form.Control  placeholder="00.00" name="height" {...register("height", { required:"  is requierd*" })} />                       
                                    </Form.Group >

                                    <Form.Group  className='col-12'>
                                        <Form.Label>Width</Form.Label>
                                        <Form.Control  placeholder="00.00" name="width" {...register("width", { required:"  is requierd*" })} />                       
                                    </Form.Group >

                                    <Form.Group  className='col-12'>
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control  placeholder="00.00" name="model"  {...register("model", { required:"  is requierd*" })}/>                       
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