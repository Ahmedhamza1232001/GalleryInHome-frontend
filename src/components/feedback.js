import React, { useState } from 'react';
import FeedbackDetails from './FeedbackDetails.js'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../images/logo1.png';
import './feedback.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const Feedback = () => {
    let feedbacksData = [
        {
            name: 'Rabab Hamdy',
            description: ' the team working very good ',
            img: 'https://i.ibb.co/FDryBdg/4.jpg'
        },
        {
            name: 'Ghada Wahb',
            description: 'achieve my service and my dreams about my business solution from branding to developing my platforms as i want to achieve ',
            img: 'https://i.ibb.co/FDryBdg/4.jpg'
        },
        {
            name: 'Abdulsalam Abulwafa',
            description: 'i love the website it is simple and very helpful',
            img: 'https://i.ibb.co/fvF7qbf/5.jpg'
        },

    ]
    var feeds = localStorage.getItem("feedbacks")
    ? JSON.parse(localStorage.getItem("feedbacks"))
    : feedbacksData;
    localStorage.setItem("feedbacks", JSON.stringify(feeds));

    const [feedbacks, setFeedbacks] = useState(feeds)
    const [description, setDescription] = useState("");
    const addFeedBack = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("userData"));
        const name = userData ? userData.UserName : "user";
  
        let newObj = {
            name,
            description,
            img: 'https://i.ibb.co/fvF7qbf/5.jpg'
        };
        feeds.push(newObj)
        localStorage.setItem("feedbacks", JSON.stringify(feeds));
        setFeedbacks(feeds)
        setDescription("");
}    
    //Owl Carousel Settings

    const options = {
        loop:true,
        
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        center: false,
        margin:0,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            644:{
                items:2,
            },
            780:{
                items:1,
            },
            991:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    };
    return (

        <div id="testimonial" className="testimonials ">
            <div className="container mt-5">

                {/* first row "Page Title" */}
                <div className='row'>
                    <div className="col-md-12 ">
                        <h2 className='feedback-title'>Whats Our Clients Say ?</h2>
                    </div>
                </div>

                {/* second row "Cards of Previous Feedbacks" */}
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel ousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                feedbacks.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} alt="userPic"/>
                                            <div class="testimonial-name">
                                                <p>Rajon Rony</p>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    </div>:
                                    feedbacks.map(FeedBackDetail => {
                                        return (
                                            <FeedbackDetails FeedBackDetail={FeedBackDetail} key={FeedBackDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>

                {/* third row "Writing Feedback and Send It" */}
                <div className='row'>
                    <div className='col-md-12 '>
                        <div className='addfeedback'>
                            <FloatingLabel controlId="floatingTextarea2" style={{width:"100%"}}>
                                <Form
                            
                                className='feedback-control'
                                as="textarea"
                                placeholder="We would love to know what you think of our service 
                                '' Leave your feedback ''"
                                    style={{ height: '200px' }}
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                />
                            </FloatingLabel>
                            <div className='cart-btn'>
                                <Button className='btn 'disabled={!description}  as="input" type="submit" value="Send" onClick={addFeedBack}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;