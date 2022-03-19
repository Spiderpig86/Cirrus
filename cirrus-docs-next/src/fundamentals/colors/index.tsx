import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { Tag } from '../../../layouts/components/tag';
import { Display } from './display';
import { DefaultLayout } from '../../../layouts/default';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';
import { v1, v2Colors, v2, DEFAULT_SEMANTIC_COLORS, DEFAULT_LEVELS } from './color-config';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Capitalize } from '../../../utils/string';
import { Blockquote } from '../../../layouts/components/blockquote';

export const ColorsPage: React.FC<any> = (props) => {
    const v1ClassTable = DEFAULT_SEMANTIC_COLORS.flatMap((color) => {
        return {
            bgClass: `bg-${color}`,
            textClass: `text-${color}`,
        };
    });

    const v2ClassTable = v2Colors.flatMap((color) => {
        const levels = DEFAULT_LEVELS.hasOwnProperty(color) ? DEFAULT_LEVELS[color] : DEFAULT_LEVELS['others'];
        return levels.map((level) => {
            return {
                bgClass: `bg-${color}-${level}`,
                textClass: `text-${color}-${level}`,
            };
        });
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Colors</title>
            </Head>
            <div>
                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">New</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            Cirrus comes with a semantic palette and an expanded palette to help you style your page.
                            The expanded palette is a large, hand-tuned collection of colors for the framework.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="classes">
                    <div className="content">
                        <Headline title="Classes" link="#classes" size={'4'} />
                        <div className="divider"></div>
                        <p>
                            Using a color within Cirrus is as simple as just prefixing the colors with <code>bg-</code>{' '}
                            to color the background and with <code>text-</code> to color the text.
                        </p>
                        <div className="space"></div>

                        <h6>Examples</h6>
                        <p>
                            Button using <b>indigo-500</b> for text and <b>indigo-100</b> for the background.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 u-text-center">
                                <button className="text-indigo-500 bg-indigo-100">Custom Button</button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<button class="text-indigo-500 bg-indigo-100">
    Custom Button
</button>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            Square using a <b>info</b> background.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 mb-1">
                                <div
                                    style={{
                                        height: '50px',
                                        width: '50px',
                                    }}
                                    className="u-round-xs bg-info mx-auto"
                                ></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="bg-info u-round-xs mx-auto" style="height: 50px; width: 50px;"></div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="v1">
                    <div className="content">
                        <Headline title="v1 Colors (Semantic)" link="#v1" size={'4'} />
                        <div className="divider"></div>
                        <p>The standard (semantic) color palette from older versions of the framework.</p>

                        <table className="class-table table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '200px',
                                        }}
                                    >
                                        Background
                                    </th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {v1ClassTable.map((row, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-teal-600 bg-teal-100">{row.bgClass}</code>
                                        </td>
                                        <td>
                                            <code className="text-indigo-600 bg-indigo-100">{row.textClass}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="space space--lg"></div>

                        {<Display swatches={v1} />}
                    </div>
                </section>

                <section className="padtop" id="v2">
                    <div className="content">
                        <Headline title="v2 Colors (Expanded)" link="#v2" size={'4'} />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Updated</div>
                            <div className="tag tag--info">0.7.0</div>
                        </span>
                        <p>
                            Cirrus has an extensive color palette that has been updated with <b>0.6.0</b> to make them
                            more accessible to all page elements.
                        </p>

                        <table className="class-table table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '200px',
                                        }}
                                    >
                                        Background
                                    </th>
                                    <th>Text</th>
                                </tr>
                            </thead>
                            <tbody>
                                {v2ClassTable.map((row, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-teal-600 bg-teal-100">{row.bgClass}</code>
                                        </td>
                                        <td>
                                            <code className="text-indigo-600 bg-indigo-100">{row.textClass}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="space space--lg"></div>

                        {v2Colors.map((color, index) => {
                            return (
                                <section key={index} id={color}>
                                    <Headline title={Capitalize(color)} link={`#${color}`} size="6" />
                                    <Display swatches={v2.get(color)!} />
                                </section>
                            );
                        })}
                    </div>
                </section>

                <section className="padtop" id="changing-opacity">
                    <div className="content">
                        <Headline title="Changing Opacity" link="#changing-opacity" size="4" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />

                        <p>With the new color opacity modifiers, you can now modify color opacity for background colors and text colors.</p>

                        <div className="space"></div>

                        <h6>Changing Background Opacity</h6>
                        <p>Use the background opacity utility classes to control an element's background color opacity. You can use any opacity value that is defined in the <Link href="/utils/opacity"><a className="u u-LR">opacity scale</a></Link>.</p>

                        <div className="py-2 u-round-xs bg-gray-000 u-shadow-md u-flex u-items-center u-justify-space-around u-flex-wrap u-flex-nowrap-md">
                            <button className="btn-warning mb-0 u-bg-opacity-100">100%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-90">90%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-80">80%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-70">70%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-60">60%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-50">50%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-40">40%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-30">30%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-20">20%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-10">10%</button>
                            <button className="btn-warning mb-0 u-bg-opacity-0">0%</button>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={`<button class="u-bg-opacity-100 ...">100%</button>
<button class="u-bg-opacity-90 ...">90%</button>
<button class="u-bg-opacity-80 ...">80%</button>
<button class="u-bg-opacity-70 ...">70%</button>
<button class="u-bg-opacity-60 ...">60%</button>
<button class="u-bg-opacity-50 ...">50%</button>
<button class="u-bg-opacity-40 ...">40%</button>
<button class="u-bg-opacity-30 ...">30%</button>
<button class="u-bg-opacity-20 ...">20%</button>
<button class="u-bg-opacity-10 ...">10%</button>
<button class="u-bg-opacity-0 ...">0%</button>`} language='htmlbars' />

                        <div className="space space--lg"></div>

                        <h6>Changing Color Opacity</h6>
                        <p>Use the color opacity utility classes to control an element's color opacity (text, border, etc.). You can use any opacity value that is defined in the <Link href="/utils/opacity"><a className="u u-LR">opacity scale</a></Link>.</p>
                        
                        <p className="text-teal-600 text-xl u-color-opacity-100">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-90">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-80">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-70">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-60">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-50">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-40">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-30">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-20">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-10">The quick brown fox jumps over the lazy dog.</p>
                        <p className="text-teal-600 text-xl u-color-opacity-0">The quick brown fox jumps over the lazy dog.</p>

                        <div className="space"></div>
                        <CodeBlock code={`<p class="u-color-opacity-100 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-90 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-80 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-70 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-60 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-50 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-40 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-30 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-20 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-10 ...">The quick brown fox jumps over the lazy dog.</p>
<p class="u-color-opacity-0 ...">The quick brown fox jumps over the lazy dog.</p>`} language='htmlbars' />

                    </div>
                </section>

                <section className="padtop" id="extending-colors">
                    <div className="content">
                        <Headline title="Extending Colors" link="#extending-colors" size="4" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />

                        <p>
                            If you want additional colors on top of the ones shipped with Cirrus, you can extend the
                            color palette via its Sass configuration within the <code>extend</code> map of the config.
                        </p>
                        <p>Below is an example of adding a new magenta color:</p>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            colors: (
                'magenta': (
                    '100': #FEF7F4,
                    '200': #FBE0DD,
                    '300': #F2AFB3,
                    '400': #EC798B,
                    '500': #DC5472,
                    '600': #BC3263,
                    '700': #98184D,
                    '800': #73123F,
                    '900': #560E39,
                )
            )
        )
    ),
);`}
                            language="scss"
                        />

                        <p>The new config will generate the following additional classes:</p>
                        <CodeBlock
                            code={`.bg-magenta-100 { ... }
// ...
.bg-magenta-900 { ... }
.text-magenta-100 { ... }
// ...
.text-magenta-900 { ... }`}
                            language="css"
                        />
                        <div className="space space--lg"></div>

                        <p>The <code>extend</code> map can also be used for <b>overriding existing values</b>. For example, the following config will override <code>bg-blue-500</code> and <code>text-blue-500</code> to use <kbd>#fff</kbd>.</p>
                        
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            colors: (
                'blue': (
                    '500': #fff,
                )
            )
        )
    ),
);`}
                            language="scss"
                        />
                        
                        <CodeBlock
                            code={`.bg-blue-500 { background-color: #fff !important; }
.text-blue-500 { color: #fff !important; }`}
                            language="css"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabling-colors">
                    <div className="content">
                        <Headline title="Disabling Colors" link="#disabling-colors" size="4" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />

                        <p>If you would like to remove a default color, you can simply set any of the color maps of the extended palette to <code>null</code>. Cirrus will not generate any of these colors in the final build.</p>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        colors: (
            // Note: The quotes matter!
            'pink': null,
            'red': null,
            'orange': null,
            'yellow': null,
            'green': null,
            'teal': null,
            'blue': null,
            'indigo': null,
            'purple': null,
            'gray': null,
        )
    ),
);`}
                            language="scss"
                        />

                    <Blockquote accentColor="#fcd9bd">
                        <h6>⚠ Warning</h6>
                        <p>Note that disabling certain colors can lead to build errors! These colors are relied on by other parts of the framework.</p>
                        <div className="space"></div>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        colors: (
            'gray': null,
        )
    ),
);`}
                            language="scss"
                        />
                        <CodeBlock code={`Error in plugin "sass"
Message:
    src\\base\\layout.scss
Error: $color: "ERROR [fill()]: [fill] Unknown color key \`gray 500\`." is not a color.       
   ╷
39 │     border-top: 0.05rem solid transparentize(fill('gray', '500'), 0.5);
   │                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src\base\layout.scss 39:31  @use
  src\core.scss 11:1          @use
  src\ext.scss 4:1            @use
  src\main.scss 30:1          root stylesheet`} language='sh' />
                        <p>Be sure to supply your own replacement color under the <code>extend</code> section.</p>
                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        colors: (
            'gray': null,
        ),
        extend: (
            colors: (
                'gray': (
                    '100': ...,
                    ...
                )
            )
        )
    ),
);`}
                            language="scss"
                        />
                    </Blockquote>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Default Styles',
                        link: './default-styles',
                    }}
                    nextLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ColorsPage);
