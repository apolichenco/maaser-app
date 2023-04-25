import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { UserContext } from '../../context/user';
import SingleCharity from './SingleCharity';

function Charities() {
    const [charitiesList, setCharitiesList] = useState([])
    const [errors, setErrors] = useState([])

    const {userFavCharities} = useContext(UserContext)

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


    return (
        <div>
            <Switch>
                <Route path="/all-charities">
                    {charitiesList.map((charity) => <SingleCharity key={charity.id} charityData={charity}/>)}
                </Route>
                <Route path="/my-saved-charities">
                    {userFavCharities.map((charity) => <SingleCharity key={charity.charity.id} charityData={charity.charity}/>)}
                </Route>
            </Switch>
        </div>
    );

}
export default Charities;