
import React from "react";
 import { 
    blog_thumb_1, 
    blog_thumb_2, 
    blog_thumb_3
} from "../assets/";

const Page_Blog = () => (
    <main>
        {/* <!-- section Blog --> */}
        <section className="cijo-blog-section" >
            <div className="container cijo-main-container">
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                        <h1>Blog</h1>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_1} alt="blog_thumb_1" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title"  >
                                    <a href="#" >Build local power and to intervene in violence inflicted on Black communities. </a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_2} alt="blog_thumb_2" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title" >
                                    <a href="#" >Greetings from Berlin. Street art from local artists.</a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_3} alt="blog_thumb_3" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title">
                                    <a href="#">What is Design Thinking practice and how it effects non designers.</a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_1} alt="blog_thumb_4" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title">
                                    <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_2} alt="blog_thumb_5" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title">
                                    <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                            <div className="cijo-post-box col-12 col-md-6">
                                <a href="#">
                                    <img className="img-responsive" src={blog_thumb_3} alt="blog_thumb_6" />                             
                                </a>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <h2 className="cijo-post-title">
                                    <a href="#">Build local power and to intervene in violence inflicted on Black communities. </a>
                                </h2>
                                <p>
                                    Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cijo-blog-pagination col-12">
                                <ul>
                                    <li><a href="#" className="prev cijo-button-arrow-left">PREV</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" className="active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">12</a></li>
                                    <li><a href="#" className="next cijo-button-arrow-right">NEXT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <aside className="d-none d-lg-block col-lg-4">
                        <div className="row">
                            {/* <!-- aside --> */}
                            <div className="cijo-blog-sideba-all-widget-wrapper" >
                                <div className="cijo-widget cijo-widget-categories col-12 col-md-6 col-lg-12">
                                    <div className="cijo-widget-title-wrapper">
                                        <h6 className="cijo-widget-title">CATEGORIES</h6>
                                    </div> 
                                    <ul>
                                        <li><a href="#">BRANDING</a> <span>(2)</span></li>
                                        <li><a href="#">DESIGN</a> <span>(4)</span></li>
                                        <li><a href="#">DEVELOPMENT</a> <span>(1)</span></li>
                                        <li><a href="#">PHOTOGRAPHY</a> <span>(10)</span></li>
                                        <li><a href="#">OTHER</a> <span>(5)</span></li>
                                    </ul>
                                </div>
                                <div className="cijo-widget cijo-widget-news col-12 col-md-6 col-lg-12">
                                    <div className="cijo-widget-title-wrapper">
                                        <h6 className="cijo-widget-title">LATEST NEWS</h6>
                                    </div> 
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div className="cijo-news-image-wrapper">
                                                    <img className="img-responsive" src={blog_thumb_1} alt="Build local power and to intervene in violence inflicted on Black communities." />
                                                </div>
                                                <div className="cijo-widget-news-info">
                                                    <span>13<sup>th</sup> June 2019</span>
                                                    <h3>Build local power and to intervene in violence inflicted on Black communities.</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="cijo-news-image-wrapper">
                                                    <img className="img-responsive" src={blog_thumb_2} alt="Greetings from Berlin. Street art from local artists." />
                                                </div>
                                                <div className="cijo-widget-news-info">
                                                    <span>13<sup>th</sup> June 2019</span>
                                                    <h3>Greetings from Berlin. Street art from local artists.</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="cijo-news-image-wrapper">
                                                    <img className="img-responsive" src={blog_thumb_3} alt="What is Design Thinking practice and how it effects non designers." />
                                                </div>
                                                <div className="cijo-widget-news-info">
                                                    <span>13<sup>th</sup> June 2019</span>
                                                    <h3>What is Design Thinking practice and how it effects non designers.</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="cijo-news-image-wrapper">
                                                    <img className="img-responsive" src={blog_thumb_1} alt="Build local power and to intervene in violence inflicted on Black communities." />
                                                </div>
                                                <div className="cijo-widget-news-info">
                                                    <span>13<sup>th</sup> June 2019</span>
                                                    <h3>Build local power and to intervene in violence inflicted on Black communities.</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="cijo-news-image-wrapper">
                                                    <img className="img-responsive" src={blog_thumb_2} alt="Greetings from Berlin. Street art from local artists." />
                                                </div>
                                                <div className="cijo-widget-news-info">
                                                    <span>13<sup>th</sup> June 2019</span>
                                                    <h3>Greetings from Berlin. Street art from local artists.</h3>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cijo-widget cijo-widget-archive col-12 col-md-6 col-lg-12">
                                    <div className="cijo-widget-title-wrapper">
                                        <h6 className="cijo-widget-title">ARCHAIVE</h6>
                                    </div> 
                                    <ul>
                                        <li><a href="#">MAY 2019</a> <span>(12)</span></li>
                                        <li><a href="#">APRIL 2019</a> <span>(4)</span></li>
                                        <li><a href="#">MARCH 2019</a> <span>(1)</span></li>
                                        <li><a href="#">FEBRUARY 2019</a> <span>(10)</span></li>
                                        <li><a href="#">JANUARY 2019</a> <span>(5)</span></li>
                                    </ul>
                                </div>
                                <div className="cijo-widget cijo-widget-tags col-12 col-md-6 col-lg-12">
                                    <div className="cijo-widget-title-wrapper">
                                        <h6 className="cijo-widget-title">TAGS</h6>
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
                            {/* <!-- /aside --> */}
                        </div>
                    </aside>
                </div>
                {/* <!-- /row --> */}
            </div>
        </section>
        {/* <!-- /section Blog --> */}
    </main>
);

export default Page_Blog;