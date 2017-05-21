import React from 'react';

class CurrentMenu extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h3>Current Menu</h3>
                <p>this page should show this week's order details for this user based on their order.</p>
                <p>Should be a table here for 5-6 days</p>
                <p></p>
            </div>
        );
    }
}

export default CurrentMenu;