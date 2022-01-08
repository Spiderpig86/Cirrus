import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FormatString } from '../../../utils/string';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { DEFAULT_SIZING_SYSTEM, PAGE_TITLE_PREFIX } from '../../../constants';
import Link from 'next/link';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag } from '../../../layouts/components/tag';

export const MarginPage: React.FC<any> = (props) => {
    const types = [
        {
            class: `m-(0)`,
            style: `margin: (0) !important;`,
        },
        {
            class: `mx-(0)`,
            style: `margin-left: (0) !important; margin-right: (0) !important;`,
        },
        {
            class: `my-(0)`,
            style: `margin-top: (0) !important; margin-bottom: (0) !important;`,
        },
        {
            class: `mt-(0)`,
            style: `margin-top: (0) !important;`,
        },
        {
            class: `mb-(0)`,
            style: `margin-bottom: (0) !important;`,
        },
        {
            class: `ml-(0)`,
            style: `margin-left: (0) !important;`,
        },
        {
            class: `mr-(0)`,
            style: `margin-right: (0) !important;`,
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
                <title>{PAGE_TITLE_PREFIX} Margin</title>
            </Head>
            <div>
                <section className="padtop" id="margin">
                    <div className="content">
                        <Headline title="Margin" link="#margin" />
                        <div className="divider"></div>
                        <p>These are utility classes used to add margins for any element.</p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            These are the different sizes supported for margins. Note that all calculations are based
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
                            Add a margin on all sides of an element using the <code>m-&lt;size&gt;</code> class.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs text-white">
                                    <span className="bg-indigo-500 p-1 m-4 text-white u-round-xs u-shadow-lg">m-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-100 u-inline-flex u-round-xs text-white"><span class="bg-indigo-500 p-1 m-4 text-white u-round-xs u-shadow-lg">m-4</span></div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="both">
                    <div className="content">
                        <Headline title="Both Sides" link="#both" size="4" />
                        <div className="divider"></div>
                        <p>
                            Add a margin to either left and right or top and bottom with the{' '}
                            <code>mx-&lt;size&gt;</code> and <code>my-&lt;size&gt;</code> classes respectively.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 mx-4 text-white u-round-xs u-shadow-lg">mx-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 my-4 text-white u-round-xs u-shadow-lg">my-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 mx-4 text-white u-round-xs u-shadow-lg">mx-4</span>
    </div>
</div>
<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 my-4 text-white u-round-xs u-shadow-lg">my-4</span>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="single">
                    <div className="content">
                        <Headline title="Single Side" link="#single" size="4" />
                        <div className="divider"></div>
                        <p>
                            For adding a margin for only a single side, the class follows a convention like{' '}
                            <code>m&lt;l|r|t|b&gt;-&lt;size&gt;</code>.
                        </p>

                        <div className="row">
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 ml-4 text-white u-round-xs u-shadow-lg">ml-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 mr-4 text-white u-round-xs u-shadow-lg">mr-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 mt-4 text-white u-round-xs u-shadow-lg">mt-4</span>
                                </div>
                            </div>
                            <div className="col u-flex u-justify-center">
                                <div className="bg-indigo-100 u-inline-flex u-round-xs">
                                    <span className="bg-indigo-500 p-1 mb-4 text-white u-round-xs u-shadow-lg">mb-4</span>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 ml-4 text-white u-round-xs u-shadow-lg">ml-4</span>
    </div>
</div>
<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 mr-4 text-white u-round-xs u-shadow-lg">mr-4</span>
    </div>
</div>
<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 mt-4 text-white u-round-xs u-shadow-lg">mt-4</span>
    </div>
</div>
<div class="col u-flex u-justify-center">
    <div class="bg-indigo-100 u-inline-flex u-round-xs">
        <span class="bg-indigo-500 p-1 mb-4 text-white u-round-xs u-shadow-lg">mb-4</span>
    </div>
</div>`}
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
                            use <code>m-3-md</code> to apply <code>m-3</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="mr-1 mr-5-sm mr-10-md">
    <!-- ... -->
</div>`}
                            language="html"
                        />

                        <p>Try out the example below yourself by resizing your browser window.</p>

                        <div className="mb-1 text-white">
                            <div className="bg-orange-100 p-2 u-round-xs u-flex u-justify-center u-items-center">
                                <p className="bg-orange-400 p-3 u-round-xs my-1 mr-1 mr-5-sm mr-10-md u-shadow-lg">Shrink</p>
                                <p className="bg-orange-400 p-3 u-round-xs my-1 ml-1 ml-5-sm ml-10-md u-shadow-lg">Window</p>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="bg-orange-100 p-2 u-round-xs u-flex u-justify-center u-items-center">
    <p class="bg-orange-400 p-3 u-round-xs my-1 mr-1 mr-5-sm mr-10-md u-shadow-lg">Shrink</p>
    <p class="bg-orange-400 p-3 u-round-xs my-1 ml-1 ml-5-sm ml-10-md u-shadow-lg">Window</p>
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
                            The classes specified above are the default utility classes for setting margins. You can
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
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`:root {
    --space-size: 1rem;
}
.m-0 {
    margin: calc(var(--space-size) * 0) !important;
}
/* ... */
.m-64 {
    margin: calc(var(--space-size) * 64) !important;
}
/* Other viewport variants for margin... */`}
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
                    prevLink={{ name: 'Level', link: './level' }}
                    nextLink={{ name: 'Media', link: './media' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MarginPage);
