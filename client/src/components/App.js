import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import './page.css';
import Header from './header/Header';
import Form from './forms/Form';
import SignIn from './account-page/SignIn';
import HomePage from './charts/HomePage';
import Charities from './charities/Charities'
import About from '../about/About';
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
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                    
                    </div> : <SignIn/>
                }
            </div>
        </div>
    );

}
export default App;