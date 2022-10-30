import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';

import { toc } from './toc';

import initializeTabs from '../../../static/js/tabs.js';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TabContainer } from '../../../layouts/components/tabs/tab-container';
import { ExternalLink, InternalLink } from '../../../layouts/components/link';
import { Blockquote } from '../../../layouts/components/blockquote';

export const SetUpPage: React.FC<any> = (props) => {
    // useEffect(() => {
    //     initializeTabs();
    //     eval(`
    //     const installationTabs = tabs({
    //         el: '#installationTabs',
    //         tabNavigationLinks: '.tab-item',
    //         tabContentContainers: '.tabpage'
    //     });
    //     installationTabs.init();`);
    // });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Setup</title>
            </Head>
            <div>
                <section id="setup" className="padtop">
                    <div className="content">
                        <Headline title="Setup" link="#setup" />
                        <p className="lead">Follow these simple steps for setting up Cirrus in your project.</p>
                        <div className="divider"></div>
                        <p>Below are a couple of different ways to integrate Cirrus into your project.</p>

                        <h6>1. Use a Package Manager (Recommended)</h6>
                        <b>Npm</b>
                        <div className="my-2">
                            <CodeBlock code={`npm i cirrus-ui --save`} language="bash" />
                        </div>
                        <div className="space"></div>
                        <b>Yarn</b>
                        <div className="my-2">
                            <CodeBlock code={`yarn add cirrus-ui`} language="bash" />
                        </div>

                        <div className="space"></div>
                        <h6>2. Use a CDN</h6>
                        <p>
                            It is recommended to attach a version number to these CDN links to keep your project
                            consistent with a given version if you want to avoid auto updates.
                        </p>
                        <ExternalLink classes="font-bold" url="https://unpkg.com/browse/cirrus-ui/">
                            Unpkg
                        </ExternalLink>
                        <div className="my-2">
                            <CodeBlock code={`https://unpkg.com/cirrus-ui`} language="text" />
                        </div>
                        <div className="space"></div>
                        <ExternalLink classes="font-bold" url="https://www.jsdelivr.com/package/npm/cirrus-ui">
                            JsDelivr
                        </ExternalLink>
                        <div className="my-2">
                            <CodeBlock
                                code={`https://cdn.jsdelivr.net/npm/cirrus-ui/dist/cirrus.min.css`}
                                language="text"
                            />
                        </div>

                        <div className="space"></div>
                        <h6>3. Download from the repository.</h6>
                        <a
                            href="https://github.com/Spiderpig86/Cirrus/releases"
                            target="_blank"
                            className="u-inline-block"
                            rel="noopener noreferrer"
                        >
                            <button className="btn-info">Download</button>
                        </a>
                    </div>
                </section>

                <section id="project-config" className="padtop">
                    <div className="content">
                        <Headline title="Project Configuration" link="#project-config" size="4" />
                        <div className="divider"></div>

                        <p>
                            Now that Cirrus is installed, it is time to configure it for your project. This step ensures
                            that the project is set up properly to support mobile responsiveness and <b>strict</b>{' '}
                            rendering with{' '}
                            <a
                                className="u u-LR"
                                href="https://www.w3resource.com/html5/doctype.php#:~:text=doctype%20html%3E%20or%20%3C!&text=This%20is%20because%2C%20html5%20is,goes%20to%20the%20quirky%20mode."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                standard mode
                            </a>
                            .
                        </p>

                        <TabContainer
                            id="#installationTabs"
                            selectedIndex={0}
                            tabs={[
                                {
                                    title: 'Webpage/Template',
                                    children: (
                                        <>
                                            <p className="lead">Traditional Webpage</p>
                                            <p className="font-bold mb-0">
                                                Add the HTML5 DocType. This is <b>required</b>.
                                            </p>
                                            <div className="mb-3">
                                                <CodeBlock code={`<!DOCTYPE html>`} language="html" />
                                            </div>

                                            <p className="font-bold mb-0">Add the responsive viewport meta tag</p>
                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
                                                    language="html"
                                                />
                                            </div>

                                            <p className="font-bold mb-0">Font Awesome</p>
                                            <p className="subtitle">
                                                To use glyphs, you must include the <b>Font Awesome</b> library.
                                            </p>
                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">`}
                                                    language="html"
                                                />
                                            </div>
                                            <p>
                                                Please visit{' '}
                                                <a
                                                    className="u u-LR"
                                                    rel="noopener noreferrer"
                                                    href="https://fontawesome.com/start"
                                                    target="_blank"
                                                >
                                                    FontAwesome
                                                </a>{' '}
                                                and sign up to get your developer kit to get started. The CDN above is
                                                just a sample.
                                            </p>

                                            <p className="font-bold mb-0">Required Fonts</p>
                                            <p className="subtitle">Don't forget to include the required fonts.</p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`<!-- Google Fonts -->

<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">`}
                                                    language="html"
                                                />
                                            </div>

                                            <p className="font-bold">Add Cirrus Link Import and Other Dependencies</p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`<!-- Minified Cirrus CSS -->

<link rel="stylesheet" href="../css/cirrus.min.css"> <!-- Or use CDN link -->
<!-- Import your other dependencies -->`}
                                                    language="html"
                                                />
                                            </div>
                                        </>
                                    ),
                                },
                                {
                                    title: 'React',
                                    children: (
                                        <>
                                            <p className="lead">React</p>
                                            <p className="font-bold mb-0">Import cirrus-ui anywhere in your project.</p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`import 'cirrus-ui'; 
// Your other framework code`}
                                                    language="javascript"
                                                />
                                            </div>

                                            <p className="font-bold mb-0">Write Your App</p>
                                            <p>There's nothing left to do but to start your React app.</p>
                                            <CodeBlock
                                                code={`import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import 'cirrus-ui'; // You can import it here if you want

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);`}
                                                language="jsx"
                                            />
                                        </>
                                    ),
                                },
                                {
                                    title: 'Vue',
                                    children: (
                                        <>
                                            <p className="lead">Vue</p>
                                            <p className="font-bold mb-0">
                                                Import cirrus-ui anywhere in your project (either in a Vue template or
                                                JS file).
                                            </p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`import 'cirrus-ui'; 
// Your other framework code`}
                                                    language="javascript"
                                                />
                                            </div>

                                            <p className="font-bold mb-0">Write Your App</p>
                                            <p>There's nothing left to do but to start your Vue app.</p>
                                            <CodeBlock
                                                code={`// Example main.js
import Vue from 'vue';
import App from './App.vue';

import 'cirrus-ui';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');`}
                                                language="javascript"
                                            />
                                        </>
                                    ),
                                },
                                {
                                    title: 'Svelte',
                                    children: (
                                        <>
                                            <p className="lead">Svelte</p>
                                            <p className="font-bold mb-0">Import cirrus-ui anywhere in your project.</p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`import 'cirrus-ui'; 
// Your other framework code`}
                                                    language="javascript"
                                                />
                                            </div>

                                            <p className="font-bold mb-0">Write Your App</p>
                                            <p>There's nothing left to do but to start your Svelte app.</p>
                                            <CodeBlock
                                                code={`import App from "./App.svelte";
import "cirrus-ui";

const app = new App({
    target: document.body
});

export default app;`}
                                                language="javascript"
                                            />
                                        </>
                                    ),
                                },
                                {
                                    title: 'Sass/Scss',
                                    children: (
                                        <>
                                            <p className="lead">Sass/Scss Project</p>

                                            <Blockquote accentColor="#fcd9bd">
                                                <p>
                                                    Note that this can be used in any Sass/Scss file including in
                                                    combination with other front-end frameworks such as{' '}
                                                    <span className="font-bold">React, Angular, Vue, etc.</span>
                                                </p>
                                            </Blockquote>

                                            <p className="font-bold mb-0">Import the variant of Cirrus</p>

                                            <div className="mb-3">
                                                <CodeBlock
                                                    code={`/* Core Build */
@use "cirrus-ui/src/cirrus-core" as *;

/* Extended Build */
@use "cirrus-ui/src/cirrus-ext" as *;

/* All Build */
@use "cirrus-ui/src/cirrus-all" as *;`}
                                                    language="scss"
                                                />
                                            </div>

                                            <p className="font-bold mb-0">(Optional) Configure Cirrus</p>
                                            <p>
                                                If you want to change classes that Cirrus generates or how it behaves,
                                                you can pass in configuration values to override or extend defaults.
                                                Read more in the{' '}
                                                <InternalLink url="/getting-started/configuration">
                                                    configuration docs
                                                </InternalLink>
                                                . Below is just an example of customizing Cirrus.
                                            </p>
                                            <CodeBlock
                                                code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            ABSOLUTES,
        ),
        opacity: null, // Disable default opacity classes
        extend: (
            // Add your own
            opacity: (
                25: .25,
                50: .5,
                75: .75,
            )
        )
    ),
);`}
                                                language="scss"
                                            />

                                            <p className="font-bold mb-0">Start Your Build Process</p>
                                            <p>
                                                Run your build process that builds your Sass project. The output file
                                                should also contain the contents of Cirrus. Command here is just a
                                                sample.
                                            </p>
                                            <CodeBlock code={`npm run dev`} language="bash" />
                                        </>
                                    ),
                                },
                            ]}
                        ></TabContainer>
                    </div>
                </section>

                <section className="padtop" id="starter">
                    <div className="content">
                        <Headline title="Starter Template" link="#starter" size="4" />
                        <div className="divider"></div>
                        <p>
                            To help you get started, feel free to use the example page created below. If you want to see
                            it in the browser,{' '}
                            <ExternalLink url="https://spiderpig86.github.io/Cirrus/0.6.0/docs/start/starter.html">
                                click here
                            </ExternalLink>
                            .
                        </p>
                        <LazyLoad height={200} once>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/start/starter.html"
                                className="w-100p"
                            />
                        </LazyLoad>
                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<!DOCTYPE html>
<html id="page">
   <head>
      <title>Getting Started with Cirrus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge;"/>
      <link href="https://unpkg.com/cirrus-ui" type="text/css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous" ></script> 
   </head>
   <body>
      <div class="header header-fixed unselectable header-animated">
         <div class="header-brand">
            <div class="nav-item no-hover">
               <h6 class="title">My App</h6>
            </div>
            <div class="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
         </div>
         <div class="header-nav" id="header-menu">
            <div class="nav-left">
               <div class="nav-item text-center"> <a href="#"> <span class="icon"> <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i> </span> </a> </div>
            </div>
            <div class="nav-right">
               <div class="nav-item has-sub toggle-hover" id="dropdown">
                  <a class="nav-dropdown-link">Menu</a> 
                  <ul class="dropdown-menu dropdown-animated" role="menu">
                     <li role="menu-item"><a href="#">First Item</a></li>
                     <li role="menu-item"><a href="#">Second Item</a></li>
                     <li role="menu-item"><a href="#">Third Item</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <section class="section">
         <div class="hero fullscreen">
            <div class="hero-body">
               <div class="content">
                  <div class="text-center">
                     <h1>👋 Hello world!</h1>
                     <h6 class="font-alt font-light">A webpage powered by <b>Cirrus.</b></h6>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </body>
</html>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    nextLink={{
                        name: 'Support',
                        link: './support',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(SetUpPage);
