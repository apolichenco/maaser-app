import React, {useContext, useState, useEffect} from 'react';
import AllCharities from './charities/AllCharities';
import FavCharities from './charities/FavCharities';
import { Route, Switch, NavLink } from "react-router-dom";

function Charities() {

    return (
        <div>
            <Switch>
                <Route path="/all-charities">
                    <AllCharities />
                </Route>
                <Route path="/my-saved-charities">
                    <FavCharities />
                </Route>
            </Switch>
        </div>
    );

}
export default Charities;