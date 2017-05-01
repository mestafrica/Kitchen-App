import React from 'react';
import HTTP from '../services/httpservices'


class OrderSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentWillMount() {
  //Want to be able to get the data
  HTTP.get('/orders')
  .then(data => {
    // console.log(data)
    this.setState({
      orders: data
    });
  })
}
    render() {

      let orderStyles = {
        containerStyle: {
          width: '50%',
          margin: '0 auto'
        },
        mealsStyle: {

        }
      }

      let orders = this.state.orders
      let orderOne = orders[0]
      //var ordered = '...loading';
      //var users = 'user'
      if (orders && orderOne) {
        let ordered = orderOne;
        let {user, breakfast, lunch, supper} = orderOne;

        return (
            <div style={orderStyles.containerStyle}>
              <h4>Order Summary</h4>
              <div className="col-md-12">
                <div>
                  <p>this is your order for {ordered.serving_date}</p>
                  <p><strong>Breakfast</strong> {breakfast.name}</p>
                  <p><strong>Lunch</strong> {lunch.name}</p>
                  <p><strong>Supper</strong> {supper.name}</p>
                </div>
              </div>
            </div>
        );
      } else {
        return <div style={orderStyles.containerStyle}> <h2>...Loading</h2> </div>
      }

      console.log(ordered)



    }
}

export default OrderSummary;
