
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    project_inner_slide_1,
    project_inner_slide_2,
    project_presentation_top,
    project_inner_image
} from "../assets";

const Page_Project = () => {

    const slider = React.useRef(null);

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        // prevArrow: $('.cijo-project-slider-prev'),
        // nextArrow: $('.cijo-project-slider-next'),
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
    }
    


    return (
        <main>
            { /* <!-- section ProjectPresentation --> */ }
            <section>
                <div className="container cijo-main-container">
                    { /* <!-- row --> */ }
                    <div className="row cijo-mb-50">
                        <div className="cijo-project-info-wrapper cijo-mb-60 col-lg-4 col-12">
                            <h1>Play girl app</h1>
                            <h2>
                                Sed nec bibendum libero, vel hendrerit odio. 
                                Aenean aliquam urna nec risus iaculis, 
                                et semper metus varius. In et viverra metus.
                            </h2>
                            <h3>CLIENT</h3>
                            <span>Ocean Ltd.</span>
                            <h3>OUR ROLW</h3>
                            <span>App Design / Illustrations</span>
                            <h3>COLLABORATORS</h3>
                            <b>UX Analysis:</b> <span>This & That</span>
                            <br className="clear-fix" />
                            <b>Development:</b> <span>NetFreaks</span>
                            <h3>RELEASE DATE</h3>
                            <span>2018</span>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="cijo-project-top-image-wrapper cijo-mb-50" >
                                <img className="img-responsive" src={project_presentation_top} alt="project-presentation" />
                            </div>
                            <div className="cijo-project-text-wrapper" >
                                <p>
                                    Iliquam posuere fringilla arcu, et aliquet 
                                    tellus posuere nec. In porta, ante in tristique 
                                    fermentum, ligula orci ornare risus, a scelerisque 
                                    eros justo a nibh. Nam eros arcu, facilisis quis 
                                    eros mollis, aliquam posuere eros. Donec consectetur 
                                    ante ac quam porttitor, lacinia blandit lectus pretium. 
                                </p>
                                <p>
                                    Quisque egestas risus non risus luctus hendrerit. 
                                    Vivamus blandit sem a velit vehicula, molestie rhoncus 
                                    eros porttitor. In nec condimentum diam. Fusce sollicitudin 
                                    ante ut quam condimentum, et pharetra enim malesuada. Nulla 
                                    convallis sapien est, eu iaculis nisl euismod ac. Nunc 
                                    pharetra sagittis odio, in consequat sapien tempus dapibus. 
                                </p>
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */ }
                    { /* <!-- row --> */ }
                    <div className="row cijo-mb-50">
                        <div className="col-lg-8 mr-lg-auto col-12">
                            <div className="cijo-project-slider-wrapper" >
                                <button onClick={() => slider?.current?.slickPrev()} className="cijo-project-slider-prev cijo-button-arrow-left" aria-label="Previous" type="button" >Previous</button>
                                <Slider ref={slider} {...settings} className="cijo-project-slider" >
                                    <img className="img-responsive" src={project_inner_slide_1} alt="project-slide-1" />
                                    <img className="img-responsive" src={project_inner_slide_2} alt="project-slide-2" />
                                    <img className="img-responsive" src={project_inner_slide_1} alt="project-slide-3" />
                                    <img className="img-responsive" src={project_inner_slide_2} alt="project-slide-4" />
                                </Slider>
                                <button onClick={() => slider?.current?.slickNext()} className="cijo-project-slider-next cijo-button-arrow-right" aria-label="Next" type="button" >Next</button>
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */ }
                    { /* <!-- row --> */ }
                    <div className="row cijo-mb-50">
                        <div className="col-lg-5 offset-lg-2 mr-lg-auto col-12"> 
                            <div className="cijo-project-quote-wrapper" >
                                <p>
                                    Sed nec bibendum libero, vel hendrerit odio. 
                                    Aenean aliquam urna nec risus iaculis, 
                                    et semper metus varius. In et viverra metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */ }
                    { /* <!-- row --> */ }
                    <div className="row cijo-mb-50">
                        <div className="col-lg-6 offset-lg-4 mr-lg-auto col-12"> 
                            <div className="cijo-project-text-wrapper" >
                                <p>
                                    Donec id mattis leo. Duis sodales, ante imperdiet lobortis elementum, 
                                    eros ex dignissim lectus, lobortis viverra nisl velit nec nisl. 
                                    Maecenas elementum sollicitudin eleifend. Phasellus efficitur 
                                    vitae lorem a venenatis. Donec commodo libero tortor. Donec iaculis, 
                                    risus vitae bibendum blandit, turpis diam varius odio, porttitor 
                                    feugiat quam elit porttitor urna. Vivamus pharetra tellus dolor, 
                                    eget pellentesque ante iaculis nec. 
                                </p>
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */ }
                    { /* <!-- row --> */ }
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 mr-lg-auto col-12"> 
                            <div className="cijo-project-image-wrapper" >
                                <img className="img-responsive" src={project_inner_image} alt="project-inner-image" />
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */ }
                </div>
                { /* <!-- project navigation buttons --> */ }
                <div className="cijo-project-buttons">
                    <div className="container">
                        { /* <!-- row --> */ }
                        <div className="row">
                            <div className="col-12">
                                <div className="cijo-container-wrapper" >
                                    <div className="cijo-project-buttons-wrapper d-none d-sm-block" >
                                        <button className="cijo-buttons-prev cijo-button-arrow-left" >PREVIOUS PROJECT</button>
                                        <button className="cijo-buttons-next cijo-button-arrow-right" >NEXT PROJECT</button>
                                    </div>
                                    <div className="cijo-project-buttons-wrapper d-sm-none" >
                                        <button className="cijo-buttons-prev cijo-button-arrow-left" >PREVIOUS</button>
                                        <button className="cijo-buttons-next cijo-button-arrow-right" >NEXT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { /* <!-- /row --> */ }
                    </div>
                </div>
                { /* <!-- /roject navigation buttons --> */ }
            </section>
            { /* <!-- /section ProjectPresentation --> */ }
        </main>
    );
    
}

export default Page_Project;