import React, { Component } from 'react';
import {
    user_experience,
    user_interface_design,
    branding,
    packaging
} from "../assets"
class Page_Services extends Component {
    render() {
        return (
            <main>
                {/* <!-- section Services --> */}
                <section>
                    <div class="container cijo-main-container">
                        {/* <!-- row --> */}
                        <div class="row">
                            <div class="col-lg-6 col-md-10 col-12">
                                <h1>What we do</h1>
                                <p class="cijo-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a justo mollis, feugiat lorem quis, euismod enim. Proin sed tortor lacus. Aenean id sapien nec ipsum tempor interdum sit amet sit amet nunc. Mauris a neque nec risus fermentum tempus. Aenean commodo mi blandit metus facilisis, in elementum odio consectetur. Phasellus sit amet libero non nisi efficitur ultricies. Vestibulum est sapien, dapibus vulputate maximus vel, blandit eu neque. Phasellus blandit molestie ligula nec ultrices. Cras dictum vestibulum facilisis. </p>
                            </div>
                        </div>
                        {/* <!-- /row --> */}
                        {/* <!-- row --> */}
                        <div class="row cijo-services-row">
                            {/* <!-- col 1 --> */}
                            <div class="col-lg-4 col-sm-6 col-12">
                                <div class="cijo-services-page-col" >
                                    <div class="cijo-services-page-col-inner" >
                                        <div class="cijo-services-page-image-wrapper" > 
                                            <img src={user_experience} class="img-responsive" alt="user experience" />
                                        </div>
                                        <h2>USER EXPERIENCE</h2>
                                        <p>
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 1 --> */}
                            {/* <!-- col 2 --> */}
                            <div class="col-lg-4 offset-lg-2 mr-lg-auto col-sm-6 col-12">
                                <div class="cijo-services-page-col cijo-margin-top-service" >
                                    <div class="cijo-services-page-col-inner" >
                                        <div class="cijo-services-page-image-wrapper" >
                                            <img src={user_interface_design} class="img-responsive" alt="user interface design" />
                                        </div>
                                        <h2>USER INTERFACE DESIGN</h2>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 2 --> */}
                            {/* <!-- col 3 --> */}
                            <div class="col-lg-4 col-sm-6 col-12">
                                <div class="cijo-services-page-col" >
                                    <div class="cijo-services-page-col-inner" >
                                        <div class="cijo-services-page-image-wrapper" >
                                            <img src={branding} class="img-responsive" alt="branding" />
                                        </div>
                                        <h2>BRANDING</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 3 --> */}
                            {/* <!-- col 4 --> */}
                            <div class="col-lg-4 offset-lg-2 mr-lg-auto col-sm-6 col-12">
                                <div class="cijo-services-page-col cijo-margin-top-service" >
                                    <div class="cijo-services-page-col-inner" >
                                        <div class="cijo-services-page-image-wrapper" >
                                            <img src={packaging} class="img-responsive" alt="packaging" />
                                        </div>
                                        <h2>PACKAGING</h2>
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 4 --> */}
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                </section>
                {/* <!-- /section Services --> */}
            </main>
        );
    }
}

export default Page_Services;