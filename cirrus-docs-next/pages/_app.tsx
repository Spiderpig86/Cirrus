import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LayoutTree } from '@moxy/next-layout';

/* SCSS Imports */
/* Next.js please add support for simple css rendering without having to use the tedious modules */
/* Migrating from CRA is really a pain */
import '../styles/app.scss';

/* LAYOUT STYLES */
import '../layouts/default/index.scss';
import '../layouts/landing/index.scss';
import '../layouts/components/codeblock/index.scss';
import '../layouts/components/footer/index.scss';
import '../layouts/components/header/index.scss';
import '../layouts/components/sidebar/index.scss';
import '../layouts/components/toc/index.scss';

/* PAGE STYLES */
import '../pages/landing/index.scss';

import '../static/css/cirrus.min.css';

const App = ({ Component, pageProps }) => {
    library.add(fas);
    library.add(fab);
    return <LayoutTree Component={Component} pageProps={pageProps} />;
};

export default App;
