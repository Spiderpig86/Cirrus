import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TabsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop">
                    <div className="content">
                        <Headline title="Tabs" link="#tabs" />
                        <div className="divider"></div>
                        <p>Simple tab navigation for presenting different views with different styles and add-ons.</p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>
                        <p>These are tabs with the base styling out of the box.</p>
                        <div className="space"></div>
                        <div className="tab-container">
                            <ul>
                                <li>
                                    <div className="tab-item-content">Home</div>
                                </li>
                                <li>
                                    <div className="tab-item-content">Group</div>
                                </li>
                                <li>
                                    <div className="tab-item-content">Shop</div>
                                </li>
                                <li className="selected">
                                    <div className="tab-item-content">Me</div>
                                </li>
                            </ul>
                        </div>
                        <div className="space"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Structure</h6>
                                <ul>
                                    <li>
                                        <code>tab-container</code> - holds all the tabs.
                                        <ul>
                                            <li>
                                                <code>li</code> - represents each tab item.
                                                <ul>
                                                    <li>
                                                        <code>tab-item-content</code> or <code>a</code> - contents of
                                                        tab item. Use <code>tab-item-content</code> class div when
                                                        creating tab functionality with JS, use <code>a</code> with
                                                        links.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container">
    <ul>
        <li><div class="tab-item-content">Home</div></li>
        <li><div class="tab-item-content">Group</div></li>
        <li><div class="tab-item-content">Shop</div></li>
        <li class="selected"><div class="tab-item-content">Me</div></li>
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <blockquote>
                            To clarify the choice of being able to use a <code>a</code> or <code>tab-item-content</code>{' '}
                            div above, it means:
                            <ul>
                                <li>
                                    If you were to navigate to another page on a tab item click, it would make sense to
                                    use <code>a</code>.
                                </li>
                                <li>
                                    For all other cases, it would make sense to use <code>tab-item-content</code> div to
                                    follow HTML specifications.
                                </li>
                            </ul>
                        </blockquote>
                        <p>
                            To highlight or select any of the elements, add the <code>selected</code> class to the tab
                            item (<code>li</code>).
                        </p>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            Modify the size of the <code>tab-container</code> using the <code>tabs-xsmall</code>,{' '}
                            <code>tabs-small</code>, <code>tabs-large</code>, and <code>tabs-xlarge</code> classes.
                        </p>
                        <div className="space"></div>

                        <p>
                            <b>X-Small</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-xsmall">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-xsmall">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Small</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-small">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-small">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Large</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-large">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-large">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>X-Large</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-xlarge">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-xlarge">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="alignment">
                    <div className="content">
                        <Headline title="Alignment" link="#alignment" size="4" />
                        <div className="divider"></div>
                        <p>
                            Easily change the alignment on the tabs with <code>tabs-center</code>,{' '}
                            <code>tabs-right</code>, and <code>tabs-fill</code>. Note that tabs are left-justified by
                            default.
                        </p>
                        <div className="space"></div>

                        <p>
                            <b>Centered</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-center">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-center">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Right</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-right">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-right">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Fill</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-fill">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-fill">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="styles">
                    <div className="content">
                        <Headline title="Styles" link="#styles" size="4" />
                        <div className="divider"></div>
                        <p>Try out alternative styles with tabs.</p>
                        <div className="space"></div>
                        <p>
                            <b>Depth</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-depth tabs-fill">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-depth tabs-fill">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Classic</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-classic tabs-center">
                                    <ul>
                                        <li>
                                            <div className="tab-item-content">Home</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Group</div>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">Shop</div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">Me</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-classic tabs-center">
    <ul>
        <!-- Tab Items -->
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="glyphs">
                    <div className="content">
                        <Headline title="Glyphs" link="#glyphs" size="4" />
                        <div className="divider"></div>
                        <p>
                            Integrate FontAwesome glyphs into your tabs. Cirrus will automatically align the glyphs to
                            the left or right depending if the glyph or text comes first.
                        </p>

                        <p>
                            <b>Classic</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tab-container tabs-classic tabs-center">
                                    <ul>
                                        <li>
                                            <a>
                                                <span className="icon">
                                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-left']} />
                                                </span>
                                                <span>Back</span>
                                            </a>
                                        </li>
                                        <li className="selected">
                                            <div className="tab-item-content">
                                                <span className="icon">
                                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'home']} />
                                                </span>
                                                <span>Home</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tab-item-content">
                                                <span>Forward</span>
                                                <span className="icon">
                                                    <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="tab-container tabs-classic tabs-center">
    <ul>
        <li><a><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path></svg></span><span>Back</span></a></li>
        <li class="selected">
            <div class="tab-item-content"><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path></svg></span><span>Home</span></div>
        </li>
        <li>
            <div class="tab-item-content"><span>Forward</span><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path></svg></span></div>
        </li>
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Placeholder', link: './placeholder' }}
                    nextLink={{ name: 'Tabs', link: './tabs' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
