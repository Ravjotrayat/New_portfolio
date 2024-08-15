import React from "react";
import '../Gallery.css'; // Assuming you save the CSS above in this file


export default function Gallery(props) {
    const images = [
        { src: require("../image/image6.jpg"), text: "Helmet Detection" },
        { src: require("../image/image5.jpg"), text: "Detection of Cotton Leaves Diseases" },
        { src: require("../image/image4.jpg"), text: "BasketBall" },
        { src: require("../image/image3.jpg"), text: "BasketBall" },
        { src: require("../image/image2.jpg"), text: "Workshop" },
        { src: require("../image/image1.jpg"), text: "BasketBall" },
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
