import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Link from 'next/link';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';

export const DisplayUtilsPage: React.FC<any> = (props) => {
    const displayNames = ['none', 'inline', 'inline-block', 'block', 'table', 'table-row', 'table-cell'];
    const docExamples = [
        {
            name: 'none',
            example: (
                <div className="u-text-center">
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round">a</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-none">b</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round">c</div>
                </div>
            ),
            code: `<div class="bg-indigo-200 px-2 py-1 m-1 u-round">a</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-none">b</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round">c</div>`,
        },
        {
            name: 'inline',
            example: (
                <div className="bg-red-200">
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">a</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">b</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">c</div>
                </div>
            ),
            code: `<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">a</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">b</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline">c</div>`,
        },
        {
            name: 'inline-block',
            example: (
                <div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">a</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">b</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">c</div>
                </div>
            ),
            code: `<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">a</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">b</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-inline-block">c</div>`,
        },
        {
            name: 'block',
            example: (
                <div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-block">a</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-block">b</div>
                    <div className="bg-indigo-200 px-2 py-1 m-1 u-round u-block">c</div>
                </div>
            ),
            code: `<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-block">a</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-block">b</div>
<div class="bg-indigo-200 px-2 py-1 m-1 u-round u-block">c</div>`,
        },
        {
            name: 'table',
            example: (
                <div className="u-table w-100">
                    <div className="u-table-row">
                        <div className="u-table-cell bg-indigo-200 px-4 py-2">1</div>
                        <div className="u-table-cell bg-indigo-300 px-4 py-2">2</div>
                        <div className="u-table-cell bg-indigo-200 px-4 py-2">Loooong 3</div>
                    </div>
                    <div className="u-table-row">
                        <div className="u-table-cell bg-indigo-300 px-4 py-2">Loooong 4</div>
                        <div className="u-table-cell bg-indigo-200 px-4 py-2">5</div>
                        <div className="u-table-cell bg-indigo-300 px-4 py-2">6</div>
                    </div>
                </div>
            ),
            code: `<div class="u-table w-100">
    <div class="u-table-row">
        <div class="u-table-cell bg-indigo-200 px-4 py-2">1</div>
        <div class="u-table-cell bg-indigo-300 px-4 py-2">2</div>
        <div class="u-table-cell bg-indigo-200 px-4 py-2">Loooong 3</div>
    </div>
    <div class="u-table-row">
        <div class="u-table-cell bg-indigo-300 px-4 py-2">Loooong 4</div>
        <div class="u-table-cell bg-indigo-200 px-4 py-2">5</div>
        <div class="u-table-cell bg-indigo-300 px-4 py-2">6</div>
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

                                    <div className="p-3 bg-indigo-100 u-round">{display.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space large"></div>
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
