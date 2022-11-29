
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logo } from "../assets/";
// import Page_Home from "./Page_Home"; 

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    componentDidMount() {
        
    }

    handleSearchClick(e){
        // header - search butoon - functionality for desktop
        if(e.target.classList.contains('open')){
            e.target.classList.remove('open');
            document.querySelector('.cijo-search-text').classList.remove('open');
        }else{
            e.target.classList+=" open";
            document.querySelector('.cijo-search-text').classList+=" open";
        }
    }

    handleBurgerClick(e){
        // header - burger menu - functionality for mobile, tablet
        if ( document.querySelector('#navbarMain').classList.contains('show') && document.querySelector('#navbarMain').classList.contains('open') ){
            e.target.classList.remove('open');
            document.querySelector('#navbarMain').classList.remove('open');
            setTimeout(function(){
                document.querySelector('#navbarMain').classList.remove('show')
            },400);
        }else if ( !document.querySelector('#navbarMain').classList.contains('show') && !document.querySelector('#navbarMain').classList.contains('open') ){
            e.target.classList+=' open';
            document.querySelector('#navbarMain').classList+=' show';
            setTimeout(function(){
                document.querySelector('#navbarMain').classList+=' open';
            },10);
        }
 
        e.preventDefault();
    }


    render() {
        return( 
            <header>
                <div className="container cijo-main-container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" to="/"><img src={logo} className="cijo-main-logo" alt="cijo-logo"/></Link>
                                <a href="#" onClick={this.handleBurgerClick} className="cijo-button-burger" ><span>Menu</span></a>
                                <div className="collapse navbar-collapse" id="navbarMain">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" >PAGES</a>
                                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                                <Link className="dropdown-item" to="/about">ABOUT</Link>
                                                <Link className="dropdown-item" to="/team">TEAM</Link>
                                                <Link className="dropdown-item" to="/services">SERVICES</Link>
                                                <Link className="dropdown-item" to="/faq">FAQ</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/projects" id="dropdown02" >PORTFOLIO</Link>
                                            <div className="dropdown-menu" aria-labelledby="dropdown02">
                                                <Link className="dropdown-item" to="/project">PROJECT PRESENTATION</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown03" >BLOG</a>
                                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                                                <Link className="dropdown-item" to="/blog">BLOG RIGHT SIDEBAR</Link>
                                                <Link className="dropdown-item" to="/blog-no-sidebar">BLOG NO SIDEBAR</Link>
                                                <Link className="dropdown-item" to="/blog-left-sidebar">BLOG LEFT SIDEBAR</Link>
                                                <Link className="dropdown-item" to="/post">POST RIGHT SIDEBAR</Link>
                                                <Link className="dropdown-item" to="/post-no-sidebar">POST NO SIDEBAR</Link>
                                                <Link className="dropdown-item" to="/post-left-sidebar">POST LEFT SIDEBAR</Link>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">CONTACT</Link>
                                        </li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <div className="cijo-search-wrapper">
                                            <input className="cijo-search-text" type="text" placeholder="Search for..." />
                                            <button onClick={this.handleSearchClick} type="button" className="cijo-search-button"></button>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
