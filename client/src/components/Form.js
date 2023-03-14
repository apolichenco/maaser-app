import React, {useContext, useState} from 'react';

function Form() {

    const [newIncomeAmount, setNewIncomeAmount] = useState("")
    const [newNotes, setNewNotes] = useState("")
    const [newRepeat, setNewRepeat] = useState(false)
    const [newMaaserExempt, setMaaserExempt] = useState(false)
    const [newDonationAmount, setNewDonationAmount] = useState("")
    const [donationCharityId, setDonationCharityId] = useState("")


    function fetchForNewIncome(e) {
        e.preventDefault()
        const newIncome = {
            amount: newIncomeAmount,
            notes: newNotes,
            repeat: newRepeat,
            maaser_exempt: newMaaserExempt,
            user_id: "user.id"
        }
        fetch("/incomes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newIncome),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => console.log(data))
            }
            else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    function fetchForNewDonation(e) {
        e.preventDefault()
        const newDonation = {
            amount: newDonationAmount,
            user_id: "user.id",
            charity_id: donationCharityId
        }
        fetch("/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(newDonation),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((data) => {
                    console.log(data)
                })
            }
            else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }


    return (
        <div>
            <form onSubmit={fetchForNewIncome}>
                <label>Enter your new earning to start calculating your maaser:</label>
                <label>Amount:</label>
                <input type="text" id="price" value={newIncomeAmount} onChange={(e) => setNewIncomeAmount(e.target.value)}></input>
                <label>Notes:</label>
                <input type="text" id="price" value={newNotes} onChange={(e) => setNewNotes(e.target.value)}></input>
                <label>Repeat?</label>
                <input type="text" id="price" value={newRepeat} onChange={(e) => setNewRepeat(e.target.value)}></input>
                <label>Maaser Exempt?</label>
                <input type="text" id="price" value={newMaaserExempt} onChange={(e) => setMaaserExempt(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
    {/* <div>
        <form onSubmit={addANewListing}>
            <label>Choose an earing here:</label>
            <select onChange={(e) => setNewListingEaringId(e.target.value)}>
                {earings.map((earing) => <option key={earing.id} value={earing.id}>{earing.color} and {earing.shape}</option>)}
            </select>
            <h5>Can't find the earing you're looking for? Click <button onClick={goToNewEaring}>here</button> to create a new one!</h5>
            <label>Price:</label>
            <input type="text" id="price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    </div> */}
        </div>
    );

}
export default Form;