import React from 'react';
import logo from '../../assets/Decoration.svg';
import tshirt from '../../assets/Icon-2.png';
import shoppingbag from '../../assets/Icon-5.png';
import magnifier from '../../assets/Icon-1.png';
import recycle from '../../assets/Icon.png';
import { Link } from 'react-router-dom';

export const FourSteps = () => {
    return (
        <div className="four-steps">
            <div className="four-steps-header">
                <p>Wystarczą 4 proste kroki</p>
                <img src={logo} />
            </div>
            <div className="four-steps-content">
                <ul>
                    <li>
                        <div>
                            <img src={tshirt}></img>
                            <p className="title">Wybierz rzeczy</p>
                            <p className="content">ubrania, zabawki, sprzęt i inne</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={shoppingbag}></img>
                            <p className="title">Spakuj je</p>
                            <p className="content">skorzystaj z worków na śmieci</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={magnifier}></img>
                            <p className="title">Zamów kuriera</p>
                            <p className="content">kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={recycle}></img>
                            <p className="title">Wybierz rzeczy</p>
                            <p className="content">ubrania, zabawki, sprzęt i inne</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="four-steps-bottom">
                <ul>
                    <li className="btn">
                        <Link  to="logowanie">ODDAJ RZECZY</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}