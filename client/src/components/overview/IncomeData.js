import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function IncomeData() {

    const {user, userTotalIncome} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [incomeData, setIncomeData] = useState({
        labels: monthsList.map((month) => month),
        datasets: [{
            label: "You Made",
            data: user.month_total_incomes.map((data) => data)
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
            <h3 className='summary'>Total made: {userTotalIncome}</h3>
            <div> 
                <Line data={incomeData} options={options} height={'470'}/>
            </div>
        </div>
    );

}
export default IncomeData;