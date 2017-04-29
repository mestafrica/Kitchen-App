import React from 'react';
import HTTP from '../services/httpservices'
import {Link} from 'react-router-dom';



class CreateOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentWillMount() {
    let startDate = '2017-05-01'
    let endDate = '2017-05-07'
    HTTP.get(`/menus/${startDate}/${endDate}`)
    .then(orders => {
      this.setState({
        orders
      })
    })
  }






  render() {
    let orders = this.state.orders;
    console.log(orders)
    return orders.length === 0 ? <div><h6> ...loading </h6></div>
                :
                  <div>

                  </div>


    // return(
    //   <div>
    //     <div>
    //       <p>Date</p>
    //       <div>
    //
    //       </div>
    //     </div>
    //   </div>
  }


}

export default CreateOrders;
