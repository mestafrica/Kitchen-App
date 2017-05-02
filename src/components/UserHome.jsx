import React from 'react';
import {NavLink} from 'react-router-dom';
import Time from '../services/time';

class UserHome extends React.Component {
    render() {
        let user = this.props.user;

        return (
            <div className="jumbotron">
                {/*todo: We might need put today's kitchen information here*/}
                <p className="lead text-center" >{user? `Hi, ${user.displayName}` : ''},  today is {Time.getToday().toDateString()}</p>
                <p className="lead text-center">
                    Here is today's menu:
                    Breakfast:
                    Lunch:
                    Dinner:
                </p>
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
                {/* todo: might need more components here*/}
            </div>
        );
    }
}

export default UserHome;
