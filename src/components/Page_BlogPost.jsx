import React from "react";
import BlogSidebar from "./BlogSidebar";
import { 
    facebook, 
    twitter, 
    plus,
    blog_thumb_1,
    blog_thumb_2,
    blog_thumb_3,
    comment_icon,
    blog_image_1,
    video

} from "../assets";

class Page_BlogPost extends React.Component { 
        
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
                <section>
                    <div className="container cijo-main-container">
                        {/* <!-- row --> */}
                        <div className="row">
                            { 
                                this.state.sidebar=='left' 
                                ? <BlogSidebar />
                                : null 
                            }
                            <div className={ this.state.sidebar=='no' ? 'cijo-post-inner col-12 col-lg-12' : 'cijo-post-inner col-12 col-lg-8' } >
                                <span className="cijo-post-category">BRANDING</span>
                                <h1 className="cijo-post-title">Greetings from Berlin. Street art from local artists.</h1>
                                <div className="cijo-post-date">
                                    <span>13<sup>th</sup> June 2019</span>
                                </div>
                                <div className="cijo-post-author">
                                    <span>By</span> <a href="#" >John Smith</a>
                                </div>
                                <div className="cijo-blog-inner-image-wrapper">
                                    <img className="img-responsive" src={blog_image_1} alt="blog-image" />     
                                </div>
                                <div className="cijo-post-share-buttons" >
                                    <a href="#" className="cijo-facebook" ><img src={facebook} alt="facebook" /></a>
                                    <a href="#" className="cijo-twitter" ><img src={twitter} alt="twitter" /></a>
                                    <a href="#" className="cijo-plus" ><img src={plus} alt="plus" /></a>
                                </div>
                                <div className="cijo-post-text-wrapper" >
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin faucibus purus pharetra lectus vehicula feugiat 
                                        molestie ut leo. Curabitur sit amet ante in orci egestas 
                                        dictum. Quisque ut feugiat nibh, sit amet ultrices orci. 
                                        Sed neque neque, interdum in semper ac, facilisis a neque.
                                        Quisque pellentesque nulla felis, ac pretium odio ullamcorper ut. 
                                        Curabitur eleifend magna ullamcorper varius ullamcorper.
                                        Cras dapibus aliquet velit nec sagittis. Nulla at semper diam, 
                                        ac porttitor lacus. Integer volutpat faucibus eros, sed mollis sem 
                                        bibendum quis. Sed convallis velit vel mauris pharetra rhoncus. 
                                        Pellentesque congue quam rhoncus odio feugiat consequat. 
                                        Cras mauris quam, dignissim vel congue et, faucibus at ligula. 
                                        Duis in eros nibh. Curabitur sed cursus velit, ac porttitor metus. 
                                        Phasellus faucibus mauris faucibus, porta risus nec, fringilla velit.
                                    </p>
                                    <p>
                                        Proin aliquam, sem et eleifend porta, sapien lectus consectetur nisl, 
                                        sit amet tristique eros metus eget turpis. Maecenas ut lectus mollis, 
                                        volutpat elit nec, vulputate arcu. Pellentesque semper suscipit arcu, 
                                        sit amet laoreet purus tincidunt eu. In hendrerit velit quis elit egestas l
                                        uctus. Vivamus ut viverra ante. Aenean posuere sem vitae nulla accumsan porta. 
                                        Quisque et iaculis sapien. Sed vulputate erat elit, nec posuere massa 
                                        ultricies nec. Cras congue iaculis ex. Nulla aliquet tempor maximus.
                                        Vestibulum sed metus erat. Suspendisse volutpat tellus at malesuada scelerisque. 
                                        In ut diam et felis mollis lobortis in eu sem. 
                                    </p>  
                                    <div className="cijo-post-quote row col-12 col-lg-9 offset-lg-1" >
                                        <p>
                                            Sed nec bibendum libero, vel hendrerit odio. 
                                            Aenean aliquam urna nec risus iaculis, et semper 
                                            metus varius. In et viverra metus.
                                        </p>
                                    </div>
                                    <h2 className="cijo-post-h2" >Inner title</h2>
                                    <p>
                                        Phasellus at nisl sollicitudin nisl mattis fermentum. Ut vitae fringilla diam,
                                        ac laoreet mauris. Praesent vulputate mi eu sodales pellentesque. Sed pretium 
                                        placerat lorem at pretium. Donec at orci consectetur, sodales ligula non, tincidunt 
                                        velit. Aliquam rhoncus elit in diam sagittis, a molestie felis tempor. 
                                        Pellentesque elementum pharetra molestie. Nullam eu ante lacinia, 
                                        aliquam tellus at, ornare dui. Praesent vel leo libero. 
                                        Phasellus at nisl sollicitudin nisl mattis fermentum. Ut 
                                        vitae fringilla diam, ac laoreet mauris. Praesent vulputate mi 
                                        eu sodales pellentesque. Sed pretium placerat lorem at pretium. 
                                        Donec at orci consectetur, sodales ligula non, tincidunt velit. 
                                        Aliquam rhoncus elit in diam sagittis, a molestie felis tempor. 
                                        Pellentesque elementum pharetra molestie. Nullam eu ante lacinia, 
                                        aliquam tellus at, ornare dui. Praesent vel leo libero. 
                                    </p> 
                                    <div className="cijo-post-video-wrapper" >
                                        <img className="img-responsive" src={video} alt="video" />
                                    </div>
                                    <ul className="cijo-post-list" >
                                        <li>
                                            Donec quis aliquet est. Suspendisse elementum massa sem, ut rhoncus ipsum dapibus non. 
                                        </li>
                                        <li>
                                            Curabitur feugiat, mi vitae eleifend ultricies, est diam ullamcorper justo, eget porttitor augue elit ac enim. 
                                        </li>
                                        <li>
                                            Nullam quis sagittis justo, cursus egestas tortor. 
                                        </li>
                                        <li>
                                            Nam et placerat nunc. 
                                        </li>
                                        <li>
                                            Proin metus leo, cursus vitae venenatis quis, mollis et felis. 
                                        </li>
                                        <li>
                                            In sed felis eu quam tempor dignissim eu ut massa. 
                                        </li>
                                    </ul>
                                    <ul className="cijo-post-tags" >
                                        <li><a href="#">ILLUSTRATION</a></li>
                                        <li><a href="#">GRAPHICS</a></li>
                                        <li><a href="#">WEB DESIGN</a></li>
                                    </ul>
                                    <div className="cijo-post-comments-wrapper" >
                                        <h2 className="cijo-post-h2" >COMMENTS (3)</h2>
                                        <ul className="cijo-comments-list">
                                            <li>
                                                <div className="cijo-comment" >
                                                    <div className="cijo-comment-image" >
                                                        <img src={comment_icon} className="cijo-comment-avatar" alt="avatar" />
                                                    </div>
                                                    <div className="cijo-comment-info" >
                                                        <h5>JOHN SMITH</h5>
                                                        <span>Feb 9, 2019, at 11:23</span>
                                                        <a href="#" >REPLY</a>
                                                        <p>Quisque ut feugiat nibh, sit amet ultrices orci. Sed neque neque, interdum in semper ac, facilisis a neque. Quisque pellentesque nulla felis, ac pretium odio ullamcorper ut. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cijo-comment" >
                                                    <div className="cijo-comment-image" >
                                                        <img src={comment_icon} className="cijo-comment-avatar" alt="avatar" />
                                                    </div>
                                                    <div className="cijo-comment-info" >
                                                        <h5>JOAN STAROR</h5>
                                                        <span>Feb 9, 2019, at 11:23</span>
                                                        <a href="#" >REPLY</a>
                                                        <p>Proin aliquam, sem et eleifend porta, sapien lectus consectetur nisl, sit amet tristique eros metus eget turpis. Maecenas ut lectus mollis, volutpat elit nec, vulputate arcu. Pellentesque semper suscipit arcu, sit amet laoreet purus tincidunt eu.</p>
                                                    </div>
                                                </div>
                                                <ul className="cijo-comment-answer-list">
                                                    <li>
                                                        <div className="cijo-comment" >
                                                            <div className="cijo-comment-image" >
                                                                <img src={comment_icon} className="cijo-comment-avatar" alt="avatar" />
                                                            </div>
                                                            <div className="cijo-comment-info" >
                                                                <h5>JOHN SMITH</h5>
                                                                <span>Feb 9, 2019, at 11:23</span>
                                                                <a href="#" >REPLY</a>
                                                                <p>Proin aliquam, sem et eleifend porta, sapien lectus consectetur nisl, sit amet tristique eros metus eget turpis. Maecenas ut lectus mollis, volutpat elit nec, vulputate arcu. Pellentesque semper suscipit arcu, sit amet laoreet purus tincidunt eu.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    </ul>
                                            </li>
                                            <li>
                                                <div className="cijo-comment" >
                                                    <div className="cijo-comment-image" >
                                                        <img src={comment_icon} className="cijo-comment-avatar" alt="avatar" />
                                                    </div>
                                                    <div className="cijo-comment-info" >
                                                        <h5>TOM CONNOR</h5>
                                                        <span>Feb 9, 2019, at 11:23</span>
                                                        <a href="#" >REPLY</a>
                                                        <p>Proin aliquam, sem et eleifend porta, sapien lectus consectetur nisl, sit amet tristique eros metus eget turpis. Maecenas ut lectus mollis, volutpat elit nec, vulputate arcu. Pellentesque semper suscipit arcu, sit amet laoreet purus tincidunt eu.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>   
                                    </div>
                                    <div className="cijo-comment-form-wrapper col-12 col-lg-9">
                                        <form>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="cijo-form-element-wrapper col-12 mb-2">
                                                        <h2>Leave your comment</h2>
                                                    </div>
                                                    <div className="cijo-form-element-wrapper cijo-form-element-left col-12 col-sm-6">
                                                        <label>NAME</label>
                                                        <input type="text" id="name" />
                                                    </div>
                                                    <div className="cijo-form-element-wrapper cijo-form-element-right col-12 col-sm-6">
                                                        <label>EMAIL</label>
                                                        <input type="text" id="email" />
                                                    </div>
                                                    <div className="cijo-form-element-wrapper col-12">
                                                        <label>WEBSITE</label>
                                                        <input type="text" id="website" />
                                                    </div>
                                                    <div className="cijo-form-element-wrapper col-12">
                                                        <label>COMMENTS</label>
                                                        <textarea id="comments"></textarea>
                                                    </div>
                                                    <div className="cijo-input col-12 text-center">
                                                        <button type="submit" className="cijo-button">SUBMIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
                    {/* <!-- blog navigation buttons --> */}
                    <div className="cijo-post-buttons">
                        <div className="container">
                            {/* <!-- row --> */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="cijo-container-wrapper" >
                                        <div className="cijo-post-buttons-wrapper d-none d-sm-block" >
                                            <button className="cijo-buttons-prev cijo-button-arrow-left" >PREVIOUS POST</button>
                                            <button className="cijo-buttons-next cijo-button-arrow-right" >NEXT POST</button>
                                        </div>
                                        <div className="cijo-post-buttons-wrapper d-sm-none" >
                                            <button className="cijo-buttons-prev cijo-button-arrow-left" >PREVIOUS</button>
                                            <button className="cijo-buttons-next cijo-button-arrow-right" >NEXT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /row --> */}
                        </div>
                    </div>
                    {/* <!-- /blog navigation buttons --> */}
                </section>
                {/* <!-- /section Blog --> */}
            </main> 
        );
    }
}

export default Page_BlogPost;