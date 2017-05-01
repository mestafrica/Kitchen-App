import React from 'react';

class OrderSelection extends React.Component {
  constructor() {
    super();

  }

  render() {

    let options;
    if (this.props.orders) {


    options = orders.map((order, index) => {
      return <option key={order.id} value={order.id}>{order.name}</option>
    });

  }
  console.log(this.props.referName)
    return (
      <div className="col-sm-3 col-md-3 ">
        <select value={order.id} ref={this.props.referName} className="form-control" name="breakfast" onChange={this.handleOnChange}>
          {options}
        </select>
      </div>
    )
  }

}

export default OrderSelection;
