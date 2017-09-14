import React from 'react';
import {auth, googleAuthProvider} from '../services/firebase';

import './Login.css'
import mestKitchenLogoImg from './mestkitchenlogo.png';

class Login extends React.Component {
    handleLogin() {
        googleAuthProvider.setCustomParameters({
            'hd': 'meltwater.org'
        });

        auth.signInWithPopup(googleAuthProvider)
            .then((result) => {})
            .catch((err) => {console.error(err)});
    }

    render() {

        return (
            <div className="login" >
                <p className="text-center logo-image">
                    <img src={mestKitchenLogoImg} alt=""/>
                </p>
                <p className="text-center login-btn">
                    <button type="button" className="btn btn-lg btn-success" onClick={this.handleLogin}>Log In</button>
                </p>
            </div>


        );
    }
}

export default Login;