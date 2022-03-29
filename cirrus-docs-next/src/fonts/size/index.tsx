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
import { Capitalize } from '../../../utils/string';
import { Tag } from '../../../layouts/components/tag';

export const FontSizePage: React.FC<any> = (props) => {
    const DEFAULT_FONT_WEIGHT_CLASSES = {
        'text-xs': `font-size: 0.75rem !important;
line-height: 1.5rem !important;`,
        'text-sm': `font-size: 0.875rem !important;
line-height: 1.75rem !important;`,
        'text-md': `font-size: 1rem !important;
line-height: 2rem !important;`,
        'text-lg': `font-size: 1.25rem !important;
line-height: 2.25rem !important;`,
        'text-xl': `font-size: 1.5rem !important;
line-height: 2.25rem !important;`,
    };

    const classTable = Object.entries(DEFAULT_FONT_WEIGHT_CLASSES).map((entry) => {
        return {
            class: `${entry[0]}`,
            style: `${entry[1]}`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Font Size</title>
            </Head>
            <span>
                <section className="padtop" id="font-size">
                    <div className="content">
                        <Headline title="Font Size" link="#font-size" />
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

                        <p>These classes control the font size of a specific element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" size={'4'} link="#examples" />
                        <div className="divider"></div>

                        <p>
                            The <code>text-[size]</code> classes set the font size for a specific element.
                        </p>
                        <div className="space"></div>

                        <div className="row">
                            {Object.entries(DEFAULT_FONT_WEIGHT_CLASSES).map((entry) => {
                                return (
                                    <>
                                        <div className="col-lg-6">
                                            <p className="title">{Capitalize(entry[0])}</p>
                                            <p className={`subtitle ${entry[0]}`}>
                                                The quick brown fox jumps over the lazy dog.
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <CodeBlock
                                                code={`<p class="${entry[0]}">The quick brown fox jumps over the lazy dog.</p>`}
                                                language="htmlbars"
                                            />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting font sizes. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        fonts: (
            text: (
                2xl: 2rem,
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additional classes.</p>
                        <CodeBlock
                            code={`.text-2xl {
    font-size: 2rem !important;
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
                    prevLink={{ name: 'Letter Spacing', link: './letter-spacing' }}
                    nextLink={{ name: 'Text Elements', link: './text-elements' }}
                />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FontSizePage);
