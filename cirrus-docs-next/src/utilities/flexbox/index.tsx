import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';

// TODO: Move to models package
export interface DocExample {
    name: string;
    example: JSX.Element;
    code: string;
    description?: JSX.Element;
}

export const FlexboxUtilsPage: React.FC<any> = (props) => {
    const flexDirectionNames = ['row', 'row-reverse', 'column', 'column-reverse'];
    const justifyContentNames = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    const alignItemNames = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'];

    const flexDocExamples: DocExample[] = [
        {
            name: 'row',
            example: (
                <div className="u-flex u-flex-row">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-row">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'row-reverse',
            example: (
                <div className="u-flex u-flex-row-reverse">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-row-reverse">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'column',
            example: (
                <div className="u-flex u-flex-column">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-column">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'column-reverse',
            example: (
                <div className="u-flex u-flex-column-reverse">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-column-reverse">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
    ];
    const alignDocExamples: DocExample[] = [
        {
            name: 'stretch',
            example: (
                <div
                    className="u-flex u-items-stretch"
                    style={{
                        height: '150px',
                    }}
                >
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-stretch" style="height: 150px;">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'flex-start',
            example: (
                <div
                    className="u-flex u-items-flex-start"
                    style={{
                        height: '150px',
                    }}
                >
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-flex-start" style="height: 150px;">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'center',
            example: (
                <div
                    className="u-flex u-items-center"
                    style={{
                        height: '150px',
                    }}
                >
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-center" style="height: 150px;">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'flex-end',
            example: (
                <div
                    className="u-flex u-items-flex-end"
                    style={{
                        height: '150px',
                    }}
                >
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-flex-end" style="height: 150px;">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'baseline',
            example: (
                <div
                    className="u-flex u-items-baseline"
                    style={{
                        height: '150px',
                    }}
                >
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">
                        <h3>a</h3>
                    </div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">
                        <h6>b</h6>
                    </div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-baseline" style="height: 150px;">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">
        <h3>a</h3></div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">
        <h6>b</h6></div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
            description: (
                <p>
                    Sets the flex direction to be <code>baseline</code> using the <code>u-items-baseline</code> class.
                    Note that the items are aligned based on their respective baselines despite the differences in size.
                </p>
            ),
        },
    ];
    const justifyDocExamples: DocExample[] = [
        {
            name: 'flex-start',
            example: (
                <div className="u-flex u-justify-flex-start">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-flex-start">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'center',
            example: (
                <div className="u-flex u-justify-center">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-flex-center">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'flex-end',
            example: (
                <div className="u-flex u-justify-flex-end">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-flex-end">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
        },
        {
            name: 'space-between',
            example: (
                <div className="u-flex u-justify-space-between">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-between">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
            description: (
                <p>
                    Sets the item justification to be <code>space-between</code> using the{' '}
                    <code>u-justify-space-between</code> class. This class ensures equal spacing among the elements, but
                    not outside of it.
                </p>
            ),
        },
        {
            name: 'space-around',
            example: (
                <div className="u-flex u-justify-space-around">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-around">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
            description: (
                <p>
                    Sets the item justification to be <code>space-between</code> using the{' '}
                    <code>u-justify-space-between</code> class. This class ensures equal spacing among the elements and
                    outside of it.
                </p>
            ),
        },
        {
            name: 'space-evenly',
            example: (
                <div className="u-flex u-justify-space-evenly">
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                    <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-evenly">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`,
            description: (
                <p>
                    Sets the item justification to be <code>space-between</code> using the{' '}
                    <code>u-justify-space-between</code> class. This class ensures equal spacing among the elements, but
                    doubles the space outside of it.
                </p>
            ),
        },
    ];

    let classTable = [
        {
            class: `u-flex`,
            style: `display: flex;`,
        },
        {
            class: `u-inline-flex`,
            style: `display: inline-flex;`,
        },
    ];
    classTable = classTable.concat(
        flexDirectionNames.map((display) => {
            return {
                class: `u-flex-${display}`,
                style: `display: ${display};`,
            };
        }),
        alignItemNames.map((align) => {
            return {
                class: `u-align-${align}`,
                style: `align-items: ${align};`,
            };
        }),
        justifyContentNames.map((justify) => {
            return {
                class: `u-justify-${justify}`,
                style: `justify-content: ${justify};`,
            };
        })
    );

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Flexbox</title>
            </Head>
            <div>
                <section className="padtop" id="flexbox">
                    <div className="content">
                        <Headline title="Flexbox" link="#flexbox" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>These are utility classes that are related to flexbox.</p>

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
                                            <code>{row.style}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="flex">
                    <div className="content">
                        <Headline title="Flex" link="#flex" size="4" />
                        <div className="divider"></div>
                        <p>
                            To use the classes that are listed above (besides the ones listed here), you must wrap them
                            with either a <code>u-flex</code> or <code>u-inline-flex</code> class.
                        </p>

                        <h6>Flex</h6>
                        <p>
                            The standard flex layout with the <code>u-flex</code> class.
                        </p>
                        <div className="u-flex bg-orange-100">
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex bg-orange-100">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>

                        <h6>Inline Flex</h6>
                        <p>
                            The inline flex layout with the <code>u-inline-flex</code> class.
                        </p>
                        <div className="u-inline-flex bg-orange-100">
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
                            <div className="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-inline-flex bg-orange-100">
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">a</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">b</div>
    <div class="bg-orange-200 px-2 py-1 m-1 u-round">c</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="direction">
                    <div className="content">
                        <Headline title="Flex Direction" link="#direction" size="4" />
                        <div className="divider"></div>

                        {flexDocExamples.map((flexDirection) => {
                            return (
                                <>
                                    <h6>{Capitalize(flexDirection.name)}</h6>

                                    {flexDirection.description ?? (
                                        <p>
                                            Sets the flex direction to be <code>{flexDirection.name}</code> using the{' '}
                                            <code>u-flex-{flexDirection.name}</code> class.
                                        </p>
                                    )}

                                    <div className="bg-orange-100 u-round">{flexDirection.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={flexDirection.code} language="htmlbars" />
                                    <div className="space large"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <section className="padtop" id="align">
                    <div className="content">
                        <Headline title="Align Items" link="#align" size="4" />
                        <div className="divider"></div>
                        <p>Used for setting the alignment of items vertically.</p>

                        {alignDocExamples.map((alignDocs) => {
                            return (
                                <>
                                    <h6>{Capitalize(alignDocs.name)}</h6>

                                    {alignDocs.description ?? (
                                        <p>
                                            Sets the item alignment to be <code>{alignDocs.name}</code> using the{' '}
                                            <code>u-items-{alignDocs.name}</code> class.
                                        </p>
                                    )}

                                    <div className="bg-orange-100 u-round">{alignDocs.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={alignDocs.code} language="htmlbars" />
                                    <div className="space large"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <section className="padtop" id="justify">
                    <div className="content">
                        <Headline title="Justify Content" link="#justify" size="4" />
                        <div className="divider"></div>
                        <p>Used for setting the alignment of items horizontally.</p>

                        {justifyDocExamples.map((justifyDocs) => {
                            return (
                                <>
                                    <h6>{Capitalize(justifyDocs.name)}</h6>

                                    {justifyDocs.description ?? (
                                        <p>
                                            Sets the item justification to be <code>{justifyDocs.name}</code> using the{' '}
                                            <code>u-justify-{justifyDocs.name}</code> class.
                                        </p>
                                    )}

                                    <div className="bg-orange-100 u-round">{justifyDocs.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={justifyDocs.code} language="htmlbars" />
                                    <div className="space large"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Display', link: './display' }}
                    nextLink={{ name: 'Misc', link: './misc' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FlexboxUtilsPage);
