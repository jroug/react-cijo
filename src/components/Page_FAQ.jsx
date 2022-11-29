import React, { Component } from 'react';

class Page_FAQ extends Component {

    // $(document).ready( function() {
    //     $('.button-open-faq').click(function(){
    //         if ( $(this).parent().parent().hasClass('active') ){
    //             $('.active').removeClass('active');
    //         }else{
    //             $('.active').removeClass('active');
    //             $(this).parent().parent().addClass('active');
    //         }
    //     });
    // });

    handleButtonOpenFAQ = (el) => {

        const this_elem = el.target;

        // console.log(this_elem.parentElement.parentElement.classList.contains('active'));
        // if click on open item do nothing
        if ( this_elem.parentElement.parentElement.classList.contains('active') ){
            return false;
        } 

        // else 
        // remove active from all div wrappers
        document.querySelectorAll('.active').forEach(
            function(node) {
                node.classList.remove('active');
            }
        );

        // add collapsed to all open buttons
        document.querySelectorAll('.button-open-faq').forEach(
            function(node) {
                if (!node.classList.contains('collapsed'))
                    node.classList+=" collapsed";
            }
        );

        // add collapsed to current button
        this_elem.classList.remove('collapsed'); 
        // add active to current div wrapper
        this_elem.parentElement.parentElement.classList+=" active";
    
        var toShowElementId = this_elem.dataset.target;
        document.querySelector('.show').classList.remove('show');
        document.querySelector(toShowElementId).classList+=" show";
     
    }

    render() {
        return (
            <main>
                {/* <!--section FAQ --> */}
                <section>
                    <div className="container cijo-main-container">
                        {/* <!--row --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Do you have any questions?</h1>
                                <p  className="cijo-desc">Everything you need to know, answered in one place!</p>
                            </div>
                        </div>
                        {/* <!--/row --> */}
                        {/* <!--row --> */}
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                {/* <!--accordion FAQ --> */}
                                <div className="accordion" id="accordionFAQ">
                                    {/* <!--quertion 1 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom active">
                                        <div className="card-title" id="heading1">
                                            <h2 className="cijo-faq-h2">Why sell on Elements?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 1 --> */}
                                    {/* <!--quertion 2 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading2">
                                            <h2 className="cijo-faq-h2">Who can sell on Elements?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link  button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 2 --> */}
                                    {/* <!--quertion 3 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom "> 
                                        <div className="card-title" id="heading3">
                                            <h2 className="cijo-faq-h2">What can you sell?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link  button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Plus
                                            </button>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 3 --> */}
                                    {/* <!--quertion 4 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading4">
                                            <h2 className="cijo-faq-h2">How do I earn money on Elements?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 4 --> */}
                                    {/* <!--quertion 5 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading5">
                                            <h2 className="cijo-faq-h2">What is subscriber share, and how does it work?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 5 --> */}
                                    {/* <!--quertion 6 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading6">
                                            <h2 className="cijo-faq-h2">What are the exclusivity rules?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 6 --> */}
                                    {/* <!--quertion 7 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading7">
                                            <h2 className="cijo-faq-h2">What are the terms & legal obligations?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 7 --> */}
                                    {/* <!--quertion 8 --> */}
                                    <div className="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                        <div className="card-title" id="heading8">
                                            <h2 className="cijo-faq-h2">When are my earnings paid?</h2>
                                            <button onClick={this.handleButtonOpenFAQ} className="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                Plus
                                            </button>
                                        </div>
                                        <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordionFAQ">
                                            <div className="card-body p-0">
                                                <div className="cijo-faq-text" >
                                                    <p>
                                                        Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                        If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                        we actually encourage it! For more information, refer to <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                    </p>
                                                    <h3>Non-Exclusive to Envato Market</h3>
                                                    <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--/quertion 8 --> */}
                                </div>
                                {/* <!--/accordion FAQ --> */}
                            </div>
                        </div>
                        {/* <!--/row --> */}
                    </div>
                </section>
                {/* <!--/section FAQ --> */}
            </main>
        );
    }
}

export default Page_FAQ;