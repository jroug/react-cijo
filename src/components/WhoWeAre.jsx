import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slick-theme-cijo.css";
import {
    linkedin,
    email,
    member_1, 
    member_2,
    member_3,
    member_4,
    member_5,
    member_6,
    member_7,
    member_8
} from '../assets';


const WhoWeAre = ({}) => {

    const slider = React.useRef(null);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        // prevArrow: $('.cijo-who-we-are-thumb-slider-prev'),
        // nextArrow: $('.cijo-who-we-are-thumb-slider-next'),
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
    }


    return (
        <section>
            <div className="container cijo-main-container">
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12">
                        <h1>Who we are</h1>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    {/* <!-- col 1 --> */}
                    <div className="col-12 overflow-hidden">
                        <div className="cijo-who-we-are-thumb-slider-wrapper" > 
                            <button onClick={() => slider?.current?.slickPrev()} className="cijo-who-we-are-thumb-slider-prev cijo-button-arrow-left" aria-label="Previous" type="button" >Previous</button>
                            <Slider ref={slider} {...settings} className="cijo-who-we-are-thumb-slider" > 
                                {/* <!-- thumb 1--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >MARIO SMITH</div>
                                            </div> 
                                            <img className="img-responsive" src={member_1} alt="MARIO SMITH" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 1--> */}
                                {/* <!-- thumb 2--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >NATALIE WELCH</div>
                                            </div> 
                                            <img className="img-responsive" src={member_2} alt="NATALIE WELCH" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 2--> */}
                                {/* <!-- thumb 3--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin-image" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email-image" /></a>
                                                </div>
                                                <div className="cijo-team-name" >JOHN LINCON</div>
                                            </div> 
                                            <img className="img-responsive" src={member_3} alt="JOHN LINCON" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 3--> */}
                                {/* <!-- thumb 4--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >SARAH LAWRENCE</div>
                                            </div> 
                                            <img className="img-responsive" src={member_4} alt="SARAH LAWRENCE" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 4--> */}
                                {/* <!-- thumb 5--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >CLAIRE HOLLAND</div>
                                            </div> 
                                            <img className="img-responsive" src={member_5} alt="CLAIRE HOLLAND" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 5--> */}
                                {/* <!-- thumb 6--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >MARIA VENTURA</div>
                                            </div> 
                                            <img className="img-responsive" src={member_6} alt="MARIA VENTURA" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 6--> */}
                                {/* <!-- thumb 7--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin-age" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >JESSICA TORTURO</div>
                                            </div> 
                                            <img className="img-responsive" src={member_7} alt="JESSICA TORTURO" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 7--> */}
                                {/* <!-- thumb 8--> */}
                                {/* <div className="cijo-team-thumb-wrapper"> */}
                                    <div className="cijo-team-thumb">
                                        <div className="cijo-team-box">
                                            <div className="cijo-team-info" >
                                                <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon"><img src={email} alt="email" /></a>
                                                </div>
                                                <div className="cijo-team-name" >JACK NICKOLSON</div>
                                            </div> 
                                            <img className="img-responsive" src={member_8} alt="JACK NICKOLSON" />                                     
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <!-- /thumb 8--> */}
                            </Slider>
                            <button onClick={() => slider?.current?.slickNext()} className="cijo-who-we-are-thumb-slider-next cijo-button-arrow-right" aria-label="Next" type="button" >Next</button>
                        </div>
                    </div>
                    {/* <!-- /col 8 --> */}
                </div>
                {/* <!-- /row --> */}
            </div>
        </section>
    );
}

export default WhoWeAre;