import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from './home/home.screen';
import SigninScreen from './signin/signin.screen';
import SignupScreen from './signup/signup.screen';
import ConnectedScreen from './connected/connected.screen';
import AllPeopleScreen from './allPeople/allPeople.screen';
import AddPeopleScreen from './addPeople/addPeople.screen';
import NotFoundScreen from './404/not-found.screen';

const PagesNavigation = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/signin" component={SigninScreen} />
                <Route exact path="/signup" component={SignupScreen} />
                <Route exact path="/allpeople" component={AllPeopleScreen} />
                <Route exact path="/addpeople" component={AddPeopleScreen} />
                <Route exact path="/connected" component={ConnectedScreen} />
                <Route exact path="/404" component={NotFoundScreen} />
                <Redirect to='/404' />
            </Switch>
        </Router>
    );
}

export default PagesNavigation;