import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { ResizableInternal } from '../../../layouts/components/resizable';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { DocExample } from '../../../models/doc-example';

export const FlexboxUtilsPage: React.FC<any> = (props) => {
    const flexDirectionNames = ['row', 'row-reverse', 'column', 'column-reverse'];
    const justifyContentNames = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    const alignItemNames = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'];
    const flexGrowShrinkNames = ['0', '1'];
    const flexBasisNames = ['auto', 'max-content', 'min-content', 'fit-content', 'content', 'revert', 'revert-layer'];

    const flexDocExamples: DocExample[] = [
        {
            name: 'row',
            example: (
                <div className="u-flex u-flex-row">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-row">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'row-reverse',
            example: (
                <div className="u-flex u-flex-row-reverse">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-row-reverse">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'column',
            example: (
                <div className="u-flex u-flex-column">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-column">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'column-reverse',
            example: (
                <div className="u-flex u-flex-column-reverse">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-flex-column-reverse">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-stretch" style="height: 150px;">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-flex-start" style="height: 150px;">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-center" style="height: 150px;">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-flex-end" style="height: 150px;">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">
                        <h3>a</h3>
                    </div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">
                        <h6>b</h6>
                    </div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-items-baseline" style="height: 150px;">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">
        <h3>a</h3></div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">
        <h6>b</h6></div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-flex-start">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'center',
            example: (
                <div className="u-flex u-justify-center">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-center">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'flex-end',
            example: (
                <div className="u-flex u-justify-flex-end">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-flex-end">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'space-between',
            example: (
                <div className="u-flex u-justify-space-between">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-between">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-around">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
            description: (
                <p>
                    Sets the item justification to be <code>space-around</code> using the{' '}
                    <code>u-justify-space-around</code> class. This class ensures equal spacing among the elements and
                    outside of it.
                </p>
            ),
        },
        {
            name: 'space-evenly',
            example: (
                <div className="u-flex u-justify-space-evenly">
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                    <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                </div>
            ),
            code: `<div class="u-flex u-justify-space-evenly">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
            description: (
                <p>
                    Sets the item justification to be <code>space-evenly</code> using the{' '}
                    <code>u-justify-space-evenly</code> class. This class ensures equal spacing among the elements, but
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
                style: `display: ${display} !important;`,
            };
        }),
        alignItemNames.map((align) => {
            return {
                class: `u-align-${align}`,
                style: `align-items: ${align} !important;`,
            };
        }),
        justifyContentNames.map((justify) => {
            return {
                class: `u-justify-${justify}`,
                style: `justify-content: ${justify} !important;`,
            };
        }),
        flexGrowShrinkNames.map((size) => {
            return {
                class: `u-flex-grow-${size}`,
                style: `flex-grow: ${size} !important;`,
            };
        }),
        flexGrowShrinkNames.map((size) => {
            return {
                class: `u-flex-shrink-${size}`,
                style: `flex-shrink: ${size} !important;`,
            };
        }),
        flexBasisNames.map((basis) => {
            return {
                class: `u-basis-${basis}`,
                style: `flex-basis: ${basis} !important;`,
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
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>These are utility classes that are related to flexbox.</p>

                        <ClassTable classTable={classTable} />
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
                        <div className="u-flex bg-green-100 u-round-xs">
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex bg-green-100">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Inline Flex</h6>
                        <p>
                            The inline flex layout with the <code>u-inline-flex</code> class.
                        </p>
                        <div className="u-inline-flex bg-green-100 u-round-xs">
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
                            <div className="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-inline-flex bg-green-100">
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">b</div>
    <div class="bg-green-500 u-shadow-lg text-white px-2 py-1 m-1 u-round-xs">c</div>
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

                                    <div className="bg-green-100 u-round-xs">{flexDirection.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={flexDirection.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
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

                                    <div className="bg-green-100 u-round-xs">{alignDocs.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={alignDocs.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
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

                                    <div className="bg-green-100 u-round-xs">{justifyDocs.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={justifyDocs.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <section className="padtop" id="flex-grow">
                    <div className="content">
                        <Headline title="Flex Grow" link="#flex-grow" size="4" />
                        <div className="divider"></div>
                        <p>
                            Flex grow utilities control how elements will grow in a flex display. Classes follow the
                            form of <code>u-flex-grow-[0|1]</code>.
                        </p>

                        <div className="space space--xl"></div>

                        <p>
                            Use <code>u-flex-grow-1</code> to allow a flex item to grow relative to the parent and
                            sibling elements.
                        </p>

                        <div
                            style={{
                                height: '100px',
                                width: '100%',
                            }}
                        >
                            <ResizableInternal>
                                <div className="u-flex u-gap-2 u-round-xs bg-indigo-100 p-3 text-white font-bold u-text-center">
                                    <div className="u-round-xs u-shadow-lg bg-indigo-300 p-2 u-flex-grow-0">0</div>
                                    <div className="u-round-xs u-shadow-lg bg-indigo-500 p-2 u-flex-grow-1">1</div>
                                    <div className="u-round-xs u-shadow-lg bg-indigo-300 p-2 u-flex-grow-0">0</div>
                                </div>
                            </ResizableInternal>
                        </div>
                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-gap-2 u-round-xs bg-indigo-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-indigo-300 p-2 u-flex-grow-0">0</div>
    <div class="u-round-xs u-shadow-lg bg-indigo-500 p-2 u-flex-grow-1">1</div>
    <div class="u-round-xs u-shadow-lg bg-indigo-300 p-2 u-flex-grow-0">0</div>
</div>`}
                            language="htmlbars"
                        />

                        <div className="space space--xl"></div>

                        <p>
                            Use <code>u-flex-grow-0</code> to prevnt a flex item from growing relative to the parent and
                            sibling elements.
                        </p>

                        <div
                            style={{
                                height: '100px',
                                width: '100%',
                            }}
                        >
                            <ResizableInternal>
                                <div className="u-flex u-gap-2 u-round-xs bg-pink-100 p-3 text-white font-bold u-text-center">
                                    <div className="u-round-xs u-shadow-lg bg-pink-300 p-2 u-flex-grow-1">1</div>
                                    <div className="u-round-xs u-shadow-lg bg-pink-500 p-2 u-flex-grow-0">0</div>
                                    <div className="u-round-xs u-shadow-lg bg-pink-300 p-2 u-flex-grow-1">1</div>
                                </div>
                            </ResizableInternal>
                        </div>
                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-gap-2 u-round-xs bg-blue-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-blue-300 p-2">0</div>
    <div class="u-round-xs u-shadow-lg bg-blue-500 p-2 u-flex-shrink-1 w-100p">1</div>
    <div class="u-round-xs u-shadow-lg bg-blue-300 p-2">0</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="flex-shrink">
                    <div className="content">
                        <Headline title="Flex Shrink" link="#flex-shrink" size="4" />
                        <div className="divider"></div>
                        <p>
                            Flex shrink utilities control how elements will shrink in a flex display. Classes follow the
                            form of <code>u-flex-shrink-[0|1]</code>.
                        </p>

                        <div className="space space--lg"></div>

                        <p>
                            Use <code>u-flex-shrink-1</code> to allow a flex item to shrink relative to the parent and
                            sibling elements.
                        </p>

                        <div
                            style={{
                                height: '100px',
                                width: '100%',
                            }}
                        >
                            <ResizableInternal>
                                <div className="u-flex u-gap-2 u-round-xs bg-blue-100 p-3 text-white font-bold u-text-center">
                                    <div className="u-round-xs u-shadow-lg bg-blue-300 p-2">0</div>
                                    <div className="u-round-xs u-shadow-lg bg-blue-500 p-2 u-flex-shrink-1 w-100p">
                                        1
                                    </div>
                                    <div className="u-round-xs u-shadow-lg bg-blue-300 p-2">0</div>
                                </div>
                            </ResizableInternal>
                        </div>
                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-gap-2 u-round-xs bg-orange-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-orange-300 p-2 u-flex-grow-1 u-flex-shrink-1">1</div>
    <div class="u-round-xs u-shadow-lg bg-orange-500 p-2 u-flex-shrink-0" style="width: 8rem;">0</div>
    <div class="u-round-xs u-shadow-lg bg-orange-300 p-2 u-flex-grow-1 u-flex-shrink-1">1</div>
</div>`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <p>
                            Use <code>u-flex-shrink-0</code> to prevent a flex item to shrink relative to the parent and
                            sibling elements.
                        </p>

                        <div
                            style={{
                                height: '100px',
                                width: '100%',
                            }}
                        >
                            <ResizableInternal minWidth="300px">
                                <div className="u-flex u-gap-2 u-round-xs bg-orange-100 p-3 text-white font-bold u-text-center">
                                    <div className="u-round-xs u-shadow-lg bg-orange-300 p-2 u-flex-grow-1 u-flex-shrink-1">
                                        1
                                    </div>
                                    <div
                                        className="u-round-xs u-shadow-lg bg-orange-500 p-2 u-flex-shrink-0"
                                        style={{ width: '8rem' }}
                                    >
                                        0
                                    </div>
                                    <div className="u-round-xs u-shadow-lg bg-orange-300 p-2 u-flex-grow-1 u-flex-shrink-1">
                                        1
                                    </div>
                                </div>
                            </ResizableInternal>
                        </div>
                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-gap-2 u-round-xs bg-pink-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-pink-300 p-2 u-flex-shrink-0">0</div>
    <div class="u-round-xs u-shadow-lg bg-pink-500 p-2 u-flex-shrink-1">1</div>
    <div class="u-round-xs u-shadow-lg bg-pink-300 p-2 u-flex-shrink-0">0</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="flex-wraps">
                    <div className="content">
                        <Headline title="Flex Wrap" link="#flex-wraps" size="4" />
                        <div className="divider"></div>
                        <p>
                            Flex wrap utilities control how flex elements wrap inside the parent container. Classes
                            follow the form of <code>u-flex-[wrap|nowrap|wrap-reverse]</code>.
                        </p>

                        <div className="space"></div>

                        <Headline size="6" title="Wrap" link="#flex-wrap" />
                        <p>
                            Use <code>u-flex-wrap</code> to allow flex elements to wrap in the parent.
                        </p>

                        <div className="u-flex u-flex-wrap u-gap-2 u-round-xs bg-pink-100 p-3 text-white font-bold u-text-center">
                            <div className="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">1</div>
                            <div className="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">2</div>
                            <div className="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">3</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-flex-wrap u-gap-2 u-round-xs bg-pink-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">1</div>
    <div class="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">2</div>
    <div class="u-round-xs u-shadow-lg bg-pink-500 p-2 w-40p">3</div>
</div>`}
                            language="html"
                        />
                        <div className="space space--lg"></div>

                        <Headline size="6" title="No Wrap" link="#flex-nowrap" />
                        <p>
                            Use <code>u-flex-nowrap</code> to prevent flex elements from wrapping in the parent.
                        </p>

                        <div className="u-flex u-flex-nowrap u-gap-2 u-round-xs bg-teal-100 p-3 text-white font-bold u-text-center">
                            <div className="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">1</div>
                            <div className="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">2</div>
                            <div className="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">3</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-flex-nowrap u-gap-2 u-round-xs bg-teal-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">1</div>
    <div class="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">2</div>
    <div class="u-round-xs u-shadow-lg bg-teal-500 p-2 w-40p">3</div>
</div>`}
                            language="html"
                        />
                        <div className="space space--lg"></div>

                        <Headline size="6" title="Wrap Reverse" link="#flex-wrap-reverse" />
                        <p>
                            Use <code>u-flex-wrap-reverse</code> wrap elements in reverse.
                        </p>

                        <div className="u-flex u-flex-wrap-reverse u-gap-2 u-round-xs bg-indigo-100 p-3 text-white font-bold u-text-center">
                            <div className="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">1</div>
                            <div className="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">2</div>
                            <div className="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">3</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex u-flex-wrap-reverse u-gap-2 u-round-xs bg-indigo-100 p-3 text-white font-bold u-text-center">
    <div class="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">1</div>
    <div class="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">2</div>
    <div class="u-round-xs u-shadow-lg bg-indigo-500 p-2 w-40p">3</div>
</div>`}
                            language="html"
                        />
                    </div>
                </section>

                <section className="padtop" id="flex-basis">
                    <div className="content">
                        <Headline title="Flex Basis" link="#flex-basis" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.7.1</div>
                        </span>

                        <p>Utility classes to set the initial size for flexbox based items.</p>
                        <div className="u-flex h-12 bg-orange-200 u-round-xs p-3 font-bold text-white u-gap-1">
                            <div className="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-auto">
                                auto
                            </div>
                            <div className="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-max-content">
                                max-content
                            </div>
                            <div className="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-min-content">
                                min-content
                            </div>
                            <div className="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-fit-content">
                                fit-content
                            </div>
                            <div className="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-content">
                                content
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-flex h-12 bg-orange-200 u-round-xs p-3 font-bold text-white u-gap-1">
    <div class="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-auto">auto</div>
    <div class="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-max-content">
        max-content
    </div>
    <div class="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-min-content">
        min-content
    </div>
    <div class="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-fit-content">
        fit-content
    </div>
    <div class="bg-orange-500 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-basis-content">content</div>
</div>`}
                            language="html"
                        />
                        <div className="space space--lg"></div>

                        <p>
                            You can also use <code>flex-basis</code> util classes with percentages.
                        </p>
                        <div className="u-flex h-12 bg-red-200 font-bold text-white p-3 u-gap-1">
                            <div className="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-20p">
                                20
                            </div>
                            <div className="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-30p">
                                30
                            </div>
                            <div className="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-50p">
                                50
                            </div>
                        </div>
                        <div className="space"></div>
                        
                        <CodeBlock
                            code={`<div class="u-flex h-12 bg-red-200 font-bold text-white p-3 u-gap-1">
    <div class="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-20p">20</div>
    <div class="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-30p">30</div>
    <div class="bg-red-600 u-shadow-lg p-2 u-round-xs u-flex u-items-center u-justify-center u-basis-50p">50</div>
</div>`}
                            language="html"
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
                            use <code>u-flex-row-md</code> to apply <code>u-flex-row</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-flex u-flex-column u-flex-row-md">
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

                <Pagination
                    prevLink={{ name: 'Display', link: './display' }}
                    nextLink={{ name: 'Gap', link: './gap' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FlexboxUtilsPage);
