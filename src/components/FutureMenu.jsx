import React from 'react';

class FutureMenu extends React.Component {
    render() {
        console.log(this.props);
        let futureWeekData = this.props.futureWeek;

        return (
            <div>
                <h2>Order For Next Week</h2>
                <p>Large form to order the meals for next week</p>
                <p>{JSON.stringify(futureWeekData)}</p>
            </div>
        )
    }
}

export default FutureMenu;