import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function IncomeData() {

    const {userTotalIncome, userIncomes} = useContext(UserContext)

    // const [IncomeData, setIncomeData] = useState({
    //     labels: userIncomes.map((data) => data.charity.name),
    //     datasets: [{
    //         label: "You Gave",
    //         data: userIncomes.map((data) => data.amount)
    //     }]
    // })

    // console.log(userIncomes)

    return (
        <div>
            <h3>Total made: ${userTotalIncome}</h3>
            {userIncomes.map((income) => {
                return (
                    <div key={income.id}>
                        <h5>${income.amount}</h5>
                        <h6>{income.notes}</h6>
                    </div>
                )
            })}
            <div style={{width: 200}}>
                {/* <Bar chartData={incomeData}/> */}
            </div>
        </div>
    );

}
export default IncomeData;