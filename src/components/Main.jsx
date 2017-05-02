import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

//todo: components for user, this need to be refactor in the future
import UserHome from './UserHome.jsx';
import CurrentMenu from './CurrentMenu.jsx';
import FutureMenu from './FutureMenu.jsx';

//todo: Components for kitchen staff, this need to be refactor
import AdminHome from './admin/AdminHome.jsx';
import CreateMeal from './admin/CreateMeal.jsx';
import CreateMenu from './admin/CreateMenu.jsx';
import UserOrderSummary from './UserOrderSummary.jsx';
import ViewMeals from './admin/ViewMeals.jsx';

//CSS library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            version: 1,
        };

        this.renderUserHome = this.renderUserHome.bind(this);
        this.renderCurrentMenu = this.renderCurrentMenu.bind(this);
        this.renderFutureMenu = this.renderFutureMenu.bind(this);
        this.renderUserOrderSummary = this.renderUserOrderSummary.bind(this);
    }

    componentWillMount() {

    }

    renderUserHome(matchParams) {
        return <UserHome {...matchParams} user={this.props.user} />
    }

    renderCurrentMenu(matchParams) {
        return <CurrentMenu {...matchParams}  />
    }

    renderFutureMenu(matchParams) {
        return <FutureMenu {...matchParams}  />
    }

    renderUserOrderSummary(matchParams) {
        return <UserOrderSummary {...matchParams} user={this.props.user}/>
    }


    render() {
        let {user} = this.props;

        return (
            <HashRouter>
                    <div className="container">
                        <Switch>
                            {/* todo: default router is set for user home, we need refactor this later */}
                            <Route exact path="/" render={this.renderUserHome} />

                            {/* Route for users  */}
                            <Route exact path="/user" render={this.renderUserHome} />
                            <Route path="/current" render={this.renderCurrentMenu} />
                            <Route path="/next" render={this.renderFutureMenu}/>
                            <Route exact path="/usersummary" render={this.renderUserOrderSummary}/>

                            {/* Route for admin  */}
                            <Route exact path="/admin" component={AdminHome}/>
                            <Route exact path="/createmeal" component={CreateMeal}/>
                            <Route exact path="/createmenu" component={CreateMenu}/>
                            <Route exact path="/viewmeals" component={ViewMeals}/>

                            {/* error handling */}
                            <Route render={() => <h1>Page NOT Found</h1>} />
                        </Switch>
                    </div>
            </HashRouter>
        );
    }
}

export default Main;
