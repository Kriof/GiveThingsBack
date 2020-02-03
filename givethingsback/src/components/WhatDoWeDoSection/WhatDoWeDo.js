import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { HomeThreeColumns } from './HomeThreeColumns';
import { FourSteps } from './FourSteps';

class WhatDoWeDo extends React.Component {
    render() {
        return (
            <>
                <Element className="whatDoWeDo" name="whatDoWeDo">
                    <HomeThreeColumns />
                    <FourSteps />
                </Element>

            </>
        )
    }
}
export default WhatDoWeDo;