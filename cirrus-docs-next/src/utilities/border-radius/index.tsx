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

export const BorderRadiusUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_ROUND_CLASSES = {
        none: '0px',
        xs: '.25rem',
        sm: '.5rem',
        md: '.75rem',
        lg: '1rem',
        xl: '1.25rem',
        full: '9001px',
    };

    const classTable = Object.entries(DEFAULT_ROUND_CLASSES).map((entry) => {
        return {
            class: `u-round-${entry[0]}`,
            style: `border-radius: ${entry[1]} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Border Radius</title>
            </Head>
            <div>
                <section className="padtop" id="border-radius">
                    <div className="content">
                        <Headline title="Border Radius" link="#border-radius" />
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
                        <p>These are utility classes that specify the border radius of elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all utility classes that apply a border radius of some sort. The syntax
                            follows the form of <code>u-round-[xs|sm|md|lg|xl|full]</code>.
                        </p>
                        <div className="space"></div>

                        <div className="row u-round-xs bg-purple-100 p-3 pt-6">
                            {Object.entries(DEFAULT_ROUND_CLASSES)
                                .filter((entry) => entry[0] !== 'none')
                                .map((entry, i) => {
                                    return (
                                        <div className="col-4 u-text-center" key={i}>
                                            <div className={`p-4 bg-purple-500 u-shadow-lg u-round-${entry[0]}`}></div>
                                            <p>
                                                <b>u-round-{entry[0]}</b>
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-xs"></div>
    <p><b>u-round-xs</b></p>
</div>
<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-sm"></div>
    <p><b>u-round-sm</b></p>
</div>
<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-md"></div>
    <p><b>u-round-md</b></p>
</div>
<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-lg"></div>
    <p><b>u-round-lg</b></p>
</div>
<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-xl"></div>
    <p><b>u-round-xl</b></p>
</div>
<div class="col-4 u-text-center">
    <div class="p-4 bg-purple-500 u-shadow-lg u-round-full"></div>
    <p><b>u-round-full</b></p>
</div>
`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="no-border-radius">
                    <div className="content">
                        <Headline title="No Border Radius" link="#no-border-radius" size="4" />
                        <div className="divider"></div>

                        <p>
                            To remove all border-radii, use the <code>u-round-none</code> class.
                        </p>

                        <div className="space"></div>
                        <div className="bg-indigo-100 u-round-xs row u-gap-2 p-4 u-justify-center u-text-center">
                            <div>
                                <div className="bg-indigo-500 u-round-none p-4 u-shadow-lg"></div>
                                <p className="mb-0">
                                    <b>u-round-none</b>
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-indigo-500 u-round-none p-4 u-shadow-lg"></div>
<p class="mb-0"><b>u-round-none</b></p>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting the border-radius
                            property. You can add, change, or remove classes within the <code>_config.scss</code> file
                            of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        round: (
            '2xl': 1.5rem,
            '3xl': 1.75rem
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.u-round-2xl {
    border-radius: 1.5rem !important;
}
.u-round-3xl {
    border-radius: 1.75rem !important;
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
                    prevLink={{ name: 'Absolutes', link: './absolutes' }}
                    nextLink={{ name: 'Border Width', link: './border-width' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(BorderRadiusUtilsPage);
