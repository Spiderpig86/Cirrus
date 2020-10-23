import React from 'react';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';

export const TablePage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="placeholder">
                    <div className="content">
                        <Headline title="Placeholder" link="#placeholder" />
                        <div className="divider"></div>

                        <p>
                            Cirrus adds a clean look to any table. Just add the <code>table</code> class to your table
                            element.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a simple table that consists of both a header and a footer. Titles that have an{' '}
                            <code>abbr</code> element are underlined with a dotted line.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <abbr title="Title1">T1</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Title2">T2</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Title3">T3</abbr>
                                            </th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>
                                                <abbr title="Title1">T1</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Title2">T2</abbr>
                                            </th>
                                            <th>
                                                <abbr title="Title3">T3</abbr>
                                            </th>
                                            <th>Notes</th>
                                        </tr>
                                    </tfoot>

                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Row:1 Cell:1</td>
                                            <td>Row:1 Cell:2</td>
                                            <td>Row:1 Cell:3</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Row:2 Cell:1</td>
                                            <td>Row:2 Cell:2</td>
                                            <td>Row:2 Cell:3</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Row:3 Cell:1</td>
                                            <td>Row:3 Cell:2</td>
                                            <td>Row:3 Cell:3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6">
                                <h6>Structure</h6>
                                <ul>
                                    <li>
                                        <code>table</code>
                                        <ul>
                                            <li>
                                                <code>thead</code>
                                            </li>
                                            <li>
                                                <code>tfoot</code>
                                            </li>
                                            <li>
                                                <code>tbody</code>
                                                <ul>
                                                    <li>
                                                        <code>tr</code>
                                                    </li>
                                                    <ul>
                                                        <li>
                                                            <code>th</code>
                                                        </li>
                                                        <li>
                                                            <code>td</code>
                                                        </li>
                                                    </ul>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<table className="table">
    <thead>
        <tr>
            <th><abbr title="Title1">T1</abbr></th>
            <th><abbr title="Title2">T2</abbr></th>
            <th><abbr title="Title3">T3</abbr></th>
            <th>Notes</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th><abbr title="Title1">T1</abbr></th>
            <th><abbr title="Title2">T2</abbr></th>
            <th><abbr title="Title3">T3</abbr></th>
            <th>Notes</th>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th>1</th>
            <td>Row:1 Cell:1</td>
            <td>Row:1 Cell:2</td>
            <td>Row:1 Cell:3</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Row:2 Cell:1</td>
            <td>Row:2 Cell:2</td>
            <td>Row:2 Cell:3</td>
        </tr>
        <tr>
            <th>3</th>
            <td>Row:3 Cell:1</td>
            <td>Row:3 Cell:2</td>
            <td>Row:3 Cell:3</td>
        </tr>
    </tbody>
