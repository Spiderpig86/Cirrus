import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';

import { toc } from './toc';

import { PAGE_TITLE_PREFIX } from '../../../constants';

export const StartGuidePage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Start Guide</title>
            </Head>
            <div>
                <section id="start-guide" className="padtop">
                    <div className="content">
                        <Headline title="Start Guide" link="#start-guide" />
                        <div className="divider"></div>
                        <p>
                            Getting started with a new framework can be difficult sometimes. This guide aims to make
                            understanding what types of classes to use and integrate with super simple to get you up to
                            speed quickly.
                        </p>
                        <p>At a high level, the framework is broken down into 3 separate types of stylesheets that are often used together:</p>

                        <ul>
                            <li><b>Base</b> — consists of fonts, colors, layout/positioning, and other essential classes.</li>
                            <li><b>Component</b> — consists of prebuilt components that can be added to any project right away.</li>
                            <li><b>Utilities</b> — consists of atomic classes to modify specific styles of elements.</li>
                        </ul>
                    </div>
                </section>

                <section className="padtop" id="base">
                    <div className="content">
                        <Headline title="Base" link="#base" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>
                
                <section className="padtop" id="components">
                    <div className="content">
                        <Headline title="Components" link="#components" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>
                
                <section className="padtop" id="utilities">
                    <div className="content">
                        <Headline title="Utilities" link="#utilities" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="designing">
                    <div className="content">
                        <Headline title="Designing with Cirrus" link="#designing" size="4" />
                        <div className="divider"></div>
                        <p>
                            Using a new framework can be slightly overwhelming, so this section is to help point out
                            common areas in the documentation to help you get up to speed.
                        </p>
                        <div className="space"></div>

                        <h6>Layout</h6>

                        <p>
                            Spacing is an important part of designing a page not just with Cirrus, but in general. This
                            can be accomplished by following some hierarchy for a layout, such as <code>section</code>,{' '}
                            <code>content</code>, and <code>row</code>. The <code>section</code> HTML tag semantically
                            spearates the content on the page, the <code>content</code> class adds the needed spacing,
                            and the <code>row</code> class can be used to position the child elements.
                        </p>

                        <CodeBlock
                            code={`<section>
    <div class="content">
        <p>Some text</p>
        <div class="row">
            <div class="col">Child 1</div>
            <div class="col">Child 2</div>
        </div>
    </div>
</section>`}
                            language="htmlbars"
                        />

                        <p>
                            More info can be found in the{' '}
                            <Link href="/layout/spacing">
                                <a className="u u-LR">Spacing</a>
                            </Link>{' '}
                            docs.
                        </p>

                        <div className="divider w-30 mx-auto"></div>

                        <p>
                            If you are looking to tile elements in a specific form, then I recommend getting started
                            with the following two pages.
                        </p>

                        <ul>
                            <li>
                                <Link href="/layout/columns">
                                    <a className="u u-LR">Columns (Flexbox)</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/grid/templates">
                                    <a className="u u-LR">Grid</a>
                                </Link>
                            </li>
                        </ul>

                        <div className="divider w-30 mx-auto"></div>

                        <p>
                            With some layout styles in place, now you specify a{' '}
                            <Link href="/layout/header">
                                <a className="u u-LR">header</a>
                            </Link>{' '}
                            and{' '}
                            <Link href="/layout/footer">
                                <a className="u u-LR">footer</a>
                            </Link>
                            .
                        </p>

                        <p>
                            This pretty much sums up the few pages that would help getting a base layout up and running.
                            You can find more styles to modify the layout under <i>Layout</i> or <i>Utilities</i>.
                        </p>
                        <div className="space"></div>

                        <h6>Components</h6>
                        <p>
                            There are lots of components that already come with the framework. I do not have any
                            specific recommendations other than to pick the ones you want to use. Each page has plenty
                            of examples to cover many possible use cases.
                        </p>
                    </div>
                </section>

                <Pagination
                    nextLink={{
                        name: 'Support',
                        link: './support',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(StartGuidePage);
