import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Capitalize } from '../../../utils/string';
import { toc } from './toc';
import { DefaultLayout } from '../../../layouts/default';

export const PositionUtilsPage: React.FC<any> = (props) => {
    const positionNames = ['static', 'fixed', 'absolute', 'relative', 'sticky'];
    const docExamples = [
        {
            name: 'static',
            example: (
                <div className="u-round bg-pink-200 u-position-static">
                    <p className="px-2">Static Parent</p>
                    <div
                        className="u-round bg-pink-300 u-position-absolute"
                        style={{
                            top: '0',
                            right: '0',
                        }}
                    >
                        <p className="px-2">Absolute Child</p>
                    </div>
                </div>
            ),
            code: `<div class="u-round bg-pink-200 u-position-static">
    <p class="px-2">Static Parent</p>
    <div class="u-round bg-pink-300 u-position-absolute" style="top: 0px; right: 0px;">
        <p class="px-2">Absolute Child</p>
    </div>
</div>`,
            description: (
                <p>
                    Sets the position to <code>static</code> with the <code>u-position-static</code> class. This is the
                    default position for all HTML elements. Elements flow normally and does not serve as a relative
                    position for any child element.
                </p>
            ),
        },
        {
            name: 'fixed',
            example: (
                <LazyLoad height={200}>
                    <iframe
                        src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-fix.html"
                        width="100%"
                        style={{ height: '400px' }}
                    />
                </LazyLoad>
            ),
            code: `<!-- Look up the code in the header docs -->`,
            description: (
                <p>
                    Sets the position to <code>fixed</code> with the <code>u-position-fixed</code> class. This positions
                    the element strictly relative to the location in the screen rather than the location of the page.
                    The perfect example to illustrate is to see how it is used inside the{' '}
                    <Link href="/layout/header">
                        <a className="u u-LR">header</a>
                    </Link>
                    .
                </p>
            ),
        },
        {
            name: 'absolute',
            example: (
                <div className="u-round bg-pink-200 u-position-relative px-2">
                    <p>Relative Parent</p>
                    <div className="u-round bg-pink-300 u-position-static">
                        <p className="px-2">Static Parent</p>
                        <div
                            className="u-round bg-pink-400 u-position-absolute"
                            style={{
                                top: '0',
                                right: '0',
                            }}
                        >
                            <p className="px-2">Absolute Child</p>
                        </div>
                        <div className="u-round bg-pink-400 px-2 u-inline-block">
                            <p>Static Child</p>
                        </div>
                    </div>
                </div>
            ),
            code: `<div class="u-round bg-pink-200 u-position-relative px-2">
    <p>Relative Parent</p>
    <div class="u-round bg-pink-300 u-position-static">
        <p class="px-2">Static Parent</p>
        <div class="u-round bg-pink-400 u-position-absolute" style="top: 0px; right: 0px;">
            <p class="px-2">Absolute Child</p>
        </div>
        <div class="u-round bg-pink-400 px-2 u-inline-block">
            <p>Static Child</p>
        </div>
    </div>
</div>`,
            description: (
                <p>
                    Sets the position to <code>absolute</code> with the <code>u-absolute-fixed</code> class. This makes
                    the neighboring elements ignore the <code>u-position-absolute</code> element when positioning
                    themselves.
                </p>
            ),
        },
        {
            name: 'relative',
            example: (
                <div
                    className="u-round bg-pink-200 u-position-relative px-2"
                    style={{
                        height: '200px',
                    }}
                >
                    <p>Relative Parent</p>
                    <div
                        className="u-round bg-pink-300 u-position-absolute"
                        style={{
                            bottom: '0',
                            right: '0',
                        }}
                    >
                        <p className="px-2">Absolute Child</p>
                    </div>
                </div>
            ),
            code: `<div class="u-round bg-pink-200 u-position-relative px-2" style="height: 200px;">
    <p>Relative Parent</p>
    <div class="u-round bg-pink-300 u-position-absolute" style="bottom: 0px; right: 0px;">
        <p class="px-2">Absolute Child</p>
    </div>
</div>`,
            description: (
                <p>
                    Sets the position to <code>relative</code> with the <code>u-relative-fixed</code> class. The element
                    with <code>u-position-relative</code> will serve as the element to calculate offsets from by all of
                    its children.
                </p>
            ),
        },
        {
            name: 'sticky',
            example: (
                <div
                    style={{
                        height: '200px',
                        overflow: 'auto',
                    }}
                >
                    {[1, 2, 3, 4, 5].map((index) => {
                        return (
                            <div>
                                <div
                                    className="u-position-sticky bg-purple-300"
                                    style={{
                                        top: '0',
                                    }}
                                >
                                    <p>Heading {index}</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ),
            code: `<div style="height: 200px; overflow: auto;">
    <div>
        <div class="u-position-sticky bg-purple-300" style="top: 0px;">
            <p>Heading 1</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
        <div class="u-position-sticky bg-purple-300" style="top: 0px;">
            <p>Heading 2</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
        <div class="u-position-sticky bg-purple-300" style="top: 0px;">
            <p>Heading 3</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
        <div class="u-position-sticky bg-purple-300" style="top: 0px;">
            <p>Heading 4</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
        <div class="u-position-sticky bg-purple-300" style="top: 0px;">
            <p>Heading 5</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
</div>`,
            description: '',
        },
    ];
    const classTable = positionNames.map((position) => {
        return {
            class: `u-${position}`,
            style: `position: ${position};`,
        };
    });

    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="position">
                    <div className="content">
                        <Headline title="Position" link="#position" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>These are utility classes that control the position of elements.</p>

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

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>

                        {docExamples.map((display) => {
                            return (
                                <>
                                    <h6>{Capitalize(display.name)}</h6>

                                    {display.description ?? (
                                        <p>
                                            Set the <code>u-{display.name}</code> class to make the element display with{' '}
                                            <code>{display.name}</code>.
                                        </p>
                                    )}

                                    <div className="p-3 bg-pink-100 u-round u-position-relative">{display.example}</div>
                                    <div className="space"></div>
                                    <CodeBlock code={display.code} language="htmlbars" />
                                    <div className="space large"></div>
                                </>
                            );
                        })}
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Misc', link: './misc' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PositionUtilsPage);
