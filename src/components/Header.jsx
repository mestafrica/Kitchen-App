import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h4>MEST Kitchen App</h4>
                        </div>
                        <div className="">
                            <button className="btn btn-default navbar-btn navbar-right">Login</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
