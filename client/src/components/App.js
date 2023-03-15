import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';
import Header from './Header';
import Form from './Form';
import Account from './Account';
import HomePage from './HomePage';
import Charities from './Charities';
import { UserContext } from '../context/user';


function App() {

    const {setUser} = useContext(UserContext)

    return (
        <div>
            <Header></Header>
            <Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/charities">
                    <Charities/>
                </Route>
                <Route path="/forms">
                    <Form/>
                </Route>
                <Route path="/account">
                    <Account/>
                </Route>
            </Switch>
        </div>
    );

}
export default App;