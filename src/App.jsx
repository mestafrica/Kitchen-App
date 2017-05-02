import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';

//helper
import {auth, googleAuthProvider, emailAuthProvider, usersRef} from './services/firebase';
import HTTP from './services/httpservices.js';

//CSS library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null
        };

        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        let userRef = null;

        this.setState({
            version: 2
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
                userRef = usersRef.child(user.uid);

                userRef.once('value').then((snapshot) => {
                    if (snapshot.val()) {
                        console.log("load user from DB");

                        let userDB = snapshot.val();

                        this.setState({
                            user: userDB
                        });

                        return;
                    } else {
                        let nameArr = user.displayName.split(' ');
                        let first_name =  nameArr[0] || 'n/a';
                        let last_name = nameArr[1] || 'n/a';
                        let nationality  = "ghana";
                        let sex = "male";
                        let user_type = "eit";
                        let {displayName, email, uid, photoURL} = user;

                        let newUser = {
                            first_name,
                            last_name,
                            email,
                            nationality,
                            sex,
                            user_type,
                            displayName,
                            uid,
                            photoURL
                         };

                        let payload = {
                            user: newUser
                        };

                        console.log("create user");
                        HTTP.post('/users', payload)
                            .then((response) => {
                                newUser.id = response.id;

                                //save to firebase
                                userRef.set(newUser);

                                this.setState({user: newUser});

                            }).catch((err) => {
                                console.error(err);
                            });
                    }
                });
            }
        });
    }

    logout() {
        console.log("set user to null");
        this.setState({
            user: null
        });
    }


    render() {
        let {user} = this.state;
        return (
            <HashRouter>
                <div className="container">
                    <Header user={user} logout={this.logout}/>

                    {user ? <Main user={user}/> : <Login/>}

                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
