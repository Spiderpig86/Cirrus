import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag, VersionTag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';
import { TITLE_UTILITIES } from '../../../config/sidebar';

export const VerticalAlignUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_VERTICAL_ALIGN_CLASSES = [
        'baseline',
        'top',
        'middle',
        'bottom',
        'text-top',
        'text-bottom',
        'sub',
        'super',
    ];

    const classTable = DEFAULT_VERTICAL_ALIGN_CLASSES.map((entry) => {
        return {
            class: `u-align-${entry}`,
            style: `vertical-align: ${entry} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Vertical Align</title>
            </Head>
            <div>
                <section className="padtop" id="vertical-align">
                    <div className="content">
                        <Headline title="Vertical Align" link="#vertical-align" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.2" />
                        <p>
                            These are utility classes to control vertical alignment of elements inside inline or
                            table-box containers.
                        </p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>Below is a demo of all supported vertical alignment utility classes.</p>

                        {DEFAULT_VERTICAL_ALIGN_CLASSES.map((align) => (
                            <>
                                <h6 className="capitalize">{align}</h6>
                                <p>
                                    Set the <code>u-align-{align}</code> class to align the element with{' '}
                                    <code>{align}</code> vertical alignment.
                                </p>

                                <div className="bg-green-100 p-2 u-round-sm">
                                    <div className={`bg-green-200 p-2 u-round-sm`}>
                                        <div className={`bg-green-500 u-round-xs mr-1 w-4 h-4 u-inline-block u-align-${align}`}></div>
                                        <div className={`bg-green-500 u-round-xs mr-1 w-4 h-8 u-inline-block u-align-${align}`}></div>
                                        <div className={`bg-green-500 u-round-xs mr-1 w-8 h-4 u-inline-block u-align-${align}`}></div>
                                        <span className="mr-1">Some text</span>
                                    </div>
                                </div>
                            </>
                        ))}
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
        flags.$VERTICAL-ALIGN: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>u-align-inherit</code> to be applied to some
                            element for <code>lg</code> and above, then I would use the <code>u-align-inherit-lg</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="u-align-inherit-lg">
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
                            The classes specified above are the default utility classes for setting vertical alignment. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        vertical-align: (
            inherit
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following class.</p>
                        <CodeBlock
                            code={`.u-align-inherit {
    vertical-align: inherit !important;
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
                    lookupProps={{
                        sectionName: TITLE_UTILITIES,
                        pageName: `Vertical Align`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(VerticalAlignUtilsPage);
