import React from 'react';
import Slider from "react-slick";
import banner from '../../assets/Online-Course-Banner.jpg'
import '../Banner/Banner.css'

const Banner = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-full banner-container ">

            <Slider {...settings}>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='banner'>
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;