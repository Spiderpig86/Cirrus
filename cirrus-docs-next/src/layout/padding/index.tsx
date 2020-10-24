import React, { useEffect, useState } from 'react';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FormatString } from '../../../utils/string';
import { DefaultLayout } from '../../../layouts/default';

export const PaddingPage: React.FC<any> = (props) => {
    const sizes = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
    const types = [
        {
            class: `p-(0)`,
            style: `padding: (0) !important;`,
        },
        {
            class: `px-(0)`,
            style: `padding-left: (0) !important; padding-right: (0) !important;`,
        },
        {
            class: `py-(0)`,
            style: `padding-top: (0) !important; padding-bottom: (0) !important;`,
        },
        {
            class: `pt-(0)`,
            style: `padding-top: (0) !important;`,
        },
        {
            class: `pb-(0)`,
            style: `padding-bottom: (0) !important;`,
        },
        {
            class: `pl-(0)`,
            style: `padding-left: (0) !important;`,
        },
        {
            class: `pr-(0)`,
            style: `padding-right: (0) !important;`,
        },
    ];
    let [classTable, setClassTable] = useState([] as any[]);

    useEffect(() => {
        const rows = types.map((type) => {
            return sizes.map((size) => {
                return {
                    class: FormatString(type.class, size.toString()),
                    style: FormatString(type.style, `${0.5 * size}rem`),
                };
            });
        });
        setClassTable(([] as any).concat(...rows));
    }, []);

    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="padding">
                    <div className="content">
                        <Headline title="Padding" link="#padding" />
                        <div className="divider"></div>
                        <p>These are utility classes used to add padding for any element.</p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            These are the different sizes supported for padding. Note that all calculations are based
                            around <code>0.5rem</code> or <code>8px</code>.
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
                            <tbody
                                style={{
                                    height: '500px',
                                }}
                            >
                                {classTable.map((row) => (
                                    <tr>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-blue-600 bg-blue-100">{row.class}</code>
                                        </td>
                                        <td>
                                            <code>{row.style}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="all">
                    <div className="content">
                        <Headline title="All Sides" link="#all" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add padding on all sides of an element using the <code>p-&lt;size&gt;</code> class.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex p-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        p-4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="bg-indigo-200 u-inline-flex p-4"><span class="bg-indigo-500 p-1 white">p-4</span></div>`} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="both">
                    <div className="content">
                        <Headline title="Both Sides" link="#both" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add padding to either left and right or top and bottom with the{' '}
                            <code>px-&lt;size&gt;</code> and <code>py-&lt;size&gt;</code> classes respectively.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex px-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        px-4
                                    </span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex py-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        py-4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="bg-indigo-200 u-inline-flex px-4"><span class="bg-indigo-500 p-1 white">px-4</span></div>
<div class="bg-indigo-200 u-inline-flex py-4"><span class="bg-indigo-500 p-1 white">py-4</span></div>`} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="single">
                    <div className="content">
                        <Headline title="Single Side" link="#single" size="4" />
                        <div className="divider"></div>
                        <p>For adding padding for only a single side, the class follows a convention like <code>p&lt;l|r|t|b&gt;-&lt;size&gt;</code>.</p>

                        
                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex pl-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        pl-4
                                    </span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex pr-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        pr-4
                                    </span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex pt-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        pt-4
                                    </span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex pb-4">
                                    <span className="bg-indigo-500 p-1 white">
                                        pb-4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="bg-indigo-200 u-inline-flex pl-4"><span class="bg-indigo-500 p-1 white">pl-4</span></div>
<div class="bg-indigo-200 u-inline-flex pr-4"><span class="bg-indigo-500 p-1 white">pr-4</span></div>
<div class="bg-indigo-200 u-inline-flex pt-4"><span class="bg-indigo-500 p-1 white">pt-4</span></div>
<div class="bg-indigo-200 u-inline-flex pb-4"><span class="bg-indigo-500 p-1 white">pb-4</span></div>`} language='htmlbars' />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Media', link: './media' }}
                    nextLink={{ name: 'Spacing', link: './spacing' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PaddingPage);