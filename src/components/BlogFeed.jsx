import { blog_thumb_1, blog_thumb_2, blog_thumb_3 } from "../assets";

const BlogFeed = () => (
    <section className="cijo-blog">
        <div className="container cijo-main-container">
            <div className="row">
                <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                    <h1>Blog</h1>
                </div>
            </div>
            <div className="row">
                <div className="cijo-post-box col-12 col-sm-6 col-md-4 mb-sm-0">
                    <a href="#">
                        <img className="img-responsive" src={blog_thumb_1} alt="Build local power and to intervene in violence inflicted on Black communities." />                            
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
                <div className="cijo-post-box col-12 col-sm-6 col-md-4 mb-0">
                    <a href="#">
                        <img className="img-responsive" src={blog_thumb_2} alt="Greetings from Berlin. Street art from local artists." />                             
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
                <div className="cijo-post-box d-none d-md-block col-md-4 mb-sm-0">
                    <a href="#">
                        <img className="img-responsive" src={blog_thumb_3} alt="What is Design Thinking practice and how it effects non designers." />                             
                    </a>
                    <div className="cijo-post-date">
                        <span>13<sup>th</sup> June 2019</span>
                    </div>
                    <h2 className="cijo-post-title" >
                        <a href="#" >What is Design Thinking practice and how it effects non designers.</a>
                    </h2>
                    <p>
                        Pellentesque finibus, eros eget vulputate vulputate, turpis odio viverra turpis, nec lobortis nisl leo aliquam lacus.                       
                    </p>
                </div>
            </div>
            <div className="row" >
                <div className="col-12" >
                    <a href="#" className="cijo-blog-seeall" >SEE ALL</a>
                </div>
            </div>
        </div>
    </section>
);

export default BlogFeed;