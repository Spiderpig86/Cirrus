import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ClassTable } from '../../../layouts/components/class-table';
import { VersionTag } from '../../../layouts/components/tag';
import { TITLE_LAYOUT } from '../../../config/sidebar';

export const HeightPage: React.FC<any> = (props) => {
    const heightClasses = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

    let classTable = heightClasses.map((value) => {
        return {
            class: `h-${value}p`,
            style: `height: ${value}%;`,
        };
    });
    classTable = classTable.concat([
        {
            class: `h-0`,
            style: `height: 0;`,
        },
        {
            class: `h-auto`,
            style: `height: auto;`,
        },
        {
            class: `h-screen`,
            style: `height: 100vh;`,
        },
    ]);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Height</title>
            </Head>

            <div>
                <section className="padtop" id="height">
                    <div className="content">
                        <Headline title="Height" link="#height" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.0" text="Updated" />
                        <p>Classes to set the height of an element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="scaled">
                    <div className="content">
                        <Headline title="Scaled Heights" link="#scaled" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-{{value}}`}</code> classes gives an element a percentage based height.
                        </p>

                        <div
                            className="u-flex u-items-flex-end u-justify-space-evenly p-6 bg-teal-100 mb-2"
                            style={{
                                height: '400px',
                            }}
                        >
                            <div className="h-30p bg-teal-500 u-round-xs p-1 u-shadow-lg">
                                <p className="text-gray-000">h-30p</p>
                            </div>
                            <div className="h-50p bg-teal-500 u-round-xs p-1 u-shadow-lg">
                                <p className="text-gray-000">h-50p</p>
                            </div>
                            <div className="h-70p bg-teal-500 u-round-xs p-1 u-shadow-lg">
                                <p className="text-gray-000">h-70p</p>
                            </div>
                            <div className="h-90p bg-teal-500 u-round-xs p-1 u-shadow-lg">
                                <p className="text-gray-000">h-90p</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-30p">...</div>
    <div class="h-50p">...</div>
    <div class="h-70p">...</div>
    <div class="h-90p">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="screen">
                    <div className="content">
                        <Headline title="Screen Height" link="#screen" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-screen`}</code> class makes an element span the entire viewport.
                        </p>

                        <div
                            className="u-relative p-6 bg-purple-100 mb-2"
                            style={{
                                minHeight: '400px',
                            }}
                        >
                            <div className="h-screen bg-purple-500 text-gray-000 p-3 w-100p u-flex u-items-center u-justify-center u-round-xs u-shadow-lg">
                                <p>h-screen</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-screen">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="auto">
                    <div className="content">
                        <Headline title="Auto" link="#auto" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`h-auto`}</code> class makes an element use a browser determined height. This is
                            commonly used to unset a previously set height.
                        </p>

                        <div
                            className="u-relative p-6 bg-red-100 mb-2"
                            style={{
                                minHeight: '200px',
                            }}
                        >
                            <div className="h-auto bg-red-500 text-gray-000 p-3 w-100p u-flex u-items-center u-justify-center u-round-xs u-shadow-lg">
                                <p className="mb-0">h-auto</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="h-auto">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.7.0</div>
                        </span>
                        <p>
                            All utility classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>h-30p-md</code> to apply <code>h-30p</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="h-30p-md">
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
                    lookupProps={{
                        sectionName: TITLE_LAYOUT,
                        pageName: `Height`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(HeightPage);
