import React, { Component } from 'react';
import {
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6,
    brand_7,
    brand_8
} from "../assets";

class BrandBoxes extends Component {
    render() {
        return (
            <section className="cijo-brands">
                <div className="container cijo-main-container">
                    { /* <!-- row --> */}
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                            <h1>Our Brands</h1>
                        </div>
                    </div>
                    { /* <!-- /row --> */}
                    { /* <!-- row --> */}
                    <div className="row" >
                        <div className="cijo-brands-item-wrapper col-8 mx-auto" >
                            <div className=" container">
                                <div className=" row" >
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_1} alt="brand-1"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_2} alt="brand-2"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_3} alt="brand-3"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_4} alt="brand-4"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_5} alt="brand-5"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_6} alt="brand-6"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_7} alt="brand-7"/></div>
                                    <div className="cijo-brands-item col-md-3 col-6" ><img src={brand_8} alt="brand-8"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /* <!-- /row --> */}
                </div>
            </section>
        );
    }
}

export default BrandBoxes;