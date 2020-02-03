import React from 'react';
import HomeHeader from './HomeHeader';
import LoginPanel from './LoginPanel';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import StartImage from './StartImage';
import StartPane from './StartPane'
class Start extends React.Component {
    render() {
        return (
            <div className="start">
                <StartImage />
                <div className="start-pane">
                    <LoginPanel />
                    <HomeHeader />
                    <StartPane />
                </div>
            </div>
            
        );
    }
}

export default Start;