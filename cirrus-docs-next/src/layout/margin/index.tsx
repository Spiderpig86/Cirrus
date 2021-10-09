import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FormatString } from '../../../utils/string';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import Link from 'next/link';

export const MarginPage: React.FC<any> = (props) => {
    const sizes = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
    const types = [
        {
            class: `m-(0)`,
            style: `margin: (0) !important;`,
        },
        {
            class: `mx-(0)`,
            style: `margin-left: (0) !important; margin-right: (0) !important;`,
        },
        {
            class: `my-(0)`,
            style: `margin-top: (0) !important; margin-bottom: (0) !important;`,
        },
        {
            class: `mt-(0)`,
            style: `margin-top: (0) !important;`,
        },
        {
            class: `mb-(0)`,
            style: `margin-bottom: (0) !important;`,
        },
        {
            class: `ml-(0)`,
            style: `margin-left: (0) !important;`,
        },
        {
            class: `mr-(0)`,
            style: `margin-right: (0) !important;`,
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
            <Head>
                <title>{PAGE_TITLE_PREFIX} Margin</title>
            </Head>
            <div>
                <section className="padtop" id="margin">
                    <div className="content">
                        <Headline title="Margin" link="#margin" />
                        <div className="divider"></div>
                        <p>These are utility classes used to add margins for any element.</p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            These are the different sizes supported for margins. Note that all calculations are based
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

                <section className="padtop" id="all">
                    <div className="content">
                        <Headline title="All Sides" link="#all" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add a margin on all sides of an element using the <code>m-&lt;size&gt;</code> class.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 m-4 white">m-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 m-4 white">m-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="both">
                    <div className="content">
                        <Headline title="Both Sides" link="#both" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add a margin to either left and right or top and bottom with the{' '}
                            <code>mx-&lt;size&gt;</code> and <code>my-&lt;size&gt;</code> classes respectively.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 mx-4 white">mx-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 my-4 white">my-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 mx-4 white">mx-4</span></div>
<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 my-4 white">my-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="single">
                    <div className="content">
                        <Headline title="Single Side" link="#single" size="4" />
                        <div className="divider"></div>
                        <p>
                            For adding a margin for only a single side, the class follows a convention like{' '}
                            <code>m&lt;l|r|t|b&gt;-&lt;size&gt;</code>.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 ml-4 white">ml-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 mr-4 white">mr-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 mt-4 white">mt-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-200 u-inline-flex">
                                    <span className="bg-indigo-500 p-1 mb-4 white">mb-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 ml-4 white">ml-4</span></div>
<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 mr-4 white">mr-4</span></div>
<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 mt-4 white">mt-4</span></div>
<div class="bg-indigo-200 u-inline-flex"><span class="bg-indigo-500 p-1 mb-4 white">mb-4</span></div>`}
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
                            <div className="tag tag--info">0.6.3</div>
                        </span>
                        <p>
                            The margin classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>u-flex-row-md</code> to apply <code>u-flex-row</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-flex u-flex-column u-flex-row-md">
    <!-- ... -->
</div>`}
                            language="html"
                        />

                        <p>Try out the example below yourself by resizing your browser window.</p>

                        <div className="mb-1">
                            <div className="bg-orange-100 p-2 u-round u-flex u-justify-center u-items-center">
                                <p className="bg-orange-300 p-3 u-round my-1 mr-1 mr-5-sm mr-10-md">Shrink</p>
                                <p className="bg-orange-300 p-3 u-round my-1 ml-1 ml-5-sm ml-10-md">Window</p>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="bg-orange-100 p-2 u-round u-flex u-justify-center u-items-center">
    <p class="bg-orange-300 p-3 u-round my-1 mr-1 mr-5-sm mr-10-md">Shrink</p>
    <p class="bg-orange-300 p-3 u-round my-1 ml-1 ml-5-sm ml-10-md">Window</p>
</div>`}
                            language="htmlbars"
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

                <Pagination
                    prevLink={{ name: 'Level', link: './level' }}
                    nextLink={{ name: 'Media', link: './media' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MarginPage);
