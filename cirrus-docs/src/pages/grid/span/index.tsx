import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const GridSpanPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="span">
                    <div className="content">
                        <Headline title="Grid Span" link="#span" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.5.5</div>
                        </span>

                        <p>
                            These classes are utility classes for determining how elements are located and stretched
                            across the <code>grid</code>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="spanning-elements">
                    <div className="content">
                        <Headline title="Spanning Elements" link="./spanning-elements" size="4" />
                        <div className="divider"></div>
                        <p>These are utility classes used for specifying how </p>

                        <h6 className="font-alt">Columns</h6>
                        <p>
                            Use <code>grid-c-*</code> where '*' is any integer from 1 through 12 inclusive to specify
                            how many columns an element should span.
                        </p>

                        <div className="grid grid-gap-3">
                            <div className="grid-c-1 _grid-ex">
                                <span>1</span>
                            </div>
                            <div className="grid-c-11" />
                            <div className="grid-c-2 _grid-ex">
                                <span>grid-c-2</span>
                            </div>
                            <div className="grid-c-10" />
                            <div className="grid-c-3 _grid-ex">
                                <span>grid-c-3</span>
                            </div>
                            <div className="grid-c-9" />
                            <div className="grid-c-4 _grid-ex">
                                <span>grid-c-4</span>
                            </div>
                            <div className="grid-c-8" />
                            <div className="grid-c-5 _grid-ex">
                                <span>grid-c-5</span>
                            </div>
                            <div className="grid-c-7" />
                            <div className="grid-c-6 _grid-ex">
                                <span>grid-c-6</span>
                            </div>
                            <div className="grid-c-7 _grid-ex">
                                <span>grid-c-7</span>
                            </div>
                            <div className="grid-c-8 _grid-ex">
                                <span>grid-c-8</span>
                            </div>
                            <div className="grid-c-9 _grid-ex">
                                <span>grid-c-9</span>
                            </div>
                            <div className="grid-c-10 _grid-ex">
                                <span>grid-c-10</span>
                            </div>
                            <div className="grid-c-11 _grid-ex">
                                <span>grid-c-11</span>
                            </div>
                            <div className="grid-c-12 _grid-ex">
                                <span>grid-c-12</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="grid grid-gap-3">
    <div class="grid-c-1"><span>1</span></div>
    <div class="grid-c-11"></div>
    <div class="grid-c-2"><span>grid-c-2</span></div>
    <div class="grid-c-10"></div>
    <div class="grid-c-3"><span>grid-c-3</span></div>
    <div class="grid-c-9"></div>
    <div class="grid-c-4"><span>grid-c-4</span></div>
    <div class="grid-c-8"></div>
    <div class="grid-c-5"><span>grid-c-5</span></div>
    <div class="grid-c-7"></div>
    <div class="grid-c-6"><span>grid-c-6</span></div>
    <div class="grid-c-7"><span>grid-c-7</span></div>
    <div class="grid-c-8"><span>grid-c-8</span></div>
    <div class="grid-c-9"><span>grid-c-9</span></div>
    <div class="grid-c-10"><span>grid-c-10</span></div>
    <div class="grid-c-11"><span>grid-c-11</span></div>
    <div class="grid-c-12"><span>grid-c-12</span></div>
</div>`} language="htmlbars" />
                        <div className="space"></div>

                        <p>
                            Let's use a small example with a <code>grid</code> of 3 columns.
                        </p>

                        <div className="grid grid-cols-3 grid-gap-3">
                            <div className="grid-c-2 py-4 bg-indigo-200"></div>
                            <div className="py-4 bg-purple-200"></div>
                            <div className="grid-c-3 py-4 bg-purple-200"></div>
                            <div className="grid-c-1 py-4 bg-indigo-200"></div>
                            <div className="grid-c-1 py-4 bg-purple-200"></div>
                            <div className="grid-c-1 py-4 bg-indigo-200"></div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock code={`<div class="grid grid-cols-3 grid-gap-3">
    <div class="grid-c-2 py-4 bg-indigo-200"></div>
    <div class="py-4 bg-purple-200"></div>
    <div class="grid-c-3 py-4 bg-purple-200"></div>
    <div class="grid-c-1 py-4 bg-indigo-200"></div>
    <div class="grid-c-1 py-4 bg-purple-200"></div>
    <div class="grid-c-1 py-4 bg-indigo-200"></div>
