import React from 'react';
import {NavLink} from 'react-router-dom';
import Time from '../../services/time.js';
import HTTP from '../../services/http.js';

import yawImg from '../yaw.jpg';
import enochImg from '../enoch.png';
import mikeImg from '../mike.jpeg';

class AdminHome extends React.Component {
    constructor() {
        super();
        this.state = {
            order: {
                currentWeek: {
                    monday: {
                        lunch: {},
                        supper: {}
                    },
                    tuesday: {
                        lunch: {},
                        supper: {}
                    }
                },
                nextWeek: {

                }

            }
        }
    }
    componentDidMount() {
        let today = Time.getToday();
        let todayServingTime = Time.getServingDate(today);
        let nextMonday = Time.getNextMonday(today);
        let nextFriday = Time.getNextFriday(today);

        console.log("admin Home component did mont");
        let lunchUrl = `/order_summary/lunch/${todayServingTime}`;
        let supperUrl = `/order_summary/supper/${todayServingTime}`;
        //HTTP.get('/order_summary')

    }

    render() {
        let today = Time.getToday();
        let todayServingTime = Time.getServingDate(today);
        console.log(todayServingTime);

        return (
            <div className="jumbotron">
                <p className="text-center alert alert-info ">Welcome back, super powerful people. Today is {Time.getToday().toDateString()} information for this week</p>

                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={yawImg} alt="meals" />
                                <div className="caption">
                                    <h3>Meals</h3>
                                    <p>You can create meals and review your meals here.</p>
                                    <p className="text-center">
                                        <NavLink to="/viewmeals">
                                            <button className="btn btn-success">View</button>
                                        </NavLink>
                                        <span> </span>
                                        <NavLink to="/createmeal">
                                            <button className="btn btn-success">Create</button>
                                        </NavLink>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={mikeImg} alt='menu' />
                            <div className="caption">
                                <h3>Menu</h3>
                                <p>You can create and review your menus here</p>
                                <p className=" text-center">
                                    <NavLink to="/createmenu">
                                        <button className="btn btn-success">View</button>
                                    </NavLink>
                                    <span> </span>
                                    <NavLink to="/createmenu">
                                        <button className="btn btn-success">Create</button>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={enochImg} alt="summary" />
                            <div className="caption">
                                <h3>Order Summary</h3>
                                <p>You can check your Order summary here</p>
                                <p className=" text-center">
                                    <NavLink to="/adminsummary">
                                        <button className="btn btn-success">Summary</button>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;