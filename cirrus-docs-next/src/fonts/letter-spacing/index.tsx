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
import { TITLE_FONTS } from '../../../config/sidebar';

export const LetterSpacingPage: React.FC<any> = (props) => {
    const DEFAULT_LETTER_SPACING_CLASSES = {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        loose: '.025em',
        looser: '.05em',
        loosest: '.1em',
    };

    const classTable = Object.entries(DEFAULT_LETTER_SPACING_CLASSES).map((entry) => {
        return {
            class: `tracking-${entry[0]}`,
            style: `letter-spacing: ${entry[1]} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Letter Spacing</title>
            </Head>
            <div>
                <section className="padtop" id="letter-spacing">
                    <div className="content">
                        <Headline title="Letter Spacing" link="#letter-spacing" />
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
                        <p>These are utility classes that specify the letter spacing (tracking) of an element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a demo of all utility classes that apply letter spacing styles.
                        </p>
                        <div className="space"></div>

                        <div className="">
                            {Object.entries(DEFAULT_LETTER_SPACING_CLASSES)
                                .map((entry) => {
                                    return (
                                        <div className="mb-4">
                                            <p className="text-gray-600 mb-0">
                                                <b>tracking-{entry[0]}</b>
                                            </p>
                                            <h4 className={`tracking-${entry[0]} font-normal mt-0`}>
                                                The quick brown fox jumps over the lazy dog.
                                            </h4>
                                        </div>
                                    );
                                })}
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock
                            code={`<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-tightest</b>
  </p>
  <h4 class="tracking-tightest font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-tighter</b>
  </p>
  <h4 class="tracking-tighter font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-tight</b>
  </p>
  <h4 class="tracking-tight font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-normal</b>
  </p>
  <h4 class="tracking-normal font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-loose</b>
  </p>
  <h4 class="tracking-loose font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-looser</b>
  </p>
  <h4 class="tracking-looser font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
</div>
<div class="mb-4">
  <p class="text-gray-600 mb-0">
    <b>tracking-loosest</b>
  </p>
  <h4 class="tracking-loosest font-normal mt-0">The quick brown fox jumps over the lazy dog.</h4>
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
                            The classes specified above are the default utility classes for setting the letter-spacing
                            property. You can add, change, or remove classes within the <code>_config.scss</code> file
                            of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        letter-spacing: (
            2x-tighter: '-.1em'
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.tracking-2x-tighter {
    letter-spacing: -.1rem !important;
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
                        pageName: `Letter Spacing`,
                    }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(LetterSpacingPage);
