import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { UserContext } from '../../context/user';
import SingleCharity from './SingleCharity';
import {useHistory} from "react-router-dom"
import './charity.css'

function Charities() {
    const [charitiesList, setCharitiesList] = useState([])
    const [errors, setErrors] = useState([])

    const {userFavCharities} = useContext(UserContext)

    let history = useHistory();

    useEffect(() => {
        fetch("/charities")
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => setCharitiesList(data))
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }, [])

    function goToNewCharity() {
        history.push('../forms/new-charity')
    }

    return (
        <div>

            <Switch>            
                <Route path="/all-charities">
                    <div className='container' >
                        {charitiesList.map((charity) => <SingleCharity key={charity.id} charityData={charity}/>)}
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
                        {userFavCharities.map((charity) => <SingleCharity key={charity.charity.id} charityData={charity.charity}/>)}
                    </div>
                </Route>
            </Switch>
        </div>
    );

}
export default Charities;