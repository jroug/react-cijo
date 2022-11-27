
import React from "react";
import HomeSlider from "./HomeSlider";
import OurProjects from "./OurProjects";
import OurServices from "./OurServices";
import BrandSlider from "./BrandSlider";
import BlogFeed from "./BlogFeed";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { logo } from "../assets/";
 
const Page_Home = () => (
    <main className="mt-0">
        <HomeSlider />
        <OurProjects />
        <OurServices />
        <BrandSlider />
        <BlogFeed />
    </main>
);

export default Page_Home;