</div>`} language="htmlbars" />

                        <div className="space large"></div>

                        <h6 className="font-alt">Rows</h6>
                        <p>
                            Like what is shown above for columns, the same applies for spanning rows -- this time using
                            the <code>grid-r-*</code> class.
                        </p>

                        <div
                            className="grid grid-gap-3"
                            style={{
                                height: '500px',
                            }}
                        >
                            <div className="grid-r-1 _grid-ex level">
                                <span>grid-r-1</span>
                            </div>
                            <div className="grid-r-2 _grid-ex level">
                                <span>grid-r-2</span>
                            </div>
                            <div className="grid-r-3 _grid-ex level">
                                <span>grid-r-3</span>
                            </div>
                            <div className="grid-r-4 _grid-ex level">
                                <span>grid-r-4</span>
                            </div>
                            <div className="grid-r-5 _grid-ex level">
                                <span>grid-r-5</span>
                            </div>
                            <div className="grid-r-6 _grid-ex level">
                                <span>grid-r-6</span>
                            </div>
                            <div className="grid-r-7 _grid-ex level">
                                <span>grid-r-7</span>
                            </div>
                            <div className="grid-r-8 _grid-ex level">
                                <span>grid-r-8</span>
                            </div>
                            <div className="grid-r-9 _grid-ex level">
                                <span>grid-r-9</span>
                            </div>
                            <div className="grid-r-10 _grid-ex level">
                                <span>grid-r-10</span>
                            </div>
                            <div className="grid-r-11 _grid-ex level">
                                <span>grid-r-11</span>
                            </div>
                            <div className="grid-r-12 _grid-ex level">
                                <span>grid-r-12</span>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="grid grid-gap-3" style="height: 500px;">
    <div class="grid-r-1 level"><span>grid-r-1</span></div>
    <div class="grid-r-2 level"><span>grid-r-2</span></div>
    <div class="grid-r-3 level"><span>grid-r-3</span></div>
    <div class="grid-r-4 level"><span>grid-r-4</span></div>
    <div class="grid-r-5 level"><span>grid-r-5</span></div>
    <div class="grid-r-6 level"><span>grid-r-6</span></div>
    <div class="grid-r-7 level"><span>grid-r-7</span></div>
    <div class="grid-r-8 level"><span>grid-r-8</span></div>
    <div class="grid-r-9 level"><span>grid-r-9</span></div>
    <div class="grid-r-10 level"><span>grid-r-10</span></div>
    <div class="grid-r-11 level"><span>grid-r-11</span></div>
    <div class="grid-r-12 level"><span>grid-r-12</span></div>
</div>`} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="start-end">
                    <div className="content">
                        <Headline title="Start / End" link="#start-end" size="4" />
                        <div className="divider"></div>

                        <p>
                            For greater control, you can explicitly specify the start and end for either a row or
                            column.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-alt">Columns</h6>
                        <p>
                            To specify the starting column position for an element, use the <code>grid-cs-*</code>{' '}
                            class. The <i>cs</i> stands for <i>column start</i>.
                        </p>
                        <p>
                            To specify the starting column position for an element, use the <code>grid-ce-*</code>{' '}
                            class. The <i>cs</i> stands for <i>column end</i>.
                        </p>

                        <p>As stated prior, the '*' represents any number from 1 to 12 inclusive.</p>
                        <div className="space large"></div>

                        <div className="grid grid-gap-3">
                            <div className="grid-cs-2 grid-ce-7 _grid-ex">2-7</div>
                            <div className="grid-cs-1 grid-ce-4 _grid-ex">1-4</div>
                            <div className="grid-c-5" />
                            <div className="grid-cs-6 grid-ce-end _grid-ex">6 - end</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="grid grid-gap-3">
    <div class="grid-cs-2 grid-ce-7">2-7</div>
    <div class="grid-cs-1 grid-ce-4">1-4</div>
    <div class="grid-c-5"></div>
    <div class="grid-cs-6 grid-ce-end">6 - end</div>
</div>`} language="htmlbars" />

                        <p>In addition to these classes, there are also additional helper classes.</p>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>grid-ce-end</code>
                                    </td>
                                    <td>Extends grid element to take up remaining width.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>grid-ce-auto</code>
                                    </td>
                                    <td>Auto adjusts element width span.</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="space large"></div>

                        <h6 className="font-alt">Rows</h6>
                        <p>
                            To specify the starting column position for an element, use the <code>grid-rs-*</code>{' '}
                            class. The <i>cs</i> stands for <i>row start</i>.
                        </p>
                        <p>
                            To specify the starting column position for an element, use the <code>grid-re-*</code>{' '}
                            class. The <i>cs</i> stands for <i>row end</i>.
                        </p>
                        <div className="grid grid-cols-9 grid-gap-3">
                            <div className="grid-rs-10 grid-re-12 _grid-ex">10-12</div>
                            <div className="grid-rs-8 grid-re-12 _grid-ex">8-12</div>
                            <div className="grid-rs-6 grid-re-12 _grid-ex">6-12</div>
                            <div className="grid-rs-4 grid-re-12 _grid-ex">4-12</div>
                            <div className="grid-rs-2 grid-re-12 _grid-ex">2-12</div>
                            <div className="grid-rs-4 grid-re-12 _grid-ex">4-12</div>
                            <div className="grid-rs-6 grid-re-12 _grid-ex">6-12</div>
                            <div className="grid-rs-8 grid-re-12 _grid-ex">8-12</div>
                            <div className="grid-rs-10 grid-re-12 _grid-ex">10-12</div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<div class="grid grid-cols-9 grid-gap-3">
    <div class="grid-rs-10 grid-re-12">10-12</div>
    <div class="grid-rs-8 grid-re-12">8-12</div>
    <div class="grid-rs-6 grid-re-12">6-12</div>
    <div class="grid-rs-4 grid-re-12">4-12</div>
    <div class="grid-rs-2 grid-re-12">2-12</div>
    <div class="grid-rs-4 grid-re-12">4-12</div>
    <div class="grid-rs-6 grid-re-12">6-12</div>
    <div class="grid-rs-8 grid-re-12">8-12</div>
    <div class="grid-rs-10 grid-re-12">10-12</div>
</div>`} language="htmlbars" />

                        <p>In addition to these classes, there are also additional helper classes.</p>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>grid-re-end</code>
                                    </td>
                                    <td>Extends grid element to take up remaining height.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>grid-re-auto</code>
                                    </td>
                                    <td>Auto adjusts element height span.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Grid Templates', link: './templates' }}
                    nextLink={{ name: 'Grid Gap', link: './gap' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
