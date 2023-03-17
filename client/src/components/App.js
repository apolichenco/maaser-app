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
            <div className='main'>
                <HomePage/>
                <Charities/>
                <Switch>
                    <Route path="/forms">
                        <Form/>
                    </Route>
                    <Route exact path="/">
                        <Account/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

}
export default App;