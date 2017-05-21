import React from 'react';
import Time from '../../../services/time.js';

import DailySummary from './DailySummary';


class WeeklySummary extends React.Component {
    constructor() {
        super();
    }

    render() {

        let today = Time.getToday();
        let monday = Time.getNextMonday(today);
        let tuesday = Time.getNextTuesday(today);
        let wednesday = Time.getNextWednesday(today);
        let thursday = Time.getNextThursday(today);
        let friday = Time.getNextFriday(today);

        return(
            <div className="">
                <DailySummary date={monday} />
                <DailySummary date={tuesday}/>
                <DailySummary date={wednesday}/>
                <DailySummary date={thursday}/>
                <DailySummary date={friday} />
            </div>
        )
    }
}

export default WeeklySummary;