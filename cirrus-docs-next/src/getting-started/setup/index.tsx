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

export const SetUpPage: React.FC<any> = (props) => {
    useEffect(() => {
        initializeTabs();
        eval(`
        const installationTabs = tabs({
            el: '#installationTabs',
            tabNavigationLinks: '.tab-item',
            tabContentContainers: '.tabpage'
        });
        installationTabs.init();`);
    });

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
                            <CodeBlock code={`npm i cirrus-ui --save`} language="sh" />
                        </div>
                        <div className="space"></div>
                        <b>Yarn</b>
                        <div className="my-2">
                            <CodeBlock code={`yarn add cirrus-ui`} language="sh" />
                        </div>

                        <div className="space"></div>
                        <h6>2. Use a CDN</h6>
                        <b>Unpkg</b>
                        <div className="my-2">
                            <CodeBlock code={`https://unpkg.com/cirrus-ui`} language="text" />
                        </div>
                        <div className="space"></div>
                        <b>JsDelivr</b>
                        <div className="my-2">
                            <CodeBlock
                                code={`https://cdn.jsdelivr.net/npm/cirrus-ui@0.6.0/dist/cirrus.min.css`}
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
                        <Headline title="Project Configuration" link="#project-config" />
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

                        <div id="installationTabs">
                            <div className="tab-container mb-3">
                                <ul>
                                    <li className="tab-item selected">
                                        <a>Webpage</a>
                                    </li>
                                    <li className="tab-item">
                                        <a>Node</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tabpage tabpage--shown">
                                <p className="lead">Traditional Webpage</p>
                                <p className="font-bold title">Add the HTML5 DocType. This is <b>required</b>.</p>
                                <div className="mb-3">
                                    <CodeBlock code={`<!DOCTYPE html>`} language="html" />
                                </div>

                                <p className="font-bold title">Add the responsive viewport meta tag</p>
                                <div className="mb-3">
                                    <CodeBlock
                                        code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
                                        language="html"
                                    />
                                </div>

                                <p className="font-bold title">Font Awesome</p>
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
                                    and sign up to get your developer kit to get started. The CDN above is just a
                                    sample.
                                </p>

                                <p className="font-bold title">Required Fonts</p>
                                <p className="subtitle">Don't forget to include the required fonts.</p>

                                <div className="mb-3">
                                    <CodeBlock
                                        code={`<!-- Google Fonts -->

<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

<!-- Minified Cirrus CSS -->

<link rel="stylesheet" href="../css/cirrus.min.css">
<!-- Import your other dependencies -->`}
                                        language="html"
                                    />
                                </div>
                            </div>
                            <div className="tabpage">
                                <p className="lead">Node App</p>
                                <p className="font-bold title">Import cirrus-ui</p>

                                <div className="mb-3">
                                    <CodeBlock
                                        code={`import 'cirrus-ui'; 
// Your other framework code`}
                                        language="javascript"
                                    />
                                </div>

                                <p className="font-bold title">Setup Template</p>
                                <p>
                                    In your main <code>index.html</code> page, make sure that the following dependencies
                                    are also included. For example, it would be in the <code>index.html</code> file in
                                    your React project.
                                </p>
                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html>

<head>
	<title>Getting Started with Cirrus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge;" />
	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<!-- More content -->

</html>`}
                                    language="html"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="designing">
                    <div className="content">
                        <Headline title="Designing with Cirrus" link="#designing" />
                        <div className="divider"></div>
                        <p>Using a new framework can be slightly overwhelming, so this section is to help point out common areas in the documentation to help you get up to speed.</p>
                        <div className="space"></div>

                        <h6>Layout</h6>

                        <p>Spacing is an important part of designing a page not just with Cirrus, but in general. This can be accomplished by following some hierarchy for a layout, such as <code>section</code>, <code>content</code>, and <code>row</code>. The <code>section</code> HTML tag semantically spearates the content on the page, the <code>content</code> class adds the needed spacing, and the <code>row</code> class can be used to position the child elements.</p>

                        <CodeBlock code={`<section>
    <div class="content">
        <p>Some text</p>
        <div class="row">
            <div class="col">Child 1</div>
            <div class="col">Child 2</div>
        </div>
    </div>
</section>`} language='htmlbars' />

                        <p>More info can be found in the <Link href="/layout/spacing"><a className="u u-LR">Spacing</a></Link> docs.</p>

                        <div className="divider w-30 mx-auto"></div>

                        <p>If you are looking to tile elements in a specific form, then I recommend getting started with the following two pages.</p>

                        <ul>
                            <li><Link href="/layout/columns"><a className="u u-LR">Columns (Flexbox)</a></Link></li>
                            <li><Link href="/grid/templates"><a className="u u-LR">Grid</a></Link></li>
                        </ul>
                        
                        <div className="divider w-30 mx-auto"></div>

                        <p>With some layout styles in place, now you specify a <Link href="/layout/header"><a className="u u-LR">header</a></Link> and <Link href="/grid/footer"><a className="u u-LR">footer</a></Link>.</p>

                        <p>This pretty much sums up the few pages that would help getting a base layout up and running. You can find more styles to modify the layout under <i>Layout</i> or <i>Utilities</i>.</p>
                        <div className="space"></div>

                        <h6>Components</h6>
                        <p>There are lots of components that already come with the framework. I do not have any specific recommendations other than to pick the ones you want to use. Each page has plenty of examples to cover many possible use cases.</p>
                    </div>
                </section>

                <section className="padtop" id="starter">
                    <div className="content">
                        <Headline title="Starter Template" link="#starter" />
                        <div className="divider"></div>
                        <p>To help you get started, feel free to use the example page created below.</p>
                        <LazyLoad height={200} once>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/start/starter.html"
                                className="w-100"
                            />
                        </LazyLoad>
                        <a href="https://spiderpig86.github.io/Cirrus/0.6.0/docs/start/starter.html" target="_blank">
                            Full Page
                        </a>
                        <div className="space large"></div>
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
