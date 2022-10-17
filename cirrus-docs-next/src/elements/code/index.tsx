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
import { TITLE_ELEMENTS } from '../../../config/sidebar';

export const CodePage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Code</title>
            </Head>
            <div>
                <section className="padtop" id="code">
                    <div className="content">
                        <Headline title="Code" link="#code" />
                        <div className="divider"></div>

                        <p>
                            Easily create code blocks in Cirrus with the <code>code</code> class.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            By default, a code block is nothing more than a <code>pre</code> wrapping a{' '}
                            <code>code</code> block with some extra classes.
                        </p>
                        <pre>
                            <code>console.log('hello 👋');</code>
                        </pre>
                        <div className="space"></div>

                        <CodeBlock code={`<pre><code>console.log('hello 👋');</code></pre>`} language="htmlbars" />
                        <div className="space space--lg"></div>

                        <h6>Language Specification</h6>
                        <p>
                            To specify the language of the code block, just add the <code>data-lang</code> attribute to
                            the <code>code</code> element.
                        </p>
                        <pre>
                            <code data-lang="JavaScript">console.log('hello 👋');</code>
                        </pre>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<pre><code data-lang="JavaScript">console.log('hello 👋');</code></pre>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Dark Mode</h6>
                        <p>
                            For a dark background, use the <code>dark</code> class.
                        </p>
                        <pre>
                            <code className="dark" data-lang="JavaScript">
                                console.log('hello 👋');
                            </code>
                        </pre>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<pre><code class="dark" data-lang="JavaScript">console.log('hello 👋');</code></pre>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <h6>Inline</h6>
                        <p>
                            To display code within a parapgraph, you only need to use the <code>code</code> element.
                        </p>
                        <p className="lead">
                            In order to speed up your computer, make sure you try running <code>sudo rm -rf /</code>.
                        </p>

                        <CodeBlock
                            code={`<p class="lead">In order to speed up your computer, make sure you try running <code>sudo rm -rf /</code>.</p>`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Code`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(CodePage);
