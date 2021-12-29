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

export const TextElementsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Text Elements</title>
            </Head>
            <span>
                <section className="padtop" id="text-elements">
                    <div className="content">
                        <Headline title="Text Elements" link="#text-elements" />
                        <div className="divider"></div>

                        <p>Here is a list of how Cirrus styles different text elements.</p>
                    </div>
                </section>

                <section className="padtop" id="headings">
                    <div className="content">
                        <Headline title="Headings" link="#headings" size="4" />
                        <div className="divider"></div>

                        <p>
                            Cirrus styles the standard header tags <code>h1, h2, h3, h4, h5, h6</code> with font sizes
                            ranging from <code>4rem</code> to <code>1rem</code> where each <code>rem</code> is{' '}
                            <code>16px</code>. Cirrus allows you to choose between two fonts: <code>Montserrat</code>{' '}
                            and <code>Nunito Sans</code> by specifying the font weight of the headers. Simply add the{' '}
                            <code>font-alt font-light</code> class to your headings to use <code>Nunito Sans</code> and
                            leave it as is to use <code>Montserrat</code>.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <h6 className="uppercase">Standard headings:</h6>
                                <h1 className="uppercase">
                                    this is h1
                                    <span className="desc">
                                        <code>h1</code> 3rem (48px)
                                    </span>
                                </h1>
                                <h2 className="uppercase">
                                    this is h2
                                    <span className="desc">
                                        <code>h2</code> 2.5rem (40px)
                                    </span>
                                </h2>

                                <h3 className="uppercase">
                                    this is h3
                                    <span className="desc">
                                        <code>h3</code> 2rem (32px)
                                    </span>
                                </h3>

                                <h4 className="uppercase">
                                    this is h4
                                    <span className="desc">
                                        <code>h4</code> 1.75rem (24px)
                                    </span>
                                </h4>

                                <h5 className="uppercase">
                                    this is h5
                                    <span className="desc">
                                        <code>h5</code> 1.5rem (16px)
                                    </span>
                                </h5>

                                <h6 className="uppercase">
                                    this is h6
                                    <span className="desc">
                                        <code>h6</code> 1.25rem (12px)
                                    </span>
                                </h6>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="uppercase">Light headings:</h6>
                                <h1 className="font-alt font-light uppercase">
                                    this is h1
                                    <span className="desc">
                                        <code>h1</code> 3rem (48px)
                                    </span>
                                </h1>
                                <h2 className="font-alt font-light uppercase">
                                    this is h2
                                    <span className="desc">
                                        <code>h2</code> 2.5rem (40px)
                                    </span>
                                </h2>

                                <h3 className="font-alt font-light uppercase">
                                    this is h3
                                    <span className="desc">
                                        <code>h3</code> 2rem (32px)
                                    </span>
                                </h3>

                                <h4 className="font-alt font-light uppercase">
                                    this is h4
                                    <span className="desc">
                                        <code>h4</code> 1.75rem (24px)
                                    </span>
                                </h4>

                                <h5 className="font-alt font-light uppercase">
                                    this is h5
                                    <span className="desc">
                                        <code>h5</code> 1.5rem (16px)
                                    </span>
                                </h5>

                                <h6 className="font-alt font-light uppercase">
                                    this is h6
                                    <span className="desc">
                                        <code>h6</code> 1.25rem (12px)
                                    </span>
                                </h6>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<h1 class="uppercase">this is h1<span class="desc"><code>h1</code> 3rem (48px)</span></h1>
