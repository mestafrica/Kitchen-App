import React from 'react';

import DailyMenu from './DailyMenu.jsx';


class WeeklyMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        let meals = this.props.meals;
        let today = new Date();

        let tmr


        return(
            <div className="container">
                <DailyMenu meals={meals} day={"Monday"} date={1} />
                <DailyMenu meals={meals} day={"Tuesday"} date={2}/>
                <DailyMenu meals={meals} day={"Wednesday"} date={3}/>
                <DailyMenu meals={meals} day={"Thursday"} date={4}/>
                <DailyMenu meals={meals} day={"Friday"} date={5}/>
                <DailyMenu meals={meals} day={"Saturday"} date={6} />
            </div>
        )
    }
}

export default WeeklyMenu;