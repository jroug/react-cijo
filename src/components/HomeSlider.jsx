

import { home_slide_1 } from "../assets/";

const HomeSlider = () => (
    <section className="cijo-slider">
        <div className="container cijo-main-container">
            <div className="row cijo-slider-wrapper">
                <div className="cijo-slide col-12 col-lg-10">
                    <img className="img-responsive" src={home_slide_1} alt="Creative agency" />
                </div>
                <div className="cijo-slider-info col-12">
                    <div className="cijo-top-slider">
                        <h1>Creative agency</h1>
                        <div className="cijo-slider-text col-12 col-md-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam nec aliquam pulvinar.</p>
                            <a href="#" className="cijo-slider-learnmore">LEARN MORE ABOUT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HomeSlider;