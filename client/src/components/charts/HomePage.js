import React, {useContext, useState, useEffect} from 'react';
import CharityData from './CharityData';
import GeneralLook from './GeneralLook';
import IncomeData from './IncomeData';
import OutcomeData from './OutcomeData';
import { Route, Switch } from "react-router-dom";
import './overview.css'

function HomePage() {

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <GeneralLook />
                </Route>
                <Route path="/income-data">
                    <IncomeData />
                </Route>
                <Route path="/donations-data">
                    <OutcomeData />
                </Route>
                <Route path="/charities-data">
                    <CharityData />
                </Route>
            </Switch>
        </div>
    );

}
export default HomePage;