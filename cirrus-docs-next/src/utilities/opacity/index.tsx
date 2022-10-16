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
import { DEFAULT_PERCENTAGES, PAGE_TITLE_PREFIX } from '../../../constants';
import { ClassTable } from '../../../layouts/components/class-table';

export const OpacityUtilsPage: React.FC<any> = (props) => {
    const classTable = DEFAULT_PERCENTAGES.map((opacity) => {
        return {
            class: `u-opacity-${opacity}`,
            style: `opacity: ${opacity / 100} !important`,
        };
    });

    const opacityClassTable = DEFAULT_PERCENTAGES.flatMap((percent) => {
        return {
            bgClass: `u-bg-opacity-${percent}`,
            textClass: `u-color-opacity-${percent}`,
            borderClass: `u-border-opacity-${percent}`,
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
                            {DEFAULT_PERCENTAGES.map((opacity) => (
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

                <section className="padtop" id="property-specific">
                    <div className="content">
                        <Headline title="Property Specific" link="#property-specific" size="4" />
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

                        <p>
                            With the new color opacity modifiers, you can now modify the opacity for background, border,
                            and text colors instead of the whole element.
                        </p>

                        <table className="class-table table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th className="w-20">Background</th>
                                    <th className="w-20">Text</th>
                                    <th className="w-20">Border</th>
                                </tr>
                            </thead>
                            <tbody>
                                {opacityClassTable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="w-20">
                                            <code className="text-teal-600 bg-teal-100">{row.bgClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-indigo-600 bg-indigo-100">{row.textClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-pink-600 bg-pink-100">{row.borderClass}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="space"></div>

                        <h6>Changing Background Opacity</h6>
                        <p>
                            Use the background opacity utility classes to control an element's background color opacity.
                            You can use any opacity value that is defined in the{' '}
                            <Link href="/utils/opacity">
                                <a className="u u-LR">opacity scale</a>
                            </Link>
                            .
                        </p>

                        <div className="py-2 u-round-xs bg-gray-000 u-shadow-md u-flex u-items-center u-justify-space-around u-flex-wrap u-flex-nowrap-md">
                            <button className="btn-warning mb-0 u-bg-opacity-100">100%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-90">90%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-80">80%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-70">70%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-60">60%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-50">50%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-40">40%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-30">30%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-20">20%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-10">10%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-0">0%</button>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<button class="u-bg-opacity-100 ...">100%</button>
<button class="u-bg-opacity-90 ...">90%</button>
<button class="u-bg-opacity-80 ...">80%</button>
<button class="u-bg-opacity-70 ...">70%</button>
<button class="u-bg-opacity-60 ...">60%</button>
<button class="u-bg-opacity-50 ...">50%</button>
<button class="u-bg-opacity-40 ...">40%</button>
<button class="u-bg-opacity-30 ...">30%</button>
<button class="u-bg-opacity-20 ...">20%</button>
<button class="u-bg-opacity-10 ...">10%</button>
<button class="u-bg-opacity-0 ...">0%</button>`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <h6>Changing Color Opacity</h6>
                        <p>
                            Use the color opacity utility classes to control an element's text color opacity. You can
                            use any opacity value that is defined in the{' '}
                            <Link href="/utils/opacity">
                                <a className="u u-LR">opacity scale</a>
                            </Link>
                            .
                        </p>

                        <p className="text-teal-600 text-xl u-color-opacity-100">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-90">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-80">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-70">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-60">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-50">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-40">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-30">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-20">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-10">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-teal-600 text-xl u-color-opacity-0">
                            The quick brown fox jumps over the lazy dog.
                        </p>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-color-opacity-100 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-90 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-80 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-70 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-60 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-50 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-40 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-30 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-20 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-10 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-0 ...">The quick brown fox jumps over the lazy dog.</p>`}
                            language="htmlbars"
                        />

                        <div className="space space--lg"></div>

                        <h6>Changing Border Opacity</h6>
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
                        <p>
                            Use the border opacity utility classes to control an element's border color opacity. You can
                            use any opacity value that is defined in the{' '}
                            <Link href="/utils/opacity">
                                <a className="u u-LR">opacity scale</a>
                            </Link>
                            .
                        </p>
                        <div className="bg-indigo-100 p-2 u-round-sm u-flex u-flex-column u-flex-row-md u-items-center u-gap-1">
                            <div className="w-8 h-8 u-center u-round-sm bg-transparent text-indigo-600 font-bold border-indigo-600 u-border-4 u-border-opacity-20">
                                <div>20</div>
                            </div>
                            <div className="w-8 h-8 u-center u-round-sm bg-transparent text-indigo-600 font-bold border-indigo-600 u-border-4 u-border-opacity-40">
                                <div>40</div>
                            </div>
                            <div className="w-8 h-8 u-center u-round-sm bg-transparent text-indigo-600 font-bold border-indigo-600 u-border-4 u-border-opacity-60">
                                <div>60</div>
                            </div>
                            <div className="w-8 h-8 u-center u-round-sm bg-transparent text-indigo-600 font-bold border-indigo-600 u-border-4 u-border-opacity-80">
                                <div>80</div>
                            </div>
                            <div className="w-8 h-8 u-center u-round-sm bg-transparent text-indigo-600 font-bold border-indigo-600 u-border-4 u-border-opacity-100">
                                <div>100</div>
                            </div>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="u-border-opacity-20 ...">
    <div>1</div>
</div>
<div class="u-border-opacity-40 ...">
    <div>40</div>
</div>
<div class="u-border-opacity-60 ...">
    <div>60</div>
</div>
<div class="u-border-opacity-80 ...">
    <div>80</div>
</div>
<div class="u-border-opacity-100 ...">
    <div>100</div>
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
</div>
<div class="u-bg-opacity-50-md">
    <!-- ... -->
</div>
<div class="u-color-opacity-50-md">
    <!-- ... -->
</div>
<div class="u-border-opacity-50-md">
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
                            <Link href="/getting-started/configuration">
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
