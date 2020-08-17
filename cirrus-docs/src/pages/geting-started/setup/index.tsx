import React from 'react';
import { TableOfContents } from '../../../layouts/components/toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';

import '../../../static/js/tabs.js';

export const SetUpPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section id="setup">
                    <div className="content">
                        <h1>Installation</h1>
                        <p className="lead">Follow these simple steps for setting up Cirrus in your project.</p>
                        <div className="divider"></div>

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
                                code={`https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.5/dist/cirrus.min.css`}
                                language="text"
                            />
                        </div>
                    </div>
                </section>

                <section id="project-setup">
                    <div className="content">
                        <p>Now that Cirrus is installed, it is time to configure it for your project.</p>

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
                    <p className="font-bold title">Add the HTML5 DocType</p>
                    <pre className="mb-3"><code data-lang="HTML">&lt;!DOCTYPE html&gt;</code></pre>
        
                    <p className="font-bold title">Add the responsive viewport meta tag</p>
                    <pre className="mb-3"><code data-lang="HTML">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</code></pre>
        
                    <p className="font-bold title">Font Awesome</p>
                    <p className="subtitle">To use glyphs, you must include the <b>Font Awesome</b> library.</p>
                    <pre><code data-lang="HTML">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://use.fontawesome.com/releases/v5.8.1/css/all.css&quot; integrity=&quot;sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ&quot; crossorigin=&quot;anonymous&quot;&gt;
                    </code></pre>
                    <p>Please visit <a className="u u-LR" rel="noopener noreferrer" href="https://fontawesome.com/start" target="_blank">FontAwesome</a> and sign up to get your developer kit to get started. The CDN above is just a sample.</p>
        
                    <p className="font-bold title">Required Fonts</p>
                    <p className="subtitle">Don't forget to include the required fonts.</p>
        
                        <pre className="mb-3"><code className="html" data-lang="HTML">&lt;!-- Google Fonts --&gt;
&lt;link href=&quot;https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700&quot; rel=&quot;stylesheet&quot;&gt;
&lt;link href=&quot;https://fonts.googleapis.com/css?family=Montserrat:400,700&quot; rel=&quot;stylesheet&quot;&gt;

&lt;!-- Minified Cirrus CSS --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;../css/cirrus.min.css&quot;&gt;

&lt;!-- Import your other dependencies --&gt;</code></pre>
                </div>
                <div className="tabpage">
                    <p className="lead">Node App</p>
                    <p className="font-bold title">Import cirrus-ui</p>
                    <pre className="mb-3"><code className="js" data-lang="JS">
    import 'cirrus-ui';

    // Your other framework code
</code></pre>

                    <p className="font-bold title">Setup Template</p>
                    <p>In your main <code>index.html</code> page, make sure that the following dependencies are also included. For example, it would be in the <code>index.html</code> file in your React project.</p>
                    <pre><code data-lang="HTML">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
            &lt;title&gt;Getting Started with Cirrus&lt;/title&gt;

            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0&quot;&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge;&quot; /&gt;
        
            &lt;!-- Fonts --&gt;
            &lt;link href=&quot;https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700&quot; rel=&quot;stylesheet&quot;&gt;
            &lt;link href=&quot;https://fonts.googleapis.com/css?family=Montserrat:400,700&quot; rel=&quot;stylesheet&quot;&gt;

            &lt;!-- Font Awesome --&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;https://use.fontawesome.com/releases/v5.2.0/css/all.css&quot; integrity=&quot;sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ&quot; crossorigin=&quot;anonymous&quot;&gt;

            &lt;!-- JQuery (Optional to help add navbar functionality) --&gt;
            &lt;script src=&quot;https://code.jquery.com/jquery-2.2.4.min.js&quot; integrity=&quot;sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    &lt;/head&gt;

    ...
    </code></pre>
                </div>
            </div>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
