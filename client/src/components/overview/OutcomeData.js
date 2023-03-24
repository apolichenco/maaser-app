import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function OutcomeData() {

    const {userTotalDonations, userTotalMaaserGive, userDonations} = useContext(UserContext)

    const [outcomeData, setOutcomeData] = useState({
        labels: userDonations.map((data) => data.charity.name),
        datasets: [{
            label: "You Gave",
            data: userDonations.map((data) => data.amount)
        }]
    })

    return (
        <div>
            <h3>Donated: ${userTotalDonations}</h3>
            <h3>Left to give: ${userTotalMaaserGive}</h3>
            {/* {userDonations.map((donation) => {
                console.log(donation)
                return (
                    <div key={donation.id}>
                        <h5>${donation.amount}</h5>
                        <h6>Donated to {donation.charity.name}</h6>
                    </div>
                )
            })} */}
            <div style={{width: 700}}>
                <Bar data={outcomeData}/>
            </div>
        </div>
    );

}
export default OutcomeData;