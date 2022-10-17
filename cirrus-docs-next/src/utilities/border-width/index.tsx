import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { Tag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';
import { TITLE_UTILITIES } from '../../../config/sidebar';

export const BorderWidthUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_BORDER_WIDTH_CLASSES = {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
    };

    const classTable = Object.entries(DEFAULT_BORDER_WIDTH_CLASSES).map((entry) => {
        return {
            class: `u-border-${entry[0]}`,
            style: `border-width: ${entry[1]} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Border Width</title>
            </Head>
            <div>
                <section className="padtop" id="border-width">
                    <div className="content">
                        <Headline title="Border Width" link="#border-width" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.1`,
                            }}
                        />
                        <p>These are utility classes that specify the border width of elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all utility classes that set a border width. The syntax follows the form
                            of <code>u-border-[{Object.keys(DEFAULT_BORDER_WIDTH_CLASSES).join('|')}]</code>.
                        </p>
                        <div className="space"></div>

                        <div className="bg-indigo-100 p-2 p-4-md u-round-sm u-flex u-flex-column u-flex-row-md u-items-center u-justify-space-around u-gap-1">
                            {Object.entries(DEFAULT_BORDER_WIDTH_CLASSES).map((entry) => {
                                return (
                                    <div>
                                        <div
                                            className={`"w-8 h-8 u-center u-round-sm bg-transparent font-bold border-indigo-600 u-shadow-sm u-border-${entry[0]}`}
                                        ></div>
                                        <b>u-border-{entry[0]}</b>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-border-0 ..."></div>
<div class="u-border-1 ..."></div>
<div class="u-border-2 ..."></div>
<div class="u-border-4 ..."></div>
<div class="u-border-8 ..."></div>`}
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
        flags.$BORDER-WIDTH: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>u-border-2</code> to be applied
                            to some element for <code>lg</code> and above, then I would use the{' '}
                            <code>u-border-2-lg</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="u-border-2-lg">
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
                            The classes specified above are the default utility classes for setting the border-width
                            property. You can add, change, or remove classes within the <code>_config.scss</code> file
                            of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        border: (
            width: (
                '12': 12px,
                '16': 16px
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.u-border-12 {
    border-width: 12px !important;
}
.u-border-16 {
    border-width: 16px !important;
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
                        pageName: `Border Width`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(BorderWidthUtilsPage);
