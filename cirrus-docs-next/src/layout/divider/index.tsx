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

export const DividerPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Divider</title>
            </Head>
            <div>
                <section className="padtop" id="dividers">
                    <div className="content">
                        <Headline title="Dividers" link="#dividers" />
                        <div className="divider"></div>

                        <p>
                            Dividers serve as boundaries between different parts of the page. It is an alternative to
                            the <code>hr</code> tag that has support for vertical orientation and text.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <h6>Orientation</h6>

                        <p>
                            By default, the <code>divider</code> class has a horizontal orientation.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="divider"></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<div class="divider"></div>`} language="htmlbars" />
                            </div>
                        </div>

                        <p>
                            To use the vertical variant, use the <code>divider--v</code> class instead.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div style={{ position: 'relative', height: '300px' }}>
                                    <div className="divider--v" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<div className="divider--v" />`} language="htmlbars" />
                            </div>
                        </div>

                        <h6>Divider Labels</h6>
                        <p>
                            To add text in the center of thse dividers, add the <code>data-content</code> attribute with
                            your text.
                        </p>

                        <p>
                            <b>Horizontal</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="divider" data-content="Label"></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="divider" data-content="Label"></div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Vertical</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div style={{ position: 'relative', height: '300px' }}>
                                    <div className="divider--v h-100" data-content="Label" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="divider--v h-100" data-content="Label" />`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Columns', link: './columns' }}
                    nextLink={{ name: 'Footer', link: './footer' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(DividerPage);
