import React, {useContext, useState, useEffect} from 'react';
import { UserContext } from '../../context/user';


function IncomeData() {

    const {user, userIncomes} = useContext(UserContext)

    return (
        <div>
            <h3>Total made: ${user.total_income}</h3>
            {userIncomes.map((income) => {
                return (
                    <div key={income.id}>
                        <h5>${income.amount}</h5>
                        <h6>{income.notes}</h6>
                    </div>
                )
            })}
        </div>
    );

}
export default IncomeData;