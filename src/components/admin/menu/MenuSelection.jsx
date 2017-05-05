import React from 'react';

class MenuSelection extends React.Component {
    constructor() {
        super();

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {

    }

    render() {
        let meals = this.props.meals;
        let options = meals.map((meal) => {
            return <option key={meal.id} value={meal.id}>{meal.id} - {meal.name}</option>
        });

        return (
            <div className="col-sm-3 col-md-3 ">
                <select ref={this.props.referName} className="form-control" name="breakfast" onChange={this.handleOnChange}>
                    {options}
                </select>
            </div>
        );
    }
}

export default MenuSelection;
