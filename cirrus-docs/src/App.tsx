import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { AnimationsPage } from './pages/animations';
import { Landing } from './pages/landing';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LandingLayoutRoute exact path="/" match component={Landing} />
                <DefaultLayoutRoute path="/docs/animations" component={AnimationsPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
