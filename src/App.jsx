import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import CurrentMenu from './components/CurrentMenu.jsx';
import FutureMenu from './components/FutureMenu.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/current" component={CurrentMenu} />
                                <Route path="/next" component={FutureMenu}/>
                                <Route render={() => <h1>Page NOT Found</h1>} />
                            </Switch>
                        </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));