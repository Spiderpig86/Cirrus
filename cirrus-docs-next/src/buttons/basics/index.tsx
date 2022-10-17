import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_BUTTONS } from '../../../config/sidebar';

export const ButtonPage: React.FC<any> = (props) => {
    const btnColors = [
        '',
        'transparent',
        'light',
        'dark',
        'black',
        'primary',
        'link',
        'info',
        'success',
        'warning',
        'danger',
    ];

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Button Basics</title>
            </Head>
            <div>
                <section className="padtop" id="buttons">
                    <div className="content">
                        <Headline title="Buttons" link="#buttons" />
                        <div className="divider"></div>
                        <p>
                            Buttons in Cirrus come with some basic styling to help you get started. You can choose some
                            of the different variants of buttons shown below or you can use the utility classes to
                            customize it yourself.
                        </p>
                        <p>There are 4 ways to create a button:</p>
                        <ul>
                            <li>
                                Use the <code>button</code> tag.
                            </li>
                            <li>
                                Use the <code>btn</code> class.
                            </li>
                            <li>
                                Use an <code>input</code> with type <code>submit</code>.
                            </li>
                            <li>
                                Use an <code>a</code> tag with the <code>btn</code> class.
                            </li>
                        </ul>

                        <div className="btn-container">
                            <button>Button</button>
                        </div>
                        <div className="btn-container">
                            <div className="btn">Button</div>
                        </div>
                        <div className="btn-container">
                            <input type="submit" value="Submit" />
                        </div>
                        <div className="btn-container">
                            <a className="btn">Button</a>
                        </div>

                        <CodeBlock
                            code={`<button>Button</button>
<div class="btn">Button</div>
<input type="submit" value="Submit">
<a class="btn">Button</a>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" size="4" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes in quite a few different shades of colors. Below are some of the preset styles
                            that you can use for your button that are core to the framework.
                        </p>

                        <h6>Solid</h6>

                        <div className="row my-3">
                            {btnColors.map((color, i) => {
                                return (
                                    <div className="mx-1" key={i}>
                                        <button className={color ? `btn-${color}` : ``}>{color || 'Plain'}</button>
                                    </div>
                                );
                            })}
                        </div>
                        <CodeBlock
                            code={`<button class="">Plain</button>
<button class="btn-transparent">transparent</button>
<button class="btn-light">light</button>
<button class="btn-dark">dark</button>
<button class="btn-black">black</button>
<button class="btn-primary">primary</button>
<button class="btn-link">link</button>
<button class="btn-info">info</button>
<button class="btn-success">success</button>
<button class="btn-warning">warning</button>
<button class="btn-danger">danger</button>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>Outline</h6>
                        <div className="row my-3">
                            {btnColors
                                .filter((color) => color !== '')
                                .map((color, i) => {
                                    return (
                                        <div className="mx-1" key={i}>
                                            <button className={color ? `outline btn-${color}` : ``}>
                                                {color || 'Plain'}
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                        <CodeBlock
                            code={`<button class="outline btn-transparent">transparent</button>
<button class="outline btn-light">light</button>
<button class="outline btn-dark">dark</button>
<button class="outline btn-black">black</button>
<button class="outline btn-primary">primary</button>
<button class="outline btn-link">link</button>
<button class="outline btn-info">info</button>
<button class="outline btn-success">success</button>
<button class="outline btn-warning">warning</button>
<button class="outline btn-danger">danger</button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            Buttons can have alternative sizes of <code>xs</code>, <code>sm</code>,{' '}
                            <code>lg</code>, and <code>xl</code>.
                        </p>

                        <div className="btn-container">
                            <button className="text-blue-600 bg-blue-100 btn--xs">Extra Small</button>
                        </div>
                        <div className="btn-container">
                            <button className="text-blue-600 bg-blue-100 btn--sm">Small</button>
                        </div>
                        <div className="btn-container">
                            <button className="text-blue-600 bg-blue-100 btn--lg">Large</button>
                        </div>
                        <div className="btn-container">
                            <button className="text-blue-600 bg-blue-100 btn--xl">Extra Large</button>
                        </div>

                        <CodeBlock
                            code={`<button class="text-blue-600 bg-blue-100 btn--xs">Extra Small</button>
<button class="text-blue-600 bg-blue-100 btn--sm">Small</button>
<button class="text-blue-600 bg-blue-100 btn--lg">Large</button>
<button class="text-blue-600 bg-blue-100 btn--xl">Extra Large</button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_BUTTONS,
                        pageName: `Basics`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ButtonPage);
