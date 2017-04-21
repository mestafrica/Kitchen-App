import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import CurrentMenu from './components/CurrentMenu.jsx';
import FutureMenu from './components/FutureMenu.jsx';

//todo: mock data for front-end development, will remove this after we connect api
import currentWeek from './mock_data/currentWeek.json';
import futureWeek from './mock_data/futureWeek.json';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentWeek: {},
            futureWeek: {},
            version: 1
        };
    }

    componentWillMount() {
        console.log("component will Mount");

        {/* load data*/}
        let currentWeekData = currentWeek;
        let futureWeekData = futureWeek;

        this.setState({
            currentWeek: currentWeekData,
            futureWeek: futureWeekData,
            version: 2
        });
    }

    render() {

        let renderCurrentMenu = (matchParams) => {
            let newMatchParams = matchParams;

            newMatchParams.currentWeek = this.state.currentWeek;

            return (
                <CurrentMenu {...newMatchParams}/>
            );
        };

        let renderFutureMenu = (matchParams) => {
            let newMatchParams = matchParams;

            newMatchParams.futureWeek = this.state.futureWeek;

            return (
                <FutureMenu {...newMatchParams}/>
            );
        };

        return (
            <HashRouter>
                <div className="container">
                    <Header/>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/current" render={renderCurrentMenu} />
                                <Route path="/next" render={renderFutureMenu}/>
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
