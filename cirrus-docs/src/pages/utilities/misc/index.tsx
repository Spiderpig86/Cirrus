import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';

export const MiscUtilsPage: React.FC<any> = (props) => {
    const classTable = [
        ...['left', 'right'].map((name) => {
            return {
                class: `u-pull-${name}`,
                style: `float: ${name};`,
            };
        }),
        {
            class: `u-text-justify`,
            style: `text-align: justify;`,
        },
        {
            class: `u-text-ellipsis`,
            style: `text-overflow: ellipsis;`,
        },
        {
            class: `u-text-ellipsis`,
            style: `text-align: justify;`,
        },
        {
            class: `u-text-break`,
            style: `hyphens: auto;
word-break: break-word;
word-wrap: break-word;`,
        },
        {
            class: `u-text-no-wrap`,
            style: `white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;`,
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
        {
            class: `u-hide-overflow`,
            style: `overflow: hidden;`,
        },
        ...['left', 'right', 'center'].map((name) => {
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
            class: `u-round`,
            style: `border-radius: 0.25rem;`,
        },
        {
            class: `u-circle`,
            style: `border-radius: 50%;`,
        },
        {
            class: `u-no-outline`,
            style: `outline: none;`,
        },
    ];

    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="position">
                    <div className="content">
                        <Headline title="Misc" link="#misc" />
                        <div className="divider"></div>
                        <p>
                            Below are a bunch of miscellaneous utility classes that are not large enough to be their own
                            standalone category.
                        </p>

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
                                {classTable.map((row) => (
                                    <tr>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-blue-600 bg-blue-100">{row.class}</code>
                                        </td>
                                        <td>
                                            <code>{row.style}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

                        <div className="bg-gray-200">
                            <div className="p-3">
                                <ul className="menu u-pull-left w-40 pr-4">
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
                        <CodeBlock code={``} language="htmlbars" />
                        <div className="space large"></div>

                        <h6>Float Right</h6>
                        <p>
                            Float an element to the right with <code>u-pull-right</code>.
                        </p>
                        <div className="bg-gray-100 u-round">
                            <div className="p-3">
                                <ul className="menu u-pull-right w-40 pr-4">
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
                        <CodeBlock code={``} language="htmlbars" />
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

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-left">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-left">This is some text.</p>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>

                        <h6>Text Center</h6>
                        <p>
                            Align text to the center with <code>u-text-center</code>.
                        </p>

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-center">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="text-center">This is some text.</p>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>

                        <h6>Text Right</h6>
                        <p>
                            Align text to the right with <code>u-text-right</code>.
                        </p>

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-right">This is some text.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-right">This is some text.</p>`}
                            language="htmlbars"
                        />
                        <div className="space large"></div>
                        
                        <h6>Text Right</h6>
                        <p>
                            Stretch your text each line using <code>u-text-justify</code>.
                        </p>

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-justify p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>`}
                            language="htmlbars"
                            breakAll
                        />
                        <div className="space large"></div>
                        
                        <h6>Text Ellipsis</h6>
                        <p>
                            Prevent text from overflowing your container with ellipsis using <code>u-text-ellipsis</code>.
                        </p>

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-ellipsis p-1" style={{
                                maxWidth: '500px'
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>
                        </div>

                        <div className="space"></div>
                        <CodeBlock
                            code={`<p class="u-text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>`}
                            language="htmlbars"
                            breakAll
                        />
                        <div className="space large"></div>
                        
                        <h6>Break On Word</h6>
                        <p>
                            Break text on word with <code>u-text-break</code>.
                        </p>

                        <div className="bg-gray-100 u-round">
                            <p className="u-text-break p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Et malesuada fames ac turpis egestas integer eget aliquet.</p>
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
                        <div className="bg-gray-100 u-center" style={{
                            height: '500px'
                        }}>
                            <p>I am in the middle. 🔥</p>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={``} language='htmlbars' />
                        <div className="space large"></div>

                        <h6>Center with Offsets</h6>
                        <p>Unlike the flexbox variant, this is applied on the class you want centered itself. Parent class must use <code>u-position-relative</code>.</p>
                        <div className="bg-gray-100 u-position-relative" style={{
                            height: '500px'
                        }}>
                            <p className="u-center-alt">I am in the middle. 🔥</p>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={``} language='htmlbars' />
                    </div>
                </section>

                <section className="padtop" id="appearance">
                    <div className="content">
                        <Headline title="Appearance" link="#appearance" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Misc', link: './misc' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
