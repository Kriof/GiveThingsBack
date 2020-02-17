import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
    render() {
        return (
            <>
            
                <nav className="home-header">
                    <ul>
                        <li>
                            <Link to="/">Start</Link>
                        </li>
                        <li>
                            <Link to="whatDoWeDo">O co chodzi?</Link>
                        </li>
                        <li>
                            <Link to="aboutUs">O nas</Link>
                        </li>
                        <li>
                            <Link to="whoWeHelp">Fundacja i organizacje</Link>
                        </li>
                        <li>
                            <Link to="contact">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}
export default HomeHeader;