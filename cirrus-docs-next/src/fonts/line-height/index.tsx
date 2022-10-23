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
import { TITLE_FONTS } from '../../../config/sidebar';
import { Blockquote } from '../../../layouts/components/blockquote';

export const LineHeightsPage: React.FC<any> = (props) => {
    const DEFAULT_LINE_HEIGHT_CLASSES = {
        none: 0,
        tighter: 1.25,
        tight: 1.375,
        normal: 1.5,
        loose: 1.625,
        looser: 2,
    };

    const classTable = Object.entries(DEFAULT_LINE_HEIGHT_CLASSES).map((entry) => {
        return {
            class: `leading-${entry[0]}`,
            style: `line-height: ${entry[1]} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Line Height</title>
            </Head>
            <div>
                <section className="padtop" id="line-height">
                    <div className="content">
                        <Headline title="Line Height" link="#line-height" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.1" />
                        <p>These are utility classes that specify the line height of an element's text.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all utility classes that apply line height styles. Note that{' '}
                            <code>leading-normal</code> is not the same as the default line height value in Cirrus.
                        </p>
                        <div className="space"></div>

                        <div className="">
                            {Object.entries(DEFAULT_LINE_HEIGHT_CLASSES).map((entry) => {
                                return (
                                    <div className="mb-4">
                                        <p className="text-gray-600 mb-0">
                                            <b>leading-{entry[0]}</b>
                                        </p>
                                        <p className={`leading-${entry[0]} mt-0 text-lg`}>
                                            Lorem Ipsum best not make any more threats to your website... It will be met
                                            with fire and fury like the world has never seen. When other websites give
                                            you text, they're not sending the best. They're not sending you, they're
                                            sending words that have lots of problems and they're bringing those problems
                                            with us.
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<p class="leading-none ...">Lorem Ipsum best not make any more threats to your website...</p>
<p class="leading-tighter ...">Lorem Ipsum best not make any more threats to your website...</p>
<p class="leading-tight ...">Lorem Ipsum best not make any more threats to your website...</p>
<p class="leading-normal ...">Lorem Ipsum best not make any more threats to your website...</p>
<p class="leading-loose ...">Lorem Ipsum best not make any more threats to your website...</p>
<p class="leading-looser ...">Lorem Ipsum best not make any more threats to your website...</p>`}
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
        flags.$LINE-HEIGHT: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            All utility classes mentioned here support viewport based application. All you need to do is
                            add a <code>-&lt;viewport&gt;</code> at the end of the class(es) you are using. For example,
                            use <code>u-leading-sm-md</code> to apply <code>u-leading-sm</code> on medium screens and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-leading-sm-md">
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
                            The classes specified above are the default utility classes for setting the letter-spacing
                            property. You can add, change, or remove classes within the <code>_config.scss</code> file
                            of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        line-heights: (
            loosest: '2.5'
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.leading-loosest {
    line-height: 2.5 !important;
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
                        sectionName: TITLE_FONTS,
                        pageName: `Line Heights`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(LineHeightsPage);
