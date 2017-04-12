import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import School from './components/School.jsx';
import Contact from './components/Contact.jsx'

class App extends React.Component {
    render() {
        let renderContact  = (matchPrams) => {

            matchPrams.lala = 'aaa';


            return <Contact {...matchPrams}/>
        };

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/school" component={School} />
                                <Route path="/contact" render={(matchPrams) => renderContact(matchPrams) }/>
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