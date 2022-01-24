import React, { useEffect } from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LayoutTree } from '@moxy/next-layout';
import { Workbox } from 'workbox-window';

import { Store } from '../store/store';

/* SCSS Imports */
/* Next.js please add support for simple css rendering without having to use the tedious modules */
/* Migrating from CRA is really a pain */
import '../static/css/cirrus.min.css';
import '../styles/app.scss';

/* LAYOUT STYLES */
import '../layouts/default/index.scss';
import '../layouts/landing/index.scss';
import '../layouts/components/codeblock/index.scss';
import '../layouts/components/header/index.scss';
import '../layouts/components/sidebar/index.scss';
import '../layouts/components/toc/index.scss';

/* PAGE STYLES */
import '../src/index/index.scss';
import '../src/playground/index.scss';

import '../src/animations/index.scss';

import '../src/fundamentals/typography/index.scss';
import '../src/fundamentals/viewports/index.scss';

import '../src/grid/templates/index.scss';

import '../src/layout/columns/index.scss';

const App = ({ Component, pageProps }) => {
    library.add(fas);
    library.add(fab);

    useEffect(() => {
        // Register service worker
        if (!('serviceWorker' in navigator) || process.env.NODE_ENV !== 'production') {
            console.warn('Progressive Web App support is disabled');
            return;
        }

        const wb = new Workbox('sw.js', { scrope: '/' });
        wb.register();
    }, []);

    return (
        <Store>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <meta name="theme-color" content="#f03d4d" />
                <meta
                    name="keywords"
                    content="css,css framework,scss,sass,framework,design, website,web design,frontend,components,user interface,interface,ui,user experience,ux,stanley lim,tailwind,bulma,bootstrap,milligram"
                />
                <meta
                    name="description"
                    content="The SCSS framework for the modern web. It's component based, customizable, and completely open source."
                />
                <meta property="og:url" content="https://cirrus-ui.netlify.app" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Cirrus CSS" />
                <meta property="og:image" content="https://cirrus-ui.netlify.app/img/preview.png" />
                <meta
                    property="og:description"
                    content="The SCSS framework for the modern web. It's component based, customizable, and completely open source."
                />
                <meta property="og:site_name" content="Cirrus" />
                <link rel="apple-touch-icon" sizes="57x57" href="https://cirrus-ui.netlify.app//apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="https://cirrus-ui.netlify.app//apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://cirrus-ui.netlify.app//apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="https://cirrus-ui.netlify.app//apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="https://cirrus-ui.netlify.app//apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="https://cirrus-ui.netlify.app//apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="https://cirrus-ui.netlify.app//apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="https://cirrus-ui.netlify.app//apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://cirrus-ui.netlify.app//apple-icon-180x180.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="https://cirrus-ui.netlify.app//android-icon-192x192.png" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <meta name="msapplication-TileColor" content="#f03d4d" />
                <meta name="msapplication-TileImage" content="https://cirrus-ui.netlify.app//ms-icon-70x70.png" />
                <meta name="msapplication-TileImage" content="https://cirrus-ui.netlify.app//ms-icon-144x144.png" />
                <meta name="msapplication-TileImage" content="https://cirrus-ui.netlify.app//ms-icon-150x150.png" />
                <meta name="msapplication-TileImage" content="https://cirrus-ui.netlify.app//ms-icon-310x310.png" />
                <link rel="manifest" href="/manifest.json" />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
            </Head>
            <LayoutTree Component={Component} pageProps={pageProps} />
        </Store>
    );
};

export default App;
