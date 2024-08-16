import React from "react";
import '../Gallery.css'; // Assuming you save the CSS above in this file


export default function Gallery(props) {
    const images = [
        { src: require("../image/image6.jpg"), text: "Helmet Detection" },

        { src: require("../image/image5.jpg"), text: "Detection of Cotton Leaves Diseases" },

        { src: require("../image/image4.jpg"), text: "BasketBall" },

        { src: require("../image/image3.jpg"), text: "BasketBall" },

        { src: require("../image/image1.jpg"), text: "Workshop" },

        { src: require("../image/image2.jpg"), text: "BasketBall" },

        { src: require("../image/image7.jpg"), text: "NPTEL-The Joy Of Computing Python" },

        { src: require("../image/image8.jpg"), text: "Lagozon Edutech (Intership)" },

        { src: require("../image/image9.jpg"), text: "Java Full Stack from TalentNext,Wipro" },
        
        // Add more images with their descriptions here
    ];

    return (
        <>
            <h1 className="head" >Gallery</h1>            
            <div className="gallery-container">

                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={`Gallery ${index + 1}`} />
                        <div className="overlay">{image.text}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
