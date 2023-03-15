import React, {useContext, useState, useEffect} from 'react';
import CharityData from './overview/CharityData';
import GeneralLook from './overview/GeneralLook';
import IncomeData from './overview/IncomeData';
import OutcomeData from './overview/OutcomeData';
import { Route, Switch, NavLink } from "react-router-dom";

function HomePage() {


    return (
        <div>
            <NavLink to="../home/general">
                General
            </NavLink>
            <NavLink to="../home/income-data">
                Income Data
            </NavLink>
            <NavLink to="../home/donations-data">
                Donations Data
            </NavLink>
            <NavLink to="../home/charities-data">
                Charity Data
            </NavLink>
            <Switch>
                <Route path="/home/general">
                    <GeneralLook />
                </Route>
                <Route path="/home/income-data">
                    <IncomeData />
                </Route>
                <Route path="/home/donations-data">
                    <OutcomeData />
                </Route>
                <Route path="/home/charities-data">
                    <CharityData />
                </Route>
            </Switch>
        </div>
    );

}
export default HomePage;