import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import './form.css'

function IncomeForm() {

    const {user, fetchMe} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [newIncomeAmount, setNewIncomeAmount] = useState("")
    const [incomeMonth, setIncomeMonth] = useState(monthsList[0])
    const [incomeYear, setIncomeYear] = useState(2023)
    const [errors, setErrors] = useState([])

    let allErrors = []
    if (errors) {
        allErrors = errors.map((err, index) => {
            return (<h5 key={index}>{err}</h5>)
        })
    }


    function fetchForNewIncome(e) {
        e.preventDefault()
        const newIncome = {
            amount: newIncomeAmount,
            user_id: user.id,
            month: incomeMonth,
            year: incomeMonth
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
                r.json().then((data) => {
                    fetchMe()
                    setErrors([])
                })
            }
            else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className='income-form'>
            <form onSubmit={fetchForNewIncome}>
                <label className='big-label'>Enter your new earning:</label>
                    <br></br>
                <label>Amount:</label>
                $ <input type="text" id="price" value={newIncomeAmount} onChange={(e) => setNewIncomeAmount(e.target.value)}></input>
                    <br></br>
                <label>Month:</label>
                <select onChange={(e) => setIncomeMonth(e.target.value)}>
                    {monthsList.map((month, index) => <option key={index} value={month}>{month}</option>)}
                </select>
                    <br></br>
                <label>Year:</label>
                <input type="text" id="price" value={incomeYear} onChange={(e) => setIncomeYear(e.target.value)}></input>
                    <br></br>
                <button type="submit">Submit</button>
            </form>
            {errors.length > 0 ?  <div className='error-message'>{allErrors}</div> : null }  
        </div>
    )

}

export default IncomeForm                





// const [newRepeat, setNewRepeat] = useState(false)
// const [newMaaserExempt, setMaaserExempt] = useState(false)
// const [newNotes, setNewNotes] = useState("")


// repeat: newRepeat,
// maaser_exempt: newMaaserExempt,
// notes: newNotes,

// <label>Notes:</label>
//     <input type="text" id="price" value={newNotes} onChange={(e) => setNewNotes(e.target.value)}></input>
//     <br></br>
/* <label>Repeat?</label>
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
        <br></br> */