import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { BlankLayoutRoute } from './layouts/blank';
import { AnimationsPage } from './pages/animations';
import { SetUpPage } from './pages/geting-started';
import { WhyPage } from './pages/why';
import { Landing } from './pages/landing';
import { _404 } from './pages/404';

import './App.scss';
import { BrowserSupportPage } from './pages/geting-started/support';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LandingLayoutRoute exact path="/" match component={Landing} />
                
                <DefaultLayoutRoute path="/why" component={WhyPage} />

                <DefaultLayoutRoute path="/getting-started/setup" component={SetUpPage} />
                <DefaultLayoutRoute path="/getting-started/support" component={BrowserSupportPage} />

                <DefaultLayoutRoute path="/animations" component={AnimationsPage} />
                <BlankLayoutRoute component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
