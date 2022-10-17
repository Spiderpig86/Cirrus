import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Head from 'next/head';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Tag } from '../../../layouts/components/tag';
import { ExternalLink } from '../../../layouts/components/link';
import Link from 'next/link';
import { TITLE_ELEMENTS } from '../../../config/sidebar';

export const ProgressPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Progress</title>
            </Head>
            <div>
                <section className="padtop" id="progress">
                    <div className="content">
                        <Headline title="Progress" link="#progress" />
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
                            Cirrus comes with styling right out of the box for the <code>progress</code>{' '}
                            <ExternalLink url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">
                                HTML element
                            </ExternalLink>
                            .
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>
                            There are no additional instructions to using the <code>progress</code> element besides just
                            delcaring it inside your HTML markup.
                        </p>

                        <div className="space"></div>

                        <progress className="progress" value="25" max="100">
                            25%
                        </progress>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<progress class="progress" value="25" max="100">25%</progress>`}
                            language={'htmlbars'}
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        
                        <p>Progress bars currently come in 5 different sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>
                        
                        <progress className="progress progress--xs" value="15" max="100">15%</progress>
                        <progress className="progress progress--sm" value="15" max="100">15%</progress>
                        <progress className="progress progress--md" value="15" max="100">15%</progress>
                        <progress className="progress progress--lg" value="15" max="100">15%</progress>
                        <progress className="progress progress--xl" value="15" max="100">15%</progress>

                        <div className="space"></div>
                        <CodeBlock code={`<progress class="progress progress--xs" value="15" max="100">15%</progress>
<progress class="progress progress--sm" value="15" max="100">15%</progress>
<progress class="progress progress--md" value="15" max="100">15%</progress>
<progress class="progress progress--lg" value="15" max="100">15%</progress>
<progress class="progress progress--xl" value="15" max="100">15%</progress>`} language='htmlbars' />
                    </div>
                </section>

                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" size="4" />
                        <div className="divider"></div>

                        <p>
                            Like with other controls, <code>progress</code> bars can be themed using all <Link href="../fundamentals/colors#v1"><a className="u u-LR">v1 colors</a></Link>.
                        </p>
                        <div className="space"></div>

                        <progress className="progress progress--primary" value="15" max="100">15%</progress>
                        <progress className="progress progress--gray" value="25" max="100">15%</progress>
                        <progress className="progress progress--dark" value="35" max="100">15%</progress>
                        <progress className="progress progress--link" value="45" max="100">15%</progress>
                        <progress className="progress progress--info" value="55" max="100">15%</progress>
                        <progress className="progress progress--success" value="65" max="100">15%</progress>
                        <progress className="progress progress--warning" value="75" max="100">15%</progress>
                        <progress className="progress progress--danger" value="85" max="100">15%</progress>

                        <div className="space"></div>

                        <CodeBlock code={`<progress class="progress progress--primary" value="15" max="100">15%</progress>
<progress class="progress progress--gray" value="25" max="100">15%</progress>
<progress class="progress progress--dark" value="35" max="100">15%</progress>
<progress class="progress progress--link" value="45" max="100">15%</progress>
<progress class="progress progress--info" value="55" max="100">15%</progress>
<progress class="progress progress--success" value="65" max="100">15%</progress>
<progress class="progress progress--warning" value="75" max="100">15%</progress>
<progress class="progress progress--danger" value="85" max="100">15%</progress>`} language='htmlbars' />
                    </div>
                </section>

                <section className="padtop" id="indeterminate">
                    <div className="content">
                        <Headline title="Indeterminate" link="#indeterminate" size="4" />
                        <div className="divider"></div>

                        <p>
                            If you omit the <code>value</code> attribute for the progress bar, it will be set to the <b>indeterminate</b> state. It'll look like the ones below.
                        </p>
                        <div className="space"></div>

                        <progress className="progress progress--primary progress--xs" max="100">15%</progress>
                        <progress className="progress progress--gray progress--sm" max="100">15%</progress>
                        <progress className="progress progress--dark progress--sm" max="100">15%</progress>
                        <progress className="progress progress--link progress--md" max="100">15%</progress>
                        <progress className="progress progress--info progress--md" max="100">15%</progress>
                        <progress className="progress progress--success progress--lg" max="100">15%</progress>
                        <progress className="progress progress--warning progress--lg" max="100">15%</progress>
                        <progress className="progress progress--danger progress--xl" max="100">15%</progress>

                        <div className="space"></div>

                        <CodeBlock code={`<progress class="progress progress--primary progress--xs" max="100">15%</progress>
<progress class="progress progress--gray progress--sm" max="100">15%</progress>
<progress class="progress progress--dark progress--sm" max="100">15%</progress>
<progress class="progress progress--link progress--md" max="100">15%</progress>
<progress class="progress progress--info progress--md" max="100">15%</progress>
<progress class="progress progress--success progress--lg" max="100">15%</progress>
<progress class="progress progress--warning progress--lg" max="100">15%</progress>
<progress class="progress progress--danger progress--xl" max="100">15%</progress>`} language='htmlbars' />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Progress`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ProgressPage);
