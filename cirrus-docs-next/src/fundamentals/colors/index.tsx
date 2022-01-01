import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { Display } from './display';
import { DefaultLayout } from '../../../layouts/default';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';
import { v1, v2Colors, v2 } from './color-config';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ColorsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Colors</title>
            </Head>
            <div>
                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            Cirrus has an extensive color palette that has been updated with <b>0.6.0</b> to make them
                            more accessible to all page elements.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="classes">
                    <div className="content">
                        <Headline title="Classes" link="#classes" />
                        <div className="divider"></div>
                        <p>
                            Using a color within Cirrus is as simple as just prefixing the colors with <code>bg-</code>{' '}
                            to color the background and with <code>text-</code> to color the text.
                        </p>
                        <div className="space"></div>

                        <h6>Examples</h6>
                        <p>Button using <b>indigo-500</b> for text and <b>indigo-100</b> for the background.</p>
                        <div className="row">
                            <div className="col-lg-6 u-text-center">
                                <button className="text-indigo-500 bg-indigo-100">Custom Button</button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<button class="text-indigo-500 bg-indigo-100">
    Custom Button
</button>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>Square using a <b>info</b> background.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    style={{
                                        height: '50px',
                                        width: '50px',
                                    }}
                                    className="u-round-xs bg-info mx-auto"
                                ></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="bg-info u-round-xs mx-auto" style="height: 50px; width: 50px;"></div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="v1">
                    <div className="content">
                        <Headline title="v1 Colors" link="#v1" />
                        <div className="divider"></div>
                        <p>The standard color palette from older versions of the framework.</p>

                        {<Display swatches={v1} />}
                    </div>
                </section>

                <section className="padtop" id="v2">
                    <div className="content">
                        <Headline title="v2 Colors" link="#v2" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            Cirrus has an extensive color palette that has been updated with <b>0.6.0</b> to make them
                            more accessible to all page elements.
                        </p>
                        {v2Colors.map((color, index) => {
                            return (
                                <section key={index} id={color}>
                                    <h6>{color}</h6>
                                    <Display swatches={v2.get(color)!} />
                                </section>
                            );
                        })}
                    </div>
                </section>

                <Pagination
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

export default withLayout(<DefaultLayout />)(ColorsPage);
