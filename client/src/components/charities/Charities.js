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

    const [filterCharitiesList, setFilterCharitiesList] = useState(charitiesList)

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

    let filteredList

    useEffect(() => {
        setTimeout(function () {
            setFilterCharitiesList(charitiesList);
        }, 5);
    }, [])



    function searchCharities(searchedTerm) {
        if (searchedTerm) {
            filteredList = charitiesList.filter((charity) => {
                let charityName = charity.name
                return charityName.toLowerCase().includes(searchedTerm.toLowerCase())
            })
            setFilterCharitiesList(filteredList)
        }
        else {
            setFilterCharitiesList(charitiesList)
        }
    }


    return (
        <div>

            <Switch>            
                <Route path="/all-charities">
                    <div className='search-bar'>
                        <label htmlFor='search'>Search Charities</label>
                        <input type='text' id='search' 
                        placeholder='Start searching through the charities'
                        onChange={(e) => searchCharities(e.target.value)}/>
                    </div>
                    <div className='container' >
                        {filterCharitiesList.map((charity) => <SingleCharity key={charity.id} charityData={charity} setErrors={removedCharity}/>)}
                    </div>
                    {charityErrors.length > 0 ?  <div className='error-message'><h5>{charityErrors}</h5></div> : null }  
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
                    {charityErrors.length > 0 ?  <div className='error-message'><h5>{charityErrors}</h5></div> : null }  
                </Route>
            </Switch>
        </div>
    );

}
export default Charities;