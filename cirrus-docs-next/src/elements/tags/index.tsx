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

export const TagsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Tags</title>
            </Head>
            <div>
                <section className="padtop" id="tags">
                    <div className="content">
                        <Headline title="Tags" link="#tags" />
                        <div className="divider"></div>
                        <p>A handy component to display snippets of information throughout the site.</p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>
                        <p>Tags come with basic minimal styling by default.</p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag-container u-center">
                                    <div className="tag">Look</div>
                                    <div className="tag">At</div>
                                    <div className="tag">Me!</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag-container u-center">
    <div class="tag">Look</div>
    <div class="tag">At</div>
    <div class="tag">Me!</div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" size="4" />
                        <div className="divider"></div>
                        <p>
                            Color your tags up just like your buttons with 8 different styles. Of course, you can always
                            use the new modifier classes such as <code>bg-indigo-200</code> instead.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag tag--white">White</div>
                                <div className="tag tag--black">Dark</div>
                                <div className="tag tag--primary">Primary</div>
                                <div className="tag tag--link">Link</div>
                                <div className="tag tag--info">Info</div>
                                <div className="tag tag--success">Success</div>
                                <div className="tag tag--warning">Warning</div>
                                <div className="tag tag--danger">Danger</div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag tag--white">White</div>
<div class="tag tag--black">Dark</div>
<div class="tag tag--primary">Primary</div>
<div class="tag tag--link">Link</div>
<div class="tag tag--info">Info</div>
<div class="tag tag--success">Success</div>
<div class="tag tag--warning">Warning</div>
<div class="tag tag--danger">Danger</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <span>
                            <div className="tag-container group-tags">
                                <div className="tag tag--dark">Updated</div>
                                <div className="tag tag--info">0.6.3</div>
                            </div>
                        </span>
                        <p>
                            Tags also come two sizes larger with the <code>tag--large</code> and{' '}
                            <code>tag--xlarge</code> modifiers. Tags can also be more rounded with the{' '}
                            <code>tag--rounded</code> class.
                        </p>
                        <p>
                            To maintain backwards compatability with the old sizes before 0.6.3, the default size will
                            be the same as <code>tag--sm</code>.
                        </p>

                        <div className="py-2 u-text-center">
                            <div className="tag tag--xs bg-orange-100">Extra Small</div>
                            <div className="tag tag--sm bg-orange-200">Small</div>
                            <div className="tag tag--md bg-orange-300">Medium</div>
                            <div className="tag tag--lg bg-orange-400">Large</div>
                            <div className="tag tag--xl bg-orange-500 text-white">Extra Large</div>
                        </div>

                        <CodeBlock
                            code={`<div class="py-2 u-text-center">
    <div class="tag tag--xs bg-orange-100">Extra Small</div>
    <div class="tag tag--sm bg-orange-200">Small</div>
    <div class="tag tag--md bg-orange-300">Medium</div>
    <div class="tag tag--lg bg-orange-400">Large</div>
    <div class="tag tag--xl bg-orange-500">Extra Large</div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="buttons">
                    <div className="content">
                        <Headline title="Buttons" link="#buttons" size="4" />
                        <div className="divider"></div>
                        <p>Tags can be styled to look like different buttons.</p>
                        <div className="space"></div>

                        <h6>Tag Close</h6>
                        <p>
                            This is a special tag that is designed to serve as a close button for the tag with the{' '}
                            <code>tag__close-btn</code> class.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag tag__close-btn"></div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<div class="tag tag__close-btn"></div>`} language="htmlbars" />
                            </div>
                        </div>

                        <h6>Tag Delete</h6>
                        <p>
                            This is embedded within the tag itself unlike the close button to the side. Create a new{' '}
                            <code>div</code> inside the <code>tag</code> with the <code>tag__delete</code> class.
                        </p>

                        <div className="tag tag--xs tag--success">
                            Close Me
                            <div className="tag tag--xs tag__delete"></div>
                        </div>
                        <div className="tag tag--sm tag--success">
                            Close Me
                            <div className="tag tag--sm tag__delete"></div>
                        </div>
                        <div className="tag tag--md tag--success">
                            Close Me
                            <div className="tag tag--md tag__delete"></div>
                        </div>
                        <div className="tag tag--lg tag--success">
                            Close Me
                            <div className="tag tag--lg tag__delete"></div>
                        </div>
                        <div className="tag tag--xl tag--success">
                            Close Me
                            <div className="tag tag--xl tag__delete"></div>
                        </div>

                        <div className="my-2">
                            <CodeBlock
                                code={`<div class="tag tag--success">
    Close Me
    <div class="tag tag__delete"></div>
</div>`}
                                language="htmlbars"
                            />
                        </div>
                    </div>
                </section>

                <section className="padtop" id="layouts">
                    <div className="content">
                        <Headline title="Layouts" link="#layouts" size="4" />
                        <div className="divider"></div>
                        <p>
                            Tags also come with layout styles to control how tags are positioned relative to each other.
                        </p>
                        <div className="space"></div>

                        <h6>Tag Container</h6>
                        <p>
                            The <code>tag-container</code> is a container for different tags.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag-container">
                                    <div className="tag tag--link">One</div>
                                    <div className="tag tag--link">Two</div>
                                    <div className="tag tag--link">Three</div>
                                    <div className="tag tag--link">Four</div>
                                    <div className="tag tag--link">Five</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag-container">
    <div class="tag tag--link">One</div>
    <div class="tag tag--link">Two</div>
    <div class="tag tag--link">Three</div>
    <div class="tag tag--link">Four</div>
    <div class="tag tag--link">Five</div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <h6>Tag Container Grouped Tags</h6>
                        <span>
                            <div className="tag-container group-tags">
                                <div className="tag tag--dark">Updated</div>
                                <div className="tag tag--info">0.6.3</div>
                            </div>
                        </span>

                        <p className="m-0">
                            <b>Normal</b>
                        </p>
                        <p>Group tags with extra buttons like the delete button.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag-container group-tags">
                                    <div className="tag tag--xs tag--dark">xs</div>
                                    <div className="tag tag--xs tag--info">0.6.0</div>
                                    <div className="tag tag--xs tag--warning tag__close-btn"></div>
                                </div>
                                <div className="tag-container group-tags">
                                    <div className="tag tag--sm tag--dark">sm</div>
                                    <div className="tag tag--sm tag--info">0.6.0</div>
                                    <div className="tag tag--sm tag--warning tag__close-btn"></div>
                                </div>
                                <div className="tag-container group-tags">
                                    <div className="tag tag--md tag--dark">md</div>
                                    <div className="tag tag--md tag--info">0.6.0</div>
                                    <div className="tag tag--md tag--warning tag__close-btn"></div>
                                </div>
                                <div className="tag-container group-tags">
                                    <div className="tag tag--lg tag--dark">lg</div>
                                    <div className="tag tag--lg tag--info">0.6.0</div>
                                    <div className="tag tag--lg tag--warning tag__close-btn"></div>
                                </div>
                                <div className="tag-container group-tags">
                                    <div className="tag tag--xl tag--dark">xl</div>
                                    <div className="tag tag--xl tag--info">0.6.0</div>
                                    <div className="tag tag--xl tag--warning tag__close-btn"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag-container group-tags">
    <div class="tag tag--xs tag--dark">xs</div>
    <div class="tag tag--xs tag--info">0.6.0</div>
    <div class="tag tag--xs tag--warning tag__close-btn"></div>
