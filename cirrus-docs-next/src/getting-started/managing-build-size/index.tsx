import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { Tag } from '../../../layouts/components/tag';
import { BuildSizeTable } from '../../../layouts/components/build-size-table';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ExternalLink, InternalLink } from '../../../layouts/components/link';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ConfigurationPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Managing Build Size</title>
            </Head>
            <div>
                <section id="managing-build-size" className="padtop">
                    <div className="content">
                        <Headline title="Managing Build Size" link="#managing-build-size" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />
                        <p>
                            Since Cirrus is built with customization in mind, it makes sense for the framework to allow
                            features to be enabled, disabled, or modified. One of the pain point for some CSS frameworks
                            is its size. Cirrus by no means is a hefty CSS framework, but reduction in file size would
                            help improve page speeds on slower connections and smaller devices.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="file-size">
                    <div className="content">
                        <Headline title="File Size" size="4" link="#file-size" />
                        <div className="divider"></div>
                        <p>As of now, the different builds of Cirrus clock in at the following sizes:</p>
                        <BuildSizeTable />

                        <p>
                            Cirrus comes in 3 preset builds that cover the requirements of most users to balance the
                            tradeoffs between build size and feature set. You can read more about the differences
                            between these builds in the{' '}
                            <InternalLink url="/getting-started/developing">development guide</InternalLink>.
                        </p>

                        <p>
                            Some developers, however, may require a granular way to toggle which classes are generated
                            and which are not to remove as much unused classes as possible. There are virtually hundreds
                            of ways to customize your build of Cirrus through the config file. The docs below goes over
                            all the ways you can manage your file size when building Cirrus for your project.
                        </p>

                        <p>
                            In short,{' '}
                            <b>it is recommended to remove as many unused styles as possible for optimal performance</b>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="purge-css">
                    <div className="content">
                        <Headline title="Using Purge CSS" size="4" link="#purge-css" />
                        <div className="divider"></div>
                        <p>
                            For a quick way to drastically reduce the amount of unused CSS classes, you can use
                            third-party tools like <b>PurgeCSS</b> to tree-shake unused Cirrus styles in your project.
                            Applying minification on top of the CSS file after purging would further decrease the file
                            size. Out of all the methods described on this page, this would yield the smallest file
                            size.
                        </p>
                        <p>
                            To find out how to integrate this into Cirrus and your project, check out the{' '}
                            <ExternalLink url="https://purgecss.com/">PurgeCSS docs</ExternalLink>.
                        </p>
                        <div className="space space--lg"></div>

                        <h6 className="font-alt font-normal">Note Before Use</h6>
                        <p>
                            If you are using front-end frameworks like React, Angular, Vue, etc., <b>PurgeCSS</b> will
                            not dynamically analyze and evaluate your template code to determine which classes to keep
                            and which to toss out. PurgeCSS simply checks to see if the class name appears in it its
                            entirety within the file. If it does, it will skip removing the class.
                        </p>
                        <p>
                            What this means is that if you do dynamically generate your class names,{' '}
                            <b>
                                make sure that all class names you intend to use are in its whole form and not broken
                                up/concatenated
                            </b>
                            . PurgeCSS won't be able to match for those class names and will unintentionally purge them
                            from your stylesheets.
                        </p>
                        <div className="space"></div>

                        <p className="lead font-bold">❌ Do not fragment the class names.</p>
                        <CodeBlock
                            code={`<div className={\`text-\${isError ? 'danger' : 'success'}\`}>...</div>`}
                            language="jsx"
                        />
                        <div className="space"></div>

                        <p className="lead font-bold">✅ Write class names in its entirety.</p>
                        <CodeBlock
                            code={`<div className={isError ? 'text-danger' : 'text-success'}>...</div>`}
                            language="jsx"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabling-features">
                    <div className="content">
                        <Headline title="Disabling Features" size="4" link="#disabling-features" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="disabling-viewport-variants">
                    <div className="content">
                        <Headline title="Disabling Viewport Variants" size="4" link="#disabling-viewport-variants" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="limiting-color-palette">
                    <div className="content">
                        <Headline title="Limiting Color Palette" size="4" link="#limiting-color-palette" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="removing-unused-breakpoints">
                    <div className="content">
                        <Headline title="Removing Unused Breakpoints" size="4" link="#removing-unused-breakpoints" />
                        <div className="divider"></div>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Developing',
                        link: './developing',
                    }}
                    nextLink={{
                        name: 'Managing Build Size',
                        link: './managing-build-size',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ConfigurationPage);
