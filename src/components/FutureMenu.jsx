import React from 'react';

class FutureMenu extends React.Component {
    render() {
        let futureWeekData = this.props.futureWeek;
        let futureWeekMenu = futureWeekData.menu;

        console.log(futureWeekMenu['1'])




        return (
            <div>
              <h2>Order For Next Week</h2>
              <p>Large form to order the meals for next week</p>
              <p>Menus</p>
              <div className="row">
                <div className="col-md-12">

                </div>

              </div>

              {/* <p>Meals from <strong><span>{futureWeekData.time}</span></strong> </p> */}


            </div>
        )
    }
}

export default FutureMenu;
