import React from 'react';
import HTTP from '../../services/httpservices';

import WeeklyMenu from './menu/WeeklyMenu.jsx';


class CreateMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            meals: [],
        };
    }

    componentDidMount() {
        console.log("did mount");

        let today = new Date();
        let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        console.log(nextweek);

        //todo: Load meals
        HTTP.get('/meals')
            .then(data => {
                console.log(data);
                this.setState({
                    meals:data
                });
            }).catch((err) => {
                console.error(err);
            })
    }

    render() {
        let meals = this.state.meals;
        let today = new Date();

        {/*if (meals && meals.length > 0) {
            return(
                <div>
                    <WeeklyMenu meals={meals}/>
                </div>
            )
        } else {
            return <h2>Loading Meals...</h2>
        }*/}

        return (
            <div>
                <div className="container">
                    <h3>Hello, today is {today.toDateString()}</h3>
                </div>
                {meals && meals.length > 0 ? <WeeklyMenu meals={meals}/> : <h2>Loading...</h2>}
            </div>
        )
    }
}

export default CreateMenu;