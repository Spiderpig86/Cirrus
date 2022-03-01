import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlaceholderPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Placeholder</title>
            </Head>
            <div>
                <section className="padtop" id="placeholder">
                    <div className="content">
                        <Headline title="Placeholder" link="#placeholder" />
                        <div className="divider"></div>

                        <p>
                            A <code>placeholder</code> is a friendly way to notify users of updates or upcoming events.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>

                        <p>
                            A <code>placeholder</code> only consists of a couple of components.
                        </p>

                        <ul>
                            <li>
                                <code>placeholder</code> - base class for the component.
                                <ul>
                                    <li>
                                        <code>placeholder-icon</code> - container class for <code>icon</code>.
                                    </li>
                                    <li>
                                        <code>placeholder-title</code> - class for the title.
                                    </li>
                                    <li>
                                        <code>placeholder-subtitle</code> - class for the subtitle.
                                    </li>
                                    <li>
                                        <code>placeholder-commands</code> - wraps around other controls like buttons or
                                        inputs.
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="placeholder">
                            <div className="placeholder-icon">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper x-large" icon={['fas', 'coffee']} />
                                </span>
                            </div>
                            <h6 className="placeholder-title">The sever is currently taking a nap.</h6>
                            <div className="placeholder-subtitle">
                                Come back in a few hours or press the refresh button.
                            </div>

                            <div className="placeholder-commands u-center">
                                <div className="m-1">
                                    <button className="btn-primary">Refresh</button>
                                </div>
                                <div className="m-1">
                                    <button>Home</button>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="placeholder">
    <div class="placeholder-icon"><span class="icon"><i class="fa fa-wrapper fa-coffee x-large"></i></span></div>
    <h6 class="placeholder-title">The sever is currently taking a nap.</h6>
    <div class="placeholder-subtitle">Come back in a few hours or press the refresh button.</div>
    <div class="placeholder-commands u-center">
        <div class="m-1">
            <button class="btn-primary">Refresh</button>
        </div>
        <div class="m-1">
            <button>Home</button>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <div className="placeholder">
                            <div className="placeholder-icon">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper x-large" icon={['fas', 'envelope']} />
                                </span>
                            </div>
                            <h6 className="placeholder-title">Don't wait for the latest updates.</h6>
                            <div className="placeholder-subtitle">Sign up for our newsletter today.</div>

                            <div className="placeholder-commands u-center">
                                <div className="form-group">
                                    <input type="email" className="form-group-input" placeholder="Your email" />
                                    <button className="btn-primary form-group-btn">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="placeholder">
    <div class="placeholder-icon"><span class="icon"><i class="fa fa-wrapper fa-envelope x-large"></i></span></div>
    <h6 class="placeholder-title">Don't wait for the latest updates.</h6>
    <div class="placeholder-subtitle">Sign up for our newsletter today.</div>
    <div class="placeholder-commands u-center">
        <div class="form-group">
            <input type="email" class="form-group-input" placeholder="Your email">
            <button class="btn-primary form-group-btn">Sign Up</button>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Pagination', link: './pagination' }}
                    nextLink={{ name: 'Progress', link: './progress' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PlaceholderPage);
