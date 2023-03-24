import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


function GeneralLook() {

    const {user} = useContext(UserContext)

    // const [incomeData, setIncomeData] = useState({
    //     labels: userIncomes.map((data) => data.charity.name),
    //     datasets: [{
    //         label: "You Gave",
    //         data: userIncomes.map((data) => data.amount)
    //     }]
    // })

    return (
        <div>
            <h3>Total made: ${user.total_income}</h3>
            <h3>Donated: ${user.total_donated}</h3>
            <h3>Left to give: ${user.maaser_to_give}</h3>
            <div style={{width: 200}}>
                {/* <Bar chartData={incomeData}/> */}
            </div>
        </div>
    );

}
export default GeneralLook;