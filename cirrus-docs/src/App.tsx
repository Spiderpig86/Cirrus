import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { DefaultLayoutRoute } from './layouts/default';
import { LandingLayoutRoute } from './layouts/landing';
import { BlankLayoutRoute } from './layouts/blank';
import { AnimationsPage } from './pages/animations';
import { SetUpPage, BrowserSupportPage } from './pages/geting-started';
import { AboutPage } from './pages/about';
import { ColorsPage, TypographyPage, ViewportsPage } from './pages/fundamentals';
import { WhyPage } from './pages/why';
import { Landing } from './pages/landing';
import { ButtonPage, ButtonGlyphsPage, VariantsPage, ButtonGroupsPage } from './pages/buttons';
import { _404 } from './pages/404';
import {
    AvatarPage,
    CardsPage,
    CodePage,
    LinksPage,
    ListsPage,
    ModalsPage,
    PaginationPage,
    PlaceholderPage,
    TablePage,
    TabsPage,
    TagsPage,
    TilesPage,
    ToastPage,
    TooltipsPage,
    TreePage,
} from './pages/components';
import { FontWeightsPage, FontGlyphsPage, TextElementsPage } from './pages/fonts';
import {
    FormsInputsPage,
    FormsGlyphsPage,
    FormsCheckboxPage,
    FormsRadioPage,
    FormsTogglePage,
    FormGroupsPage,
} from './pages/forms';
import { GridGapPage, GridSpanPage, GridTemplatesPage } from './pages/grid';
import {
    ColumnsPage,
    DividerPage,
    FootersPage,
    FramesPage,
    HeaderPage,
    HeroPage,
    LevelPage,
    MarginPage,
    MediaPage,
    PaddingPage,
    SpacingPage,
} from './pages/layout';

import './App.scss';
import { ClearfixUtilsPage, DisplayUtilsPage, FlexboxUtilsPage, MiscUtilsPage, PositionUtilsPage } from './pages/utilities';

function App() {
    library.add(fas);
    library.add(fab);
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
                <DefaultLayoutRoute path="/fundamentals/viewports" component={ViewportsPage} />

                <DefaultLayoutRoute path="/animations" component={AnimationsPage} />

                <DefaultLayoutRoute path="/buttons/basics" component={ButtonPage} />
                <DefaultLayoutRoute path="/buttons/button-groups" component={ButtonGroupsPage} />
                <DefaultLayoutRoute path="/buttons/glyphs" component={ButtonGlyphsPage} />
                <DefaultLayoutRoute path="/buttons/variants" component={VariantsPage} />

                <DefaultLayoutRoute path="/components/avatar" component={AvatarPage} />
                <DefaultLayoutRoute path="/components/cards" component={CardsPage} />
                <DefaultLayoutRoute path="/components/code" component={CodePage} />
                <DefaultLayoutRoute path="/components/links" component={LinksPage} />
                <DefaultLayoutRoute path="/components/lists" component={ListsPage} />
                <DefaultLayoutRoute path="/components/modal" component={ModalsPage} />
                <DefaultLayoutRoute path="/components/pagination" component={PaginationPage} />
                <DefaultLayoutRoute path="/components/placeholder" component={PlaceholderPage} />
                <DefaultLayoutRoute path="/components/table" component={TablePage} />
                <DefaultLayoutRoute path="/components/tabs" component={TabsPage} />
                <DefaultLayoutRoute path="/components/tags" component={TagsPage} />
                <DefaultLayoutRoute path="/components/tiles" component={TilesPage} />
                <DefaultLayoutRoute path="/components/toast" component={ToastPage} />
                <DefaultLayoutRoute path="/components/tooltips" component={TooltipsPage} />
                <DefaultLayoutRoute path="/components/trees" component={TreePage} />

                <DefaultLayoutRoute path="/fonts/font-weights" component={FontWeightsPage} />
                <DefaultLayoutRoute path="/fonts/glyphs" component={FontGlyphsPage} />
                <DefaultLayoutRoute path="/fonts/text-elements" component={TextElementsPage} />

                <DefaultLayoutRoute path="/forms/inputs" component={FormsInputsPage} />
                <DefaultLayoutRoute path="/forms/glyphs" component={FormsGlyphsPage} />
                <DefaultLayoutRoute path="/forms/checkbox" component={FormsCheckboxPage} />
                <DefaultLayoutRoute path="/forms/radio" component={FormsRadioPage} />
                <DefaultLayoutRoute path="/forms/toggle" component={FormsTogglePage} />
                <DefaultLayoutRoute path="/forms/groups" component={FormGroupsPage} />

                <DefaultLayoutRoute path="/grid/templates" component={GridTemplatesPage} />
                <DefaultLayoutRoute path="/grid/span" component={GridSpanPage} />
                <DefaultLayoutRoute path="/grid/gap" component={GridGapPage} />

                <DefaultLayoutRoute path="/layout/columns" component={ColumnsPage} />
                <DefaultLayoutRoute path="/layout/divider" component={DividerPage} />
                <DefaultLayoutRoute path="/layout/footer" component={FootersPage} />
                <DefaultLayoutRoute path="/layout/frames" component={FramesPage} />
                <DefaultLayoutRoute path="/layout/header" component={HeaderPage} />
                <DefaultLayoutRoute path="/layout/hero" component={HeroPage} />
                <DefaultLayoutRoute path="/layout/level" component={LevelPage} />
                <DefaultLayoutRoute path="/layout/margin" component={MarginPage} />
                <DefaultLayoutRoute path="/layout/media" component={MediaPage} />
                <DefaultLayoutRoute path="/layout/padding" component={PaddingPage} />
                <DefaultLayoutRoute path="/layout/spacing" component={SpacingPage} />
                
                <DefaultLayoutRoute path="/utils/clearfix" component={ClearfixUtilsPage} />
                <DefaultLayoutRoute path="/utils/display" component={DisplayUtilsPage} />
                <DefaultLayoutRoute path="/utils/flexbox" component={FlexboxUtilsPage} />
                <DefaultLayoutRoute path="/utils/misc" component={MiscUtilsPage} />
                <DefaultLayoutRoute path="/utils/positions" component={PositionUtilsPage} />

                <BlankLayoutRoute component={_404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
