import React from 'react';
import {NavLink} from 'react-router-dom';

import {auth, googleAuthProvider} from '../services/firebase';

import './Header.css';

class Header extends React.Component {
    constructor() {
        super();

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

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

    handleLogout() {
        console.log("logout");
        auth.signOut()
            .then(() => {
                this.props.logout();
            }).catch((err) => {
                console.error(err)
        });
    }

    render() {
      let user = this.props.user;
      let isAdmin = user && user.user_type && (user.user_type !== 'eit');

        const Login = () => {return <div className="navbar-right"><button  onClick={this.handleLogin}  className="btn btn-default navbar-btn">Login</button></div>};
        const Logout = () => {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Hi {user.displayName}</a></li>
                    <li><a href="#">{isAdmin? 'admin' : user.user_type}</a></li>
                    <li><button onClick={this.handleLogout} className="btn btn-default navbar-btn">Logout</button></li>
                </ul>
            );
        };
        const UserMenuList = () => {
            return (
                <ul className="nav navbar-nav menu-list">
                    <li><NavLink activeClassName="active" to="#">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="#">Link2</NavLink></li>
                    <li><NavLink activeClassName="active" to="#">Link3</NavLink></li>
                </ul>
            )
        };

        const AdminMenuList = () => {
            return (
                <ul className="nav navbar-nav menu-list">
                    <li><NavLink activeClassName="active" to="/admin">Admin Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/createmenu">CreateMenu</NavLink></li>
                    <li><NavLink activeClassName="active" to="/adminsummary">Admin Sum</NavLink></li>
                    <li><NavLink activeClassName="active" to="/user">User Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/createorders">create orders</NavLink></li>
                    <li><NavLink activeClassName="active" to="/usersummary">user summary</NavLink></li>
                </ul>
            )
        };

        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header header-logo">
                            <a className="" href="#">
                                <img alt="Brand" src='../mestlogo.png' />
                            </a>
                        </div>
                        {isAdmin ? <AdminMenuList /> : <UserMenuList />}
                        {user? <Logout/> : <Login />}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
