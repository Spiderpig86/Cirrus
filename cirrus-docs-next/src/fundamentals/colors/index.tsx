import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { Tag, VersionTag } from '../../../layouts/components/tag';
import { Display } from './display';
import { DefaultLayout } from '../../../layouts/default';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { toc } from './toc';
import { v1, v2Colors, v2, DEFAULT_SEMANTIC_COLORS, DEFAULT_LEVELS } from './color-config';
import { DEFAULT_PERCENTAGES, PAGE_TITLE_PREFIX } from '../../../constants';
import { Capitalize } from '../../../utils/string';
import { Blockquote } from '../../../layouts/components/blockquote';

export const ColorsPage: React.FC<any> = (props) => {
    const v1ClassTable = DEFAULT_SEMANTIC_COLORS.flatMap((color) => {
        return {
            bgClass: `bg-${color}`,
            textClass: `text-${color}`,
            borderClass: `border-${color}`,
        };
    });

    const v2ClassTable = v2Colors.flatMap((color) => {
        const levels = DEFAULT_LEVELS.hasOwnProperty(color) ? DEFAULT_LEVELS[color] : DEFAULT_LEVELS['others'];
        return levels.map((level) => {
            return {
                bgClass: `bg-${color}-${level}`,
                textClass: `text-${color}-${level}`,
                borderClass: `border-${color}-${level}`,
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
                        <VersionTag text='Update' version='0.7.1' />
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
                            to color the background, <code>text-</code> to color the text, and <code>border-</code> to color the borders.
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
                        
                        <p>
                            Circle with a <b>purple-500</b> border.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 mb-1 u-flex u-justify-center">
                                <div
                                    className="u-round-full w-8 h-8 border-purple-500 u-border-2"
                                ></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="u-round-full w-8 h-8 border-purple-500 u-border-2"></div>`}
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
                                    <th className="w-20">Background</th>
                                    <th className="w-20">Text</th>
                                    <th className="w-20">Border</th>
                                </tr>
                            </thead>
                            <tbody>
                                {v1ClassTable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="w-20">
                                            <code className="text-teal-600 bg-teal-100">{row.bgClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-indigo-600 bg-indigo-100">{row.textClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-pink-600 bg-pink-100">{row.borderClass}</code>
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
                                    <th className="w-20">Background</th>
                                    <th className="w-20">Text</th>
                                    <th className="w-20">Border</th>
                                </tr>
                            </thead>
                            <tbody>
                                {v2ClassTable.map((row, index) => (
                                    <tr key={index}>
                                        <td className="w-20">
                                            <code className="text-teal-600 bg-teal-100">{row.bgClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-indigo-600 bg-indigo-100">{row.textClass}</code>
                                        </td>
                                        <td className="w-20">
                                            <code className="text-pink-600 bg-pink-100">{row.borderClass}</code>
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

                        <p>
                            Docs have been moved to the
                            <Link href="/utils/opacity#property-specific">
                                <a className="u u-LR">Opacity</a>
                            </Link>{' '}
                            page.
                        </p>
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
                extended: (
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

                        <p>
                            The <code>extend</code> map can also be used for <b>overriding existing values</b>. For
                            example, the following config will override <code>bg-blue-500</code> and{' '}
                            <code>text-blue-500</code> to use <kbd>#fff</kbd>.
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            colors: (
                extended: (
                    'blue': (
                        '500': #fff,
                    )
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

                        <p>
                            If you would like to remove a default color, you can simply set any of the color maps of the
                            extended palette to <code>null</code>. Cirrus will not generate any of these colors in the
                            final build.
                        </p>
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
                            <p>
                                Note that disabling certain colors can lead to build errors! These colors are relied on
                                by other parts of the framework.
                            </p>
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
                            <CodeBlock
                                code={`Error in plugin "sass"
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
  src\main.scss 30:1          root stylesheet`}
                                language="sh"
                            />
                            <p>
                                Be sure to supply your own replacement color under the <code>extend</code> section.
                            </p>
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
