import React from 'react';
import DailyOrders from './DailyOrders'

class WeeklyOrders extends React.Component {
  constructor() {
    super();

  }

  render() {
    let orders = this.props.orders;
    console.log('ONE', this.props.orders[1])
    // for (var i = 0; i < orders.length; i++) {
    //   let order = orders[i]
    //   console.log(order)
    //
    // }





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
    return (

      <div className="container">
        <DailyOrders user={this.props.user} ordered={orders[0]} day={"Monday"} date={monday} />
        <DailyOrders user={this.props.user} ordered={orders[1]} day={"Tuesday"} date={tuesday} />
        <DailyOrders user={this.props.user} ordered={orders[2]} day={"Wednesday"} date={wednesday} />
        <DailyOrders user={this.props.user} ordered={orders[3]} day={"Thursday"} date={thursday} />
        <DailyOrders user={this.props.user} ordered={orders[4]} day={"Friday"} date={friday} />
        <DailyOrders user={this.props.user} ordered={orders[5]} day={"Saturday"} date={saturday} />
      </div>
    )
  }
}

export default WeeklyOrders
