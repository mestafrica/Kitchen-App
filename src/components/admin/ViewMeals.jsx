import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import HTTP from '../../services/httpservices'

class ViewMeals extends Component {
  constructor() {
    super();
    this.state = {
      meals: []
    }
  }

  componentWillMount() {
  //Want to be able to get the data
  HTTP.get('/meals')
  .then(data => {
    console.log(data);
    this.setState({
      meals: data
    });
  })
}

  render() {
    let meals = this.state.meals;
    return(
      <div>
        <BootstrapTable data={meals} striped={true} hover={true}>
          <TableHeaderColumn dataField="id" dataSort={true} isKey={true} dataAlign="center">Nos</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
          <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default ViewMeals;
