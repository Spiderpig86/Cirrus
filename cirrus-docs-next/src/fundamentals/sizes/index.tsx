import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { VersionTag } from '../../../layouts/components/tag';
import { TableWrapper } from '../../../layouts/components/table-wrapper';

export const SizesPage: React.FC<any> = (props) => {
    const sizes = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32];
    const tableRows = sizes.map((size) => {
        return {
            size,
            pixel: size * 8,
            rem: size * 0.5,
            example: <div className={`bg-indigo-500 u-round-xs u-shadow-lg pb-${size}`}></div>,
        };
    });

    return (
        <main className="page-layout sizes-page">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Sizing</title>
            </Head>
            <div>
                <section className="padtop" id="sizing-system">
                    <div className="content">
                        <Headline title="Sizing System" link="#sizing-system" />
                        <div className="divider"></div>

                        <VersionTag version="0.7.0" />

                        <p>
                            Certain classes in Cirrus follow a framework-wide sizing system that makes finding the
                            specific class you want very simple. The class names are suffixed with a number that is
                            double what it is in <code>rem</code>. In other words, <code>p-4</code> means adding a
                            padding of <code>2rem</code> to all 4 sides of a given element.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>

                        <p>As a reference, the default sizing system in Cirrus is shown below.</p>

                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Pixels</th>
                                    <th>Rem</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row) => {
                                    return (
                                        <tr>
                                            <td>{row.size}</td>
                                            <td>{row.pixel}px</td>
                                            <td>{row.rem}rem</td>
                                            <td>{row.example}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="example">
                    <div className="content">
                        <Headline title="Example Usage" link="#example" size="4" />
                        <div className="divider"></div>

                        <p>Below are some examples of divs using utility classes that use the framework's sizing system.</p>

                        <CodeBlock code={`<div class="px-3 py-2">
    Left and right padding of 1.5rem.
    Top and bottom padding of 1rem.
</div>
<div class="m-5">
    Margin of 2.5rem on all sides.
</div>`} language="html" />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Colors',
                        link: './colors',
                    }}
                    nextLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(SizesPage);
