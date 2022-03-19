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
import { VersionTag } from '../../../layouts/components/tag';

export const SpacingPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Spacing</title>
            </Head>
            <div>
                <section className="padtop" id="spacing">
                    <div className="content">
                        <Headline title="Spacing" link="#spacing" />
                        <div className="divider"></div>
                        <p>
                            Utilities that help to create white space within your pages. White space can be used
                            effectively to give your content room to breathe.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="content">
                    <div className="content">
                        <Headline title="Content" link="#content" size="4" />
                        <div className="divider"></div>
                        <p>
                            As a convention for displaying content, Cirrus comes with two classes to layout and position
                            content with the <code>section</code> element and <code>content</code> class.
                        </p>
                        <p>
                            The <code>content</code> class adds a <b>margin</b> to the left, right, and bottom of the
                            element.
                        </p>

                        <section className="bg-pink-200 u-shadow-lg u-round-sm">
                            <p className="p-1">section</p>
                            <div className="content bg-pink-400 u-shadow-lg u-round-sm">
                                <p className="p-1">content</p>
                            </div>
                        </section>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<section class="bg-pink-200 u-shadow-lg u-round-sm">
    <p>section</p>
    <div class="content bg-pink-400 u-shadow-lg u-round-sm">
        <p>content</p>
    </div>
</section>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="space">
                    <div className="content">
                        <Headline title="Space" link="#space" size="4" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.0" text="Updated" />
                        <p>
                            A <code>space</code> is an independent element that serves as a buffer between elements.
                            This class comes with different sizes which includes <code>space--lg</code> and{' '}
                            <code>space--xl</code>.
                        </p>
                        <div className="space u-round-sm u-shadow-lg bg-indigo-400 mb-1"></div>
                        <div className="space u-round-sm u-shadow-lg space--lg bg-indigo-500 mb-1"></div>
                        <div className="space u-round-sm u-shadow-lg space--xl bg-indigo-600 mb-1"></div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="space ..."></div>
<div class="space space--lg ..."></div>
<div class="space space--xl ..."></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Padding', link: './padding' }}
                    nextLink={{ name: 'Width', link: './width' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(SpacingPage);
