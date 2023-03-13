import React, {useContext, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"

function Header() {


    return (
        <div>
            <NavLink to="./">
                Home
            </NavLink>
            <NavLink to="./">
                Charities
            </NavLink>            
            <NavLink to="./">
                New Give/Income
            </NavLink>
            <NavLink to="./">
                Account
            </NavLink>
        </div>
    );

}
export default Header;