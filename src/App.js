import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNav from './components/TopNav'
import {navList} from './constants'

import logo from './logo.svg';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <TopNav navList={navList}/>
                </div>
            </Router>
        );
    }
}

export default App;
