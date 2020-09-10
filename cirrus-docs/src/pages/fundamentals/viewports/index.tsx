import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';

export const ViewportsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="typography">
                    <div className="content">
                        <Headline title="Viewports" link="#viewports" />
                        <div className="divider"></div>

                        <p>
                            Cirrus by default is a framework designed to make developing mobile optimized sites easier.
                            Most styles for layouts and elements adapt to changes in screen size and orientation.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="behavior">
                    <div className="content">
                        <Headline title="Behavior" link="#behavior" size="4" />
                        <div className="divider"></div>
                        <p>Some default behavior to expect when elements get resized are:</p>
                        <ul>
                            <li>
                                Text elements such as <code>h1</code> will shrink for mobile devices to remain in the
                                right proportion.
                            </li>
                            <li>
                                Navigation items inside of <code>header-nav</code> will be tucked away in a dropdown
                                menu for mobile devices.
                            </li>
                            <li>
                                Columns inside of a <code>row</code> start out as vertically stacked elements on mobile
                                devices. This can be ignored using the <code>ignore-screen</code> class.
                            </li>
                            <li>
                                Elements inside of <code>level</code> willa slo be stacked vertically on mobile devices.
                                Again, the <code>ignore-screen</code> class can be used to override this behavior.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="padtop" id="breakpoints">
                    <div className="content">
                        <Headline title="Breakpoints" link="#breakpoints" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Updated</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            The standard breakpoints used in Cirrus are <code>xs</code>, <code>sm</code>,{' '}
                            <code>md</code>, and <code>lg</code>. This replaces the <code>mobile</code>,{' '}
                            <code>tablet</code>, and <code>desktop</code> designations used in older versions.
                        </p>
                        <div className="space"></div>

                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>Min (px)</th>
                                    <th>Max (px)</th>
                                </tr>
                                <tr>
                                    <td>xs</td>
                                    <td>
                                        <code>0</code>
                                    </td>
                                    <td>
                                        <code>640</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>sm</td>
                                    <td>
                                        <code>641</code>
                                    </td>
                                    <td>
                                        <code>768</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>md</td>
                                    <td>
                                        <code>769</code>
                                    </td>
                                    <td>
                                        <code>1023</code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>xl</td>
                                    <td>
                                        <code>1024</code>
                                    </td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>From that, the class designations in Cirrus follow this guideline:</p>
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>
                                        xs
                                        <br />
                                        Below and including <code>640px</code>
                                    </th>

                                    <th>
                                        sm
                                        <br />
                                        Between <code>641px</code> and <code>768px</code>
                                    </th>

                                    <th>
                                        md
                                        <br />
                                        Between <code>769px</code> and <code>1023px</code>
                                    </th>
                                    <th>
                                        lg
                                        <br />
                                        <code>1024px</code> and above
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-xs
                                        </p>
                                    </td>
                                    <td colSpan={3}>
                                        <p>-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td colSpan={3}>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-sm
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <p>-</p>
                                    </td>
                                    <td colSpan={2}>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-md
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <p>-</p>
                                    </td>
                                    <td colSpan={1}>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-lg
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-sm-only
                                        </p>
                                    </td>
                                    <td colSpan={2}>
                                        <p>-</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <p>-</p>
                                    </td>
                                    <td>
                                        <p className="toast toast--info" style={{ width: 'auto' }}>
                                            *-md-only
                                        </p>
                                    </td>
                                    <td>
                                        <p>-</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            An example of style that follows this convention is the <code>u-none-*</code> class.
                        </p>
                        <table className="table bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <code>u-hide-xs</code>
                                    </td>
                                    <td>
                                        Hide content for widths below <code>640px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>u-hide-sm</code>
                                    </td>
                                    <td>
                                        Hide content for widths <code>641px</code> and above.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>u-hide-sm-only</code>
                                    </td>
                                    <td>
                                        Hide content for widths between <code>641px</code> and <code>768px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>u-hide-md</code>
                                    </td>
                                    <td>
                                        Hide content for widths <code>768px</code> and above.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>u-hide-md-only</code>
                                    </td>
                                    <td>
                                        Hide content for widths between <code>768px</code> and <code>1023px</code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>u-hide-lg</code>
                                    </td>
                                    <td>
                                        Hide content for <code>1024px</code> and above.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="padtop" id="customization">
                    <div className="content">
                        <Headline title="Customization" link="#customization" size="4" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Updated</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            You can now modify the breakpoints used in Cirrus within the new configuration file for
                            sizing. Just edit the values stored inside <code>_size.scss</code>.
                        </p>
                        <CodeBlock
                            code={`$breakpoints: (
    'xs': 640px,
    'sm': 768px,
    'md': 1024px,
    'lg': 1280px
);`}
                            language="scss"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
