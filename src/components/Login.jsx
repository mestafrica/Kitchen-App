import React from 'react';
import {auth, googleAuthProvider} from '../services/firebase';

class Login extends React.Component {
    handleLogin() {
        googleAuthProvider.setCustomParameters({
            'hd': 'meltwater.org'
        });

        auth.signInWithPopup(googleAuthProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <p className="lead text-center alert alert-warning">Chale, please Signin to Use Kitchen App</p>
                    <p className="text-center"><button type="button" className="btn btn-lg btn-success" onClick={this.handleLogin}>Log In</button></p>
                </div>
                </div>
        );
    }
}

export default Login