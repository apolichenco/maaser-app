import React, {useContext, useState} from 'react';
import AccountInfo from './AccountInfo';
import { UserContext } from '../../context/user';
import './account.css'

function Account() {

    const {user} = useContext(UserContext)

    return (
        <div>
        {user ? <AccountInfo />  : null}
        </div>
    );

}
export default Account;