import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import './page.css';
import Header from './header/Header';
import Form from './forms/Form';
import SignIn from './account-page/SignIn';
import HomePage from './overview/HomePage';
import Charities from './charities/Charities'
import { UserContext } from '../context/user';


function App() {

    const {user} = useContext(UserContext)

    return (
        <div>
            <Header></Header>
            <div className='main'>
                {user ? <div className='main'>
                    <HomePage/>
                    <Charities/>
                    <Switch>
                        <Route path="/forms">
                            <Form/>
                        </Route>
                    </Switch>
                    </div> : <SignIn/>
                }
            </div>
        </div>
    );

}
export default App;