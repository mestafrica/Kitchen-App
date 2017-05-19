import React from 'react';
import HTTP from '../../services/http'


class AdminOrderSummary extends React.Component {
    constructor() {
      super();
      this.state = {
        orders: []
      }
    }

    componentWillMount() {
    //Want to be able to get the data
      /*HTTP.get('/orders')
      .then(data => {
        // console.log(data)
        this.setState({
          orders: data
        });
      })*/
    }

    render() {

        //let today = Time.getToday();
        //let monday = Time.getNextMonday(today);
        //let tuesday = Time.getNextTuesday(today);
        //let wednesday = Time.getNextWednesday(today);
        //let thursday = Time.getNextThursday(today);
        //let friday = Time.getNextFriday(today);

        return (
            <h2>admin summary</h2>
        )

    }
}

export default AdminOrderSummary;
