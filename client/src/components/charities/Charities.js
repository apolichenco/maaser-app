import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { UserContext } from '../../context/user';
import { CharityContext } from '../../context/charities';
import SingleCharity from './SingleCharity';
import {useHistory} from "react-router-dom"
import './charity.css'

function Charities() {

    const {userFavCharities} = useContext(UserContext)
    const {charitiesList, charityErrors, setCharityErrors} = useContext(CharityContext)

    let history = useHistory();

    function removedCharity(error) {
        setCharityErrors(error)
        setTimeout(function () {
            setCharityErrors([]);
        }, 5000);
    }

    function goToNewCharity() {
        history.push('../forms/new-charity')
    }

    let allFavCharities

    if (userFavCharities) {
        allFavCharities = userFavCharities.map((charity) => <SingleCharity key={charity.charity.id} charityData={charity.charity} setErrors={removedCharity}/>)
    }

    return (
        <div>

            <Switch>            
                <Route path="/all-charities">
                    <div className='container' >
                        {charitiesList.map((charity) => <SingleCharity key={charity.id} charityData={charity} setErrors={removedCharity}/>)}
                    </div>
                </Route>
                <Route path="/my-saved-charities">
                    <div className='charity-header'>
                        <NavLink to="../all-charities">
                            <button className='charity-header-buttons'>Add new charities from our list</button>
                        </NavLink>
                    <button className='charity-header-buttons' onClick={goToNewCharity}>Add your own charity</button>
                    </div>
                    <div className='container'>
                        {allFavCharities}
                    </div>
                </Route>
            </Switch>
            {charityErrors.length > 0 ?  <div className='error-message'><h5>{charityErrors}</h5></div> : null }  
        </div>
    );

}
export default Charities;