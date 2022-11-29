import React, { Component } from 'react';
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

class Page_Team extends Component {
    render() {
        return (
            <main>
                {/* <!-- section TEAM --> */}
                <section>
                    <div className="container cijo-main-container">
                        {/* <!-- row --> */}
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-12">
                                <h1>Who we are</h1>
                                <p className="cijo-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a justo mollis, feugiat lorem quis, euismod enim. Proin sed tortor lacus. Aenean id sapien nec ipsum tempor interdum sit amet sit amet nunc. Mauris a neque nec risus fermentum tempus. Aenean commodo mi blandit metus facilisis, in elementum odio consectetur. Phasellus sit amet libero non nisi efficitur ultricies. Vestibulum est sapien, dapibus vulputate maximus vel, blandit eu neque. Phasellus blandit molestie ligula nec ultrices. Cras dictum vestibulum facilisis. </p>
                            </div>
                        </div>
                        {/* <!-- /row --> */}
                        {/* <!-- row --> */}
                        <div className="row cijo-team-row">
                            {/* <!-- col 1 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >MARIO SMITH</div>
                                        </div> 
                                        <img className="img-responsive" src={member_1} alt="MARIO SMITH" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 1 --> */}
                            {/* <!-- col 2 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >NATALIE WELCH</div>
                                        </div> 
                                        <img className="img-responsive" src={member_2} alt="NATALIE WELCH" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 2 --> */}
                            {/* <!-- col 3 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >JOHN LINCON</div>
                                        </div> 
                                        <img className="img-responsive" src={member_3} alt="JOHN LINCON" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 3 --> */}
                            {/* <!-- col 4 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >SARAH LAWRENCE</div>
                                        </div> 
                                        <img className="img-responsive" src={member_4} alt="SARAH LAWRENCE" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 4 --> */}
                            {/* <!-- col 5 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >CLAIRE HOLLAND</div>
                                        </div> 
                                        <img className="img-responsive" src={member_5} alt="CLAIRE HOLLAND" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 5 --> */}
                            {/* <!-- col 6 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >MARIA VENTURA</div>
                                        </div> 
                                        <img className="img-responsive" src={member_6} alt="MARIA VENTURA" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 6 --> */}
                            {/* <!-- col 7 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >JESSICA TORTURO</div>
                                        </div> 
                                        <img className="img-responsive" src={member_7} alt="JESSICA TORTURO" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 7 --> */}
                            {/* <!-- col 8 --> */}
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="cijo-team-thumb">
                                    <div className="cijo-team-box">
                                        <div className="cijo-team-info" >
                                            <div className="cijo-team-social" >
                                                    <a href="#" className="cijo-linkedin"><img src={linkedin} alt="linkedin" /></a>
                                                    <a href="#" className="cijo-email-icon-no-slider"><img src={email} alt="email" /></a>
                                            </div>
                                            <div className="cijo-team-name" >JACK NICKOLSON</div>
                                        </div> 
                                        <img className="img-responsive" src={member_8} alt="JACK NICKOLSON" />                                     
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 8 --> */}
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                </section>
                {/* <!-- /section TEAM --> */}
            </main>
        );
    }
}

export default Page_Team;