import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function OutcomeData() {

    const {user, userDonations} = useContext(UserContext)

    return (
        <div>
            <h3>Donated: ${user.total_donated}</h3>
            <h3>Left to give: ${user.maaser_to_give}</h3>
            {userDonations.map((donation) => {
                console.log(donation)
                return (
                    <div key={donation.id}>
                        <h5>${donation.amount}</h5>
                        <h6>Donated to {donation.charity.name}</h6>
                    </div>
                )
            })}
        </div>
    );

}
export default OutcomeData;