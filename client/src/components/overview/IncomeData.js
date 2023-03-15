import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function IncomeData() {

    const {user} = useContext(UserContext)

    return (
        <div>
            <h3>Total made: ${user.total_income}</h3>
        </div>
    );

}
export default IncomeData;