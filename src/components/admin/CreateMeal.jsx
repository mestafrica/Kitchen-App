import React from 'react';
import HTTP from '../../services/httpservices'



class CreateMeal extends React.Component {

  constructor() {
    super();
      this.state = {
        meals:
          {
            name: '',
            description: ''
          }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.refs.name.value ='';
    this.refs.description.value ='';
    let payload = this.state.meals;
      HTTP.post('/meals', payload)
    .then(data => {
      console.log(data)
      if (data.code === 200){
        console.log(success)
      }
    })

  }

  handleChange() {
    this.setState({
      meals: {
        name: this.refs.name.value,
        description: this.refs.description.value
      }
    })
  }


  render() {
    return (
      <div style={{width: '50%', margin: '0 auto'}}>
        <h2>Create Meal</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Name of Meal</label>
            <input value={this.state.meals.name} onChange={this.handleChange.bind(this)} ref="name" type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea rows="3" value={this.state.meals.description} onChange={this.handleChange.bind(this)} ref="description" type="text" className="form-control"/>
          </div>
            <button type="submit" className="btn btn-primary">Add New Meal</button>
        </form>
        {this.state.meals.name}
        {this.state.meals.description}
      </div>
    );
  }
}

export default CreateMeal;
