import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Tag } from '../../../layouts/components/tag';

export const HeeadingsPage: React.FC<any> = (props) => {

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Headings</title>
            </Head>
            <span>
                <section className="padtop" id="headings">
                    <div className="content">
                        <Headline title="Headings" link="#headings" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `Updated`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />

                        <p>These classes style the font of the heading elements.</p>
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" size={'4'} link="#examples" />
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
                        <p>Headlines are just bigger versions of headings.</p>
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

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" size="4" />
                        <div className="divider"></div>

                        <p>
                            The classes specified above are the default utility classes for setting heading font sizes.
                            You can add, change, or remove classes within the <code>_config.scss</code> file of Cirrus.
                        </p>

                        <div className="space"></div>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        fonts: (
            sizes: (
                heading: (
                    // Replace h1 font size for sm-above
                    h1: (
                        sm-only: (
                            font-size: 5rem,
                        ),
                    ),

                    // Create a new entry (h7 doesn't technically exist but it's ok)
                    h7: (
                        default: (
                            font-size: .5rem,
                        ),
                        sm-above: (
                            font-size: .6rem,
                        )
                    )
                ),
            ),
        ),
    ),
) !default;`}
                            language="scss"
                        />
                        <p>This would generate the following additional classes.</p>
                        <CodeBlock
                            code={`h1 {
    font-size: 5rem;
    letter-spacing: 0.025rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h7 {
    font-size: 0.6rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

/* Other viewport variants... */
`}
                            language="css"
                        />
                        
                        <div className="space"></div>

                        <p>Headlines can also be extended.</p>

                        <CodeBlock
                            code={`// _config.scss
$config: (
    extend: (
        fonts: (
            sizes: (
                headline: (
                    headline-5: (
                        default: (
                            font-size: 2rem,
                        ),
                        sm-above: (
                            font-size: 2.5rem,
                        ),
                    ),
                ),
            ),
        ),
    ),
) !default;`}
                            language="scss"
                        />
                        <CodeBlock
                            code={`.headline-5 {
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
}

@media screen and (max-width: 639px) {
    .headline-5 {
        font-size: 2.5rem;
        letter-spacing: 0.05rem;
    }
}
`}
                            language="css"
                        />

                        <p>
                            Learn more about how to extend Cirrus to support your use cases in the{' '}
                            <Link href="/getting-started/configuration">
                                <a className="u u-LR">Configuration</a>
                            </Link>{' '}
                            documentation.
                        </p>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Glyphs', link: './glyphs' }}
                    nextLink={{ name: 'Letter Spacing', link: './letter-spacing' }}
                />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(HeeadingsPage);
