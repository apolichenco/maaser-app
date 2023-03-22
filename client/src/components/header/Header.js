import React, {useContext, useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"

function Header() {

    const [charityDropdown, setCharityDropdown] = useState(false)
    const [homeDropdown, setHomeDropdown] = useState(false)


    function charityDropdownChange() {
        setCharityDropdown(!charityDropdown)
    }

    function homeDropdownChange() {
        setHomeDropdown(!homeDropdown)
    }

    return (
        <div className='header-box'>
            <h2>Menu</h2>
            <NavLink to="../general">
                <h4 className='header-button' onClick={homeDropdownChange}>Home</h4>
            </NavLink>
            {homeDropdown ? 
                <div>
                    {/* <NavLink to="../general"> */}
                        {/* <h6 className='header-button'>General</h6> */}
                    {/* </NavLink> */}
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
            <NavLink to="../">
                <h4 className='header-button'>Account</h4>   
            </NavLink>
        </div>
    );

}
export default Header;