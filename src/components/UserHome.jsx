import React from 'react';
import {NavLink} from 'react-router-dom';
import Time from '../services/time.js';
import HTTP from '../services/http.js'

class UserHome extends React.Component {

    componentDidMount() {
        console.log("did mount");
        console.log(this.props);

        //todo: nice to have userid to get user's order
        //HTTP.get('/orders')
        //    .then(data => {
        //        // console.log(data)
        //        this.setState({
        //            orders: data
        //        });
        //    })
    }

    render() {
        let user = this.props.user;

        return (
            <div className="jumbotron">
                <p className="lead text-center" >{user? `Hi, ${user.displayName}` : ''},  today is {Time.getToday().toDateString()}</p>

                {/*todo: We might need put today's kitchen information here*/}
                <div className="lead text-center">
                    <p>Here is your order for today:</p>
                    <p>Breakfast:</p>
                    <p>Lunch:</p>
                    <p>Dinner:</p>
                </div>

                <div>
                    <NavLink to='/current'>
                        <p className="text-center">
                            <button type="button" className="btn btn-lg btn-success">Order For This Week</button>
                        </p>
                    </NavLink>
                    <NavLink to='/next'>
                        <p className="text-center">
                            <button type="button" className="btn btn-lg btn-success">Order For Next Week</button>
                        </p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default UserHome;
