import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function CharityData() {
    
    const {userTotalDonations, userTotalMaaserGive, userFavCharities} = useContext(UserContext)

    const [outcomeData, setOutcomeData] = useState({
        options: {
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) {
                            return '$' + value;
                        }
                    }
                }
            }
        },
        labels: userFavCharities.map((data) => 
            data.charity.name
        ),
        datasets: [{
            label: "You Gave",
            data: userFavCharities.map((data) => data.total_gave_to_this_charity)
        }]
    })

    return (
        <div>
            <h3 className='summary'>Donated: {userTotalDonations} Left to give: {userTotalMaaserGive}</h3>
            <div>
                <Pie data={outcomeData} options={{maintainAspectRatio: false}} height={'470'}/>
            </div>
        </div>
    );

}

export default CharityData;