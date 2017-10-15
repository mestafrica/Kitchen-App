import React from 'react';
import axios from 'axios'
import HTTP from '../../services/http'

class CreateMeal extends React.Component {
  constructor() {
    super();
    this.state = {
      meal: {
          name: '',
          description: ''
      },
      errors: {},
      serverError: false
  }

  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
  }

  onChange({target}){
    this.setState({meal: {...this.state.meal, [target.name]: target.value}})
  }
 
  onSubmit(e){
      e.preventDefault()
      const errors = this.validate(this.state.meal)
      this.setState({errors})
      if(Object.keys(errors).length === 0){
        axios.post('/meals', this.state.meal)
          .then(() => this.props.history.push('/'))
          .catch(err =>  this.setState({serverError: true}))
      }
  }
 
  validate(data){
      const errors = {}
      if(!data.name) errors.name = "Please enter menu name"
      if(!data.description) errors.description = "Please enter menu description"
       
      return errors
  }
 

  render() {
    return (
      <div style={{width: '50%', margin: '0 auto'}}>
        {
          this.state.serverError && <div className="alert alert-danger fade in">
            <strong>Error!</strong> A problem has been occurred while submitting your data.
          </div>
        }
        <h2>Create Meal</h2>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of Meal</label>
            <input value={this.state.meal.name} name='name' onChange={this.onChange}  type="text" className="form-control"/>
            <span style={{color: "red"}}>{this.state.errors.name}</span>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea rows="3" value={this.state.meal.description} onChange={this.onChange} name='description'  type="text" className="form-control"/>
            <span style={{color: "red"}}>{this.state.errors.description}</span>
          </div>
            <button type="submit" className="btn btn-primary">Add New Meal</button>
        </form>
      </div>
    );
  }
}

export default CreateMeal;
