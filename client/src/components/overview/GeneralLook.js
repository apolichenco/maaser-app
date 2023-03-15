import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function GeneralLook() {

    const {user} = useContext(UserContext)



    return (
        <div>
            <h3>Total made: ${user.total_income}</h3>
            <h3>Donated: ${user.total_donated}</h3>
            <h3>Left to give: ${user.maaser_to_give}</h3>
        </div>
    );

}
export default GeneralLook;