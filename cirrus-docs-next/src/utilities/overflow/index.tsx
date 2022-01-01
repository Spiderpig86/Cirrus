import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { DocExample } from '../../../models/doc-example';
import { Capitalize } from '../../../utils/string';

export const OverflowUtilsPage: React.FC<any> = (props) => {

    const overflowNames = ['auto', 'hidden', 'visible', 'scroll'];

    const classTable = [
        ...overflowNames.map((name) => {
            return {
                class: `u-overflow-${name}`,
                style: `overflow: ${name};`,
            };
        }),
        ...overflowNames.map((name) => {
            return {
                class: `u-overflow-x-${name}`,
                style: `overflow-x: ${name};`,
            };
        }),
        ...overflowNames.map((name) => {
            return {
                class: `u-overflow-y-${name}`,
                style: `overflow-y: ${name};`,
            };
        }),
    ];

    const overflowExamples: DocExample[] = [
        {
            name: 'auto',
            example: (
                <div className="p-3 bg-purple-100 u-round-xs u-relative">
                    <p className="font-bold">Auto</p>
                    <div
                        className="u-round-xs bg-purple-200 u-overflow-auto"
                        style={{
                            height: '200px',
                        }}
                    >
                        <p className="px-2 text-purple-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-purple-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-auto">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements whenever necessary for either the x-axis, y-axis, or both.
                </p>
            ),
        },
        {
            name: 'hidden',
            example: (
                <div className="p-3 bg-blue-100 u-round-xs u-relative">
                    <p className="font-bold">Hidden</p>
                    <div
                        className="u-round-xs bg-blue-200 u-overflow-hidden"
                        style={{
                            height: '200px',
                        }}
                    >
                        <p className="px-2 text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-hidden">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will hide the overflow of any child element for both the x and y-axis.
                </p>
            ),
        },
        {
            name: 'visible',
            example: (
                <div className="p-3 bg-green-100 u-round-xs u-relative u-overflow-y-auto">
                    <p className="font-bold">Visible</p>
                    <div
                        className="u-round-xs bg-green-200 u-overflow-visible"
                        style={{
                            height: '200px',
                        }}
                    >
                        <p className="px-2 text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-visible">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will show the overflow of any child element for both the x and y-axis.
                </p>
            ),
        },
        {
            name: 'scroll',
            example: (
                <div className="p-3 bg-orange-100 u-round-xs u-relative">
                    <p className="font-bold">Scroll</p>
                    <div
                        className="u-round-xs bg-orange-200 u-overflow-scroll"
                        style={{
                            height: '200px',
                        }}
                    >
                        <p className="px-2 text-orange-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-orange-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-scroll">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements at any time for either the x-axis, y-axis, or both. Unlike its <code>auto</code> variant, this will show scroll bars at all times for x and y-axis.
                </p>
            ),
        },
    ];

    const overflowXExamples: DocExample[] = [
        {
            name: 'auto',
            example: (
                <div className="p-3 bg-purple-100 u-round-xs u-relative">
                    <p className="font-bold">Auto</p>
                    <div
                        className="u-round-xs bg-purple-200 u-overflow-x-auto w-50"
                    >
                        <p className="px-2 text-purple-700" style={{ width: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-auto">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements whenever necessary for the x-axis.
                </p>
            ),
        },
        {
            name: 'hidden',
            example: (
                <div className="p-3 bg-blue-100 u-round-xs u-relative">
                    <p className="font-bold">Hidden</p>
                    <div
                        className="u-round-xs bg-blue-200 u-overflow-x-hidden w-50"
                    >
                        <p className="px-2 text-blue-700" style={{ width: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-x-hidden">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will hide the overflow of any child element for the x-axis.
                </p>
            ),
        },
        {
            name: 'visible',
            example: (
                <div className="p-3 bg-green-100 u-round-xs u-relative u-overflow-y-auto">
                    <p className="font-bold">Visible</p>
                    <div
                        className="u-round-xs bg-green-200 u-overflow-x-visible w-50"
                    >
                        <p className="px-2 text-green-700" style={{ width: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-x-visible">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will show the overflow of any child element for the x-axis.
                </p>
            ),
        },
        {
            name: 'scroll',
            example: (
                <div className="p-3 bg-orange-100 u-round-xs u-relative">
                    <p className="font-bold">Scroll</p>
                    <div
                        className="u-round-xs bg-orange-200 u-overflow-x-scroll"
                    >
                        <p className="px-2 text-orange-700" style={{ width: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-x-scroll">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements to handle child elements overflowing the width. Unlike its <code>auto</code> variant, this will show scroll bars at all times for the x-axis.
                </p>
            ),
        },
    ];

    
    const overflowYExamples: DocExample[] = [
        {
            name: 'auto',
            example: (
                <div className="p-3 bg-purple-100 u-round-xs u-relative">
                    <p className="font-bold">Auto</p>
                    <div
                        className="u-round-xs bg-purple-200 u-overflow-auto"
                        style={{ height: '200px'}}
                    >
                        <p className="px-2 text-purple-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-purple-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-auto">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements whenever necessary for the y-axis.
                </p>
            ),
        },
        {
            name: 'hidden',
            example: (
                <div className="p-3 bg-blue-100 u-round-xs u-relative">
                    <p className="font-bold">Hidden</p>
                    <div
                        className="u-round-xs bg-blue-200 u-overflow-y-hidden"
                        style={{ height: '200px'}}
                    >
                        <p className="px-2 text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-blue-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-y-hidden">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will hide the overflow of any child element for the y-axis.
                </p>
            ),
        },
        {
            name: 'visible',
            example: (
                <div className="p-3 bg-green-100 u-round-xs u-relative u-overflow-y-auto">
                    <p className="font-bold">Visible</p>
                    <div
                        className="u-round-xs bg-green-200 u-overflow-y-visible"
                        style={{ height: '200px'}}
                    >
                        <p className="px-2 text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-y-visible">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class will show the overflow of any child element for the y-axis.
                </p>
            ),
        },
        {
            name: 'scroll',
            example: (
                <div className="p-3 bg-orange-100 u-round-xs u-relative">
                    <p className="font-bold">Scroll</p>
                    <div
                        className="u-round-xs bg-orange-200 u-overflow-y-scroll"
                        style={{ height: '350px'}}
                    >
                        <p className="px-2 text-orange-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                        <p className="px-2 text-orange-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                    </div>
                </div>
            ),
            code: `<div class="u-overflow-y-scroll">
    <!-- -->
</div>`,
            description: (
                <p>
                    This class adds scrolling to elements to handle child elements overflowing the height. Unlike its <code>auto</code> variant, this will show scroll bars at all times for the y-axis.
                </p>
            ),
        },
    ];

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Overflow</title>
            </Head>
            <div>
                <section className="padtop" id="overflow">
                    <div className="content">
                        <Headline title="Overflow" link="#overflow" />
                        <div className="divider"></div>
                        <p>
                            Below are a bunch of utility classes that deal with the overflow behavior of different elements.
                        </p>

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

                <section className="padtop" id="both">
                    <div className="content">
                        <Headline title="Both" link="#both" size="4" />

                        <div className="divider"></div>

                        <p>These are overflow classes for both the x and y-axis.</p>

                        {overflowExamples.map((display) => {
                            return (
                                <>
                                    <h6>{Capitalize(display.name)}</h6>

                                    {display.description}

                                    {display.example}
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                
                <section className="padtop" id="overflowX">
                    <div className="content">
                        <Headline title="Overflow X" link="#overflowX" size="4" />

                        <div className="divider"></div>

                        <p>These are overflow classes for the x-axis.</p>

                        {overflowXExamples.map((display) => {
                            return (
                                <>
                                    <h6>{Capitalize(display.name)}</h6>

                                    {display.description}

                                    {display.example}
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                
                <section className="padtop" id="overflowY">
                    <div className="content">
                        <Headline title="Overflow Y" link="#overflowY" size="4" />

                        <div className="divider"></div>

                        <p>These are overflow classes for the y-axis.</p>

                        {overflowYExamples.map((display) => {
                            return (
                                <>
                                    <h6>{Capitalize(display.name)}</h6>

                                    {display.description}

                                    {display.example}
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Misc', link: './misc' }}
                    nextLink={{
                        name: 'Positions',
                        link: './positions',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(OverflowUtilsPage);
