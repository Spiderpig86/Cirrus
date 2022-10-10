import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { TableWrapper } from '../../../layouts/components/table-wrapper';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ResizableInternal } from '../../../layouts/components/resizable';
import { IFrame } from '../../../layouts/components/iframe';
import { wrapContent } from '../../../utils/iframe';
import { VersionTag } from '../../../layouts/components/tag';

export const ViewportsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Viewports</title>
            </Head>
            <div>
                <section className="padtop" id="viewports">
                    <div className="content">
                        <Headline title="Viewports" link="#viewports" />
                        <div className="divider"></div>

                        <p>
                            Cirrus by default is a framework designed to make developing mobile optimized sites easier.
                            Most styles for layouts and elements adapt to changes in screen size and orientation.
                        </p>
                        <p>
                            Component styles will automatically resize based on the page width while utility classes
                            have modifiers that allow them to be applied to an element at some specified viewport.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="behavior">
                    <div className="content">
                        <Headline title="Default Behavior" link="#behavior" size="4" />
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
                                devices. This can be ignored using any of the <code>col-xs-[i]</code> classes.
                            </li>
                            <li>
                                Elements inside of <code>level</code> will also be stacked vertically on mobile devices.
                                Again, the <code>col-xs-[i]</code> classes can be used to override this behavior.
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
                            <div className="tag tag--info">0.6.2</div>
                        </span>
                        <p>
                            The standard breakpoints used in Cirrus are <code>xs</code>, <code>sm</code>,{' '}
                            <code>md</code>, and <code>lg</code>. This replaces the <code>mobile</code>,{' '}
                            <code>tablet</code>, and <code>desktop</code> designations used in older versions.
                        </p>
                        <div className="space"></div>

                        <TableWrapper>
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
                                        <td>lg</td>
                                        <td>
                                            <code>1024</code>
                                        </td>
                                        <td>
                                            <code>1279</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>xl</td>
                                        <td>
                                            <code>1280</code>
                                        </td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableWrapper>

                        <p>From that, the class designations in Cirrus follow this guideline:</p>
                        <TableWrapper>
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
                                            Between <code>1024px</code> and <code>1279px</code>
                                        </th>
                                        <th>
                                            xl
                                            <br />
                                            <code>1280px</code> and above
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="toast toast--info" style={{ width: 'auto' }}>
                                                Regular class (eg. <code>u-none</code>)
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td colSpan={4}>
                                            <p className="toast toast--info" style={{ width: 'auto' }}>
                                                *-sm
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <p>-</p>
                                        </td>
                                        <td colSpan={3}>
                                            <p className="toast toast--info" style={{ width: 'auto' }}>
                                                *-md
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <p>-</p>
                                        </td>
                                        <td colSpan={2}>
                                            <p className="toast toast--info" style={{ width: 'auto' }}>
                                                *-lg
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}>
                                            <p>-</p>
                                        </td>
                                        <td colSpan={1}>
                                            <p className="toast toast--info" style={{ width: 'auto' }}>
                                                *-xl
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableWrapper>
                        <p>
                            An example of style that follows this convention is the <code>u-none-*</code> class.
                        </p>
                        <TableWrapper>
                            <table className="table bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <code>u-none</code>
                                        </td>
                                        <td>Hide content for all widths.</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>u-none-sm</code>
                                        </td>
                                        <td>
                                            Hide content for widths <code>641px</code> and above.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>u-none-md</code>
                                        </td>
                                        <td>
                                            Hide content for widths <code>768px</code> and above.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>u-none-lg</code>
                                        </td>
                                        <td>
                                            Hide content for widths <code>1024px</code> and above.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>u-none-xl</code>
                                        </td>
                                        <td>
                                            Hide content for <code>1280px</code> and above.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableWrapper>
                    </div>
                </section>

                <section className="padtop" id="usage">
                    <div className="content">
                        <Headline title="Usage" link="#usage" size="4" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.0" />
                        <p>
                            When applying classes viewport supported classes, note that the framework assumes you are
                            designing for a mobile device <b>first</b>. This means that applying <code>u-none</code> on
                            some given div will apply for all screen sizes.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-light">Design For Mobile First</h6>
                        <p>
                            If you then set <code>u-flex-row-md</code> on the div, it will then apply the row flexbox
                            layout starting at the <code>md</code> breakpoint and higher.
                        </p>

                        <ResizableInternal top="40%" height="750px" minWidth="300px">
                            <IFrame
                                content={wrapContent(`<div class="h-100p u-center bg-gray-100 p-2">
                                <div class="u-overflow-hidden bg-white u-round-sm u-shadow-xl mx-2 my-8 u-flex u-flex-column u-flex-row-sm">
                                    <img src="https://images.unsplash.com/photo-1646534619918-39cfa52033bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80" style="object-fit: cover;" />
                            
                                    <div class="p-2 px-4-sm">
                                        <div class="tag-container">
                                            <div class="tag bg-green-100 text-green-500 text-sm uppercase font-bold u-shadow-xs">Exclusive</div>
                                            <div class="tag bg-indigo-100 text-indigo-500 text-sm uppercase font-bold u-shadow-xs">Popular</div>
                                        </div>
                            
                                        <p class="lead">Chicago's Nighttime Downtown Tour</p>
                                        <p>Chicago offers a lot of sights, restaurants, and speakeasy bars for night owls...
                                    </div>
                                </div>
                            </div>`)}
                            />
                        </ResizableInternal>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="u-flex u-flex-column u-flex-row-md">
    <!-- ... -->
