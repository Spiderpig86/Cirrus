import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Tag } from '../../../layouts/components/tag';

export const GridTemplatesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Grid Templates</title>
            </Head>
            <div>
                <section className="padtop" id="templates">
                    <div className="content">
                        <Headline title="Grid Templates" link="#templates" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.5.5</div>
                        </span>

                        <p>
                            A series of utility classes that provide an easy abstraction over <b>CSS grid</b>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>The basic idea of CSS grid is to use it as a way to lay out elements on a page, like so.</p>
                        <div className="grid u-gap-2 u-text-center">
                            <div
                                className="grid-c-12"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Header</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-6"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sidebar</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-8 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Main Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sub Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-4 grid-r-3"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Sub Content</b>
                                </p>
                            </div>
                            <div
                                className="grid-c-12"
                                style={{
                                    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    color: '#fff',
                                    borderRadius: '.25rem',
                                }}
                            >
                                <p>
                                    <b>Footer</b>
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="grid u-gap-2 u-text-center">
    <div class="grid-c-12" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Header</b></p>
    </div>
    <div class="grid-c-4 grid-r-6" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Sidebar</b></p>
    </div>
    <div class="grid-c-8 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Main Content</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Sub Content</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Sub Content</b></p>
    </div>
    <div class="grid-c-12" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Footer</b></p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <p>
                            Before diving into how templates work, let's take a look at the building blocks of CSS grid.
                        </p>
                        <p>
                            Inside a <code>grid</code> layout consists of elements of varying row and column spans. For
                            now, any element you add inside of a grid layout will take up 1 unit of space.
                        </p>
                        <p>
                            For example, if we define a layout using <code>grid grid-cols-2</code>, a single{' '}
                            <code>div</code> will use slot 1 of 2 of the columns. Adding another <code>div</code> will
                            use slot 2 of 2. Adding any more will just overflow onto the next row.
                        </p>

                        <div className="grid u-gap-2 grid-cols-2">
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Template Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            By default, the default <code>grid</code> class is 12 rows by 12 columns. To change this,
                            you can use any of the <code>grid-cols-*</code> classes where the '*' represents any number
                            from 1 through 12 inclusive.
                        </p>

                        <div className="grid u-gap-2 grid-cols-1">
                            <div className="_grid-ex">
                                <p>grid-cols-1</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-2">
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-2</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-3">
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-3</p>
                            </div>
                        </div>

                        <div className="grid u-gap-2 grid-cols-4">
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                            <div className="_grid-ex">
                                <p>grid-cols-4</p>
                            </div>
                        </div>

                        <div className="divider"></div>
                        <p className="lead u-text-center">I think you get the idea.</p>
                        <div className="divider"></div>

                        <p>
                            As another example, let's use a grid of 3 columns with the <code>grid-cols-3</code> class.
                        </p>
                        <div className="space"></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="grid grid-cols-3 u-gap-2">
                                    <div className=" _grid-ex">
                                        <p>1</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>2</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>3</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>4</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>5</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>6</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>7</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>8</p>
                                    </div>
                                    <div className="_grid-ex">
                                        <p>9</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="grid grid-cols-3 u-gap-2">
    <div>
        <p>1</p>
    </div>
    <div>
        <p>2</p>
    </div>
    <div>
        <p>3</p>
    </div>
    <div>
        <p>4</p>
    </div>
    <div>
        <p>5</p>
    </div>
    <div>
        <p>6</p>
    </div>
    <div>
        <p>7</p>
    </div>
    <div>
        <p>8</p>
    </div>
    <div>
        <p>9</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="responsive">
                    <div className="content">
                        <Headline title="Responsive" link="#responsive" size="4" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{ classes: 'tag tag--dark', text: 'New' }}
                            rightProps={{ classes: 'tag tag--info', text: '0.7.0' }}
                        />
                        <p>
                            To use the viewport variant of a given class, you just need to suffix each class with a
                            viewport selector. For example, if I only want <code>grid</code> to be applied to some
                            contaner for <code>lg</code> and above, then I would use the <code>grid-lg</code> class.
                        </p>

                        <CodeBlock
                            code={`<div class="grid-lg">
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
                        <Tag
                            leftProps={{ classes: 'tag tag--dark', text: 'Updated' }}
                            rightProps={{ classes: 'tag tag--info', text: '0.7.0' }}
                        />
                        <p>
                            By default, <code>grid</code> is preset with 12 individual columns horizontally with a
                            variable amount of rows. This value can be changed in the framework as well by modifying the
                            grid count inside <code>_config.scss</code>.
                        </p>

                        <CodeBlock
                            code={`$config: (
    extend: (
        grid: (
            properties: (
                grid-columns: 64, // Default is 12
            )
        )
    )
) !default;`}
                            language="scss"
                        />
                        <p>
                            The following classes will also be generated to reflect the changes with{' '}
                            <code>$grid-columns</code>. For example, if the value was changed to <code>64</code>, Cirrus
                            will generate up to <code>grid-c-64</code>, <code>grid-r-64</code>, etc. for these classes:
                        </p>
                        <ul>
                            <li>
                                <code>grid-cols</code>
                            </li>
                            <li>
                                <code>grid-c</code>
                            </li>
                            <li>
                                <code>grid-r</code>
                            </li>
                            <li>
                                <code>grid-cs</code>
                            </li>
                            <li>
                                <code>grid-ce</code>
                            </li>
                            <li>
                                <code>grid-rs</code>
                            </li>
                            <li>
                                <code>grid-re</code>
                            </li>
                        </ul>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Grid Span', link: './span' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(GridTemplatesPage);
