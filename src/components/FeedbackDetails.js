import React from 'react';

const FeedbackDetails = ({FeedBackDetail}) => {
    const {name, description, img} = FeedBackDetail;
    console.log("FeedBackDetail"+FeedBackDetail)
    return (
        <div class="item">
            <div class="testimonial-name">
                <p>{name}</p>
            </div>
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeedbackDetails;