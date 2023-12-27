import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Tag, VersionTag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { DEFAULT_SIZING_SYSTEM, PAGE_TITLE_PREFIX } from '../../../constants';
import { ClassTable } from '../../../layouts/components/class-table';
import { Blockquote } from '../../../layouts/components/blockquote';
import { TITLE_UTILITIES } from '../../../config/sidebar';

export const GapUtilsPage: React.FC<any> = (props) => {
    let classTable = [
        {
            class: `u-gap-px`,
            style: `gap: 1px !important`,
        },
        {
            class: `u-col-gap-px`,
            style: `column-gap: 1px !important`,
        },
        {
            class: `u-row-gap-px`,
            style: `row-gap: 1px !important`,
        },
    ];
    classTable = classTable.concat(
        DEFAULT_SIZING_SYSTEM.map((size) => {
            return {
                class: `u-gap-${size}`,
                style: `gap: calc([space-size] * ${size}) !important`,
            };
        })
    );
    classTable = classTable.concat(
        DEFAULT_SIZING_SYSTEM.map((size) => {
            return {
                class: `u-col-gap-${size}`,
                style: `column-gap: calc([space-size] * ${size}) !important`,
            };
        })
    );
    classTable = classTable.concat(
        DEFAULT_SIZING_SYSTEM.map((size) => {
            return {
                class: `u-row-gap-${size}`,
                style: `row-gap: calc([space-size] * ${size}) !important`,
            };
        })
    );

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Gap</title>
            </Head>
            <div>
                <section className="padtop" id="gap">
                    <div className="content">
                        <Headline title="Gap" link="#gap" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.2" text="Updated" />
                        <p>
                            Define gutters between{' '}
                            <Link href="/utils/flexbox">
                                <a className="u u-LR">Flexbox</a>
                            </Link>{' '}
                            and{' '}
                            <Link href="/grid/templates">
                                <a className="u u-LR">Grid</a>
                            </Link>{' '}
                            items.
                        </p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Use <code>u-gap-[size]</code> to change the gap between rows and columns in both flexbox and
                            grid layouts.
                        </p>
                        <p>
                            Learn more about Cirrus's sizing system to see what values can be used for{' '}
                            <code>u-gap-[size]</code>.
                        </p>

                        <div className="p-2 u-round-sm bg-indigo-100 u-flex u-gap-4 text-white font-bold u-text-center">
                            <div className="p-4 u-round-sm w-100p bg-indigo-500">1</div>
                            <div className="p-4 u-round-sm w-100p bg-indigo-500">2</div>
                            <div className="p-4 u-round-sm w-100p bg-indigo-500">3</div>
                            <div className="p-4 u-round-sm w-100p bg-indigo-500">4</div>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="p-2 u-round-sm bg-indigo-100 u-flex u-gap-4 text-white font-bold u-text-center">
    <div class="p-4 u-round-sm w-100p bg-indigo-500">1</div>
    <div class="p-4 u-round-sm w-100p bg-indigo-500">2</div>
    <div class="p-4 u-round-sm w-100p bg-indigo-500">3</div>
    <div class="p-4 u-round-sm w-100p bg-indigo-500">4</div>
</div>`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <p>Another example using a grid layout.</p>

                        <div className="p-2 u-round-sm bg-pink-100 grid grid-cols-3 u-gap-3 text-white font-bold u-text-center">
                            <div className="p-4 u-round-sm w-100p bg-pink-500">1</div>
                            <div className="p-4 u-round-sm w-100p bg-pink-500">2</div>
                            <div className="p-4 u-round-sm w-100p bg-pink-500">3</div>
                            <div className="p-4 u-round-sm w-100p bg-pink-500">4</div>
                            <div className="p-4 u-round-sm w-100p bg-pink-500">5</div>
                            <div className="p-4 u-round-sm w-100p bg-pink-500">6</div>
                        </div>
                        <CodeBlock
                            code={`<div class="p-2 u-round-sm bg-pink-100 grid grid-cols-3 u-gap-3 text-white font-bold u-text-center">
    <div class="p-4 u-round-sm w-100p bg-pink-500">1</div>
    <div class="p-4 u-round-sm w-100p bg-pink-500">2</div>
    <div class="p-4 u-round-sm w-100p bg-pink-500">3</div>
    <div class="p-4 u-round-sm w-100p bg-pink-500">4</div>
    <div class="p-4 u-round-sm w-100p bg-pink-500">5</div>
    <div class="p-4 u-round-sm w-100p bg-pink-500">6</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="specific">
                    <div className="content">
                        <Headline title="Row/Column Specific" link="#specific" size="4" />
                        <div className="divider"></div>

                        <p>
                            You can specify row and column specific gaps by using the <code>u-row-gap-[size]</code> and{' '}
                            <code>u-col-gap-[size]</code> classes respectively.
                        </p>
                        <div className="p-2 u-round-sm bg-red-100 grid grid-cols-3 u-row-gap-1 u-col-gap-5 text-white font-bold u-text-center">
                            <div className="p-4 u-round-sm w-100p bg-red-500">1</div>
                            <div className="p-4 u-round-sm w-100p bg-red-500">2</div>
                            <div className="p-4 u-round-sm w-100p bg-red-500">3</div>
                            <div className="p-4 u-round-sm w-100p bg-red-500">4</div>
                            <div className="p-4 u-round-sm w-100p bg-red-500">5</div>
                            <div className="p-4 u-round-sm w-100p bg-red-500">6</div>
                        </div>
                        <CodeBlock
                            code={`<div class="p-2 u-round-sm bg-red-100 grid grid-cols-3 u-row-gap-1 u-col-gap-5 text-white font-bold u-text-center">
    <div class="p-4 u-round-sm w-100p bg-red-500">1</div>
    <div class="p-4 u-round-sm w-100p bg-red-500">2</div>
    <div class="p-4 u-round-sm w-100p bg-red-500">3</div>
    <div class="p-4 u-round-sm w-100p bg-red-500">4</div>
    <div class="p-4 u-round-sm w-100p bg-red-500">5</div>
    <div class="p-4 u-round-sm w-100p bg-red-500">6</div>
</div>`}
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
        flags.$GAP: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, use <code>u-gap-3-md</code> to apply{' '}
                            <code>gap: calc(0.5rem * 3)</code> to an element only at medium screen sizes and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-gap-3-md">
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
                            The classes specified above are the default utility classes for defining gaps and it is
                            dependent on the sizing used within the framework. You can add, change, or remove sizes in{' '}
                            <code>_config.scss</code> in your own build.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        sizing-system: (
            base-size: 0.25rem,
            steps: (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 60, 72)
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>
                            This would generate the following <b>gap</b> classes.
                        </p>
                        <CodeBlock
                            code={`.u-gap-0 {
    gap: calc(0.25rem * 0) !important
}
/* ... */
.u-gap-72 {
    gap: calc(0.25rem * 72) !important;
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
                        pageName: `Gap`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(GapUtilsPage);
