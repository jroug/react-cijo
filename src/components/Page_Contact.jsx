import React, { Component } from 'react';

class Page_Contact extends Component {
    render() {
        return (
            <main>
                {/* <!-- section Contact --> */}
                <section>
                    <div className="container cijo-main-container">
                        {/* <!-- row --> */}
                        <div className="row">
                            <div className="col-md-6 pb-5">
                                <iframe src="https://snazzymaps.com/embed/237452" style={{width:'100%',height:'600px',border:'none'}}></iframe>
                                {/* <!-- <img className="img-responsive" src="assets/images/map.png" /> --> */}
                            </div>
                            <div className="col-md-6">
                                <div className="cijo-contact-info-wrapper" >
                                    <h1>Contact us</h1>
                                    <p><span className="cijo-contact-address">175 5th Ave, New York, NY 10010, USA</span></p>
                                    <p><span><a href="#" className="cijo-contact-phone" >+00 1 718 893 3900</a></span></p>
                                    <p><span><a href="#" className="cijo-contact-email">info@cijo.com</a></span></p>
                                </div>
                                <div className="cijo-contact-form-wrapper" >
                                    <form>
                                        <div className="container">
                                            <div className="row">
                                                <div className="cijo-form-element-wrapper col-12 mb-2" >
                                                    <h2>Contact form</h2>
                                                </div>
                                                <div className="cijo-form-element-wrapper cijo-form-element-left col-6" >
                                                    <label>NAME</label>
                                                    <input type="text" id="name" />
                                                </div>
                                                <div className="cijo-form-element-wrapper cijo-form-element-right col-6" >
                                                    <label>EMAIL</label>
                                                    <input type="text" id="email" />
                                                </div>
                                                <div className="cijo-form-element-wrapper col-12" >
                                                    <label>SUBJECT</label>
                                                    <input type="text" id="subject" />
                                                </div>
                                                <div className="cijo-form-element-wrapper col-12" >
                                                    <label>MESSAGE</label>
                                                    <textarea id="message"></textarea>
                                                </div>
                                                <div className="cijo-input col-12 text-center" >
                                                    <button type="submit" className="cijo-button" >SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                </section>            
                {/* <!-- /section Contact --> */}
            </main>
        );
    }
}

export default Page_Contact;