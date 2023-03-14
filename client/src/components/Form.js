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
        console.log(newIncome)
        // fetch("/incomes", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json", 
        //     },
        //     body: JSON.stringify(newIncome),
        // })
        // .then((r) => {
        //     if (r.ok) {
        //         r.json().then((data) => console.log(data))
        //     }
        //     else {
        //         r.json().then((err) => console.log(err))
        //     }
        // })
    }

    function fetchForNewDonation(e) {
        e.preventDefault()
        const newDonation = {
            amount: newDonationAmount,
            user_id: "user.id",
            charity_id: donationCharityId
        }
        console.log(newDonation)
        // fetch("/donations", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json", 
        //     },
        //     body: JSON.stringify(newDonation),
        // })
        // .then((r) => {
        //     if (r.ok) {
        //         r.json()
        //         .then((data) => {
        //             console.log(data)
        //         })
        //     }
        //     else {
        //         r.json().then((err) => console.log(err.errors))
        //     }
        // })
    }


    return (
        <div>
            <form onSubmit={fetchForNewIncome}>
                <label>Enter your new earning to start calculating your maaser:</label>
                <br></br>
                <label>Amount:</label>
                <br></br>
                <input type="text" id="price" value={newIncomeAmount} onChange={(e) => setNewIncomeAmount(e.target.value)}></input>
                <br></br>
                <label>Notes:</label>
                <br></br>
                <input type="text" id="price" value={newNotes} onChange={(e) => setNewNotes(e.target.value)}></input>
                <br></br>
                <label>Repeat?</label>
                <br></br>
                <input type="radio" id="price" name="repeat" value="true" onChange={(e) => setNewRepeat(e.target.value)}></input>
                <label>True</label>
                <input type="radio" id="price" name="repeat" value="false"onChange={(e) => setNewRepeat(e.target.value)}></input>
                <label>False</label>
                <br></br>
                <label>Maaser Exempt?</label>
                <br></br>
                <input type="radio" id="maaser_exempt" name="maaser_exempt" value="true" onChange={(e) => setMaaserExempt(e.target.value)}></input>
                <label>True</label>
                <input type="radio" id="maaser_exempt" name="maaser_exempt" value="false" onChange={(e) => setMaaserExempt(e.target.value)}></input>
                <label>False</label>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <br></br>
            <br></br>
            <form onSubmit={fetchForNewDonation}>
                <label>Enter your new donation:</label>
                <br></br>
                <label>Amount:</label>
                <br></br>
                <input type="text" id="price" value={newDonationAmount} onChange={(e) => setNewDonationAmount(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}
export default Form;