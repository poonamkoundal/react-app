/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SettingsPage from '../containers/Page';
import DataTableExample from '../containers/Products';
import NotFound from '../components/NoFound';
const Routers = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={DataTableExample}/>
                    <Route exact path="/settings" component={SettingsPage}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>           
        
    );
};

export default Routers;