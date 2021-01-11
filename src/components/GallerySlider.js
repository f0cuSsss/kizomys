import React, { useState } from 'react'

import '../styles/GallerySlider.css'

export const GallerySlider = ({ images }) => {
    const [active, setActive] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    }

    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1);
    }

    if(!Array.isArray(images) && length <= 0) {
        return null;
    }

    return (
        <section className="gallery-slider">
            <div className="arrow arrow-left" onClick={nextSlide}></div>
            <div className="arrow arrow-right" onClick={prevSlide}></div>
            {images.map((image, index) => {
                return (
                    <div className={`slide ${index === active ? 'active' : ''}`} key={index}>
                        {index === active && (<img src={image.src} alt={`Trophy ${index}`} />)}
                    </div>
                )
            })}
        </section>
    );
}