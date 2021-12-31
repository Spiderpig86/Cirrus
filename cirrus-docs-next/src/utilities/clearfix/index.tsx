import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { toc } from './toc';

export const ClearfixUtilsPage: React.FC<any> = (props) => {
    const classTable = [
        {
            class: `u-clear-left`,
            style: `clear: left;`,
        },
        {
            class: `u-clear-right`,
            style: `clear: right;`,
        },
        {
            class: `u-clear-both`,
            style: `clear: both;`,
        },
        {
            class: `u-clearfix`,
            style: `clear: both !important;
content: ' ';
display: table !important;`,
        },
    ];

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Clearfix</title>
            </Head>
            <div>
                <section className="padtop" id="clearfix">
                    <div className="content">
                        <Headline title="Clearfix" link="#clearfix" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>These are utility classes that control object clearfix.</p>

                        <table className="table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '200px',
                                        }}
                                    >
                                        Class
                                    </th>
                                    <th>Styles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classTable.map((row, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-blue-600 bg-blue-100">{row.class}</code>
                                        </td>
                                        <td>
                                            <pre>
                                                <code>{row.style}</code>
                                            </pre>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <h6>Clear Left</h6>
                        <p>
                            Use the <code>u-clear-left</code> class to have elements avoid overlapping other elements
                            floated to the left.
                        </p>
                        <div className="py-3 bg-orange-100 u-round">
                            <div className="content">
                                <img
                                    className="u-pull-left"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                                    alt="hamster"
                                />
                                <img
                                    className="u-pull-right"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                                    alt="hamster"
                                />
                                <p className="u-clear-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<img class="u-pull-left" src="..." alt="hamster">
<img class="u-pull-right" src="..." alt="hamster">
<p class="u-clear-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Clear Right</h6>
                        <p>
                            Use the <code>u-clear-right</code> class to have elements avoid overlapping other elements
                            floated to the right.
                        </p>
                        <div className="py-3 bg-orange-100 u-round">
                            <div className="content">
                                <img
                                    className="u-pull-left"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                                    alt="hamster"
                                />
                                <img
                                    className="u-pull-right"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                                    alt="hamster"
                                />
                                <p className="u-clear-right">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<img class="u-pull-left" src="..." alt="hamster">
<img class="u-pull-right" src="..." alt="hamster">
<p class="u-clear-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Clear Both</h6>
                        <p>
                            Use the <code>u-clear-both</code> class to have elements avoid overlapping other elements
                            floated to the left or right.
                        </p>
                        <div className="py-3 bg-orange-100 u-round">
                            <div className="content">
                                <img
                                    className="u-pull-left"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                                    alt="hamster"
                                />
                                <img
                                    className="u-pull-right"
                                    src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                                    alt="hamster"
                                />
                                <p className="u-clear-both">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<img class="u-pull-left" src="..." alt="hamster">
<img class="u-pull-right" src="..." alt="hamster">
<p class="u-clear-both">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Clearfix</h6>
                        <p>
                            Use <code>u-clearfix</code> to autosize any container that contains elements that have a
                            float. Without this class, the following image will be overflowing outside of the shaded
                            area.
                        </p>
                        <div className="py-3 bg-orange-100 u-round">
                            <div className="content">
                                <div className="u-clearfix">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <img
                                        className="u-pull-right"
                                        src="https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
                                        alt="hamster"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-clearfix">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><img class="u-pull-right" src="..." alt="hamster">
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.6.2</div>
                        </span>
                        <p>
                            All utility classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>u-clear-both-md</code> to apply <code>u-clear-both</code> on medium screens and
                            above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-clear-left u-clear-both-md">
    <!-- ... -->
</div>`}
                            language="html"
                        />

                        <p>
                            For more information, visit the{' '}
                            <Link href="/fundamentals/viewports">
                                <a className="u u-LR">Viewports</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Display', link: './display' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ClearfixUtilsPage);
