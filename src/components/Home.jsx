import React from 'react';
import {Link, NavLink} from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                {/*todo: We might need put today's kitchen information here*/}
                <p>information for this week</p>
                <div>
                    <NavLink to='/current'><button>Menu for This week</button></NavLink>
                </div>
                <div>
                    <NavLink to='/next'><button>Menu for Next Week</button></NavLink>
                </div>
            </div>
        )
    }
}

export default Home;