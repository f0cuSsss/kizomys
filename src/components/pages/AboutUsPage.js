import React from 'react'

import '../../styles/pages/AboutUsPage.css'
import { GallerySlider } from '../GallerySlider'
import apartment1 from '../../images/kizim_1.jpg'
import apartment2 from '../../images/kizim_4.jpg'
import trophy1 from '../../images/kizim_ylovi_3.jpg'
import trophy2 from '../../images/kizim_ylovi_4.jpg'
import trophy3 from '../../images/kizim_ylovi_5.jpg'
import trophy4 from '../../images/kizim_ylovi_6.jpg'
import trophy5 from '../../images/kizim_ylovi_7.jpg'
import trophy6 from '../../images/kizim_ylovi_8.jpg'
import trophy7 from '../../images/kizim_ylovi_9.jpg'
import trophy8 from '../../images/kizim_ylovi_10.jpg'
import trophy9 from '../../images/kizim_ylovi_11.jpg'
import trophy10 from '../../images/kizim_ylovi_12.jpg'
import trophy11 from '../../images/kizim_ylovi_13.jpg'
import trophy12 from '../../images/kizim_ylovi_14.jpg'
import trophy13 from '../../images/kizim_ylovi_15.jpg'
import trophy14 from '../../images/kizim_ylovi_16.jpg'

const AboutUsPage = () => {

    const imageCollection = [
        { src: trophy1 },
        { src: trophy2 },
        { src: trophy3 },
        { src: trophy4 },
        { src: trophy5 },
        { src: trophy6 },
        { src: trophy7 },
        { src: trophy8 },
        { src: trophy9 },
        { src: trophy10 },
        { src: trophy11 },
        { src: trophy12 },
        { src: trophy13 },
        { src: trophy14 }
    ];

    return (
        <div>
            <div className="e-title">О нас</div>
            <div className="about-block">
                <div className="about__detail-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="about__apartments-images">
                    <img src={apartment1} />
                    <img src={apartment2} />
                </div>
            </div>
            <div className="catches-block">
                <div className="e-title">Наши уловы</div>
                <GallerySlider images={imageCollection}/>
            </div>
        </div>
    );
}

export default AboutUsPage;