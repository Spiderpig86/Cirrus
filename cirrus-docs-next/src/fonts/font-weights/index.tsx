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

export const FontWeightsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Font Weights</title>
            </Head>
            <span>
                <section className="padtop" id="font-weights">
                    <div className="content">
                        <Headline title="Font Weights" link="#font-weights" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with a ton of ways to customize your text ranging from changing font weights to
                            changing font styles.
                        </p>
                        <div className="space"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <p className="title">Thin (200)</p>
                                <p className="subtitle font-thin">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="font-thin">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Light (300)</p>
                                <p className="subtitle font-light">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="font-light">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Regular (400)</p>
                                <p className="subtitle">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Semibold (600)</p>
                                <p className="subtitle font-semibold">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="font-semibold">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Bold (700)</p>
                                <p className="subtitle font-bold">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="font-bold">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Glyphs', link: './glyphs' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FontWeightsPage);
