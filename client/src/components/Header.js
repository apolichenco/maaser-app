import React, {useContext, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"

function Header() {


    return (
        <div>
            <NavLink to="../home">
                Home
            </NavLink>
            <NavLink to="../charities">
                Charities
            </NavLink>            
            <NavLink to="../forms">
                New Give/Income
            </NavLink>
            <NavLink to="../account">
                Account
            </NavLink>
        </div>
    );

}
export default Header;