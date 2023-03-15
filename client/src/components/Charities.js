import React, {useContext, useState, useEffect} from 'react';
import AllCharities from './charities/AllCharities';
import FavCharities from './charities/FavCharities';
import { Route, Switch, NavLink } from "react-router-dom";

function Charities() {


    return (
        <div>
            <NavLink to="../charities/all-charities">
                All Charities
            </NavLink>
            <NavLink to="../charities/my-saved-charities">
                My Saved Charities
            </NavLink>
            <Switch>
                <Route path="/charities/all-charities">
                    <AllCharities />
                </Route>
                <Route path="/charities/my-saved-charities">
                    <FavCharities />
                </Route>
            </Switch>
        </div>
    );

}
export default Charities;