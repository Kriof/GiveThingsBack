import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import logo from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';
const AboutUs = () => {
    return (
        <>
            <Element name="aboutUs" className="about-us">
                <div className="left-pane">
                    <h1>aboutUs</h1>
                    <img src={logo} />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} />
                </div>
                <div className="right-pane"></div>

            </Element>
        </>
    )
}

export default AboutUs;