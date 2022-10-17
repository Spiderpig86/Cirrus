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
    const DEFAULT_TRANSITION_DURATION_CLASSES = {
        75: '75ms',
        100: '100ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
    };

    const classTable = Object.entries(DEFAULT_TRANSITION_DURATION_CLASSES).map((entry) => {
        return {
            class: `u-duration-${entry[0]}`,
            style: `transition-duration: ${entry[1]} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Transition Duration</title>
            </Head>
            <div>
                <section className="padtop" id="transition-duration">
                    <div className="content">
                        <Headline title="Transition Duration" link="#transition-duration" />
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
                        <p>These are utility classes that specify the duration of transitions.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all utility classes that set a transition duration. The syntax follows
                            the form of{' '}
                            <code>u-duration-[{Object.keys(DEFAULT_TRANSITION_DURATION_CLASSES).join('|')}]</code>.
                        </p>
                        <div className="space"></div>

                        <b>Hover over each button to see the difference in transition durations.</b>

                        <div className="bg-blue-100 p-2 p-4-md u-round-sm row">
                            {Object.entries(DEFAULT_TRANSITION_DURATION_CLASSES).map((entry, i) => {
                                return (
                                    <div className="col-4 u-flex u-flex-column u-text-center mb-2" key={i}>
                                        <button className={`btn-info hover-grow u-duration-${entry[0]}`}>
                                            {entry[0]}
                                        </button>
                                        <b>u-duration-{entry[0]}</b>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="u-duration-75..."></div>
<div class="u-duration-100 ..."></div>
<div class="u-duration-200 ..."></div>
<div class="u-duration-300 ..."></div>
<div class="u-duration-500 ..."></div>
<div class="u-duration-700 ..."></div>
<div class="u-duration-1000 ..."></div>`}
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
        flags.$TRANSITION-DURATION: true,
    )
) !default;`}
                                language="scss"
                            />
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>u-duration-100</code> to be applied to some
                            element for <code>lg</code> and above, then I would use the <code>u-duration-100-lg</code>{' '}
                            class.
                        </p>

                        <CodeBlock
                            code={`<div class="u-duration-100-lg">
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
                            The classes specified above are the default utility classes for different filters. You can add, change, or remove classes within the <code>_config.scss</code> file
                            of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        transitions: (
            durations: (
                1500: 1500ms,
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.u-duration-1500 {
    transition-duration: 1500ms !important;
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
                        pageName: `Transition Duration`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(BorderWidthUtilsPage);
