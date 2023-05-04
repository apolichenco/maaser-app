import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import './form.css'


function DonationForm() {

    const {user, userFavCharities, fetchMe} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [newDonationAmount, setNewDonationAmount] = useState("")
    const [donationFavCharityId, setDonationFavCharityId] = useState("")
    const [donationMonth, setDonationMonth] = useState(monthsList[0])
    const [donationYear, setDonationYear] = useState(2023)

    useEffect(() => {
        const fetchData = async () => {
            setDonationFavCharityId(userFavCharities[0].id);
        }
        fetchData()
      }, [])

    function fetchForNewDonation(e) {
        e.preventDefault()
        const newDonation = {
            amount: newDonationAmount,
            user_id: user.id,
            fav_charity_id: donationFavCharityId,
            month: donationMonth,
            year: donationYear
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
                    fetchMe()
                })
            }
            else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }

    return (
        <div className='donation-form'>
            <form onSubmit={fetchForNewDonation}>
                <label className='big-label'>Enter your new donation:</label>
                    <br></br>
                <label>Amount:</label>
                $ <input type="text" id="price" value={newDonationAmount} onChange={(e) => setNewDonationAmount(e.target.value)}></input>
                    <br></br>
                <label>Donated to:</label>
                <select onChange={(e) => setDonationFavCharityId(e.target.value)}>
                    {userFavCharities.map((charity) => <option key={charity.id} value={charity.id}>{charity.charity.name}</option>)}
                </select>
                    <br></br>
                <label>Month:</label>
                <select onChange={(e) => setDonationMonth(e.target.value)}>
                    {monthsList.map((month, index) => <option key={index} value={month}>{month}</option>)}
                </select>
                    <br></br>
                <label>Year:</label>
                <input type="text" id="price" value={donationYear} onChange={(e) => setDonationYear(e.target.value)}></input>
                    <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default DonationForm