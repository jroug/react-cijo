import React from "react";
import Slider from "react-slick";
import {
    about_slide_1

} from "../assets";

const AboutTopSection = () => {

    const slider = React.useRef(null);

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: $('.cijo-about-slider-prev'),
        // nextArrow: $('.cijo-about-slider-next')
    }

    return (
        <section>
            <div className="container cijo-main-container">
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12 cijo-mb-60">
                        <h1>About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a justo mollis, feugiat lorem quis, euismod enim. Proin sed tortor lacus. Aenean id sapien nec ipsum tempor interdum sit amet sit amet nunc. Mauris a neque nec risus fermentum tempus. Aenean commodo mi blandit metus facilisis, in elementum odio consectetur. Phasellus sit amet libero non nisi efficitur ultricies. Vestibulum est sapien, dapibus vulputate maximus vel, blandit eu neque. Phasellus blandit molestie ligula nec ultrices. Cras dictum vestibulum facilisis.</p>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 cijo-mb-40 text-center" >
                        <div className="cijo-about-slider-wrapper" >
                            <button onClick={() => slider?.current?.slickPrev()} className="cijo-about-slider-prev cijo-button-arrow-left" aria-label="Previous" type="button" >Previous</button>
                            <Slider ref={slider} {...settings} className="cijo-about-slider" >
                                <img className="img-responsive" src={about_slide_1} alt="about-slide-1" />
                                <img className="img-responsive" src={about_slide_1} alt="about-slide-2" />
                            </Slider>
                            <button onClick={() => slider?.current?.slickNext()} className="cijo-about-slider-next cijo-button-arrow-right" aria-label="Next" type="button" >Next</button>
                        </div>
                    </div>
                </div>
                {/* <!-- /row --> */}
            </div>
        </section>
    ); 
}

export default AboutTopSection;
