import React from 'react';
import {NavLink} from 'react-router-dom';

import {auth, googleAuthProvider} from '../services/firebase';

import './Header.css';
import mestKitchenLogoImg from './mestkitchenlogo.png';

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
            }).catch((err) => {
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

        const Login = () => {
            return (
                <div className="navbar-right">
                    <button onClick={this.handleLogin} className="btn btn-default navbar-btn navbar-right-btn">Login</button>
                </div>
            );
        };

        const Logout = () => {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">{user.displayName}</a></li>
                    <li><a href="#">{isAdmin? 'admin' : user.user_type}</a></li>
                    <li><button onClick={this.handleLogout} className="btn btn-default navbar-btn navbar-right-btn">Logout</button></li>
                </ul>
            );
        };

        const UserMenuList = () => {
            return (
                <ul className="nav navbar-nav menu-list">
                    <li><NavLink activeClassName="active" to="/user">User Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/createorders">Create orders</NavLink></li>
                    <li><NavLink activeClassName="active" to="/usersummary">User summary</NavLink></li>
                </ul>
            )
        };

        const AdminMenuList = () => {
            return (
                <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
            );
        };

        const MenuList = (user, isAdmin) => {
            if (user) {
                return (
                    <ul className="nav navbar-nav menu-list">
                        <li><NavLink activeClassName="active" to="/user">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/createorders">Create orders</NavLink></li>
                        <li><NavLink activeClassName="active" to="/usersummary">User summary</NavLink></li>
                        {isAdmin ?<li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>: ''}
                    </ul>
                )
            } else {
                return ;
            }
        };

        return (

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header header-logo">
                            <a className="" href="#">
                                <img alt="Brand" src={mestKitchenLogoImg} />
                            </a>
                        </div>

                        {<MenuList user={user} isAdmin={isAdmin} />}

                       {user? <Logout/> : <Login />}
                    </div>
                </nav>

        );
    }
}

export default Header;
