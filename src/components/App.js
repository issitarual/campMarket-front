import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Home/Home';

import '../css/reset.css';

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};