</div>
<div class="tag-container group-tags">
    <div class="tag tag--sm tag--dark">sm</div>
    <div class="tag tag--sm tag--info">0.6.0</div>
    <div class="tag tag--sm tag--warning tag__close-btn"></div>
</div>
<div class="tag-container group-tags">
    <div class="tag tag--md tag--dark">md</div>
    <div class="tag tag--md tag--info">0.6.0</div>
    <div class="tag tag--md tag--warning tag__close-btn"></div>
</div>
<div class="tag-container group-tags">
    <div class="tag tag--lg tag--dark">lg</div>
    <div class="tag tag--lg tag--info">0.6.0</div>
    <div class="tag tag--lg tag--warning tag__close-btn"></div>
</div>
<div class="tag-container group-tags">
    <div class="tag tag--xl tag--dark">xl</div>
    <div class="tag tag--xl tag--info">0.6.0</div>
    <div class="tag tag--xl tag--warning tag__close-btn"></div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="m-0">
                            <b>Rounded</b>
                        </p>
                        <p>Group the tags with rounded borders.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag-container group-tags group-tags--rounded">
                                    <div className="tag tag--dark">Version</div>
                                    <div className="tag tag--info">0.6.0</div>
                                    <div className="tag tag--warning tag__close-btn"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag-container group-tags group-tags--rounded">
    <div class="tag tag--dark">Version</div>
    <div class="tag tag--info">0.6.0</div>
    <div class="tag tag--warning tag__close-btn"></div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Tags`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TagsPage);
