import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FormatString } from '../../../utils/string';
import { DefaultLayout } from '../../../layouts/default';
import { DEFAULT_SIZING_SYSTEM, PAGE_TITLE_PREFIX } from '../../../constants';
import Link from 'next/link';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag } from '../../../layouts/components/tag';

export const PaddingPage: React.FC<any> = (props) => {
    const types = [
        {
            class: `p-(0)`,
            style: `padding: (0) !important;`,
        },
        {
            class: `px-(0)`,
            style: `padding-left: (0) !important; 
padding-right: (0) !important;`,
        },
        {
            class: `py-(0)`,
            style: `padding-top: (0) !important; 
padding-bottom: (0) !important;`,
        },
        {
            class: `pt-(0)`,
            style: `padding-top: (0) !important;`,
        },
        {
            class: `pb-(0)`,
            style: `padding-bottom: (0) !important;`,
        },
        {
            class: `pl-(0)`,
            style: `padding-left: (0) !important;`,
        },
        {
            class: `pr-(0)`,
            style: `padding-right: (0) !important;`,
        },
    ];
    let [classTable, setClassTable] = useState([] as any[]);

    useEffect(() => {
        const rows = types.map((type) => {
            return DEFAULT_SIZING_SYSTEM.map((size) => {
                return {
                    class: FormatString(type.class, size.toString()),
                    style: FormatString(type.style, `${0.5 * size}rem`),
                };
            });
        });
        setClassTable(([] as any).concat(...rows));
    }, []);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Padding</title>
            </Head>
            <div>
                <section className="padtop" id="padding">
                    <div className="content">
                        <Headline title="Padding" link="#padding" />
                        <div className="divider"></div>
                        <p>These are utility classes used to add padding for any element.</p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            These are the different sizes supported for padding. Note that all calculations are based
                            around <code>0.5rem</code> or <code>8px</code>. You can also modify it to use a different base size other than <code>0.5rem</code> within <code>_config.scss</code> -- see <Link href="#variants"><a className="u u-LR">Variants</a></Link> below.
                        </p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="all">
                    <div className="content">
                        <Headline title="All Sides" link="#all" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add padding on all sides of an element using the <code>p-&lt;size&gt;</code> class.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex p-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">p-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-100 u-round-xs text-white u-inline-flex p-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">p-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="both">
                    <div className="content">
                        <Headline title="Both Sides" link="#both" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add padding to either left and right or top and bottom with the <code>px-&lt;size&gt;</code>{' '}
                            and <code>py-&lt;size&gt;</code> classes respectively.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex px-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">px-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex py-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">py-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-100 u-round-xs text-white u-inline-flex px-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">px-4</span></div>
<div class="bg-indigo-100 u-round-xs text-white u-inline-flex py-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">py-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="single">
                    <div className="content">
                        <Headline title="Single Side" link="#single" size="4" />
                        <div className="divider"></div>
                        <p>
                            For adding padding for only a single side, the class follows a convention like{' '}
                            <code>p&lt;l|r|t|b&gt;-&lt;size&gt;</code>.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex pl-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">pl-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex pr-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">pr-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex pt-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">pt-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-round-xs text-white u-inline-flex pb-4">
                                    <span className="bg-indigo-500 u-round-xs u-shadow-lg p-1">pb-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-100 u-round-xs text-white u-inline-flex pl-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">pl-4</span></div>
<div class="bg-indigo-100 u-round-xs text-white u-inline-flex pr-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">pr-4</span></div>
<div class="bg-indigo-100 u-round-xs text-white u-inline-flex pt-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">pt-4</span></div>
<div class="bg-indigo-100 u-round-xs text-white u-inline-flex pb-4"><span class="bg-indigo-500 u-round-xs u-shadow-lg p-1">pb-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.6.3</div>
                        </span>
                        <p>
                            The margin classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>p-3-md</code> to apply <code>p-3</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="px-1 px-10-sm px-20-md">
    <!-- ... -->
</div>`}
                            language="html"
                        />

                        <p>Try out the example below yourself by resizing your browser window.</p>

                        <div className="mb-1">
                            <div className="bg-teal-100 p-2 u-round-xs u-flex u-justify-center u-items-center text-white">
                                <p className="bg-teal-500 u-round-xs p-3 px-10-sm px-20-md u-shadow-lg m-0">
                                    I grow with the window.
                                </p>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="bg-purple-100 p-2 u-round-xs u-flex u-justify-center u-items-center text-white">
    <p class="bg-purple-300 u-round-xs p-3 px-10-sm px-20-md u-shadow-lg m-0">I grow with the window.</p>
</div>`}
                            language="htmlbars"
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

                
                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
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
                            The classes specified above are the default utility classes for setting paddings. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                            The generated values are dependent on the values set for the <code>base-size</code> and <code>steps</code> fields in the config.
                        </p>
                        <p>Below is an example of what gets generated when the <code>base-size</code> is set to <code>1rem</code> and we add <code>64</code> to the list of <code>steps</code>.</p>
                        <p>Recall that these configs are merged with the <code>$default-config</code> map.</p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    sizing-system: (
        base-size: 1rem,
        steps: (64)
    )
);`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`:root {
    --space-size: 1rem;
}
.p-0 {
    padding: calc(var(--space-size) * 0) !important;
}
/* ... */
.p-64 {
    padding: calc(var(--space-size) * 64) !important;
}
/* Other viewport variants for padding... */`}
                            language="css"
                        />
                        <p>
                            Learn more about how to extend Cirrus to support your use cases in the{' '}
                            <Link href="/fundamentals/configuration">
                                <a className="u u-LR">Configuration</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Media', link: './media' }}
                    nextLink={{ name: 'Spacing', link: './spacing' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PaddingPage);
