import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function OutcomeData() {

    const {user, userTotalDonations} = useContext(UserContext)

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
            <h3>Donated: ${userTotalDonations}</h3>
            <div style={{margin: 'auto', width:'95%', height: 25}}>
                <Line data={outcomeData}/>
            </div>
        </div>
    );

}
export default OutcomeData;