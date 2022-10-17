import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { ClassTable } from '../../../layouts/components/class-table';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_UTILITIES } from '../../../config/sidebar';

export const MiscUtilsPage: React.FC<any> = (props) => {
    const classTable = [
        ...['left', 'right'].map((name) => {
            return {
                class: `u-pull-${name}`,
                style: `float: ${name};`,
            };
        }),
        {
            class: `u-text-ellipsis`,
            style: `text-overflow: ellipsis;`,
        },
        {
            class: `u-text-break`,
            style: `hyphens: auto;
word-break: break-word;
word-wrap: break-word;`,
        },
        {
            class: `u-center`,
            style: `display: flex; align-items: center; justify-content: center;`,
        },
        {
            class: `u-center-alt`,
            style: `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);`,
        },
        {
            class: `u-overlay`,
            style: `bottom: 0;
left: 0;
right: 0;
top: 0;
position: absolute;`,
        },
        ...['justify', 'left', 'right', 'center'].map((name) => {
            return {
                class: `u-text-${name}`,
                style: `text-align: ${name};`,
            };
        }),
        {
            class: `u-disabled`,
            style: `cursor: not-allowed;`,
        },
        {
            class: `u-unselectable`,
            style: `user-select: none;`,
        },
        {
            class: `u-round-xs`,
            style: `border-radius: 0.25rem;`,
        },
        {
            class: `u-round-full`,
            style: `border-radius: 50%;`,
        },
        {
            class: `u-no-outline`,
            style: `outline: none;`,
        },
        {
            class: `u-shadow`,
            style: `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.07);`,
        },
    ];

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Misc</title>
            </Head>
            <div>
                <section className="padtop" id="misc">
                    <div className="content">
                        <Headline title="Misc" link="#misc" />
                        <div className="divider"></div>
                        <p>
                            Below are a bunch of miscellaneous utility classes that are not large enough to be their own
                            standalone category.
                        </p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="floats">
                    <div className="content">
                        <Headline title="Floats" link="#floats" size="4" />
                        <div className="divider"></div>

                        <h6>Float Left</h6>
                        <p>
                            Float an element to the left with <code>u-pull-left</code>.
                        </p>

                        <div
                            className="bg-gray-200"
                            style={{
                                minHeight: '300px',
                            }}
                        >
                            <div className="p-3">
                                <ul className="menu u-pull-left w-40p pr-4">
                                    <li className="menu-item selected">
                                        <a href="!#">Intro</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 1</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 2</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 3</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Conclusion</a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="p-3">
    <ul class="menu u-pull-left w-40p pr-4">
        <li class="menu-item selected"><a href="!#">Intro</a></li>
        <li class="menu-item"><a href="!#">Section 1</a></li>
        <li class="menu-item"><a href="!#">Section 2</a></li>
        <li class="menu-item"><a href="!#">Section 3</a></li>
        <li class="menu-item"><a href="!#">Conclusion</a></li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Float Right</h6>
                        <p>
                            Float an element to the right with <code>u-pull-right</code>.
                        </p>
                        <div
                            className="bg-gray-100 u-round-xs"
                            style={{
                                minHeight: '300px',
                            }}
                        >
                            <div className="p-3">
                                <ul className="menu u-pull-right w-40p pr-4">
                                    <li className="menu-item selected">
                                        <a href="!#">Intro</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 1</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 2</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Section 3</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Conclusion</a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="p-3">
    <ul class="menu u-pull-right w-40p pr-4">
        <li class="menu-item selected"><a href="!#">Intro</a></li>
        <li class="menu-item"><a href="!#">Section 1</a></li>
        <li class="menu-item"><a href="!#">Section 2</a></li>
        <li class="menu-item"><a href="!#">Section 3</a></li>
        <li class="menu-item"><a href="!#">Conclusion</a></li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="text">
                    <div className="content">
                        <Headline title="Text" link="#text" size="4" />
                        <div className="divider"></div>
                        <p>Utility classes meant for specifying text positioning and alignment.</p>

                        <h6>Text Left</h6>
                        <p>
                            Align text to the left with <code>u-text-left</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p className="u-text-left">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock code={`<p class="u-text-left">This is some text.</p>`} language="htmlbars" />
                        <div className="space space--lg"></div>

                        <h6>Text Center</h6>
                        <p>
                            Align text to the center with <code>u-text-center</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p className="u-text-center">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock code={`<p class="u-text-center">This is some text.</p>`} language="htmlbars" />
                        <div className="space space--lg"></div>

                        <h6>Text Right</h6>
                        <p>
                            Align text to the right with <code>u-text-right</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p className="u-text-right">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock code={`<p class="u-text-right">This is some text.</p>`} language="htmlbars" />
                        <div className="space space--lg"></div>

                        <h6>Text Justify</h6>
                        <p>
                            Stretch your text each line using <code>u-text-justify</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p className="u-text-justify p-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac
                                orci. Et malesuada fames ac turpis egestas integer eget aliquet.
                            </p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>`}
                            language="htmlbars"
                            breakAll
                        />
                        <div className="space space--lg"></div>

                        <h6>Text Ellipsis</h6>
                        <p>
                            Prevent text from overflowing your container with ellipsis using{' '}
                            <code>u-text-ellipsis</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p
                                className="u-text-ellipsis p-1"
                                style={{
                                    maxWidth: '500px',
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac
                                orci. Et malesuada fames ac turpis egestas integer eget aliquet.
                            </p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>`}
                            language="htmlbars"
                            breakAll
                        />
                        <div className="space space--lg"></div>

                        <h6>Break On Word</h6>
                        <p>
                            Break text on word with <code>u-text-break</code>.
                        </p>

                        <div className="bg-gray-100 u-round-xs">
                            <p className="u-text-break p-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac
                                orci. Et malesuada fames ac turpis egestas integer eget aliquet.
                            </p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-break">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>`}
                            language="htmlbars"
                            breakAll
                        />
                    </div>
                </section>

                <section className="padtop" id="centering">
                    <div className="content">
                        <Headline title="Centering" link="#centering" size="4" />
                        <div className="divider"></div>
                        <p>Utility classes for centering elements.</p>

                        <h6>Center with Flexbox</h6>
                        <div
                            className="bg-gray-100 u-center"
                            style={{
                                height: '500px',
                            }}
                        >
                            <p>I am in the middle. 🔥</p>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-100 u-center" style="height: 500px;">
    <p>I am in the middle. 🔥</p>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Center with Offsets</h6>
                        <p>
                            Unlike the flexbox variant, this is applied on the class you want centered itself. Parent
                            class must use <code>u-relative</code>.
                        </p>
                        <div
                            className="bg-gray-100 u-relative"
                            style={{
                                height: '500px',
                            }}
                        >
                            <p className="u-center-alt">I am in the middle. 🔥</p>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-100 u-relative" style="height: 500px;">
    <p class="u-center-alt">I am in the middle. 🔥</p>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="appearance">
                    <div className="content">
                        <Headline title="Appearance" link="#appearance" size="4" />
                        <div className="divider"></div>
                        <p>Utility classes that modify appearance.</p>
                        <div className="space"></div>

                        <h6>Overlay</h6>
                        <p>
                            Use the <code>u-overlay</code> class to add an overlay over encapsulating class that has{' '}
                            <code>position: relative;</code>. For example, a div with a teal background is added on top
                            of the gray parent.
                        </p>
                        <div
                            className="bg-gray-100 u-relative"
                            style={{
                                height: '200px',
                            }}
                        >
                            <div
                                className="u-overlay bg-teal-300"
                                style={{
                                    opacity: 0.5,
                                }}
                            ></div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="bg-gray-100 u-relative" style="height: 200px;">
    <div class="u-overlay bg-teal-300" style="opacity: 0.5;"></div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>Disabled</h6>
                        <p>
                            Make an element disabled with <code>u-disabled</code>.
                        </p>
                        <div className="p-2 u-center">
                            <button className="u-disabled">Disabled</button>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<button class="u-disabled">Disabled</button>`} language="htmlbars" />
                        <div className="space"></div>

                        <h6>Unselectable</h6>
                        <p>
                            Make anything unselectable with the <code>u-unselectable</code> class.
                        </p>
                        <div className="bg-gray-200 px-1 u-round-xs">
                            <p className="u-unselectable">You cannot highlight this sentence.</p>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-unselectable">You cannot highlight this sentence.</p>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>No Outline</h6>
                        <p>
                            Disable any outlines with <code>u-no-outline</code>.
                        </p>
                        <div className="p-3 u-center">
                            <div
                                className="p-3"
                                style={{
                                    outlineColor: 'gray',
                                    outlineStyle: 'dotted',
                                }}
                            >
                                With outline.
                            </div>
                            <div
                                className="p-3 u-no-outline"
                                style={{
                                    outlineColor: 'gray',
                                    outlineStyle: 'dotted',
                                }}
                            >
                                No outline.
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="p-3" style="outline-color: gray; outline-style: dotted;">With outline.</div>
<div class="p-3 u-no-outline" style="outline-color: gray; outline-style: dotted;">No outline.</div>`}
                            language="htmlbars"
                        />
                        <h6>Shadow</h6>
                        <p>
                            Add a subtle shadow for any element using <code>u-shadow</code>.
                        </p>
                        <div className="p-3 u-flex u-justify-space-around">
                            <div className="u-shadow p-1">Shadow</div>
                            <button className="u-shadow m-0">Button</button>
                        </div>
                        <CodeBlock
                            code={`<div class="u-shadow p-1">Shadow</div>
<button class="u-shadow m-0">Button</button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_UTILITIES,
                        pageName: `Misc`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MiscUtilsPage);