/>`}
                            language="html"
                        />

                        <div className="space"></div>

                        <p className="lead font-bold">❌ Do not target mobile devices with small selectors.</p>
                        <CodeBlock code={`<div class="u-none-sm">...</div>`} language="html" />
                        <div className="space"></div>

                        <p className="lead font-bold">
                            ✅ Use un-suffixed variant for mobile and suffixed classes for larger screens.
                        </p>
                        <CodeBlock code={`<div class="u-none u-block-md u-flex-lg">...</div>`} language="html" />

                        <div className="space"></div>

                        <h6 className="font-light">Modify Specific Viewport</h6>
                        <p>
                            To apply a class for a specific screen size, we can easily set this behavior using multiple
                            declarations of the classes we need for each viewport.
                        </p>
                        <p>
                            As an example, let's say we want to position a <code>sticky</code> div to be{' '}
                            <code>relative</code> <b>only</b> for <code>sm</code> to <code>md</code>. We can use achieve
                            this with the class declarations shown above.
                        </p>

                        <CodeBlock
                            code={`<div class="u-sticky u-relative-sm u-sticky-md">
    <!-- ... -->
/>`}
                            language="html"
                        />
                        <div className="space"></div>
                        <p>
                            Note that not all classes support application by viewport. You can see if a given group of
                            classes support this by checking if the documentation contains a 'Responsive' section
                            detailing how to use the classes with different viewports.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="customization">
                    <div className="content">
                        <Headline title="Customization" link="#customization" size="4" />
                        <div className="divider"></div>
                        <VersionTag version="0.7.0" />
                        <p>
                            You can now modify the breakpoints used within the framework just by modifying the
                            configuration when importing Cirrus.
                        </p>
                        <div className="space"></div>

                        <h6 className="font-light">Adding/Overriding More Breakpoints</h6>
                        <p>
                            To add a breakpoint pair, add a new with entry in the <code>extend</code> configuration and
                            add the corresponding breakpoint pair. Note that this can also be used for overriding
                            existing breakpoints.
                        </p>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            breakpoints: (
                // 1. Add the width of the new breakpoint
                widths: (
                    '2xl': 2506px,
                ),
                // 2. Add the breakpoint pair
                breakpoint-pairs: (
                    '2xl': 'lg',
                )
            )
        )
    ),
);`}
                            language="scss"
                        />
                        <div className="space"></div>

                        <h6 className="font-light">Removing Default Breakpoints</h6>
                        <p>
                            To remove the default breakpoints, just set the settings to null. Note that this may break some existing builds, so be sure to resolve them and add in the corresponding breakpoints as needed.
                        </p>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        breakpoints: (
            widths: null,
            breakpoint-pairs: null,
        )
    ),
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

export default withLayout(<DefaultLayout />)(ViewportsPage);