<h2 class="uppercase">this is h2<span class="desc"><code>h2</code> 2.5rem (40px)</span></h2>
<h3 class="uppercase">this is h3<span class="desc"><code>h3</code> 2rem (32px)</span></h3>
<h4 class="uppercase">this is h4<span class="desc"><code>h4</code> 1.75rem (24px)</span></h4>
<h5 class="uppercase">this is h5<span class="desc"><code>h5</code> 1.5rem (16px)</span></h5>
<h6 class="uppercase">this is h6<span class="desc"><code>h6</code> 1.25rem (12px)</span></h6>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<h1 class="font-alt font-light uppercase">this is h1<span class="desc"><code>h1</code> 3rem (48px)</span></h1>
<h2 class="font-alt font-light uppercase">this is h2<span class="desc"><code>h2</code> 2.5rem (40px)</span></h2>
<h3 class="font-alt font-light uppercase">this is h3<span class="desc"><code>h3</code> 2rem (32px)</span></h3>
<h4 class="font-alt font-light uppercase">this is h4<span class="desc"><code>h4</code> 1.75rem (24px)</span></h4>
<h5 class="font-alt font-light uppercase">this is h5<span class="desc"><code>h5</code> 1.5rem (16px)</span></h5>
<h6 class="font-alt font-light uppercase">this is h6<span class="desc"><code>h6</code> 1.25rem (12px)</span></h6>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="headline">
                    <div className="content">
                        <Headline title={`Headline`} link="#headline" size="4" />
                        <div className="divider"></div>
                        <h1
                            className="headline-1 uppercase"
                            style={{
                                overflow: 'auto',
                            }}
                        >
                            {' '}
                            <b>headline-1</b>
                            <span className="desc">
                                <code>headline-1</code> 6.5rem (104px)
                            </span>
                        </h1>
                        <h1
                            className="headline-2 uppercase"
                            style={{
                                overflow: 'auto',
                            }}
                        >
                            {' '}
                            <b>headline-2</b>
                            <span className="desc">
                                <code>headline-2</code> 5.5rem (88px)
                            </span>
                        </h1>
                        <h1 className="headline-3 uppercase">
                            {' '}
                            <b>headline-3</b>
                            <span className="desc">
                                <code>headline-3</code> 4.5rem (72px)
                            </span>
                        </h1>
                        <h1 className="headline-4 uppercase">
                            {' '}
                            <b>headline-4</b>
                            <span className="desc">
                                <code>headline-4</code> 3.5rem (56px)
                            </span>
                        </h1>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<h1 class="headline-1 uppercase"> <b>headline-1</b><span class="desc"><code>headline-1</code> 6.5rem (104px)</span></h1>
<h1 class="headline-2 uppercase"> <b>headline-2</b><span class="desc"><code>headline-2</code> 5.5rem (88px)</span></h1>
<h1 class="headline-3 uppercase"> <b>headline-3</b><span class="desc"><code>headline-3</code> 4.5rem (72px)</span></h1>
<h1 class="headline-4 uppercase"> <b>headline-4</b><span class="desc"><code>headline-4</code> 3.5rem (56px)</span></h1>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="blockquotes">
                    <div className="content">
                        <Headline title="Blockquotes" link="#blockquotes" size="4" />
                        <div className="divider"></div>

                        <p>Blockquotes are beatifully designed to help you cite from other sources.</p>

                        <blockquote>
                            <p>
                                You know, I think Cirrus is a pretty good CSS framework. - <em>Marc Andreessen</em>
                            </p>
                        </blockquote>
                    </div>
                </section>

                <section className="padtop" id="typesetting">
                    <div className="content">
                        <Headline title="Typesetting" link="#blockquotes" size="4" />
                        <div className="divider"></div>
                        <h6>Paragraph</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text{' '}
                            <a className="u u-LR" href="!#">
                                ever since the 1500s
                            </a>
                            , when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="space"></div>

                        <h6>Blockquote</h6>
                        <blockquote cite="https://www.worldwildlife.org/who/index.html" className="example">
                            <p>
                                For 50 years, WWF has been protecting the future of nature. The world's leading
                                conservation organization, WWF works in 100 countries and is supported by 1.2 million
                                members in the United States and close to 5 million globally.
                            </p>
                        </blockquote>
                        <div className="space"></div>

                        <h6>Article</h6>
                        <article>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </article>
                        <div className="space"></div>

                        <h6>Lead</h6>
                        <p className="lead">
                            This is a lead. A <code>lead</code> is slightly larger than your average paragraph.
                        </p>
                        <div className="space"></div>

                        <h6>Title and Subtitle</h6>
                        <p>
                            The <code>title</code> and <code>subtitle</code> helper classes bring two elements
                            representing a title and a subtitle closer together. The <code>title</code> is bolded by
                            default.
                        </p>
                        <div className="bg-gray-100 u-round p-3">
                            <h6 className="title">I am the title.</h6>
                            <p className="subtitle">I am the subtitle.</p>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="misc">
                    <div className="content">
                        <Headline title="Misc." link="#misc" size="4" />
                        <div className="divider"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <p className="title mb-0">Anchor</p>
                                <p>
                                    <a href="!#" className="subtitle">
                                        The quick brown fox jumps over the lazy dog.
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p><a href="#" class="subtitle">
    The quick brown fox jumps over the lazy dog.
