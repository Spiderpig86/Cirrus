import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';

import initializeExamples from '../../../static/js/fluid-column-example.js';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ColumnsPage: React.FC<any> = (props) => {
    useEffect(() => {
        initializeExamples();
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Columns</title>
            </Head>
            <span>
                <section className="padtop" id="columns">
                    <div className="content">
                        <Headline title="Columns" link="#columns" />
                        <div className="divider"></div>

                        <p>
                            Perhaps the most annoying part of designing a website is ensuring that column widths are
                            consistent throughout the website. Cirrus aims to solve this issue with a simple 12-column
                            grid system powered by <b>Flexbox</b> to provide an easy to maintain and scalable framework.
                            If 12 columns are not enough, there is a flexible column that will automatically adjust
                            according to the browser's width and its neighboring columns.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>
                        <p>
                            Every flexbox layout begins with a <code>row</code>. Every <code>row</code> contains columns
                            represented with the <code>col-*</code> class, where the '*' represents any number from 1
                            through 12 inclusive.
                        </p>
                        <div id="grids">
                            <div className="row">
                                <div className="col-12 uppercase">
                                    <div className="uppercase">Col-12</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11 uppercase">
                                    <div className="uppercase">Col-11</div>
                                </div>
                                <div className="col-1 uppercase">
                                    <div className="uppercase">Col-1</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 uppercase">
                                    <div className="uppercase">Col-10</div>
                                </div>
                                <div className="col-2 uppercase">
                                    <div className="uppercase">Col-2</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9 uppercase">
                                    <div className="uppercase">Col-9</div>
                                </div>
                                <div className="col-3 uppercase">
                                    <div className="uppercase">Col-3</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 uppercase">
                                    <div className="uppercase">Col-8</div>
                                </div>
                                <div className="col-4 uppercase">
                                    <div className="uppercase">Col-4</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7 uppercase">
                                    <div className="uppercase">Col-7</div>
                                </div>
                                <div className="col-5 uppercase">
                                    <div className="uppercase">Col-5</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 uppercase">
                                    <div className="uppercase">Col-6</div>
                                </div>
                                <div className="col-6 uppercase">
                                    <div className="uppercase">Col-6</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 uppercase">
                                    <div className="uppercase">Col-5</div>
                                </div>
                                <div className="col-7 uppercase">
                                    <div className="uppercase">Col-7</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 uppercase">
                                    <div className="uppercase">Col-4</div>
                                </div>
                                <div className="col-8 uppercase">
                                    <div className="uppercase">Col-8</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 uppercase">
                                    <div className="uppercase">Col-3</div>
                                </div>
                                <div className="col-9 uppercase">
                                    <div className="uppercase">Col-9</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 uppercase">
                                    <div className="uppercase">Col-2</div>
                                </div>
                                <div className="col-10 uppercase">
                                    <div className="uppercase">Col-10</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 uppercase">
                                    <div className="uppercase">Col-1</div>
                                </div>
                                <div className="col-11 uppercase">
                                    <div className="uppercase">Col-11</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="col-12 uppercase">
        <div class="uppercase">Col-12</div>
    </div>
</div>
<div class="row">
    <div class="col-11 uppercase">
        <div class="uppercase">Col-11</div>
    </div>
    <div class="col-1 uppercase">
        <div class="uppercase">Col-1</div>
    </div>
</div>
<div class="row">
    <div class="col-10 uppercase">
        <div class="uppercase">Col-10</div>
    </div>
    <div class="col-2 uppercase">
        <div class="uppercase">Col-2</div>
    </div>
</div>
<div class="row">
    <div class="col-9 uppercase">
        <div class="uppercase">Col-9</div>
    </div>
    <div class="col-3 uppercase">
        <div class="uppercase">Col-3</div>
    </div>
</div>
<div class="row">
    <div class="col-8 uppercase">
        <div class="uppercase">Col-8</div>
    </div>
    <div class="col-4 uppercase">
        <div class="uppercase">Col-4</div>
    </div>
</div>
<div class="row">
    <div class="col-7 uppercase">
        <div class="uppercase">Col-7</div>
    </div>
    <div class="col-5 uppercase">
        <div class="uppercase">Col-5</div>
    </div>
</div>
<div class="row">
    <div class="col-6 uppercase">
        <div class="uppercase">Col-6</div>
    </div>
    <div class="col-6 uppercase">
        <div class="uppercase">Col-6</div>
    </div>
</div>
<div class="row">
    <div class="col-5 uppercase">
        <div class="uppercase">Col-5</div>
    </div>
    <div class="col-7 uppercase">
        <div class="uppercase">Col-7</div>
    </div>
</div>
<div class="row">
    <div class="col-4 uppercase">
        <div class="uppercase">Col-4</div>
    </div>
    <div class="col-8 uppercase">
        <div class="uppercase">Col-8</div>
    </div>
</div>
<div class="row">
    <div class="col-3 uppercase">
        <div class="uppercase">Col-3</div>
    </div>
    <div class="col-9 uppercase">
        <div class="uppercase">Col-9</div>
    </div>
</div>
<div class="row">
    <div class="col-2 uppercase">
        <div class="uppercase">Col-2</div>
    </div>
    <div class="col-10 uppercase">
        <div class="uppercase">Col-10</div>
    </div>
</div>
<div class="row">
    <div class="col-1 uppercase">
        <div class="uppercase">Col-1</div>
    </div>
    <div class="col-11 uppercase">
        <div class="uppercase">Col-11</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>
                        <h6>No Space</h6>
                        <p>
                            By default, columns come with <code>1 rem</code> of space between the columns. To remove it,
                            add the <code>no-space</code> class to the <code>row</code>.
                        </p>
                        <div id="grids">
                            <div className="row no-space">
                                <div className="col-6">
                                    <div className="uppercase">Col-6</div>
                                </div>
                                <div className="col-6">
                                    <div className="uppercase">Col-6</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row no-space">
    <div class="col-6">
        <div class="uppercase">Col-6</div>
    </div>
    <div class="col-6">
        <div class="uppercase">Col-6</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>
                        <h6>Automatic Overflow</h6>
                        <p>
                            If there is not enough space in a given row for all the column elements, elements will
                            automatically wrap.
                        </p>
                        <div id="grids">
                            <div className="row">
                                <div className="col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                                <div className="col-6">
                                    <div className="uppercase">col-6</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                                <div className="col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                                <div className="col-9">
                                    <div className="uppercase">col-9</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            h To change this behavior, you can use the <code>u-no-wrap</code> utility class.
                        </p>
                        <div id="grids">
                            <div className="row row--no-wrap">
                                <div className="col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                                <div className="col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                                <div className="col-10">
                                    <div className="uppercase">col-10</div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row row--no-wrap">
    <div class="col-10">
        <div class="uppercase">col-10</div>
    </div>
    <div class="col-10">
        <div class="uppercase">col-10</div>
    </div>
    <div class="col-10">
        <div class="uppercase">col-10</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>
                        <h6>Auto Columns</h6>
                        <p>
                            These are columns denoted with the <code>col</code> class. The elements will automatically
                            resize based on how many elements are present in the <code>row</code>
                        </p>

                        <div id="grids">
                            <div className="row" id="fluidContainerTest">
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                            </div>
                            <div className="btn-group btn-group-fill">
                                <button className="btn-primary" id="fluid-container-add">
                                    Add Column
                                </button>
                                <button className="btn-primary" id="fluid-container-delete">
                                    Delete Column
                                </button>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            By default, the elements will wrap to the next row if there is not enough space. To disable
                            it, add the <code>u-no-wrap</code> class to your <code>row</code>.
                        </p>
                        <p>
                            If you mix sized columns with auto sized columns, the auto sized columns will grow to fill
                            remaining space.
                        </p>

                        <div id="grids">
                            <div className="row">
                                <div className="col-2">
                                    <div className="uppercase">col-2</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                                <div className="col">
                                    <div className="uppercase">col</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="viewports">
                    <div className="content">
                        <Headline title="Viewports" link="#viewports" size="4" />
                        <div className="divider"></div>

                        <p>
                            In Cirrus, columns have 4 different variants based on breakpoints: <code>xs</code>,{' '}
                            <code>sm</code>, <code>md</code>, and <code>lg</code>.
                        </p>
                        <p>
                            For example, to set the breakpoint for <code>col-5</code> to stack only for <code>sm</code>{' '}
                            or smaller, you should use <code>col-sm-5</code>.
                        </p>

                        <p>
                            For more info, view the docs for{' '}
                            <Link href="/fundamentals/viewports">
                                <a className="u u-LR">viewports</a>
                            </Link>
                            .
                        </p>

                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>col-xs-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>640px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-*</code>, <code>col-sm-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>768px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-md-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>1023px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-lg-*</code>
                                    </td>
                                    <td>
                                        Stack columns for widths below <code>1280px</code>.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="space large"></div>
                        <h6>Prevent Stacking</h6>
                        <p>
                            To prevent the default stacking behavior, we can use the <code>ignore-screen</code> class on
                            the column.
                        </p>

                        <p className="title">Before</p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/layout/width-ignore-before.html"
                                style={{ height: '250px', width: '100%', maxWidth: '700px' }}
                                className="w-100 p-1"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <p className="title">After</p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/layout/width-ignore-after.html"
                                style={{ height: '250px', width: '100%', maxWidth: '700px' }}
                                className="w-100 p-1"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="col-6 ignore-screen">
        <div class="uppercase">col-6</div>
    </div>
    <div class="col-6 ignore-screen">
        <div class="uppercase">col-6</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="offset">
                    <div className="content">
                        <Headline title="Offset" link="#offset" size="4" />
                        <div className="divider"></div>

                        <p>
                            Instead of using empty columns to create offsets for columns, the <code>offset-*</code>{' '}
                            class when when applied on the <code>col-*</code> will offset the column to the right
                            depending on the value of '*'. The value of '*' uses values from 1 through 12 inclusive.
                        </p>
                        <p>
                            In other words, a column with <code>col-5 offset-3</code> is offset from the left by the
                            same width of a <code>col-3</code>.
                        </p>

                        <div id="grids">
                            <div className="row">
                                <div className="col-3 offset-1">
                                    <div className="uppercase">offset-1</div>
                                </div>
                                <div className="col-3 offset-3">
                                    <div className="uppercase">offset-3</div>
                                </div>
                                <div className="col-3 offset-4">
                                    <div className="uppercase">offset-4</div>
                                </div>
                                <div className="col-3 offset-6">
                                    <div className="uppercase">offset-6</div>
                                </div>
                                <div className="col-3 offset-9">
                                    <div className="uppercase">offset-9</div>
                                </div>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="row">
    <div class="col-3 offset-1">
        <div class="uppercase">offset-1</div>
    </div>
    <div class="col-3 offset-3">
        <div class="uppercase">offset-3</div>
    </div>
    <div class="col-3 offset-4">
        <div class="uppercase">offset-4</div>
    </div>
    <div class="col-3 offset-6">
        <div class="uppercase">offset-6</div>
    </div>
    <div class="col-3 offset-9">
        <div class="uppercase">offset-9</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <p>
                            For less specific spacing, you can use <code>offset-right</code> to push the column to the
                            left, <code>offset-center</code> to push the column to the center, and{' '}
                            <code>offset-left</code> to push the column to the right.
                        </p>

                        <div className="space"></div>
                        <div id="grids">
                            <div className="row">
                                <div className="col-2">
                                    <div className="uppercase">col-2</div>
                                </div>
                                <div className="col-3 offset-center">
                                    <div className="uppercase"> col-3 offset-center</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 offset-1">
                                    <div className="uppercase">col-3 offset-1</div>
                                </div>
                                <div className="col-3 offset-left">
                                    <div className="uppercase">col-3 offset-left</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 offset-1">
                                    <div className="uppercase">col-3 offset-1</div>
                                </div>
                                <div className="col-4 offset-right offset-6">
                                    <div className="uppercase">col-4 offset-right</div>
                                </div>
                            </div>
                        </div>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>offset-left</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: auto;
margin-right: 0;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>offset-center</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: auto;
margin-right: auto;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>offset-right</code>
                                    </td>
                                    <td className="u-text-left">
                                        <CodeBlock
                                            code={`margin-left: 0;
margin-right: auto;`}
                                            language="css"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div className="row">
    <div className="col-2">
        <div className="uppercase">col-2</div>
    </div>
    <div className="col-3 offset-center">
        <div className="uppercase"> col-3 offset-center</div>
    </div>
</div>
<div className="row">
    <div className="col-5 offset-1">
        <div className="uppercase">col-3 offset-1</div>
    </div>
    <div className="col-3 offset-left">
        <div className="uppercase">col-3 offset-left</div>
    </div>
</div>
<div className="row">
    <div className="col-5 offset-1">
        <div className="uppercase">col-3 offset-1</div>
    </div>
    <div className="col-4 offset-right offset-6">
        <div className="uppercase">col-4 offset-right</div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="ten-grid">
                    <div className="content">
                        <Headline title="10-grid Layout" link="#ten-grid" size="4" />
                        <div className="divider"></div>
                        <p>Easily set scalable heights and widths for any element.</p>

                        <div id="grids">
                            <div className="w-10">
                                <div className="uppercase">w-10</div>
                            </div>
                            <div className="w-20">
                                <div className="uppercase">w-20</div>
                            </div>
                            <div className="w-30">
                                <div className="uppercase">w-30</div>
                            </div>
                            <div className="w-40">
                                <div className="uppercase">w-40</div>
                            </div>
                            <div className="w-50">
                                <div className="uppercase">w-50</div>
                            </div>
                            <div className="w-60">
                                <div className="uppercase">w-60</div>
                            </div>
                            <div className="w-70">
                                <div className="uppercase">w-70</div>
                            </div>
                            <div className="w-80">
                                <div className="uppercase">w-80</div>
                            </div>
                            <div className="w-90">
                                <div className="uppercase">w-90</div>
                            </div>
                            <div className="w-100">
                                <div className="uppercase">w-100</div>
                            </div>
                        </div>
                        <div id="grids" className="row" style={{ height: '300px' }}>
                            <div className="h-10 col">
                                <div className="uppercase">h-10</div>
                            </div>
                            <div className="h-20 col">
                                <div className="uppercase">h-20</div>
                            </div>
                            <div className="h-30 col">
                                <div className="uppercase">h-30</div>
                            </div>
                            <div className="h-40 col">
                                <div className="uppercase">h-40</div>
                            </div>
                            <div className="h-50 col">
                                <div className="uppercase">h-50</div>
                            </div>
                            <div className="h-60 col">
                                <div className="uppercase">h-60</div>
                            </div>
                            <div className="h-70 col">
                                <div className="uppercase">h-70</div>
                            </div>
                            <div className="h-80 col">
                                <div className="uppercase">h-80</div>
                            </div>
                            <div className="h-90 col">
                                <div className="uppercase">h-90</div>
                            </div>
                            <div className="h-100 col">
                                <div className="uppercase">h-100</div>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="w-50">
    ...
</div>
<div class="h-50">
    ...
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Dividers', link: './dividers' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ColumnsPage);
