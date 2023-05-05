import React, {useContext, useState, useEffect} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import CharityForm from './CharityForm';
import IncomeForm from './IncomeForm';
import DonationForm from './DonationForm';
import './form.css'

function Form() {

    const [whichForm, setWhichForm] = useState("Income")

    let formShown 
        if (whichForm === "Income") {
            formShown = <IncomeForm/>
        }
        if (whichForm == "Donation") {
            formShown = <DonationForm />
        }
        if (whichForm === "Charity") {
            formShown = <CharityForm />
        }
 
    return (
        <div>
            <header className='form-header'>
                <NavLink to="../forms">
                    <button onClick={(e) => setWhichForm("Income")}>New Income</button>
                </NavLink>
                <NavLink to="../forms/new-donation">
                    <button onClick={(e) => setWhichForm("Donation")}>New Donation</button>
                </NavLink>
                <NavLink to="../forms/new-charity">
                    <button onClick={(e) => setWhichForm("Charity")}>New Charity</button>
                </NavLink>
            </header>
            <div className='forms'>

                <Switch>
                    <Route exact path="/forms">
                        <IncomeForm/>
                    </Route>
                    <Route path="/forms/new-donation">
                        <DonationForm/>
                    </Route>
                    <Route path="/forms/new-charity">
                        <CharityForm/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

}
export default Form;