import React from 'react';
import HTTP from '../../services/http'
import {Link} from 'react-router-dom';
import WeeklyOrders from './WeeklyOrders'



class CreateOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentWillMount() {
    let startDate = '2017-05-22'
    let endDate = '2017-05-27'
    HTTP.get(`/menus/${startDate}/${endDate}`)
    .then(orders => {
      this.setState({
        orders
      })
    })
  }






  render() {
    let orders = this.state.orders;
    let today = new Date();
    console.log(orders)

    return (
      <div>
        <div className="container">
          <h3>Hello, today is {today.toDateString()}</h3>
        </div>
        {orders && orders.length > 0 ? <WeeklyOrders user={this.props.user} orders={orders}/> : <h2>Loading...</h2>}
      </div>
    )

  }


}

export default CreateOrders;
