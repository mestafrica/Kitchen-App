import React from 'react';
import {NavLink} from 'react-router-dom';
import Time from '../../services/time.js';

class AdminHome extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <p className="text-center alert alert-info ">Welcome back, super powerful people. Today is {Time.getToday().toDateString()} information for this week</p>

                <p className="text-center">
                    <NavLink to='/createmeal'>
                        <button className="btn btn-success btn-lg">Create a Meal</button>
                    </NavLink>
                </p>
                <p className="text-center">
                    <NavLink to='/viewmeals'>
                        <button className="btn btn-success btn-lg">View ALl the Meals</button>
                    </NavLink>
                </p>
                <p className="text-center">
                    <NavLink to='/createmenu'>
                        <button className="btn btn-success btn-lg">Create Menu for next Week</button>
                    </NavLink>
                </p>
                <p className="text-center">
                    <NavLink to='/summary'>
                        <button className="btn btn-success btn-lg">Order Summary for Next Week</button>
                    </NavLink>
                </p>
            </div>
        );
    }
}

export default AdminHome;