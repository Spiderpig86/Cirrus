import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Tag } from '../../../layouts/components/tag';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ClassTable } from '../../../layouts/components/class-table';

export const OpacityUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_OPACITY_CLASSES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const classTable = DEFAULT_OPACITY_CLASSES.map((opacity) => {
        return {
            class: `u-opacity-${opacity}`,
            style: `opacity: ${opacity / 100} !important`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Opacity</title>
            </Head>
            <div>
                <section className="padtop" id="opacity">
                    <div className="content">
                        <Headline title="Opacity" link="#opacity" />
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
                        <p>These are utility classes that specify the z-index of elements.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>Below is a demo of all supported opacity utility classes.</p>

                        <div className="py-2 u-center">
                            {DEFAULT_OPACITY_CLASSES.map((opacity) => (
                                <button className={`btn-info mx-1 u-opacity-${opacity}`}>{`${opacity}%`}</button>
                            ))}
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="py-2">
    <button class="btn-info mx-1 u-opacity-0">0%</button>
    <button class="btn-info mx-1 u-opacity-10">10%</button>
    <button class="btn-info mx-1 u-opacity-20">20%</button>
    <button class="btn-info mx-1 u-opacity-30">30%</button>
    <button class="btn-info mx-1 u-opacity-40">40%</button>
    <button class="btn-info mx-1 u-opacity-50">50%</button>
    <button class="btn-info mx-1 u-opacity-60">60%</button>
    <button class="btn-info mx-1 u-opacity-70">70%</button>
    <button class="btn-info mx-1 u-opacity-80">80%</button>
    <button class="btn-info mx-1 u-opacity-90">90%</button>
    <button class="btn-info mx-1 u-opacity-100">100%</button>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, use <code>u-opacity-50-md</code> to apply{' '}
                            <code>opacity: 0.5</code> to an element only at medium screen sizes and above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-opacity-50-md">
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
                            The classes specified above are the default utility classes for setting opacities. You can
                            add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        opacity: (
            25: .25,
            75: .75,
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following classes.</p>
                        <CodeBlock
                            code={`.u-opacity-25 {
    opacity: .25 !important;
}
.u-opacity-75 {
    opacity: .75 !important;
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
                    prevLink={{ name: 'Misc', link: './misc' }}
                    nextLink={{ name: 'Overflow', link: './overflow' }}
                />
            </div>

            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(OpacityUtilsPage);
