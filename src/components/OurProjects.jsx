import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

import { 
    project_airspun,
    project_book,
    project_bottles,
    project_juice,
    project_package,
    project_report,
    project_scetch,
    project_tablet
 } from "../assets/";


const OurProjects = () => {

    // init one ref to store the future isotope object
    const isotope = React.useRef(Isotope || null);
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState("*");

    // initialize an Isotope object with configs
    React.useEffect(() => { 

        isotope.current = new Isotope(".cijo-grid", {
            itemSelector: ".cijo-grid-item",
            layoutMode: "fitRows"
        });

        // cleanup
        return () => isotope.current?.destroy();
    }, []);

    // handling filter key change
    React.useEffect(() => {
        console.log(filterKey);
        // console.log(isotope.current?1:0);
        if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    var cnt = 0
    const handleImageLoad = (e) => {
        cnt++;
        // wher all images are loaded refresh isotope
        if (cnt==8) {
            isotope.current?.arrange({ filter: `*` });
        }
    }
    const handleFilterKeyChange = (filterKey: string) => (e) => {

        document.querySelector('.iso-filters .selected').classList.remove('selected');
        document.querySelectorAll('.odd-box').forEach(
            function(node){
                node.classList.remove('odd-box');
            }
        ); 
        document.querySelectorAll('.even-box').forEach(
            function(node){
                node.classList.remove('even-box');
            }
        );    
 
        e.target.classList+=" selected";
        
        var filterValue = filterKey;
        if ( filterValue=='*' ){
            document.querySelectorAll( '.cijo-project-box' ).forEach(
                function(node, idx) {
                    if ( idx%2==1) node.classList+=" odd-box";
                    else node.classList+=" even-box";
                }
            );   
        }else{
            document.querySelectorAll( "."+filterValue ).forEach(
                function(node, idx){
                    console.log(filterValue);
                    if ( idx%2==1) node.querySelector('.cijo-project-box').classList+=" odd-box";
                    else node.querySelector('.cijo-project-box').classList+=" even-box";
                }
            );  
        }
        setFilterKey(filterKey);
        e.preventDefault();
    }

    return (
        <section className="cijo-projects-section overflow-hidden" >
            <div className="container cijo-main-container">
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12 cijo-mb-10">
                        <h1>Our Projects</h1>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    <div className="cijo-grid-filters-wrapper col-lg-6 offset-lg-6" >
                        <ul className="iso-filters">
                            <li><a href="#" onClick={handleFilterKeyChange("*")} className="selected" data-filter="*" >ALL</a></li>
                            <li><a href="#" onClick={handleFilterKeyChange("branding")} data-filter=".branding" >BRANDING</a></li>
                            <li><a href="#" onClick={handleFilterKeyChange("books")} data-filter=".books" >BOOKS</a></li>
                            <li><a href="#" onClick={handleFilterKeyChange("illustrations")} data-filter=".illustrations" >ILLUSTRATIONS</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /row --> */}
                {/* <!-- row --> */}
                <div className="row">
                    <div className="cijo-grid-filters-wrapper col-lg-10 offset-lg-1 mr-lg-auto" >
                        {/* <!-- row grid --> */}
                        <div className="row cijo-grid" >
                            {/* <!-- col 1 --> */}
                            <div className="cijo-grid-item books col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box even-box">
                                    <h3 className="cijo-project-title" >BOOK</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >BOOKS</div> 
                                            <div className="cijo-project-date" >2018</div>
                                        </div>
                                        <img className="img-responsive" src={project_book} alt="project-book" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 1 --> */}
                            {/* <!-- col 2 --> */}
                            <div className="cijo-grid-item illustrations col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box odd-box">
                                    <h3 className="cijo-project-title" >WITH COMPLIMENTS</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >ILLUSTRATION</div>
                                            <div className="cijo-project-date" >2018</div>
                                        </div>
                                        <img className="img-responsive" src={project_package} alt="project-book" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 2 --> */}
                            {/* <!-- col 3 --> */}
                            <div className="cijo-grid-item illustrations col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box even-box">
                                    <h3 className="cijo-project-title" >EARTH JUICE</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >ILLUSTRATION</div>
                                            <div className="cijo-project-date" >2019</div>
                                        </div>
                                        <img className="img-responsive" src={project_juice} alt="project-juice" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 3 --> */}
                            {/* <!-- col 4 --> */}
                            <div className="cijo-grid-item branding col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box odd-box">
                                    <h3 className="cijo-project-title" >PLAY GIRL APP</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >BRANDING</div>
                                            <div className="cijo-project-date" >2019</div>
                                        </div>
                                        <img className="img-responsive" src={project_tablet} alt="project-book" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 4 --> */}
                            {/* <!-- col 5 --> */}
                            <div className="cijo-grid-item illustrations col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box even-box">
                                    <h3 className="cijo-project-title" >GET BACK TO YOUR ROOTS</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >ILLUSTRATION</div>
                                            <div className="cijo-project-date" >2017</div>
                                        </div>
                                        <img className="img-responsive" src={project_bottles} alt="project-book" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 5 --> */}
                            {/* <!-- col 6 --> */}
                            <div className="cijo-grid-item books col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box odd-box">
                                    <h3 className="cijo-project-title" >XMAS SKETCH BOOK</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >BOOKS</div>
                                            <div className="cijo-project-date" >2018</div>
                                        </div>
                                        <img className="img-responsive" src={project_scetch} alt="project-scetch" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 6 --> */}
                            {/* <!-- col 7 --> */}
                            <div className="cijo-grid-item illustrations col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box even-box">
                                    <h3 className="cijo-project-title" >ANNUAL REPORT</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >ILLUSTRATION</div>
                                            <div className="cijo-project-date" >2018</div>
                                        </div>
                                        <img className="img-responsive" src={project_report} alt="project-report" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 7 --> */}
                            {/* <!-- col 8 --> */}
                            <div className="cijo-grid-item branding col-12 col-lg-6 col-md-6">
                                <div className="cijo-project-box odd-box">
                                    <h3 className="cijo-project-title" >AIRSPUN REPORT</h3>
                                    <div className="cijo-project-thumb" >
                                        <div className="cijo-project-info" >
                                            <div className="cijo-project-category" >BRANDING</div>
                                            <div className="cijo-project-date" >2018</div>
                                        </div>
                                        <img className="img-responsive" src={project_airspun} alt="project-airspun" onLoad={handleImageLoad} />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /col 8 --> */}
                        </div>
                        {/* <!-- /row grid --> */}
                    </div>
                </div>
                {/* <!-- /row --> */}
            </div>
        </section>
    )
 
}

export default OurProjects;