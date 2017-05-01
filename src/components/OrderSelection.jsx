import React from 'react';

class OrderSelection extends React.Component {
  constructor() {
    super();

  }

  render() {
    console.log('PROPS', this.props)
    let options;
    if (this.props.orders) {
      let orders = this.props.orders;
      console.log('OG', orders)



    options = orders.map((order, index) => {
      return <option key={order.id} value={order.id}>{order.name}</option>
    });
    console.log('OP', options)
  }
    return (
      <div className="col-sm-3 col-md-3 ">
        <select ref={this.props.referName} className="form-control" name="breakfast" onChange={this.handleOnChange}>
          {options}
        </select>
      </div>
    )
  }

}

export default OrderSelection;
