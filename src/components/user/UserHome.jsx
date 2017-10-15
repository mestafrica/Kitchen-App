import React from 'react';
import {NavLink} from 'react-router-dom';
import Time from '../../services/time.js';
import HTTP from '../../services/http.js'

class UserHome extends React.Component {

    constructor() {
        super();
        this.state = {
          orders: []
        }
      }
     
      componentWillMount() {
      HTTP.get('/orders')
      .then(data => {
        this.setState({
          orders: data
        });
      })
    }

    renderMenu(){
        return this.state.orders.map(order => {
            if((new Date(order.serving_date).toDateString() == new Date().toDateString()) && (this.props.user.email === order.user.email) ){
                return (
                    <div key={order.id} className="lead text-center">
                        <p>Here is your order for today:</p>
                        <p>Breakfast: <strong>{order.breakfast.name}</strong></p>
                        <p>Lunch: <strong>{order.lunch.name}</strong></p>
                        <p>Dinner: <strong>{order.lunch.name}</strong></p>
                    </div>
                )
            }
            
        })
    }
    render() {
        let user = this.props.user;
        return (
            <div className="jumbotron">
                <p className="lead text-center" >{user? `Hi, ${user.displayName}` : ''},  today is {Time.getToday().toDateString()}</p>
                {this.renderMenu()}
                <div>
                    <NavLink to='/current'>
                        <p className="text-center">
                            <button type="button" className="btn btn-lg btn-success">Order For This Week</button>
                        </p>
                    </NavLink>
                    <NavLink to='/createorders'>
                        <p className="text-center">
                            <button type="button" className="btn btn-lg btn-success">Order For Next Week</button>
                        </p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default UserHome;
