import React from 'react';
import HTTP from '../../services/http';
import Time from '../../services/time';

import WeeklySummary from './summary/WeeklySummary.jsx';


class AdminOrderSummary extends React.Component {
    constructor() {
      super();
      this.state = {
        orders: []
      }
    }

    componentWillMount() {
    }

    render() {

        let today = Time.getToday();
        let monday = Time.getNextMonday(today);
        let tuesday = Time.getNextTuesday(today);
        let wednesday = Time.getNextWednesday(today);
        let thursday = Time.getNextThursday(today);
        let friday = Time.getNextFriday(today);

        return (
            <div>
                <h2>admin summary</h2>
                <h3>Next Week: {monday.toDateString()} - {friday.toDateString()}</h3>

                <WeeklySummary />
            </div>
        )

    }
}

export default AdminOrderSummary
