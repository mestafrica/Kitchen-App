import React from 'react';

import DailyMenu from './DailyMenu.jsx';


class WeeklyMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        let meals = this.props.meals;

        //todo: this time/date functions need to be refactored
        let today = new Date();
        let dayOfWeek = today.getDay();
        let daysTillMonday = 7 - dayOfWeek + 1;

        let monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysTillMonday);
        let tuesday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (daysTillMonday + 1));
        let wednesday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (daysTillMonday + 2));
        let thursday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (daysTillMonday + 3));
        let friday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (daysTillMonday + 4));
        let saturday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (daysTillMonday + 5));

        return(
            <div className="container">
                <DailyMenu meals={meals} day={"Monday"} date={monday} />
                <DailyMenu meals={meals} day={"Tuesday"} date={tuesday}/>
                <DailyMenu meals={meals} day={"Wednesday"} date={wednesday}/>
                <DailyMenu meals={meals} day={"Thursday"} date={thursday}/>
                <DailyMenu meals={meals} day={"Friday"} date={friday}/>
                <DailyMenu meals={meals} day={"Saturday"} date={saturday} />
            </div>
        )
    }
}

export default WeeklyMenu;