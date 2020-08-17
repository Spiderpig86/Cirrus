import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { BlankLayoutRoute } from './layouts/blank';
import { AnimationsPage } from './pages/animations';
import { SetUpPage } from './pages/geting-started';
import { Landing } from './pages/landing';
import { _404 } from './pages/404';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LandingLayoutRoute exact path="/" match component={Landing} />

                <DefaultLayoutRoute path="/getting-started/installation" component={SetUpPage} />

                <DefaultLayoutRoute path="/animations" component={AnimationsPage} />
                <BlankLayoutRoute component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
