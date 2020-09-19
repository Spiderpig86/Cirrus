import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

import './index.scss';
import { Link } from 'react-router-dom';

export const ColumnsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <span>
                <section className="padtop" id="glyphs">
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
                        <CodeBlock code={``} language="htmlbars" />
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
                        <CodeBlock code={``} language="htmlbars" />
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
                            To change this behavior, you can use the <code>u-no-wrap</code> utility class.
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
                        <CodeBlock code={``} language="htmlbars" />
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
                            <Link className="u u-LR" to="/fundamentals/viewports">
                                viewports
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
                                        Hide content for widths below <code>640px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-sm-*</code>
                                    </td>
                                    <td>
                                        Hide content for widths <code>641px</code> and above.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-md-*</code>
                                    </td>
                                    <td>
                                        Hide content for widths between <code>641px</code> and <code>768px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>col-lg-*</code>
                                    </td>
                                    <td>
                                        Hide content for widths <code>768px</code> and above.
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="space large"></div>
                        <h6>Prevent Stacking</h6>
                    </div>
                </section>

                <section className="padtop" id="offset">
                    <div className="content">
                        <Headline title="Offset" link="#offset" size="4" />
                        <div className="divider"></div>

                        <p>Cirrus makes defining how much a div should span very simple using with the </p>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Dividers', link: './dividers' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};
