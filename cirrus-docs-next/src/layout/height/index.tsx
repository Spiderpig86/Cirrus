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

export const HeightPage: React.FC<any> = (props) => {
    const heightClasses = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

    let classTable = heightClasses.map((value) => {
        return {
            class: `h-${value}`,
            style: `height: ${value}%;`,
        };
    });
    classTable = classTable.concat([
        {
            class: `h-auto`,
            style: `height: auto;`,
        },
        {
            class: `h-screen`,
            style: `height: 100vh;`,
        },
    ]);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Height</title>
            </Head>

            <div>
                <section className="padtop" id="height">
                    <div className="content">
                        <Headline title="Height" link="#height" />
                        <div className="divider"></div>
                        <p>Classes to set the height of an element.</p>

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
                            <tbody
                                style={{
                                    height: '400px',
                                }}
                            >
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

                <section className="padtop" id="scaled">
                    <div className="content">
                        <Headline title="Scaled Heights" link="#scaled" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-{{value}}`}</code> classes gives an element a percentage based height.
                        </p>

                        <div
                            className="u-flex u-items-flex-end u-justify-space-evenly p-6 bg-teal-100 mb-2"
                            style={{
                                height: '400px',
                            }}
                        >
                            <div className="h-30 bg-teal-500 u-round-xs p-1">
                                <p className="text-gray-000">h-30</p>
                            </div>
                            <div className="h-50 bg-teal-500 u-round-xs p-1">
                                <p className="text-gray-000">h-50</p>
                            </div>
                            <div className="h-70 bg-teal-500 u-round-xs p-1">
                                <p className="text-gray-000">h-70</p>
                            </div>
                            <div className="h-90 bg-teal-500 u-round-xs p-1">
                                <p className="text-gray-000">h-90</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-30">...</div>
    <div class="h-50">...</div>
    <div class="h-70">...</div>
    <div class="h-90">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="screen">
                    <div className="content">
                        <Headline title="Screen Height" link="#screen" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-screen`}</code> class makes an element span the entire viewport.
                        </p>

                        <div
                            className="u-relative p-6 bg-purple-100 mb-2"
                            style={{
                                minHeight: '400px',
                            }}
                        >
                            <div className="h-screen bg-purple-500 text-gray-000 p-3 w-100 u-flex u-items-center u-justify-center u-round-xs">
                                <p>h-screen</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-screen">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="auto">
                    <div className="content">
                        <Headline title="Auto" link="#auto" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-auto`}</code> class makes an element use a browser determined height. This is
                            commonly used to unset a previously set height.
                        </p>

                        <div
                            className="u-relative p-6 bg-red-100 mb-2"
                            style={{
                                minHeight: '200px',
                            }}
                        >
                            <div className="h-auto bg-red-500 text-gray-000 p-3 w-100 u-flex u-items-center u-justify-center u-round-xs">
                                <p>h-auto</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-auto">...</div>
</div>`}
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Header', link: './header' }}
                    nextLink={{ name: 'Hero', link: './hero' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(HeightPage);
