import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toc } from './toc';

export const CardsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="cards">
                    <div className="content">
                        <Headline title="Cards" link="#cards" />
                        <div className="divider"></div>

                        <p>
                            A <code>card</code> can be thought of a more specialized and elegant version of a{' '}
                            <code>frame</code> with different configurations and a hover effect.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>

                        <p>
                            The structure for the <code>card</code> contains quite a number of classes, so below is a
                            breakdown of what is supported.
                        </p>

                        <div className="row">
                            <div className="col-lg-5">
                                <div
                                    className="card"
                                >
                                    <div className="card-container">
                                        <div
                                            className="card-image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content belong here, inside a <code>content</code> div.
                                        </p>
                                    </div>
                                    <div className="action-bar u-center">
                                        <button className="btn-link outline">Buttons</button>
                                        <button className="btn-link outline">Go here</button>
                                    </div>
                                    <div className="card-footer">
                                        <div className="u-text-center">
                                            <span>
                                                This is additional footer text in <code>card-footer</code>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul>
                                    <li>
                                        <code>card</code>
                                        <ul>
                                            <li>
                                                <code>card-container</code>
                                                <ul>
                                                    <li>
                                                        <code>card-container</code>
                                                    </li>
                                                    <li>
                                                        <code>title-container</code>
                                                        <ul>
                                                            <li><code>title</code></li>
                                                            <li><code>subtitle</code></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><code>content</code></li>
                                            <li><code>action-bar</code></li>
                                            <li><code>card-footer</code></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="card" style="max-width: 350px;">
    <div class="card-container">
        <div class="card-image"></div>
        <div class="title-container">
            <p class="title">Title</p><span class="subtitle">Subtitle</span></div>
    </div>
    <div class="content">
        <p>Text and other content belong here, inside a <code>content</code> div.</p>
    </div>
    <div class="action-bar u-center">
        <button class="btn-link outline">Buttons</button>
        <button class="btn-link outline">Go here</button>
    </div>
    <div class="card-footer">
        <div class="u-text-center"><span>This is additional footer text in <code>card-footer</code>.</span></div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is just a simple example of a <code>card</code> that contains a centered image and
                            some text components.
                        </p>

                        <div
                            className="card"
                            style={{
                                maxWidth: '250px',
                            }}
                        >
                            <div className="content u-text-center pt-3">
                                <FontAwesomeIcon
                                    className="fa-wrapper text-blue-600 bg-blue-100 p-3"
                                    icon={['fas', 'bolt']}
                                    style={{
                                        borderRadius: '100%',
                                        height: '4.75rem',
                                        width: '4.75rem',
                                    }}
                                />
                                <p id="projectname" className="title mt-2 mb-0">
                                    Fast. Very fast.
                                </p>
                                <p>Blazing fast speed you can depend on.</p>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div className="card" style="max-width: 250px;">
    <div className="content u-text-center pt-3">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" className="svg-inline--fa fa-bolt fa-w-10 fa-wrapper text-blue-600 bg-blue-100 p-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="border-radius: 100%; height: 4.75rem; width: 4.75rem;">
            <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
        </svg>
        <p id="projectname" className="title mt-2 mb-0">Fast. Very fast.</p>
        <p>Blazing fast speed you can rely on.</p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Avatar', link: './avatar' }} nextLink={{ name: 'Code', link: './code' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
