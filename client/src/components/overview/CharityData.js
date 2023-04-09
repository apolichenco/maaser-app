import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function CharityData() {
    
    const {userTotalDonations, userTotalMaaserGive, userFavCharities} = useContext(UserContext)

    const [outcomeData, setOutcomeData] = useState({
        labels: userFavCharities.map((data) => 
            data.charity.name
        ),
        datasets: [{
            label: "You Gave $",
            data: userFavCharities.map((data) => data.total_gave_to_this_charity)
        }]
    })


    return (
        <div>
            <h3>Donated: ${userTotalDonations}</h3>
            <h3>Left to give: ${userTotalMaaserGive}</h3>
            <div style={{margin: 'auto', width: 600}}>
                <Pie data={outcomeData}/>
            </div>
        </div>
    );

}

export default CharityData;