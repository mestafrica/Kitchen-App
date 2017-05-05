import React from 'react';
import {NavLink} from 'react-router-dom';

class AdminHome extends React.Component {
    render() {
        return (
            <div>
                <h2>Admin Home</h2>

                {/*todo: We might need put today's summary information here*/}
                <p>information for this week</p>
                <div>
                    <NavLink to='/createmeal'><button>Create a Meal</button></NavLink>
                </div>
                <div>
                    <NavLink to='/createmenu'><button>Create Menu for next Week</button></NavLink>
                </div>
                <div>
                    <NavLink to='/summary'><button>Order Summary for Next Week</button></NavLink>
                </div>
            </div>
        );
    }
}

export default AdminHome;
