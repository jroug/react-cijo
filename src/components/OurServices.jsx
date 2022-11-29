import React from "react";
 
import { 
    
    user_experience,
    user_interface_design,
    branding,
    packaging

 } from "../assets/";


class OurServices extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    //     // this.handleButtonOpenServices = this.handleButtonOpenServices.bind(this);
    // }

    componentDidMount() {
        // alert('123');
    }

    
    handleButtonOpenServices = (el) => {
        
        const this_elem = el.target;

        // console.log(this_elem.parentElement.parentElement.classList.contains('active'));

        /*** services section ***/
        if ( this_elem.parentElement.parentElement.classList.contains('active') ){
            return false;
        } 

        document.querySelectorAll('.active').forEach(
            function(node) {
                node.classList.remove('active');
            }
        );

        document.querySelectorAll('.button-open-services').forEach(
            function(node) {
                if (!node.classList.contains('collapsed'))
                    node.classList+=" collapsed";
            }
        );
        this_elem.classList.remove('collapsed'); 
        this_elem.parentElement.parentElement.classList+=" active";
        document.querySelector('.active-image').classList.remove('active-image');
 
        var toShowElementId = this_elem.dataset.target;
        document.querySelector('.show').classList.remove('show');
        document.querySelector(toShowElementId).classList+=" show";
        
        var imageSelector = this_elem.dataset.imageSelector;
        document.querySelector(imageSelector).classList+=" active-image";

    }

    render(){ 
        return (
            <section className="cijo-services">
                <div className="container cijo-main-container">
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                            <h1>Our Services</h1>
                        </div>
                    </div>
                    {/* <!-- /row -->
                    <!-- row --> */}
                    <div className="row">
                        <div className="cijo-services-col-left col-12 col-md-6" >
                            <div className="cijo-services-image-wrapper overflow-hidden" >
                                <img src={user_experience} id="i-1" className="active-image" alt="user experience" />
                                <img src={user_interface_design} id="i-2"  alt="user interface design" />
                                <img src={branding} id="i-3"  alt="branding" />
                                <img src={packaging} id="i-4"  alt="packaging" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* <!-- accordion Services --> */}
                            <div className="accordion" id="accordionServices">
                                {/* <!-- services 1 --> */}
                                <div className="card border-top-0 border-right-0 border-left-0 border-bottom active">
                                    <div className="card-title" id="heading1">
                                        <h2 className="cijo-services-h2">USER EXPERIENCE</h2>
                                        <button onClick={this.handleButtonOpenServices} className="btn btn-link button-open-services" data-image-selector="#i-1" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionServices">
                                        <div className="card-body p-0">
                                            <div className="cijo-services-text" >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam nec aliquam pulvinar. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cijo-services-separator"></div>
                                </div>
                                {/* <!-- /services 1 --> */}
                                {/* <!-- services 2 --> */}
                                <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div className="card-title" id="heading2">
                                        <h2 className="cijo-services-h2">USER INTERFACE DESIGN</h2>
                                        <button onClick={this.handleButtonOpenServices} className="btn btn-link button-open-services collapsed" data-image-selector="#i-2"  type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionServices">
                                        <div className="card-body p-0">
                                            <div className="cijo-services-text" >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam nec aliquam pulvinar. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cijo-services-separator"></div>
                                </div>
                                {/* <!-- /services 2 --> */}
                                {/* <!-- services 3 --> */}
                                <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div className="card-title" id="heading3">
                                        <h2 className="cijo-services-h2">BRANDING</h2>
                                        <button onClick={this.handleButtonOpenServices} className="btn btn-link  button-open-services collapsed" data-image-selector="#i-3"  type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionServices">
                                        <div className="card-body p-0">
                                            <div className="cijo-services-text" >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam nec aliquam pulvinar. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cijo-services-separator"></div>
                                </div>
                                {/* <!-- /services 3 --> */}
                                {/* <!-- services 4 --> */}
                                <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div className="card-title" id="heading4">
                                        <h2 className="cijo-services-h2">PACKAGING</h2>
                                        <button onClick={this.handleButtonOpenServices}  className="btn btn-link  button-open-services collapsed" data-image-selector="#i-4"  type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionServices">
                                        <div className="card-body p-0">
                                            <div className="cijo-services-text" >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quam nec aliquam pulvinar. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cijo-services-separator"></div>
                                </div>
                                {/* <!-- /services 4 --> */}
                            </div>
                            {/* <!-- /accordion Services --> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurServices;