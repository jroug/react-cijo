import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-black text-white">
        <div className="container cijo-main-container">
            <div className="row cijo-footer-main-row">
                <div className="col-12 mb-4 align-self-top">
                    <div className="row">
                        <h2 className="cijo-newsletter-h2">Sign up to our Newsletter</h2>
                    </div>
                    <div className="row cijo-newsletter-wrapper">
                        <input className="cijo-newsletter-input" type="text" placeholder="Your email" />
                        <button className="cijo-button-arrow-right"></button>
                    </div>
                    <div className="row cijo-social">
                        <a href="#" className="cijo-social-link fb" >facebook</a>
                        <a href="#" className="cijo-social-link inst" >instagram</a>
                        <a href="#" className="cijo-social-link tw" >twitter</a>
                    </div>
                    <div className="row cijo-footer-contact">
                        <a href="#" className="cijo-email" >info@cijo.com</a><span className="cijo-separator">|</span><a href="#" className="cijo-phone" >+00 1 718 893 3900</a>
                    </div>
                </div>
                <div className="col-12 text-center col-sm-6 text-sm-left align-self-end">
                    <p>© 2020 All Rights Reserved by CiJo</p>
                </div>
                <div className="col-12 text-center col-sm-6 text-sm-right align-self-end">
                    <p><Link to="/terms" >Terms of use</Link> | <Link to="/privacy" >Privacy Policy</Link></p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;