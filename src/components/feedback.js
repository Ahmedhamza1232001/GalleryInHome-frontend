import React from 'react';
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
    

    // Name & Image & Feedback of each user
    const feedbacks = [
        {
            name: 'Rabab Hamdy',
            description: '" the team working very good , achieve my service and my dreams about my business solution from branding to developing my platforms as i want to achieve "',
            img: 'https://i.ibb.co/FDryBdg/4.jpg'
        },
        {
            name: 'Ghada Wahb',
            description: '" the team working very good , achieve my service and my dreams about my business solution from branding to developing my platforms as i want to achieve "',
            img: 'https://i.ibb.co/FDryBdg/4.jpg'
        },
        {
            name: 'Abdulsalam Abulwafa',
            description: '" the team working very good , achieve my service and my dreams about my business solution from branding to developing my platforms as i want to achieve "',
            img: 'https://i.ibb.co/fvF7qbf/5.jpg'
        },

    ]
    
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
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
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
                                    </div> :
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
                            <FloatingLabel controlId="floatingTextarea2" >
                                <Form
                                className='feedback-control'
                                as="textarea"
                                placeholder="We would love to know what you think of our service 
                                '' Leave your feedback ''"
                                style={{ height: '200px'}}
                                />
                            </FloatingLabel>
                            <div className='cart-btn'>
                                <Button className='btn ' as="input" type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;