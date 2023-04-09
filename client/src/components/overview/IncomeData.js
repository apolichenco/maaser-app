import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function IncomeData() {

    const {user, userTotalIncome, userIncomes} = useContext(UserContext)

    const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [incomeData, setIncomeData] = useState({
        labels: monthsList.map((month) => month),
        datasets: [{
            label: "You Made $",
            data: user.month_total_incomes.map((data) => data)
        }]
    })


    return (
        <div>
            {/* <h3>Total made: ${userTotalIncome}</h3>
            {userIncomes.map((income) => {
                return (
                    <div key={income.id}>
                        <h5>${income.amount}</h5>
                        <h6>{income.notes}</h6>
                    </div>
                )
            })}*/}
            <div style={{width: 700}}> 
                <Bar data={incomeData}/>
            </div>
        </div>
    );

}
export default IncomeData;