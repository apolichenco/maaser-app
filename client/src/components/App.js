import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';
import Header from './Header';
import Form from './Form';
import Account from './Account';
import HomePage from './HomePage';
import Charities from './Charities';


function App() {


    return (
        <div>
            <Header></Header>
            <Switch>
                <Route path="/home">
                    <HomePage></HomePage>
                </Route>
                <Route path="/charities">
                    <Charities></Charities>
                </Route>
                <Route path="/forms">
                    <Form></Form>
                </Route>
                <Route path="/account">
                    <Account></Account>
                </Route>
            </Switch>
        </div>
    );

}
export default App;