import React from 'react';
import HTTP from '../../../services/http.js';
import Time from '../../../services/time.js';


//todo: need improve the UI/UX experiences, after submit
class DailySummary extends React.Component {
    constructor() {
        super();

        this.state = {
            lunch:[],
            supper:[]
        };

    }

    componentDidMount() {
        let servingTime = Time.getServingDate(this.props.date);
        let servingTimeFake = '2017-5-14';
        let lunchUrl = `/order_summary/lunch/${servingTimeFake}`;
        let supperUrl = `/order_summary/supper/${servingTimeFake}`;

        HTTP.get(lunchUrl)
            .then(data => {
                let lunch = data;

                HTTP.get(supperUrl)
                    .then(data => {
                        let supper = data;

                        this.setState({
                            lunch,
                            supper
                        });

                    }).catch(err => {
                        console.log(err);
                    });

            }).catch(err => {
                console.error(err);
            })
    }

    render() {
        let {lunch, supper} = this.state;

        {/* this need to refactor*/}
        if (lunch.length > 1 && supper.length > 1) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.date.toDateString()}
                    </div>
                    <div className="panel-body">
                        <table className="table table-hover table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">Lunch</th>
                                    <td>Option 1 {lunch[0].meal_name} : {lunch[0].order_count}</td>
                                    <td>Option 2 {lunch[1].meal_name} : {lunch[1].order_count}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Supper</th>
                                    <td>Option 1 {supper[0].meal_name} : {supper[0].order_count}</td>
                                    <td>Option 2 {supper[1].meal_name} : {supper[1].order_count}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.date.toDateString()}
                    </div>
                    <div className="panel-body">
                        No Available
                    </div>
                </div>
            );
        }



    }
}

export default DailySummary;