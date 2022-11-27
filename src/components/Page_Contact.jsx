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
            <!-- section Contact -->
            <section>
                <div class="container cijo-main-container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-6 pb-5">
                            <iframe src="https://snazzymaps.com/embed/237452" style="width:100%;height:600px;border:none;"></iframe>
                            <!-- <img class="img-responsive" src="assets/images/map.png" /> -->
                        </div>
                        <div class="col-md-6">
                            <div class="cijo-contact-info-wrapper" >
                                <h1>Contact us</h1>
                                <p><span class="cijo-contact-address">175 5th Ave, New York, NY 10010, USA</span></p>
                                <p><span><a href="#" class="cijo-contact-phone" >+00 1 718 893 3900</a></span></p>
                                <p><span><a href="#" class="cijo-contact-email">info@cijo.com</a></span></p>
                            </div>
                            <div class="cijo-contact-form-wrapper" >
                                <form>
                                    <div class="container">
                                        <div class="row">
                                            <div class="cijo-form-element-wrapper col-12 mb-2" >
                                                <h2>Contact form</h2>
                                            </div>
                                            <div class="cijo-form-element-wrapper cijo-form-element-left col-6" >
                                                <label>NAME</label>
                                                <input type="text" id="name" />
                                            </div>
                                            <div class="cijo-form-element-wrapper cijo-form-element-right col-6" >
                                                <label>EMAIL</label>
                                                <input type="text" id="email" />
                                            </div>
                                            <div class="cijo-form-element-wrapper col-12" >
                                                <label>SUBJECT</label>
                                                <input type="text" id="subject" />
                                            </div>
                                            <div class="cijo-form-element-wrapper col-12" >
                                                <label>MESSAGE</label>
                                                <textarea id="message"></textarea>
                                            </div>
                                            <div class="cijo-input col-12 text-center" >
                                                <button type="submit" class="cijo-button" >SUBMIT</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
             </section>            
            <!-- /section Contact -->
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
        <!-- /scripts -->
    </body>
</html>