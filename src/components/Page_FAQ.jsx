<!DOCTYPE html>
<html lang="zxx">
    <head>
        <!-- top scripts/meta data -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>CiJo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Favicon -->
        <!-- <link rel="shortcut icon" href="images/favicon.png"> -->

        <!-- CSS files-->
        <link rel="stylesheet" href="assets/css/main.css?v=1" />
    </head>
    <body>   
        <!-- header -->
        <header>
            <div class="container cijo-main-container">
                <!-- row -->
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="Home"><img src="assets/images/cijo-logo.svg" class="cijo-main-logo" alt="cijo-logo"/></a>
                            <a href="#" class="cijo-button-burger" ><span>Menu</span></a>
                            <div class="collapse navbar-collapse" id="navbarMain">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="01.Home.html">HOME <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <!-- <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</a> -->
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" >PAGES</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                                            <a class="dropdown-item" href="02.About.html">ABOUT</a>
                                            <a class="dropdown-item" href="09.Team.html">TEAM</a>
                                            <a class="dropdown-item" href="10.Services.html">SERVICES</a>
                                            <a class="dropdown-item" href="08.FAQ.html">FAQ</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="03.Projects.html" id="dropdown02" >PORTFOLIO</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdown02">
                                            <a class="dropdown-item" href="04.ProjectPresentation.html">PROJECT PRESENTATION</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="dropdown03" >BLOG</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdown03">
                                            <a class="dropdown-item" href="05a.Blog.html">BLOG RIGHT SIDEBAR</a>
                                            <a class="dropdown-item" href="05b.BlogNoSidebar.html">BLOG NO SIDEBAR</a>
                                            <a class="dropdown-item" href="05c.BlogLeftSidebar.html">BLOG LEFT SIDEBAR</a>
                                            <a class="dropdown-item" href="06.BlogInner.html">BLOG POST</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="07.Contact.html">CONTACT</a>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <div class="cijo-search-wrapper">
                                        <input class="cijo-search-text" type="text" value="Search for...">
                                        <button type="button" class="cijo-search-button"></button>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
                <!-- /row -->
            </div>
        </header>
        <!-- /header -->
        <!-- main -->
        <main>
            <!-- section FAQ -->
            <section>
                <div class="container cijo-main-container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Do you have any questions?</h1>
                            <p  class="cijo-desc">Everything you need to know, answered in one place!</p>
                        </div>
                    </div>
                    <!-- /row -->
                    <!-- row -->
                    <div class="row">
                        <div class="col-12 col-lg-9">
                            <!-- accordion FAQ -->
                            <div class="accordion" id="accordionFAQ">
                                <!-- quertion 1 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom active">
                                    <div class="card-title" id="heading1">
                                        <h2 class="cijo-faq-h2">Why sell on Elements?</h2>
                                        <button class="btn btn-link button-open-faq" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 1 -->
                                <!-- quertion 2 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading2">
                                        <h2 class="cijo-faq-h2">Who can sell on Elements?</h2>
                                        <button class="btn btn-link  button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 2 -->
                                <!-- quertion 3 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom "> 
                                    <div class="card-title" id="heading3">
                                        <h2 class="cijo-faq-h2">What can you sell?</h2>
                                        <button class="btn btn-link  button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Plus
                                        </button>
                                    </div>
                                    <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 3 -->
                                <!-- quertion 4 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading4">
                                        <h2 class="cijo-faq-h2">How do I earn money on Elements?</h2>
                                        <button class="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 4 -->
                                <!-- quertion 5 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading5">
                                        <h2 class="cijo-faq-h2">What is subscriber share, and how does it work?</h2>
                                        <button class="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 5 -->
                                <!-- quertion 6 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading6">
                                        <h2 class="cijo-faq-h2">What are the exclusivity rules?</h2>
                                        <button class="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 6 -->
                                <!-- quertion 7 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading7">
                                        <h2 class="cijo-faq-h2">What are the terms & legal obligations?</h2>
                                        <button class="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 7 -->
                                <!-- quertion 8 -->
                                <div class="card border-top-0 border-right-0 border-left-0 border-bottom ">
                                    <div class="card-title" id="heading8">
                                        <h2 class="cijo-faq-h2">When are my earnings paid?</h2>
                                        <button class="btn btn-link button-open-faq collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            Plus
                                        </button>
                                    </div>
                                    <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionFAQ">
                                        <div class="card-body p-0">
                                            <div class="cijo-faq-text" >
                                                <p>
                                                    Selling on Elements is easy regardless of your current exclusivity arrangement with Envato. 
                                                    If you are Exclusive to Envato Market not only is it permitted to sell on Elements, 
                                                    we actually encourage it! For more information, refer to 
                                                    <a href="#" >As an exclusive Market author, can I upload the same items to Elements?</a> article.
                                                </p>
                                                <h3>Non-Exclusive to Envato Market</h3>
                                                <p>Content on Envato Elements is not required to be exclusive and can be sold on Envato Market or elsewhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /quertion 8 -->
                            </div>
                            <!-- /accordion FAQ -->
                        </div>
                    </div>
                    <!-- /row -->
                </div>
            </section>
            <!-- /section FAQ -->
        </main>
        <!-- /main -->
        <!-- footer -->
        <footer class="bg-black text-white">
            <div class="container cijo-main-container">
                <div class="row cijo-footer-main-row">
                    <div class="col-12 mb-4 align-self-top">
                        <div class="row">
                            <h2 class="cijo-newsletter-h2">Sign up to our Newsletter</h2>
                        </div>
                        <div class="row cijo-newsletter-wrapper">
                            <input class="cijo-newsletter-input" type="text" value="Your email" />
                            <button class="cijo-button-arrow-right"></button>
                        </div>
                        <div class="row cijo-social">
                            <a href="#" class="cijo-social-link fb" >facebook</a>
                            <a href="#" class="cijo-social-link inst" >instagram</a>
                            <a href="#" class="cijo-social-link tw" >twitter</a>
                        </div>
                        <div class="row cijo-footer-contact">
                            <a href="#" class="cijo-email" >info@cijo.com</a><span class="cijo-separator">|</span><a href="#" class="cijo-phone" >+00 1 718 893 3900</a>
                        </div>
                    </div>
                    <div class="col-12 text-center col-sm-6 text-sm-left align-self-end">
                        <p>© 2020 All Rights Reserved by CiJo</p>
                    </div>
                    <div class="col-12 text-center col-sm-6 text-sm-right align-self-end">
                        <p><a href="#" >Terms of use</a> | <a href="#" >Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer> 
        <!-- /footer -->
        <!-- scripts -->
        <script src="assets/js/libs/jquery/jquery.slim.min.js"></script>
        <script src="assets/js/libs/bootstrap/bootstrap.bundle.min.js" ></script>
        <script src="assets/js/main.js" ></script>
        <script>
            $(document).ready( function() {
                $('.button-open-faq').click(function(){
                    if ( $(this).parent().parent().hasClass('active') ){
                        $('.active').removeClass('active');
                    }else{
                        $('.active').removeClass('active');
                        $(this).parent().parent().addClass('active');
                    }
                });
            });
        </script>
        <!-- /scripts -->
    </body>
</html>