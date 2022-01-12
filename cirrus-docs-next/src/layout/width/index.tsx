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
import { ClassTable } from '../../../layouts/components/class-table';

export const WidthPage: React.FC<any> = (props) => {
    const widthClasses = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

    let classTable = widthClasses.map((value) => {
        return {
            class: `w-${value}`,
            style: `width: ${value}%;`,
        };
    });
    classTable = classTable.concat([
        {
            class: `w-auto`,
            style: `width: auto;`,
        },
        {
            class: `w-screen`,
            style: `width: 100vh;`,
        },
    ]);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Width</title>
            </Head>

            <div>
                <section className="padtop" id="width">
                    <div className="content">
                        <Headline title="Width" link="#width" />
                        <div className="divider"></div>
                        <p>Classes to set the width of an element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="scaled">
                    <div className="content">
                        <Headline title="Scaled Widths" link="#scaled" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`w-{{value}}`}</code> classes gives an element a percentage based width.
                        </p>

                        <div
                            className="u-flex u-flex-column u-justify-space-evenly p-6 bg-orange-100 mb-2"
                        >
                            <div className="w-20 bg-orange-500 u-round-xs p-1 mb-2 u-shadow-lg">
                                <span className="text-gray-000">w-20</span>
                            </div>
                            <div className="w-40 bg-orange-500 u-round-xs p-1 mb-2 u-shadow-lg">
                                <span className="text-gray-000">w-40</span>
                            </div>
                            <div className="w-60 bg-orange-500 u-round-xs p-1 mb-2 u-shadow-lg">
                                <span className="text-gray-000">w-60</span>
                            </div>
                            <div className="w-80 bg-orange-500 u-round-xs p-1 mb-2 u-shadow-lg">
                                <span className="text-gray-000">w-80</span>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="w-20">...</div>
    <div class="w-40">...</div>
    <div class="w-60">...</div>
    <div class="w-80">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="screen">
                    <div className="content">
                        <Headline title="Screen Width" link="#screen" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`w-screen`}</code> class makes an element span the entire viewport.
                        </p>

                        <div
                            className="u-relative u-overflow-x-scroll p-6 bg-pink-100 mb-2"
                        >
                            <div className="w-screen bg-pink-500 text-gray-000 p-3 w-100 u-flex u-items-center u-justify-center u-round-xs u-shadow-lg">
                                <p>w-screen</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="w-screen">...</div>
</div>`}
                        />
                    </div>
                </section>

                <section className="padtop" id="auto">
                    <div className="content">
                        <Headline title="Auto" link="#auto" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>{`w-auto`}</code> class makes an element use a browser determined width. This is
                            commonly used to unset a previously set width.
                        </p>

                        <div
                            className="u-relative p-6 bg-indigo-100 mb-2"
                        >
                            <div className="w-auto bg-indigo-500 text-gray-000 p-3 w-100 u-flex u-items-center u-justify-center u-round-xs u-shadow-lg">
                                <p>w-auto</p>
                            </div>
                        </div>

                        <CodeBlock
                            language="htmlbars"
                            code={`<div>
    <div class="w-auto">...</div>
</div>`}
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Spacing', link: './spacing' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(WidthPage);
