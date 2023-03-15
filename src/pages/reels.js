import React from "react";
import "./reels.css";
import logo1 from "../images/logo1.png"
import Video from "./video";
import instagram_1678646149409 from "../videos/instagram_1678646149409.mp4"
import instagram_1678646177512 from "../videos/instagram_1678646177512.mp4"
import Vid33 from "../videos/vid33.mp4"


const Reels =() => {
    const data = [
        {
            url: instagram_1678646149409,
        },
        {
            url: instagram_1678646177512,
        },
        {
            url: Vid33,
        },
        ];
    return(
        <div className="reel">
        <center className="cenn">
            <div className="logo">
            <img alt="logo" src={logo1} className="insta-logo" />
            </div>
            <h3>Reels</h3>
            {/*  */}

            <div className="video-container" id="video-container">
            {/*  */}

            {data.map((list, i) => (
                <Video
                
                url={list.url}
                
                />
            ))}

            {/*  */}
            </div>
        </center>
        </div>
    )
}

export default Reels;