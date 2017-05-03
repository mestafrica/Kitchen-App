import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

//todo: components for user, this need to be refactor in the future
import UserHome from './components/UserHome.jsx';
import CurrentMenu from './components/CurrentMenu.jsx';
import FutureMenu from './components/FutureMenu.jsx';

//todo: Components for kitchen staff, this need to be refactor
import AdminHome from './components/admin/AdminHome.jsx';
import CreateMeal from './components/CreateMeal.jsx';
import CreateOrders from './components/CreateOrders';
import CreateMenu from './components/admin/CreateMenu.jsx';

import OrderSummary from './components/OrderSummary.jsx';

import Meals from './components/Meals.jsx';

//helper
import {auth, googleAuthProvider, emailAuthProvider, usersRef, userRef} from './services/firebase';
import HTTP from './services/httpservices.js';

//todo: mock data for front-end development, will remove this after we connect api
import currentWeek from './mock_data/currentWeek.json';
import futureWeek from './mock_data/futureWeek.json';

//CSS library
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentWeek: {},
            futureWeek: {},
            version: 1,
            user: null
        };

        this.logout = this.logout.bind(this);
        this.renderUserHome = this.renderUserHome.bind(this);
        this.renderCurrentMenu = this.renderCurrentMenu.bind(this);
        this.renderFutureMenu = this.renderFutureMenu.bind(this);
    }

    componentWillMount() {
        {/* load data*/}
        let currentWeekData = currentWeek;
        let futureWeekData = futureWeek;

        let userRef = null;

        this.setState({
            currentWeek: currentWeekData,
            futureWeek: futureWeekData,
            version: 2
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
                userRef = usersRef.child(user.uid);

                userRef.once('value').then((snapshot) => {
                    if (snapshot.val()) {
                        console.log("load user from DB");

                        let userDB = snapshot.val();

                        this.setState({
                            user: userDB
                        });

                        return;
                    } else {
                        let nameArr = user.displayName.split(' ');
                        let first_name =  nameArr[0] || 'n/a';
                        let last_name = nameArr[1] || 'n/a';
                        let nationality  = "ghana";
                        let sex = "male";
                        let user_type = "eit";
                        let {displayName, email, uid, photoURL} = user;

                        let newUser = {
                            first_name,
                            last_name,
                            email,
                            nationality,
                            sex,
                            user_type,
                            displayName,
                            uid,
                            photoURL
                         };

                        let payload = {
                            user: newUser
                        };

                        console.log("create user");
                        HTTP.post('/users', payload)
                            .then((response) => {
                                newUser.id = response.id;

                                //save to firebase
                                userRef.set(newUser);

                                this.setState({
                                    user: newUser
                                });

                            }).catch((err) => {
                                console.error(err);
                            });
                    }
                });
            }
        });
    }

    logout() {
        console.log("set user to null");
        this.setState({
            user: null
        });
    }

    renderUserHome(matchParams) {
        return <UserHome {...matchParams} user={this.state.user}/>
    }

    renderCurrentMenu(matchParams) {
        return <CurrentMenu {...matchParams} currentWeek={this.state.currentWeek} />
    }

    renderFutureMenu(matchParams) {
        return <FutureMenu {...matchParams} futureWeek={this.state.futureWeek}/>
    }

    render() {
        let {user} = this.state;
        return (
            <HashRouter>
                <div className="container">
                    <Header user={user} logout={this.logout}/>

                    <div>
                        <Switch>

                            {/* todo: default router is set for user home, we need refactor this later */}
                            <Route exact path="/" render={this.renderUserHome} />

                            {/* Route for users  */}
                            <Route exact path="/user" render={this.renderUserHome} />
                            <Route path="/current" render={this.renderCurrentMenu} />
                            <Route path="/next" render={this.renderFutureMenu}/>

                            {/* Route for admin  */}
                            <Route exact path="/admin" component={AdminHome}/>
                            <Route exact path="/createmeal" component={CreateMeal}/>
                            <Route exact path="/createmenu" component={CreateMenu}/>
                            <Route exact path="/createorders" component={CreateOrders}/>
                            <Route exact path="/meals" component={Meals}/>
                            <Route exact path="/summary" component={OrderSummary}/>

                                {/* error handling */}
                            <Route render={() => <h1>Page NOT Found</h1>} />
                        </Switch>
                    </div>

                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
