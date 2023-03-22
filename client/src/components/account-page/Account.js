import React, {useContext, useState} from 'react';
import SignIn from './SignIn';
import AccountInfo from './AccountInfo';
import { UserContext } from '../../context/user';

function Account() {

    const {user} = useContext(UserContext)



    return (
        <div>
        {user ? <AccountInfo />  : <SignIn />}
        </div>
    );

}
export default Account;