import React from 'react';
import HTTP from '../../../services/httpservices.js';
import Time from '../../../services/time.js';

import MenuSelection from './MenuSelection.jsx'


//todo: need improve the UI/UX experiences, after submit
class DailyMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            menu: {
                serving_date: '',
                breakfast_choices: [],
                lunch_choices: [],
                supper_choices: []
            },
            submit: false
        };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.renderWeekDay = this.renderWeekDay.bind(this);
        this.renderSaturday = this.renderSaturday.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        if (this.refs) {
            let date = this.props.date;
            let serving_date = Time.getServingDate(date);

            let lunch1 = this.refs.lunch1.refs.lunch1.value;
            let lunch2 = this.refs.lunch2.refs.lunch2.value;

            let breakfast1 = '';
            let breakfast2 = '';

            let supper1 = '';
            let supper2 = '';

            let isSaturday = Time.isSaturday(date);

            if (!isSaturday) {
                breakfast1 = this.refs.breakfast1.refs.breakfast1.value;
                breakfast2 = this.refs.breakfast2.refs.breakfast2.value;

                supper1 = this.refs.supper1.refs.supper1.value;
                supper2 = this.refs.supper2.refs.supper2.value;
            }

            this.setState({
                menu: {
                    serving_date,
                    breakfast_choices: isSaturday ? [] : [breakfast1, breakfast2],
                    lunch_choices: [lunch1, lunch2],
                    supper_choices: isSaturday ? [] : [supper1, supper2]
                }
            }, () => {
                //todo: create a day menu
                let payload = this.state.menu;

                HTTP.post('/menus', payload)
                    .then( data => {
                        console.log(data);
                        this.setState({
                            submit: true
                        })
                    })
                    .catch((err) => console.error(err));
            });
        } else {
            console.warn("Warn: Cannot Create Menu");
        }
    }

    renderWeekDay() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.date.toDateString()}
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <h4 className="col-sm-offset-2 col-md-offset-2 col-sm-3 col-md-3">Breakfast</h4>
                            <h4 className="col-sm-3 col-md-3">Lunch</h4>
                            <h4 className="col-sm-3 col-md-3">Dinner</h4>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 col-md-2 control-label">Option 1: </label>
                            <MenuSelection ref="breakfast1" referName="breakfast1" meals={this.props.meals} lable={'Breakfast'}/>
                            <MenuSelection ref="lunch1" referName="lunch1" meals={this.props.meals} lable={'Lunch'}/>
                            <MenuSelection ref="supper1" referName={'supper1'} meals={this.props.meals} lable={'Supper'}/>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 col-md-2 control-label">Option 2: </label>
                            <MenuSelection ref="breakfast2" referName="breakfast2" meals={this.props.meals} lable={'Breakfast'}/>
                            <MenuSelection ref="lunch2" referName="lunch2" meals={this.props.meals} lable={'Lunch'}/>
                            <MenuSelection ref="supper2" referName="supper2" meals={this.props.meals} lable={'Supper'}/>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default" disabled={this.state.submit}>Submit</button>
                                {this.state.submit? <h3>This has been submitted</h3>: ''}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    renderSaturday() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.date.toDateString()}
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <h4 className="col-sm-offset-2 col-md-offset-2 col-sm-3 col-md-3">Lunch</h4>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2 col-md-2 control-label">Option 1: </label>
                            <MenuSelection ref="lunch1" referName="lunch1" meals={this.props.meals} lable={'Lunch'}/>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 col-md-2 control-label">Option 2: </label>
                            <MenuSelection ref="lunch2" referName="lunch2" meals={this.props.meals} lable={'Lunch'}/>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default" disabled={this.state.submit}>Submit</button>
                                {this.state.submit? <h3>This has been submitted</h3>: ''}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.day.toLowerCase() !== 'saturday') {
            return this.renderWeekDay();
        } else {
            return this.renderSaturday();
        }
    }
}

export default DailyMenu;