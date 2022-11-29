import React, { Component } from 'react';
import OurProjects from './OurProjects';
import BrandBoxes from './BrandBoxes';


class Page_Projects extends Component {
    render() {
        return (
            <main>
                <OurProjects />
                <BrandBoxes />
            </main>
        );
    }
}

export default Page_Projects;