import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../css/slick-theme-cijo.css";

import { 
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6_v2
} from "../assets";

 
const BrandSlider = ({images}) => {

    const slider = React.useRef(null);

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                }
            },
            {
                breakpoint: 960,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 540,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            }
        ]
    } 

    return (
        <section className="cijo-brands">
            <div className="container cijo-main-container">
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                        <h1>Our Brands</h1>
                    </div>
                </div>
                <div className="row overflow-hidden">
                    <div className="col-1" >
                        <button onClick={() => slider?.current?.slickPrev()} className="cijo-brands-prev slick-prev slick-arrow" aria-label="Previous" type="button" >Previous</button>
                    </div>
                    <div className="col-10" >
                        <div className="cijo-brands-slider " >
                            <Slider ref={slider} {...settings}>
                                <div className="cijo-brands-slide" ><img src={brand_1} alt="Brand Graphic" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_2} alt="Brand Premioum" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_3} alt="Brand Unique" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_4} alt="Brand Unique" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_5} alt="Brand Graphic" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_6_v2} alt="Brand Unique" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_1} alt="Brand Graphic" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_2} alt="Brand Premioum" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_3} alt="Brand Unique" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_4} alt="Brand Unique" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_5} alt="Brand Graphic" /></div>
                                <div className="cijo-brands-slide" ><img src={brand_6_v2} alt="Brand Unique" /></div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-1" >
                        <button onClick={() => slider?.current?.slickNext()} className="cijo-brands-next slick-next slick-arrow" aria-label="Next" type="button" >Next</button>
                    </div>
                </div>
            </div>
        </section>  
    );
  
}

export default BrandSlider;