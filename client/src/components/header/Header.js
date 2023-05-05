import React, {useState,} from 'react';
import {NavLink} from "react-router-dom"
import './header.css'
import Account from '../account-page/Account';

function Header() {

    const [charityDropdown, setCharityDropdown] = useState(false)
    const [homeDropdown, setHomeDropdown] = useState(false)
    const [accountDropdown, setAccountDropdown] = useState(false)

    function charityDropdownChange() {
        setCharityDropdown(!charityDropdown)
        setAccountDropdown(false)
    }

    function homeDropdownChange() {
        setHomeDropdown(!homeDropdown)
        setAccountDropdown(false)
    }

    function accountDropdownChange() {
        setAccountDropdown(!accountDropdown)
        setCharityDropdown(false)
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
                    <h4 className='header-button' onClick={homeDropdownChange}>Home</h4>
                {homeDropdown ? 
                    <div>
                        <NavLink to="../">
                            <h6 className='header-button'>Overview</h6>
                        </NavLink>
                        <NavLink to="../income-data">
                            <h6 className='header-button'>Income Data</h6>
                        </NavLink>
                        <NavLink to="../donations-data">
                            <h6 className='header-button'>Donations Data</h6>
                        </NavLink>
                        <NavLink to="../charities-data">
                            <h6 className='header-button'>Charity Data</h6>
                        </NavLink>
                    </div> : null
                }
                <h4 className='header-button' onClick={charityDropdownChange}>Charities</h4>
                {charityDropdown ? 
                    <div>
                        <NavLink to="../all-charities">
                        <h6 className='header-button'>All Charities</h6>
                        </NavLink>
                        <NavLink to="../my-saved-charities">
                            <h6 className='header-button'>My Charities</h6>
                        </NavLink>
                    </div> : null
                }
                <NavLink to="../forms">
                    <h4 className='header-button'>New Give/Income</h4> 
                </NavLink>

                <h4 className='header-button' onClick={accountDropdownChange}>Account</h4>
                {accountDropdown ? <Account/> : null}
            </div>
        </div>

    );

}
export default Header;