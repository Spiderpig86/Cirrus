import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { DocExample } from '../../../models/doc-example';

export const DisplayUtilsPage: React.FC<any> = (props) => {
    const displayNames = ['none', 'inline', 'inline-block', 'block', 'table', 'table-row', 'table-cell'];
    const docExamples: DocExample[] = [
        {
            name: 'none',
            example: (
                <div className="p-3 bg-blue-100 u-round-xs text-white">
                    <div className="u-text-center">
                        <div className="bg-blue-500 px-2 py-1 m-1 u-round-xs">a</div>
                        <div className="bg-blue-500 px-2 py-1 m-1 u-round-xs u-none">b</div>
                        <div className="bg-blue-500 px-2 py-1 m-1 u-round-xs">c</div>
                    </div>
                </div>
            ),
            code: `<div class="u-text-center">
    <div class="bg-blue-500 px-2 py-1 m-1 u-round-xs">a</div>
    <div class="bg-blue-500 px-2 py-1 m-1 u-round-xs u-none">b</div>
    <div class="bg-blue-500 px-2 py-1 m-1 u-round-xs">c</div>
</div>`,
        },
        {
            name: 'inline',
            example: (
                <div className="p-3 bg-pink-100 text-white u-round-xs">
                    <div className="bg-pink-300">
                        <div className="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">a</div>
                        <div className="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">b</div>
                        <div className="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">c</div>
                    </div>
                </div>
            ),
            code: `<div class="bg-pink-300">
    <div class="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">a</div>
    <div class="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">b</div>
    <div class="bg-pink-500 px-2 py-1 m-1 u-round-xs u-inline">c</div>
</div>`,
        },
        {
            name: 'inline-block',
            example: (
                <div className="p-3 bg-purple-100 text-white u-round-xs">
                    <div className="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">a</div>
                    <div className="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">b</div>
                    <div className="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">c</div>
                </div>
            ),
            code: `<div class="p-3 bg-purple-100 text-white u-round-xs">
    <div class="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">a</div>
    <div class="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">b</div>
    <div class="bg-purple-500 px-2 py-1 m-1 u-round-xs u-inline-block">c</div>
</div>`,
        },
        {
            name: 'block',
            example: (
                <div className="p-3 bg-yellow-100 text-white u-round-xs">
                    <div className="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">a</div>
                    <div className="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">b</div>
                    <div className="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">c</div>
                </div>
            ),
            code: `<div class="p-3 bg-yellow-100 text-white u-round-xs">
    <div class="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">a</div>
    <div class="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">b</div>
    <div class="bg-yellow-400 px-2 py-1 m-1 u-round-xs u-block">c</div>
</div>`,
        },
        {
            name: 'table',
            example: (
                <div className="u-table w-100 text-white">
                    <div className="u-table-row">
                        <div className="u-table-cell bg-indigo-400 px-4 py-2">1</div>
                        <div className="u-table-cell bg-indigo-500 px-4 py-2">2</div>
                        <div className="u-table-cell bg-indigo-400 px-4 py-2">Loooong 3</div>
                    </div>
                    <div className="u-table-row">
                        <div className="u-table-cell bg-indigo-500 px-4 py-2">Loooong 4</div>
                        <div className="u-table-cell bg-indigo-400 px-4 py-2">5</div>
                        <div className="u-table-cell bg-indigo-500 px-4 py-2">6</div>
                    </div>
                </div>
            ),
            code: `<div class="u-table w-100 text-white">
    <div class="u-table-row">
        <div class="u-table-cell bg-indigo-400 px-4 py-2">1</div>
        <div class="u-table-cell bg-indigo-500 px-4 py-2">2</div>
        <div class="u-table-cell bg-indigo-400 px-4 py-2">Loooong 3</div>
    </div>
    <div class="u-table-row">
        <div class="u-table-cell bg-indigo-500 px-4 py-2">Loooong 4</div>
        <div class="u-table-cell bg-indigo-400 px-4 py-2">5</div>
        <div class="u-table-cell bg-indigo-500 px-4 py-2">6</div>
    </div>
</div>`,
            description: (
                <p>
                    You can re-create the table layout using the <code>u-table</code> class. The rows, columns, and
                    cells can be styled with <code>u-table-row</code>, <code>u-table-column</code>, and{' '}
                    <code>u-table-cell</code> classes.
                </p>
            ),
        },
    ];
    const classTable = displayNames.map((display) => {
        return {
            class: `u-${display}`,
            style: `display: ${display};`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Display</title>
            </Head>
            <div>
                <section className="padtop" id="display">
                    <div className="content">
                        <Headline title="Display" link="#display" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>These are utility classes that control the display of elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        {docExamples.map((display) => {
                            return (
                                <>
                                    <h6>{Capitalize(display.name)}</h6>

                                    {display.description ?? (
                                        <p>
                                            Set the <code>u-{display.name}</code> class to make the element display with{' '}
                                            <code>{display.name}</code>.
                                        </p>
                                    )}

                                    {display.example}
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space space--lg"></div>
                                </>
                            );
                        })}

                        <h6>Flexbox & Friends</h6>
                        <p>
                            For documentation for flexbox, view it{' '}
                            <Link href="./flexbox">
                                <a className="u u-LR">here</a>
                            </Link>
                            .
                        </p>
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
                            use <code>u-none-md</code> to apply <code>u-none</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-block u-none-md">
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
                    prevLink={{ name: 'Clearfix', link: './clearfix' }}
                    nextLink={{ name: 'Flexbox', link: './flexbox' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(DisplayUtilsPage);
