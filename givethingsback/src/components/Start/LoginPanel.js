import React from 'react';
import { Link} from 'react-router-dom';

class LoginPanel extends React.Component {
    render() {
        return (
            <div className="login-panel">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/logowanie">Zaloguj</Link>
                            </li>
                            <li className="sign-up">
                                <Link to="/rejestracja">Załóż konto</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        );
    }
}

export default LoginPanel;