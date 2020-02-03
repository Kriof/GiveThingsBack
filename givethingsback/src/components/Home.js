import React from 'react';
import Start from './Start/Start';
import WhatDoWeDo from './WhatDoWeDoSection/WhatDoWeDo';
import AboutUs from './AboutUs/AboutUs';

class Home extends React.Component {
    render() {
        return ( 
            <>
            <Start/>
            <WhatDoWeDo/>
            <AboutUs/>
            </>
        );
    }
}

export default Home;