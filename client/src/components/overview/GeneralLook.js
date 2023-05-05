import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


function GeneralLook() {

    const {user, userTotalIncome, userTotalDonations, userTotalMaaserGive} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [allData, setaAllData] = useState({
        labels: monthsList.map((month) => month),
        datasets: [{
            label: "You Made",
            data: user.month_total_incomes.map((data) => data)
        },
        {
            label: "You Gave",
            data: user.month_total_donations.map((data) => data)
        }]
    })

    const options = {
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        },
        maintainAspectRatio: false
    };

    return (
        <div>
            <div className='three-summary'>
                <h3>Total made: {userTotalIncome}</h3>
                <h3> Donated: {userTotalDonations}</h3>
                <h3>Left to give: {userTotalMaaserGive}</h3>
            </div>
            <div >
                <Bar data={allData} options={options} height={'470'}/>
            </div>
        </div>
    );

}
export default GeneralLook;