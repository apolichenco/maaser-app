import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import './page.css';
import Header from './header/Header';
import Form from './forms/Form';
import Account from './account-page/Account';
import HomePage from './overview/HomePage';
import Charities from './charities/Charities'
import { UserContext } from '../context/user';


function App() {

    const {user} = useContext(UserContext)

    let  worksIfLoggedIn 

    if (user) {
        worksIfLoggedIn = <div className='main'>
        <HomePage/>
        <Charities/>
        <Switch>
            <Route path="/forms">
                <Form/>
            </Route>
        </Switch>
    </div>
    }
    else {
        worksIfLoggedIn = <div className='main'>
                <Switch>
                    <Route path="/general">
                        <h4 >You are not Logged in</h4>                
                    </Route>
                    <Route path="/income-data">
                        <h4 >You are not Logged in</h4>                
                    </Route>
                    <Route path="/donations-data">
                        <h4 >You are not Logged in</h4>                
                    </Route>
                    <Route path="/charities-data">
                        <h4 >You are not Logged in</h4>                
                    </Route>
                    <Route path="/all-charities">
                        <h4 >You are not Logged in</h4>                    
                    </Route>
                    <Route path="/my-saved-charities">
                        <h4 >You are not Logged in</h4>
                    </Route>
                    <Route path="/forms">
                        <h4 >You are not Logged in</h4>
                    </Route>
                </Switch>
            </div>
    }

    return (
        <div>
            <Header></Header>
            {worksIfLoggedIn}
            <div className='main'>
                <Switch>
                    <Route exact path="/">
                        <Account/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

}
export default App;