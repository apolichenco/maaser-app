import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function OutcomeData() {

    const {user} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [outcomeData, setOutcomeData] = useState({
        labels: monthsList.map((month) => month),
        datasets: [{
            label: "You Gave $",
            data: user.month_total_donations.map((data) => data)
        }]
    })

    return (
        <div>
            {/* <h3>Donated: ${userTotalDonations}</h3>
            <h3>Left to give: ${userTotalMaaserGive}</h3>
            {userDonations.map((donation) => {
                const thisCharity = userFavCharities.find((fav_charity) => donation.fav_charity_id == fav_charity.id)
                return (
                    <div key={donation.id}>
                        <h5>${donation.amount}</h5>
                        <h6>Donated to {thisCharity.charity.name}</h6>
                    </div>
                )
            })} */}
            <div style={{width: 650}}>
                <Line data={outcomeData}/>
            </div>
        </div>
    );

}
export default OutcomeData;