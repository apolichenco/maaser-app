import React, {useContext, useState, useEffect} from 'react';
import './form.css'
import CharityForm from './CharityForm';
import IncomeForm from './IncomeForm';
import DonationForm from './DonationForm';


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
            <header className='form-buttons'>
                <button onClick={(e) => setWhichForm("Income")}>New Income</button>
                <button onClick={(e) => setWhichForm("Donation")}>New Donation</button>
                <button onClick={(e) => setWhichForm("Charity")}>New Charity</button>
            </header>
            <div className='forms'>
                {formShown}
            </div>
        </div>
    );

}
export default Form;