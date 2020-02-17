import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import logo from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';

const WhoWeHelp = (props) => {
    return (
        <>
            <Element name="whoWeHelp" className="who-we-help">
                <div className="pane">
                    <h1>Komu pomagamy?</h1>
                    <img src={logo} />
                    <ul>
                        <li><span></span></li>
                    </ul>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    {props.foundations}
                    <h4>Page id: {props.fundations.currentPageId}</h4>
                </div>
            </Element>
        </>
    )
}

export default WhoWeHelp;