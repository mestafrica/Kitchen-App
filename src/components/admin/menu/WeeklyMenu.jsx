import React from 'react';
import Time from '../../../services/time.js';

import DailyMenu from './DailyMenu.jsx';


class WeeklyMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        let meals = this.props.meals;

        let today = Time.getToday();
        let monday = Time.getNextMonday(today);
        let tuesday = Time.getNextTuesday(today);
        let wednesday = Time.getNextWednesday(today);
        let thursday = Time.getNextThursday(today);
        let friday = Time.getNextFriday(today);
        let saturday = Time.getNextSaturday(today);

        return(
            <div className="">
                <DailyMenu meals={meals} day={"Monday"} date={monday} />
                <DailyMenu meals={meals} day={"Tuesday"} date={tuesday}/>
                <DailyMenu meals={meals} day={"Wednesday"} date={wednesday}/>
                <DailyMenu meals={meals} day={"Thursday"} date={thursday}/>
                <DailyMenu meals={meals} day={"Friday"} date={friday}/>
                {/*<DailyMenu meals={meals} day={"Saturday"} date={saturday} />*/}
            </div>
        )
    }
}

export default WeeklyMenu;