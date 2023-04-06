import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Banner.css'
import Capture1 from "../../asset/Capture1.PNG"
import Capture2 from "../../asset/Capture2.PNG"
import Capture3 from "../../asset/Capture3.PNG"

const data = [
    Capture1,
    Capture2,
    Capture3
];

const Banner = () => {
    return (
        <Carousel
            className="carousel"
            autoPlay={true}
            animation="fade"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
        >
            {
                data.map((img, i) => {
                    return (
                        <img className='Mycarousel' key={i} src={img} alt="Caroussel" />
                    )
                })
            }

        </Carousel>
    )
}

export default Banner