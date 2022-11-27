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
            <!-- section Blog -->
            <section class="cijo-blog-section" >
                <div class="container cijo-main-container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-6 col-md-10 col-12 cijo-mb-10">
                            <h1>Blog</h1>
                        </div>
                    </div>
                    <!-- /row -->
                    <!-- row -->
                    <div class="row">
                        <aside class="d-none d-lg-block col-lg-4">
                            <div class="row">
                                <!-- aside -->
                                <div class="cijo-blog-sideba-all-widget-wrapper" >
                                    <div class="cijo-widget cijo-widget-categories col-12 col-md-6 col-lg-12">
                                        <div class="cijo-widget-title-wrapper">
                                            <h6 class="cijo-widget-title">CATEGORIES</h6>
                                        </div> 
                                        <ul>
                                            <li><a href="#">BRANDING</a> <span>(2)</span></li>
                                            <li><a href="#">DESIGN</a> <span>(4)</span></li>
                                            <li><a href="#">DEVELOPMENT</a> <span>(1)</span></li>
                                            <li><a href="#">PHOTOGRAPHY</a> <span>(10)</span></li>
                                            <li><a href="#">OTHER</a> <span>(5)</span></li>
                                        </ul>
                                    </div>
                                    <div class="cijo-widget cijo-widget-news col-12 col-md-6 col-lg-12">
                                        <div class="cijo-widget-title-wrapper">
                                            <h6 class="cijo-widget-title">LATEST NEWS</h6>
                                        </div> 
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div class="cijo-news-image-wrapper">
                                                        <img class="img-responsive" src="assets/images/blog-thumb-1.png" alt="Build local power and to intervene in violence inflicted on Black communities." >
                                                    </div>
                                                    <div class="cijo-widget-news-info">
                                                        <span>13<sup>th</sup> June 2019</span>
                                                        <h3>Build local power and to intervene in violence inflicted on Black communities.</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="cijo-news-image-wrapper">
                                                        <img class="img-responsive" src="assets/images/blog-thumb-2.png" alt="Greetings from Berlin. Street art from local artists." >
                                                    </div>
                                                    <div class="cijo-widget-news-info">
                                                        <span>13<sup>th</sup> June 2019</span>
                                                        <h3>Greetings from Berlin. Street art from local artists.</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="cijo-news-image-wrapper">
                                                        <img class="img-responsive" src="assets/images/blog-thumb-3.png" alt="What is Design Thinking practice and how it effects non designers." >
                                                    </div>
                                                    <div class="cijo-widget-news-info">
                                                        <span>13<sup>th</sup> June 2019</span>
                                                        <h3>What is Design Thinking practice and how it effects non designers.</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="cijo-news-image-wrapper">
                                                        <img class="img-responsive" src="assets/images/blog-thumb-1.png" alt="Build local power and to intervene in violence inflicted on Black communities." >
                                                    </div>
                                                    <div class="cijo-widget-news-info">
                                                        <span>13<sup>th</sup> June 2019</span>
                                                        <h3>Build local power and to intervene in violence inflicted on Black communities.</h3>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="cijo-news-image-wrapper">
                                                        <img class="img-responsive" src="assets/images/blog-thumb-2.png" alt="Greetings from Berlin. Street art from local artists." >
                                                    </div>
                                                    <div class="cijo-widget-news-info">
                                                        <span>13<sup>th</sup> June 2019</span>
                                                        <h3>Greetings from Berlin. Street art from local artists.</h3>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="cijo-widget cijo-widget-archive col-12 col-md-6 col-lg-12">
                                        <div class="cijo-widget-title-wrapper">
                                            <h6 class="cijo-widget-title">ARCHAIVE</h6>
                                        </div> 
                                        <ul>
                                            <li><a href="#">MAY 2019</a> <span>(12)</span></li>
                                            <li><a href="#">APRIL 2019</a> <span>(4)</span></li>
                                            <li><a href="#">MARCH 2019</a> <span>(1)</span></li>
                                            <li><a href="#">FEBRUARY 2019</a> <span>(10)</span></li>
                                            <li><a href="#">JANUARY 2019</a> <span>(5)</span></li>
                                        </ul>
                                    </div>
                                    <div class="cijo-widget cijo-widget-tags col-12 col-md-6 col-lg-12">
                                        <div class="cijo-widget-title-wrapper">
                                            <h6 class="cijo-widget-title">TAGS</h6>
                                        </div> 
                                        <ul>
                                            <li><a href="#">ILLUSTRATION</a></li>
                                            <li><a href="#">GRAPHICS</a></li>
                                            <li><a href="#">WEB DESIGN</a></li>
                                            <li><a href="#">GENERAL</a></li>
                                            <li><a href="#">PHOTOGRAPHY</a></li>
                                            <li><a href="#">BRANDING</a></li>
                                            <li><a href="#">INSPIRATION</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- /aside -->
                            </div>
                        </aside>
                        <div class="col-12 col-lg-8">
                            <div class="row">
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-1.png" alt="blog-thumb-1">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title"  >
                                        <a href="#" >Build local power and to intervene in violence inflicted on Black communities. </a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-2.png" alt="blog-thumb-2">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title" >
                                        <a href="#" >Greetings from Berlin. Street art from local artists.</a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-3.png" alt="blog-thumb-3">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title">
                                        <a href="#">What is Design Thinking practice and how it effects non designers.</a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-1.png" alt="blog-thumb-4">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title">
                                        <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-2.png" alt="blog-thumb-5">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title">
                                        <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                                <div class="cijo-post-box col-12 col-md-6">
                                    <a href="#">
                                        <img class="img-responsive" src="assets/images/blog-thumb-3.png" alt="blog-thumb-6">                             
                                    </a>
                                    <div class="cijo-post-date">
                                        <span>13<sup>th</sup> June 2019</span>
                                    </div>
                                    <h2 class="cijo-post-title">
                                        <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                    </h2>
                                    <p>
                                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="cijo-blog-pagination col-12">
                                    <ul>
                                        <li><a href="#" class="prev cijo-button-arrow-left">PREV</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#" class="active">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">...</a></li>
                                        <li><a href="#">12</a></li>
                                        <li><a href="#" class="next cijo-button-arrow-right">NEXT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /row -->
                </div>
            </section>
            <!-- /section Blog -->
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