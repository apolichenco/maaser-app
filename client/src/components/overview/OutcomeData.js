import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function OutcomeData() {

    const {user} = useContext(UserContext)


    return (
        <div>
            <h3>Donated: ${user.total_donated}</h3>
            <h3>Left to give: ${user.maaser_to_give}</h3>
        </div>
    );

}
export default OutcomeData;