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

export const BoxShadowUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_BOX_SHADOW_CLASSES = {
        none: '--cirrus-shadow: 0 0 #000;',
        xs: '--cirrus-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);',
        sm: '--cirrus-shadow: (0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06));',
        md: '--cirrus-shadow: (0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));',
        lg: '--cirrus-shadow: (0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));',
        xl: '--cirrus-shadow: (0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));',
        inset: '--cirrus-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);',
    };
    const classTable = Object.entries(DEFAULT_BOX_SHADOW_CLASSES).map((entry) => {
        return {
            class: `u-shadow-${entry[0]}`,
            style: entry[1],
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Box Shadow</title>
            </Head>
            <div>
                <section className="padtop" id="box-shadow">
                    <div className="content">
                        <Headline title="Box Shadow" link="#box-shadow" />
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
                        <p>Utility classes to apply a box shadow around any element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="outer-shadow">
                    <div className="content">
                        <Headline title="Outer Shadow" link="#outer-shadow" size="4" />
                        <div className="divider"></div>

                        <p>
                            Easily add a box shadow to any element using the box shadow utility classes to add extra
                            depth. The utility classes for outer shadows generally follow this form:{' '}
                            <code>u-shadow-[xs|sm|md|lg|xl]</code>.
                        </p>

                        <div className="space"></div>
                        <div className="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
                            {Object.entries(DEFAULT_BOX_SHADOW_CLASSES)
                                .filter((entry) => entry[0] !== 'none' && entry[0] !== 'inset')
                                .map((entry) => (
                                    <div className={`bg-gray-200 u-round-xs p-4 u-shadow-${entry[0]} u-text-center`}>
                                        <span className="font-bold">{entry[0]}</span>
                                    </div>
                                ))}
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-none u-text-center"><span class="font-bold">none</span></div>
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-xs u-text-center"><span class="font-bold">xs</span></div>
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-sm u-text-center"><span class="font-bold">sm</span></div>
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-md u-text-center"><span class="font-bold">md</span></div>
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-lg u-text-center"><span class="font-bold">lg</span></div>
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-xl u-text-center"><span class="font-bold">xl</span></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="inner-shadow">
                    <div className="content">
                        <Headline title="Inner Shadow" link="#inner-shadow" size="4" />
                        <div className="divider"></div>

                        <p>
                            To add an inner shadow, you can use the <code>u-shadow-inset</code> class.
                        </p>

                        <div className="space"></div>
                        <div className="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
                            <div className="bg-gray-200 u-round-xs p-4 u-shadow-inset u-text-center">
                                <span className="font-bold">inset</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-inset u-text-center"><span class="font-bold">inset</span></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="no-shadow">
                    <div className="content">
                        <Headline title="No Shadow" link="#no-shadow" size="4" />
                        <div className="divider"></div>

                        <p>
                            To remove all shadows, use the <code>u-shadow-none</code> class.
                        </p>

                        <div className="space"></div>
                        <div className="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
                            <div className="bg-gray-200 u-round-xs p-4 u-shadow-none u-text-center">
                                <span className="font-bold">none</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-000 u-round-xs row u-gap-2 p-4 u-justify-center">
    <div class="bg-gray-200 u-round-xs p-4 u-shadow-none u-text-center"><span class="font-bold">none</span></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting box shadows. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        shadows: (
            '2xl': (
                --cirrus-shadow: (0 25px 30px -10px rgba(0, 0, 0, 0.1),
                0 15px 15px -10px rgba(0, 0, 0, 0.04))
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additonal classes.</p>
                        <CodeBlock
                            code={`.u-shadow-2xl {
    --cirrus-shadow: (0 25px 30px -10px rgba(0, 0, 0, 0.1),
    0 15px 15px -10px rgba(0, 0, 0, 0.04))
    box-shadow: var(--cirrus-shadow);
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
                    prevLink={{ name: 'Border Radius', link: './border-radius' }}
                    nextLink={{ name: 'Clearfix', link: './clearfix' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(BoxShadowUtilsPage);
