import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FontGlyphsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <span>
                <section className="padtop" id="glyphs">
                    <div className="content">
                        <Headline title="Glyphs" link="#glyphs" />
                        <div className="divider"></div>
                        <p>
                            Using Font Awesome? Cirrus makes it easy to integrate glyphs into your website. Just add the{' '}
                            <code>fa-wrapper</code> class along with your desired glyph class.
                        </p>
                        <p>
                            Note that glyph sizes now inherity directly from parent classes. Glyphs appear the best when
                            the font size is a multiple of <b>7</b>.
                        </p>
                        <div className="space"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <p className="title">X-Small (7px)</p>
                                <span
                                    className="icon subtitle"
                                    style={{
                                        fontSize: '7px',
                                    }}
                                >
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'github']} />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<span class="icon subtitle" style="font-size: 7px">
    <i class="fab fa-wrapper fa-github"></i>
</span>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Small/Default (14px)</p>
                                <span
                                    className="icon subtitle"
                                    style={{
                                        fontSize: '14px',
                                    }}
                                >
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'github']} />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<span class="icon subtitle" style="font-size: 14px">
    <i class="fab fa-wrapper fa-github"></i>
</span>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">Large (21px)</p>
                                <span
                                    className="icon subtitle"
                                    style={{
                                        fontSize: '21px',
                                    }}
                                >
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'github']} />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<span class="icon subtitle" style="font-size: 21px">
    <i class="fab fa-wrapper fa-github"></i>
</span>`}
                                    language="htmlbars"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p className="title">X-Large (28px)</p>
                                <span
                                    className="icon subtitle"
                                    style={{
                                        fontSize: '28px',
                                    }}
                                >
                                    <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'github']} />
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<span class="icon subtitle" style="font-size: 28px">
    <i class="fab fa-wrapper fa-github"></i>
</span>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Font Weights', link: './font-weights' }} nextLink={{ name: 'Text Elements', link: './text-elements' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};
