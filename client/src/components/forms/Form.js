import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';

function Form() {

    const {user, userFavCharities, whenNewDonation, whenNewIncome} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [newIncomeAmount, setNewIncomeAmount] = useState("")
    const [newNotes, setNewNotes] = useState("")
    const [newRepeat, setNewRepeat] = useState(false)
    const [newMaaserExempt, setMaaserExempt] = useState(false)
    const [newDonationAmount, setNewDonationAmount] = useState("")
    const [donationFavCharityId, setDonationFavCharityId] = useState("")
    const [incomeMonth, setIncomeMonth] = useState(monthsList[0])
    const [donationMonth, setDonationMonth] = useState(monthsList[0])
    const [incomeYear, setIncomeYear] = useState(2023)
    const [donationYear, setDonationYear] = useState(2023)

    useEffect(() => {
        const fetchData = async () => {
            setDonationFavCharityId(userFavCharities[0].id);
            console.log(userFavCharities[0].id)
        }
        fetchData()
      }, [])

    function fetchForNewIncome(e) {
        e.preventDefault()
        const newIncome = {
            amount: newIncomeAmount,
            notes: newNotes,
            repeat: newRepeat,
            maaser_exempt: newMaaserExempt,
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
                    whenNewIncome(data)
                })
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
            user_id: user.id,
            fav_charity_id: donationFavCharityId,
            month: donationMonth,
            year: donationYear
        }
        console.log(newDonation)
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
                    whenNewDonation(data)
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
                <br></br>
                <label>Amount:</label>
                <br></br>
                $<input type="text" id="price" value={newIncomeAmount} onChange={(e) => setNewIncomeAmount(e.target.value)}></input>
                <br></br>
                <label>Notes:</label>
                <br></br>
                <input type="text" id="price" value={newNotes} onChange={(e) => setNewNotes(e.target.value)}></input>
                <br></br>
                <label>Month:</label>
                <br></br>
                <select onChange={(e) => setIncomeMonth(e.target.value)}>
                    {monthsList.map((month, index) => <option key={index} value={month}>{month}</option>)}
                </select>
                <br></br>
                <label>Year:</label>
                <br></br>
                <input type="text" id="price" value={incomeYear} onChange={(e) => setIncomeYear(e.target.value)}></input>
                <br></br>
                {/* <label>Repeat?</label>
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
                <br></br> */}
                <button type="submit">Submit</button>
            </form>
            <br></br>
            <br></br>
            <form onSubmit={fetchForNewDonation}>
                <label>Enter your new donation:</label>
                <br></br>
                <label>Amount:</label>
                <br></br>
                $<input type="text" id="price" value={newDonationAmount} onChange={(e) => setNewDonationAmount(e.target.value)}></input>
                <br></br>
                <label>Donated to:</label>
                <br></br>
                <select onChange={(e) => setDonationFavCharityId(e.target.value)}>
                    {userFavCharities.map((charity) => <option key={charity.id} value={charity.id}>{charity.charity.name}</option>)}
                </select>
                <br></br>
                <label>Month:</label>
                <br></br>
                <select onChange={(e) => setDonationMonth(e.target.value)}>
                    {monthsList.map((month, index) => <option key={index} value={month}>{month}</option>)}
                </select>
                <br></br>
                <label>Year:</label>
                <br></br>
                <input type="text" id="price" value={donationYear} onChange={(e) => setDonationYear(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}
export default Form;