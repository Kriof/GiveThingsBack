import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { HomeThreeColumns } from './HomeThreeColumns';

class WhatDoWeDo extends React.Component {
    render() {
        return (
            <>
                <Element name="whatDoWeDo">
                    <HomeThreeColumns />
                </Element>

            </>
        )
    }
}
export default WhatDoWeDo;