import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const TagsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop">
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
                        <p>
                            Tags also come two sizes larger with the <code>tag--large</code> and{' '}
                            <code>tag--xlarge</code> modifiers. Tags can also be more rounded with the{' '}
                            <code>tag--rounded</code> class.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag tag--info">Normal</div>
                                <div className="tag tag--link tag--large">Large</div>
                                <div className="tag tag--danger tag--xlarge">Extra Large</div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="col-6">
    <div class="tag tag--info">Normal</div>
    <div class="tag tag--link tag--large">Large</div>
    <div class="tag tag--danger tag--xlarge">Extra Large</div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
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
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag tag--success">
                                    Close Me
                                    <div className="tag tag__delete"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div className="tag tag--success">
    Close Me
    <div class="tag tag__delete"></div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
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

                        <h6>Grouped Tags</h6>
                        <p>Group tags with extra buttons like the delete button.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tag-container group-tags">
                                    <div className="tag tag--dark">Version</div>
                                    <div className="tag tag--info">0.6.0</div>
                                    <div className="tag tag--warning tag__close-btn"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tag-container group-tags">
    <div class="tag tag--dark">Version</div>
    <div class="tag tag--info">0.5.5</div>
    <div class="tag tag--warning tag__close-btn"></div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

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
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Tabs', link: './tabs' }} nextLink={{ name: 'Tiles', link: './tiles' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
