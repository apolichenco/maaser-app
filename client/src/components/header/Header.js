import React, {useState,} from 'react';
import {NavLink} from "react-router-dom"
import './header.css'
import Account from '../account-page/Account';

function Header() {

    const [homeDropdown, setHomeDropdown] = useState(false)
    const [accountDropdown, setAccountDropdown] = useState(false)

    function homeDropdownChange() {
        setHomeDropdown(!homeDropdown)
        setAccountDropdown(false)
    }

    function accountDropdownChange() {
        setAccountDropdown(!accountDropdown)
        setHomeDropdown(false)
    }

    return (
        <div>
            <div className='header'>
                <h1 className='header-banner-font'>Charity Calculator 
                {/* <span className='calculator'>🖩</span> */}
                </h1>
            </div>
            <div className='header-box'>
                <u><h2>Menu</h2></u>
                    <h4 className='header-button' onClick={homeDropdownChange}>Charts</h4>
                {homeDropdown ? 
                    <div>
                        <NavLink to="../">
                            <h6 className='header-button'>Overview</h6>
                        </NavLink>
                        <NavLink to="../income-data">
                            <h6 className='header-button'>Income Chart</h6>
                        </NavLink>
                        <NavLink to="../donations-data">
                            <h6 className='header-button'>Donations Chart</h6>
                        </NavLink>
                        <NavLink to="../charities-data">
                            <h6 className='header-button'>Charity Chart</h6>
                        </NavLink>
                    </div> : null
                }
                <NavLink to="../my-saved-charities">
                    <h4 className='header-button'>My Charities</h4>
                </NavLink>
                <NavLink to="../forms">
                    <h4 className='header-button'>New Activity</h4> 
                </NavLink>
                <NavLink to="../about">
                <h4 className='header-button'>About</h4> 
                </NavLink>

                <h4 className='header-button' onClick={accountDropdownChange}>Account</h4>
                {accountDropdown ? <Account/> : null}
            </div>
        </div>

    );

}
export default Header;