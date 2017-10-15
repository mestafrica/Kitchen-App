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

    renderHeader(){
       if(this.props.user && this.props.user.user_type != 'eit'){
        return (
            <ul className="nav navbar-nav menu-list">
                <li><NavLink activeClassName="active" to="/user">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
                <li style={{paddingLeft:'450px'}}><a href="#">{this.props.user.displayName}</a></li>
                <li>Admin <button onClick={this.handleLogout} className="btn btn-default navbar-btn navbar-right-btn">Logout</button></li>
            </ul>
        )
       } else if (this.props.user){
        return (
            <ul className="nav navbar-nav menu-list">
                <li><NavLink activeClassName="active" to="/user">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/createorders">Create orders</NavLink></li>
                <li><NavLink activeClassName="active" to="/usersummary">User summary</NavLink></li>
                <li style={{paddingLeft:'450px'}}><a href="#">{this.props.user.displayName}</a></li>
                <li>eit <button onClick={this.handleLogout} className="btn btn-default navbar-btn navbar-right-btn">Logout</button></li>
            </ul>
        )

       }
    }
    render() {
        console.log(this.props)
        return (

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header header-logo">
                            <a className="" href="#">
                                <img alt="Brand" src={mestKitchenLogoImg} />
                            </a>
                        </div>
                        {this.renderHeader()}
                    </div>
                </nav>

        );
    }
}

export default Header;