</a></p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Emphasis</p>
                                <p>
                                    <em>The quick brown fox jumps over the lazy dog.</em>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p><em>The quick brown fox jumps over the lazy dog.</em></p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Small</p>
                                <p>
                                    <small>The quick brown fox jumps over the lazy dog.</small>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p><small>The quick brown fox jumps over the lazy dog.</small></p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Strong</p>
                                <p>
                                    <strong>The quick brown fox jumps over the lazy dog.</strong>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p><strong>The quick brown fox jumps over the lazy dog.</strong></p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Underline</p>
                                <p>
                                    <u>The quick brown fox jumps over the lazy dog.</u>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p><u>The quick brown fox jumps over the lazy dog.</u></p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Uppercase</p>
                                <p className="uppercase">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="uppercase">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Lowercase</p>
                                <p className="lowercase">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="lowercase">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Capitalize</p>
                                <p className="capitalize">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="capitalize">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">White</p>
                                <p className="text-white bg-gray-900">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="capitalize">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Italics</p>
                                <p className="italics">The quick brown fox jumps over the lazy dog.</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<p class="italics">The quick brown fox jumps over the lazy dog.</p>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Caret</p>
                                <p className="caret"></p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<p class="caret"></p>`} language="htmlbars" />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Right to left</p>
                                <p className="rtl">right to left</p>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<p class="rtl"></p>`} language="htmlbars" />
                            </div>
                            <div className="col-lg-6">
                                <p className="title mb-0">Font Alt (Use Nunito Sans with titles)</p>
                                <h6 className="font-alt">This title uses Nunito Sans.</h6>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<h6 class="font-alt">This title uses Nunito Sans.</h6>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="others">
                    <div className="content">
                        <Headline title="Other Text Elements" link="others" size="4" />
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col-3">
                                <abbr title="You Only Live Once">YOLO</abbr>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;abbr&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <code>Foo bar</code>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;code&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <del>Deleted</del>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;del&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <em>Emphasis</em>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;em&gt;</code>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <i>Italis</i>
                                <span>
                                    &nbsp;&nbsp;<code>&lt;i&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <ins>Inserted</ins>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;ins&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <kbd>Alt + F4</kbd>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;kbd&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <mark>Highlight</mark>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;mark&gt;</code>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <ruby>
                                    漢 <rt>kan</rt>字 <rt>ji</rt>
                                </ruby>
                                <span>
                                    <code>&lt;ruby&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <s>Strikethrough</s>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;s&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <samp>Sample</samp>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;samp&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                Text<sub>Subscript</sub>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;sub&gt;</code>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                Text<sup>Superscript</sup>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;sup&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <time>05:00</time>&nbsp;&nbsp;
                                <span>
                                    <code>&lt;time&gt;</code>
                                </span>
                            </div>
                            <div className="col-3">
                                <var>x</var> = <var>y</var> + 2&nbsp;&nbsp;
                                <span>
                                    <code>&lt;var&gt;</code>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Glyphs', link: './glyphs' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TextElementsPage);
