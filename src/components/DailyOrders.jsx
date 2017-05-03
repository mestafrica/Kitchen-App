import React from 'react';
import OrderSelection from './OrderSelection'
import HTTP from '../services/httpservices'
class DailyOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: {
        user_id: null,
        serving_date: '',
        breakfast_id: null,
        lunch_id: null,
        supper_id: null
      },
    submit: false
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {

      let date = this.props.date;
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let dayOfWeek = date.getDay();
      let serving_date = `${year}-${month + 1}-${day}`;

      let breakfast_id = this.refs.breakfast1.refs.breakfast1.value;
      let lunch_id = this.refs.lunch1.refs.lunch1.value;
      let supper_id = this.refs.supper1.refs.supper1.value;

      this.setState({
        orders: {
          user_id: null,
          serving_date,
          breakfast_id,
          lunch_id,
          supper_id
        }
      })


  }

  handleOnSubmit(e) {
      // e.preventDefault();
      // if (this.refs) {
      //     let date = this.props.date;
      //     let year = date.getFullYear();
      //     let month = date.getMonth();
      //     let day = date.getDate();
      //     let dayOfWeek = date.getDay();
      //     let serving_date = `${year}-${month + 1}-${day}`;
      //
      //     let lunch1 = this.refs.lunch1.refs.lunch1.value;
      //     let lunch2 = this.refs.lunch2.refs.lunch2.value;
      //
      //     let breakfast1 = '';
      //     let breakfast2 = '';
      //
      //     var supper1 = '';
      //     var supper2 = '';
      //
      //     let isSaturday = dayOfWeek === 6;
      //
      //     if (!isSaturday) {
      //         var breakfast1 = this.refs.breakfast1.refs.breakfast1.value;
      //         var breakfast2 = this.refs.breakfast2.refs.breakfast2.value;
      //
      //         var supper1 = this.refs.supper1.refs.supper1.value;
      //         var supper2 = this.refs.supper2.refs.supper2.value;
      //     }
      //
      //     this.setState({
      //         orders: {
      //             serving_date,
      //             breakfast_id: isSaturday ? [] : [breakfast1, breakfast2],
      //             lunch_id: [lunch1, lunch2],
      //             supper_id: isSaturday ? [] : [supper1, supper2]
      //         }
      //     }, () => {
      //         console.log(this.state);
      //         //todo: create a day menu
              let payload = this.state.orders;

              HTTP.post('/orders', payload)
                  .then( data => {
                      console.log(data);
                      this.setState({
                          submit: true
                      })
                  })
                  .catch((err) => console.error(err));
  }

  renderWeekDay() {
    console.log(this.state.orders)

    if (this.props.ordered) {

      let breakfast_option = this.props.ordered.breakfast_options;
      let lunch_option = this.props.ordered.lunch_options;
      let supper_option = this.props.ordered.supper_options;

      var bf = breakfast_option.map(item => {
        return item.meal
      })
      var lunch = lunch_option.map(item => {
        return item.meal
      })
      var supper = supper_option.map(item => {
        return item.meal
      })
    }


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
                          <label className="col-sm-2 col-md-2 control-label">Options: </label>
                          <OrderSelection handleOnChange={this.handleOnChange} ref="breakfast1" orders={bf} referName="breakfast1" lable={'Breakfast'}/>
                          <OrderSelection handleOnChange={this.handleOnChange} ref="lunch1" referName="lunch1" orders={lunch} lable={'Lunch'}/>
                          <OrderSelection handleOnChange={this.handleOnChange} ref="supper1" referName='supper1' orders={supper} lable={'Supper'}/>
                      </div>

                      <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                              <button onClick={this.handleOnSubmit} type="submit" className="btn btn-default" disabled={this.state.submit}>Submit</button>
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
                          <OrderSelection ref="lunch1" referName="lunch1" orders={this.props.orders} lable={'Lunch'}/>
                      </div>
                      <div className="form-group">
                          <label className="col-sm-2 col-md-2 control-label">Option 2: </label>
                          <OrderSelection ref="lunch2" referName="lunch2" orders={this.props.orders} lable={'Lunch'}/>
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

export default DailyOrders;
