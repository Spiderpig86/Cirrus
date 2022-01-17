import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Blockquote } from '../../../layouts/components/blockquote';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const MinWidthPage: React.FC<any> = (props) => {
    const DEFAULT_CLASSES = {
        none: 'none',
        xs: '640px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
        '100': '100%',
        screen: '100vw',
    };

    let classTable = Object.entries(DEFAULT_CLASSES).map((entry) => {
        return {
            class: `min-w-${entry[0]}`,
            style: `min-width: ${entry[1]};`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Min Width</title>
            </Head>

            <div>
                <section className="padtop" id="min-width">
                    <div className="content">
                        <Headline title="Min Width" link="#min-width" />
                        <div className="divider"></div>
                        <p>Classes to set the minimum width of an element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>Using these classes it quite simple to control the minimum width an element should have. You can either use a percentage based class or use a class to span the whole screen using the <code>min-w-[size]</code> syntax.</p>

                        <div className="p-4 bg-indigo-100 u-round-xs text-white font-bold u-text-center u-flex">
                            <div className="min-w-50 p-2 bg-indigo-500 u-round-xs">
                                min-w-50
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock code={`<div class="p-4 bg-indigo-100 u-round-xs text-white font-bold u-text-center u-flex" style="">
    <div class="min-w-50 p-2 bg-indigo-500 u-round-xs">min-w-50</div>
</div>`} language='htmlbars' />

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
                                build.
                            </p>

                            <div className="space"></div>

                            <CodeBlock
                                code={`//_configs.scss
$config: (
    viewports: (
        flags.$MIN-WIDTH: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>min-w-0</code> to be applied to some
                            element for <code>lg</code> and above, then I would use the <code>min-w-0-lg</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="min-w-0-lg">
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
                            The classes specified above are the default utility classes for setting minimum widths. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        minmax-widths: (
            'min': 'min-content',
            'max': 'max-content',
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additonal classes.</p>
                        <CodeBlock
                            code={`.min-w-min {
    min-width: min-content !important;
}
.min-w-max {
    min-width: max-content !important;
}`}
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
                    prevLink={{ name: 'Min Height', link: './min-height' }}
                    nextLink={{ name: 'Padding', link: './padding' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MinWidthPage);
