import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNav from './components/TopNav'
import {navList} from './constants'
import Container from './components/Container'
import Grid from './components/Grid'
import Footer from './components/Footer'
import ProfileCard from './components/ProfileCard'
import PointOutContent from './components/PointOutContent'
import BlogList from './components/BlogList'

import './app.css'
import logo from './logo.svg';

const OnDevelopingContent = () => <PointOutContent text="Under development"/>
const NotFoundContent = () => <PointOutContent text="404 Not found"/>

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <TopNav navList={navList}/>
                    <Container lrPadding={0} style={{marginTop: '30px'}}>
                        <Grid.Row>
                            <Grid.Col xs={12} sm={12} md={12} lg={8.5} xl={9}>
                                <Switch>
                                    <Route exact path="/" component={BlogList}></Route>
                                    <Route exact path="/blogs" component={BlogList}></Route>
                                    <Route path="/tags" component={OnDevelopingContent}/>
                                    <Route path="/categories" component={OnDevelopingContent}/>
                                    <Route component={NotFoundContent}/>
                                </Switch>
                            </Grid.Col>
                            <Grid.Col xs={0} sm={0} md={0} lg={3.5} xl={3}>
                                <ProfileCard/>
                            </Grid.Col>
                        </Grid.Row>
                    </Container>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
