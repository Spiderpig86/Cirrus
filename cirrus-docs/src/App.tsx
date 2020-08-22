import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { BlankLayoutRoute } from './layouts/blank';
import { AnimationsPage } from './pages/animations';
import { SetUpPage, BrowserSupportPage } from './pages/geting-started';
import { AboutPage } from './pages/about';
import { ColorsPage, TypographyPage } from './pages/fundamentals';
import { WhyPage } from './pages/why';
import { Landing } from './pages/landing';
import { ButtonPage, GlyphsPage, VariantsPage, ButtonGroupsPage } from './pages/buttons';
import { _404 } from './pages/404';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LandingLayoutRoute exact path="/" match component={Landing} />
                
                <DefaultLayoutRoute path="/why" component={WhyPage} />
                <DefaultLayoutRoute path="/about" component={AboutPage} />

                <DefaultLayoutRoute path="/getting-started/setup" component={SetUpPage} />
                <DefaultLayoutRoute path="/getting-started/support" component={BrowserSupportPage} />

                <DefaultLayoutRoute path="/fundamentals/colors" component={ColorsPage} />
                <DefaultLayoutRoute path="/fundamentals/typography" component={TypographyPage} />

                <DefaultLayoutRoute path="/animations" component={AnimationsPage} />

                <DefaultLayoutRoute path="/buttons/basics" component={ButtonPage} />
                <DefaultLayoutRoute path="/buttons/button-groups" component={ButtonGroupsPage} />
                <DefaultLayoutRoute path="/buttons/glyphs" component={GlyphsPage} />
                <DefaultLayoutRoute path="/buttons/variants" component={VariantsPage} />

                <BlankLayoutRoute component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
