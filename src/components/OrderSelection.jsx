import React from 'react';

class OrderSelection extends React.Component {
  constructor() {
    super();

  }

  render() {
    // console.log('REFS', this.refs)

    let options;
    if (this.props.orders) {
      let orders = this.props.orders


    options = orders.map((order, index) => {
      return <option key={order.id} value={order.id}>{order.name}</option>
    });

  }
  // console.log('REFERNAME', this.props.referName)
  if (this.refs.breakfast1) {
    // console.log('REFs', this.refs.breakfast1.value)
  }

    return (
      <div className="col-sm-3 col-md-3 ">
        <select ref={this.props.referName} className="form-control" name="breakfast" onChange={this.props.handleOnChange}>
          {options}
        </select>
      </div>
    )
  }

}

export default OrderSelection;
