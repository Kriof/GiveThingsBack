import React from 'react';
import logo from '../../assets/Decoration.svg';
import { Link } from 'react-router-dom';

class StartPane extends React.Component {
    render() {
        return (
            <div className="start-pane-page">
                <div className="start-pane-content">
                    <h1 className="start-pane-title">Zacznij pomagać! <br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={logo} />
                    <ul >
                        <li className="btn">
                            <Link to="/logowanie">ODDAJ RZECZY</Link>
                        </li>
                        <li className="btn">
                            <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </li>
                    </ul>
                </div>
                <div className="start-pane-content-offset"></div>
            </div>
        );
    }
}

export default StartPane;