</table>`}
                            language="htmlbars"
                        />

                        <p>
                            To mark a row as selected, add the <code>selected</code> class to that row.
                        </p>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <abbr title="Title1">T1</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title2">T2</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title3">T3</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title4">T4</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title5">T5</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Short">S</abbr>
                                    </th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>
                                        <abbr title="Title1">T1</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title2">T2</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title3">T3</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title4">T4</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Title5">T5</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Short">S</abbr>
                                    </th>
                                    <th>Notes</th>
                                </tr>
                            </tfoot>

                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Row:1 Cell:1</td>
                                    <td>Row:1 Cell:2</td>
                                    <td>Row:1 Cell:3</td>
                                    <td>Row:1 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:1 Cell:5</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Row:2 Cell:1</td>
                                    <td>Row:2 Cell:2</td>
                                    <td>Row:2 Cell:3</td>
                                    <td>Row:2 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:2 Cell:5</td>
                                </tr>
                                <tr className="selected">
                                    <th>3</th>
                                    <td>Row:3 Cell:1</td>
                                    <td>Row:3 Cell:2</td>
                                    <td>Row:3 Cell:3</td>
                                    <td>Row:3 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:3 Cell:5</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Row:4 Cell:1</td>
                                    <td>Row:4 Cell:2</td>
                                    <td>Row:4 Cell:3</td>
                                    <td>Row:4 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:4 Cell:5</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Row:5 Cell:1</td>
                                    <td>Row:5 Cell:2</td>
                                    <td>Row:5 Cell:3</td>
                                    <td>Row:5 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:5 Cell:5</td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Row:6 Cell:1</td>
                                    <td>Row:6 Cell:2</td>
                                    <td>Row:6 Cell:3</td>
                                    <td>Row:6 Cell:4</td>
                                    <td>S</td>
                                    <td>Row:6 Cell:5</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<table className="table">
    <thead>
        <tr>
            <th><abbr title="Title1">T1</abbr></th>
            <th><abbr title="Title2">T2</abbr></th>
            <th><abbr title="Title3">T3</abbr></th>
            <th><abbr title="Title4">T4</abbr></th>
            <th><abbr title="Title5">T5</abbr></th>
            <th><abbr title="Short">S</abbr></th>
            <th>Notes</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th><abbr title="Title1">T1</abbr></th>
            <th><abbr title="Title2">T2</abbr></th>
            <th><abbr title="Title3">T3</abbr></th>
            <th><abbr title="Title4">T4</abbr></th>
            <th><abbr title="Title5">T5</abbr></th>
            <th><abbr title="Short">S</abbr></th>
            <th>Notes</th>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th>1</th>
            <td>Row:1 Cell:1</td>
            <td>Row:1 Cell:2</td>
            <td>Row:1 Cell:3</td>
            <td>Row:1 Cell:4</td>
            <td>S</td>
            <td>Row:1 Cell:5</td>
        </tr>
        <tr>
            <th>2</th>
            <td>Row:2 Cell:1</td>
            <td>Row:2 Cell:2</td>
            <td>Row:2 Cell:3</td>
            <td>Row:2 Cell:4</td>
            <td>S</td>
            <td>Row:2 Cell:5</td>
        </tr>
        <tr className="selected">
            <th>3</th>
            <td>Row:3 Cell:1</td>
            <td>Row:3 Cell:2</td>
            <td>Row:3 Cell:3</td>
            <td>Row:3 Cell:4</td>
            <td>S</td>
            <td>Row:3 Cell:5</td>
        </tr>
        <tr>
            <th>4</th>
            <td>Row:4 Cell:1</td>
            <td>Row:4 Cell:2</td>
            <td>Row:4 Cell:3</td>
            <td>Row:4 Cell:4</td>
            <td>S</td>
            <td>Row:4 Cell:5</td>
        </tr>
        <tr>
            <th>5</th>
            <td>Row:5 Cell:1</td>
            <td>Row:5 Cell:2</td>
            <td>Row:5 Cell:3</td>
            <td>Row:5 Cell:4</td>
            <td>S</td>
            <td>Row:5 Cell:5</td>
        </tr>
        <tr>
            <th>6</th>
            <td>Row:6 Cell:1</td>
            <td>Row:6 Cell:2</td>
            <td>Row:6 Cell:3</td>
            <td>Row:6 Cell:4</td>
            <td>S</td>
            <td>Row:6 Cell:5</td>
        </tr>
    </tbody>
</table>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="styles">
                    <div className="content">
                        <Headline title="Styles" link="#styles" size="4" />
                        <div className="divider"></div>
                        <p>Tables also come in alternate styles.</p>
                        <div className="space"></div>

                        {[
                            {
                                name: 'Bordered',
                                class: 'bordered',
                                description: (
                                    <p>
                                        Tables and table entries have borders on all sides. Add the{' '}
                                        <code>bordered</code> class to the table.
                                    </p>
                                ),
                            },
                            {
                                name: 'Borderless',
                                class: 'borderless',
                                description: (
                                    <p>
                                        Tables have no borders. Add the <code>borderless</code> class to the table.
                                    </p>
                                ),
                            },
                            {
                                name: 'Compact',
                                class: 'small',
                                description: (
                                    <p>
                                        A compact table can be created by adding the <code>small</code> class to the
                                        table. The rows aremore compact than the regular design.
                                    </p>
                                ),
                            },
                            {
                                name: 'Striped',
                                class: 'striped',
                                description: (
                                    <p>
                                        A table with an alternating pattern. Add the <code>striped</code> class to the
                                        table.
                                    </p>
                                ),
                            },
                            {
                                name: 'Fixed Header',
                                class: 'fixed-head',
                                description: (
                                    <>
                                        <p>
                                            Implementation is slightly different for this table. Add the{' '}
                                            <code>fixed-head</code> class to the table. You must also set the height of
                                            the tbody of the table:
                                        </p>
                                        <CodeBlock
                                            code={`.table.fixed-head tbody {
    height: your-height;
}`}
                                            language="css"
                                        />
                                    </>
                                ),
                            },
                        ].map((tableEntry) => {
                            return (
                                <>
                                    <h6>{tableEntry.name}</h6>
                                    {tableEntry.description}

                                    <table className={`table ${tableEntry.class}`}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <abbr title="Title1">T1</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title2">T2</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title3">T3</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title4">T4</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title5">T5</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Short">S</abbr>
                                                </th>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>
                                                    <abbr title="Title1">T1</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title2">T2</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title3">T3</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title4">T4</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Title5">T5</abbr>
                                                </th>
                                                <th>
                                                    <abbr title="Short">S</abbr>
                                                </th>
                                                <th>Notes</th>
                                            </tr>
                                        </tfoot>

                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td>Row:1 Cell:1</td>
                                                <td>Row:1 Cell:2</td>
                                                <td>Row:1 Cell:3</td>
                                                <td>Row:1 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:1 Cell:5</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>Row:2 Cell:1</td>
                                                <td>Row:2 Cell:2</td>
                                                <td>Row:2 Cell:3</td>
                                                <td>Row:2 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:2 Cell:5</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>Row:3 Cell:1</td>
                                                <td>Row:3 Cell:2</td>
                                                <td>Row:3 Cell:3</td>
                                                <td>Row:3 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:3 Cell:5</td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>Row:4 Cell:1</td>
                                                <td>Row:4 Cell:2</td>
                                                <td>Row:4 Cell:3</td>
                                                <td>Row:4 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:4 Cell:5</td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>Row:5 Cell:1</td>
                                                <td>Row:5 Cell:2</td>
                                                <td>Row:5 Cell:3</td>
                                                <td>Row:5 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:5 Cell:5</td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <td>Row:6 Cell:1</td>
                                                <td>Row:6 Cell:2</td>
                                                <td>Row:6 Cell:3</td>
                                                <td>Row:6 Cell:4</td>
                                                <td>S</td>
                                                <td>Row:6 Cell:5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="space"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Placeholder', link: './placeholder' }}
                    nextLink={{ name: 'Tabs', link: './tabs' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TablePage);
