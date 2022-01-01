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
import { DocExample } from '../../../models/doc-example';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';

export const ZIndexUtilsPage: React.FC<any> = (props) => {
    const DEFAULT_Z_INDEX_CLASSES = ['0', '10', '20', '30', '40', '50', 'auto'];

    const classTable = DEFAULT_Z_INDEX_CLASSES.map((zIndex) => {
        return {
            class: `u-z-${zIndex}`,
            style: `z-index: ${zIndex} !important`,
        };
    });
    const docExamples: DocExample[] = [];

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Z-Indexes</title>
            </Head>
            <div>
                <section className="padtop" id="z-index">
                    <div className="content">
                        <Headline title="Z-Index" link="#z-index" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `Added`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />
                        <p>These are utility classes that specify the z-index of elements.</p>

                        <table className="table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '200px',
                                        }}
                                    >
                                        Class
                                    </th>
                                    <th>Styles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classTable.map((row, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-blue-600 bg-blue-100">{row.class}</code>
                                        </td>
                                        <td>
                                            <pre>
                                                <code>{row.style}</code>
                                            </pre>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        <p>Below is a demo of all supported z-index utility classes.</p>

                        <div className="bg-teal-100 u-flex u-flex-column p-4">
                            <div className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-50">
                                <h3 className="my-1">50</h3>
                            </div>
                            <div
                                className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-40"
                                style={{ transform: 'translateY(-0.75rem)' }}
                            >
                                <h3 className="my-1">40</h3>
                            </div>
                            <div
                                className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-30"
                                style={{ transform: 'translateY(-1.25rem)' }}
                            >
                                <h3 className="my-1">30</h3>
                            </div>
                            <div
                                className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-20"
                                style={{ transform: 'translateY(-2rem)' }}
                            >
                                <h3 className="my-1">20</h3>
                            </div>
                            <div
                                className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-10"
                                style={{ transform: 'translateY(-2.75rem)' }}
                            >
                                <h3 className="my-1">10</h3>
                            </div>
                            <div
                                className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-0"
                                style={{ transform: 'translateY(-3.5rem)' }}
                            >
                                <h3 className="my-1">0</h3>
                            </div>
                            <div className="u-text-center text-teal-500">
                                <p>And of course...</p>
                            </div>
                            <div className="square u-round-xs-sm bg-teal-500 text-white p-3 u-shadow-xl u-z-auto">
                                <h3 className="my-0">auto</h3>
                            </div>
                        </div>

                        <div className="space space--lg"></div>
                        <CodeBlock code={`<div class="u-z-50 ...">50</div>
<div class="u-z-40 ...">40</div>
<div class="u-z-30 ...">30</div>
<div class="u-z-20 ...">20</div>
<div class="u-z-10 ...">10</div>
<div class="u-z-0 ...">0</div>
<div class="u-z-auto ...">auto</div>`} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        
                        <Blockquote accentColor={'#fcd9bd'}>
                            <p>⚠ Note that the viewport variants are disabled from the default build of Cirrus. To enable, you must enable it yourself in <code>_flags.scss</code> and create a custom build.</p>

                            <div className="space"></div>
                            <CodeBlock code={`//_flags.scss
$_VIEWPORT_CLASS_FLAGS: (
    //...
    /* 'ZINDEX': false, */
    'ZINDEX': true,
    //...
);`} language="scss"/>
                        </Blockquote>

                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a viewport selector. For example, if I only want <code>u-z-20</code> to be applied to some element for <code>lg</code> and above, then I would use the <code>u-z-20-lg</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="u-z-20-md">
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
                        
                        <p>The classes specified above are the default utility classes for setting z-indexes. You can add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.</p>

                        <div className="space"></div>

                        <CodeBlock code={`// _config.scss
$config: (
    z-index: (
        25: 25,
        75: 75,
    )
);`} language="scss" />
                        <p>This would generate the following classes.</p>
                        <CodeBlock code={`.u-z-25 {
    z-index: 25 !important;
}
.u-z-75 {
    z-index: 75 !important;
}`} language="css" />
                    </div>
                </section>
            </div>
            
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ZIndexUtilsPage);
