import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { DocExample } from '../../../models/doc-example';
import { Blockquote } from '../../../layouts/components/blockquote';

export const FilterUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_BLUR_CLASSES = {
        none: '--cirrus-blur: blur(0)',
        xs: '--cirrus-blur: blur(.25rem)',
        sm: '--cirrus-blur: blur(.5rem)',
        md: '--cirrus-blur: blur(1rem)',
        lg: '--cirrus-blur: blur(1.5rem)',
        xl: '--cirrus-blur: blur(3rem)',
    };
    const classTable = Object.entries(DEFAULT_BLUR_CLASSES).map((entry) => {
        return {
            class: `u-blur-${entry[0]}`,
            style: `${entry[1]}; filter: var(--cirrus-blur);`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Filters</title>
            </Head>
            <div>
                <section className="padtop" id="filters">
                    <div className="content">
                        <Headline title="Filter" link="#filters" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.7.1</div>
                        </span>
                        <p>These are utility classes that applies filters to elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="blur">
                    <div className="content">
                        <Headline title="Blur" link="#blur" size="4" />
                        <div className="divider"></div>

                        <p>
                            Blur elements using the blur utility classes. These classes follow the form:{' '}
                            <code>u-blur-[{Object.keys(DEFAULT_BLUR_CLASSES).join('|')}]</code>.
                        </p>

                        <div className="space"></div>
                        <div className="bg-orange-100 u-round-xs row u-gap-1 p-4 u-justify-center">
                            {Object.entries(DEFAULT_BLUR_CLASSES).map((entry) => (
                                <div className='col u-text-center'>
                                    <div className={`u-round-sm p-0 mb-3 u-overflow-hidden u-blur-${entry[0]}`}>
                                        <img src="https://images.unsplash.com/photo-1563293756-857fc846d0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" />
                                    </div>
                                    <span className="font-bold">{entry[0]}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space"></div>
                        
                        <CodeBlock
                                code={`<div class="u-blur-none ..."></div>
<div class="u-blur-xs ..."></div>
<div class="u-blur-sm ..."></div>
<div class="u-blur-md ..."></div>
<div class="u-blur-lg ..."></div>
<div class="u-blur-xl ..."></div>`}
                        language="htmlbars"
                    />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>

                        <Blockquote accentColor={'#fcd9bd'}>
                            <p>
                                ⚠ Note that the viewport variants are disabled in the default build of Cirrus. To
                                enable, you must enable it yourself in <code>_configs.scss</code> and create a custom
                                build or enable it in the config in your Sass project.
                            </p>

                            <div className="space"></div>

                            <CodeBlock
                                code={`//_configs.scss
$config: (
    viewports: (
        flags.$BLUR: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            All utility classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>u-blur-sm-md</code> to apply <code>u-blur-sm</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-blur-sm-md">
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

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting a filter. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        filters: (
            blurs: (
                ...,
                '2xl': (
                    --cirrus-blur: blur(4rem),
                )
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.u-blur-2xl {
    --cirrus-blur: blur(4rem);
    filter: var(--cirrus-blur);
}`}
                            language="css"
                        />
                        <p>
                            Learn more about how to extend Cirrus to support your use cases in the{' '}
                            <Link href="/getting-started/configuration">
                                <a className="u u-LR">Configuration</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Display', link: './display' }}
                    nextLink={{ name: 'Flexbox', link: './flexbox' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FilterUtilsPage);
