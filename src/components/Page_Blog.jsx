
import React from "react";
import BlogSidebar from "./BlogSidebar";
import { 
    blog_thumb_1, 
    blog_thumb_2, 
    blog_thumb_3
} from "../assets/";

class Page_Blog extends React.Component {

    
    constructor(match) {
        super();
        console.log(match);      
        this.state = { 
            sidebar: match.sidebar
        };
    }

    render(){
        return(
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
                            { 
                                this.state.sidebar=='left' 
                                ? <BlogSidebar />
                                : null 
                            }
                            <div className={this.state.sidebar=='no' ? "col-12 col-lg-12" : "col-12 col-lg-8"}>
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
                            { 
                                this.state.sidebar=='right' 
                                ? <BlogSidebar />
                                : null 
                            }
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                </section>
                {/* <!-- /section Blog --> */}
            </main>
        );
    }
}

export default Page_Blog;