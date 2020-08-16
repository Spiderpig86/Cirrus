import React from 'react';

import { CodeBlock } from '../../layouts/components/codeblock';
import { TableOfContents } from '../../layouts/components/toc';
import { toc } from './toc';

export const AnimationsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section id="animations">
                    <div className="content">
                        <h1>
                            <a
                                href="./index.html#started"
                                className="doc-link tooltip tooltip--left"
                                data-tooltip="Click to copy"
                            >
                                #
                            </a>
                            Animations
                        </h1>
                        <div className="divider"></div>

                        <p>
                            Animations are an essential part crafting beautiful websites that aren't just stunning, but
                            are also alive. Cirrus comes bundled with a couple of animations to help you get started.
                        </p>
                        <div className="space"></div>
                        <h5>Loading Spinner</h5>
                        <p>
                            The loading spinner serves as an elegant indicator for progress in webpages. Just add the{' '}
                            <code>animated loading</code> selectors to the element and Cirrus will handle the rest. By
                            default, the spinner will be horizontally centered and it will override any text. To hide
                            the text, just add the <code>hide-text</code> class. Below are some modifiers of the loading
                            spinner.
                        </p>
                        <ul className="menu-list">
                            <li>
                                <code>hide-text</code> - hides the text. Best used for when the loader covers underlying
                                text.
                            </li>
                            <li>
                                <code>loading-white</code> - sets the loading spinner's color to white.
                            </li>
                        </ul>

                        <p>
                            To make the <code>loading</code> spinner align either left or right, add the{' '}
                            <code>loading-left</code> or <code>loading-right</code> classes respectively.
                        </p>

                        <div className="space xlarge"></div>
                        <h5>Loading Button</h5>
                        <p>
                            These buttons are designed to tell users that a function is in progress. This is simply
                            created by adding the <code>animated loading</code> classes to the button and it will
                            automatically
                        </p>
                        <div className="row">
                            <div className="col">
                                <button className="animated loading u-center hide-text btn-primary">1</button>
                            </div>
                            <div className="col">
                                <button className="animated loading u-center loading-left btn-info">Loading</button>
                            </div>
                            <div className="col">
                                <button
                                    className="animated loading u-center loading-white hide-text btn-link"
                                    id="btn3"
                                >
                                    3
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    className="animated loading u-center loading-right loading-white white btn-success"
                                    id="btn4"
                                >
                                    Loading
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    className="animated loading u-center hide-text loading-white btn-warning"
                                    id="btn5"
                                >
                                    5
                                </button>
                            </div>
                        </div>

                        <div className="space"></div>

                        <div className="row">
                            <CodeBlock
                                code={`
<button class="animated loading u-center hide-text btn-primary">1</button>
<button class="animated loading u-center loading-left btn-info">Loading</button>
<button class="animated loading u-center loading-white hide-text btn-link" id="btn3"> 3 </button>
<button class="animated loading u-center loading-right loading-white white btn-success" id="btn4"> Loading </button>
<button class="animated loading u-center hide-text loading-white btn-warning" id="btn5"> 5 </button>`}
                                language="html"
                                languageDisplay="HTML"
                            />
                        </div>

                        <div className="space xlarge"></div>

                        <div className="r">
                            <h5>Hover Grow</h5>
                            <p>
                                Zoom in various elements to make the stand out from the rest. Just add{' '}
                                <code>hover-grow</code> to your control.
                            </p>

                            <div className="row u-text-center content" id="grid">
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/FileBot.png" className="hover-grow" />
                                        <p>FileBot</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/Illustrator.png" className="hover-grow" />
                                        <p>Illustrator</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/KeepassX.png" className="hover-grow" />
                                        <p>KeepassX</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/Pandora2.png" className="hover-grow" />
                                        <p>Pandora</p>
                                    </div>
                                </a>
                            </div>

                            <div className="row u-text-center content" id="grid">
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/photoshop.png" className="hover-grow" />
                                        <p>Photoshop</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/PhpStorm.png" className="hover-grow" />
                                        <p>PhpStorm</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/Python.png" className="hover-grow" />
                                        <p>Python</p>
                                    </div>
                                </a>
                                <a className="col" href="#">
                                    <div className="content">
                                        <img src="../../res/img/Wing.png" className="hover-grow" />
                                        <p>Wing</p>
                                    </div>
                                </a>
                            </div>

                            <div className="row">
                                <pre>
                                    <code className="html" data-lang="HTML">
                                        &lt;div className=&quot;content&quot;&gt; &lt;img
                                        src=&quot;res/img/autodesk_autocad.png&quot;
                                        className=&quot;hover-grow&quot;/&gt; &lt;p&gt;Autodesk&lt;/p&gt; &lt;/div&gt;{' '}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="test2" className="padtop">
                    <div className="content">
                        <p>test</p>
                    </div>
                </section>
                <section id="test3" className="padtop">
                    <div className="content">
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <section id="test4">
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </section>
                    </div>
                </section>
                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <a href="../buttons" className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">Buttons</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
