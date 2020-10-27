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

export const PaginationPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Pagination</title>
            </Head>
            <div>
                <section className="padtop" id="pagination">
                    <div className="content">
                        <Headline title="Pagination" link="#pagination" />
                        <div className="divider"></div>

                        <p>
                            Cirrus comes with easy to style pagination menus that allow for easy navigation between
                            pages in websites and forums.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="short">
                    <div className="content">
                        <Headline title="Short" link="#short" size="4" />
                        <div className="divider"></div>

                        <p>
                            This is the shortened variant of the pagination menu, which is what you typically expect to
                            see in forums. Add the <code>short</code> class for all <code>pagination-item</code>.
                        </p>
                        <p>
                            To mark a <code>pagination-item</code> as selected, add the <code>selected</code> class.
                        </p>
                        <p>
                            To set an item as disabled, add the <code>disabled</code> attribute or <code>disabled</code>{' '}
                            class on both the <code>pagination-item</code> and underlying <code>a</code> tag.
                        </p>
                        <div className="pagination">
                            <div className="pagination-item short disabled">
                                <a href="!#" className="disabled">
                                    Prev
                                </a>
                            </div>
                            <div className="pagination-item short selected">
                                <a href="!#">1</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">2</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">3</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">4</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">...</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">13</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">Next</a>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="pagination">
    <div class="pagination-item short disabled"><a href="!#" class="disabled">Prev</a></div>
    <div class="pagination-item short selected"><a href="!#">1</a></div>
    <div class="pagination-item short"><a href="!#">2</a></div>
    <div class="pagination-item short"><a href="!#">3</a></div>
    <div class="pagination-item short"><a href="!#">4</a></div>
    <div class="pagination-item short"><a>...</a></div>
    <div class="pagination-item short"><a href="!#">13</a></div>
    <div class="pagination-item short"><a href="!#">Next</a></div>
</div>`}
                            language="htmlbars"
                        />

                        <p>
                            A bordered also exists with the <code>bordered</code> class.
                        </p>
                        <div className="pagination pagination-bordered">
                            <div className="pagination-item short">
                                <a href="!#">Prev</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">1</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">...</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">3</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">4</a>
                            </div>
                            <div className="pagination-item short selected">
                                <a href="!#">5</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">...</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">23</a>
                            </div>
                            <div className="pagination-item short">
                                <a href="!#">Next</a>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="pagination pagination-bordered">
    <div class="pagination-item short"><a href="!#">Prev</a></div>
    <div class="pagination-item short"><a href="!#">1</a></div>
    <div class="pagination-item short"><a>...</a></div>
    <div class="pagination-item short"><a href="!#">3</a></div>
    <div class="pagination-item short"><a href="!#">4</a></div>
    <div class="pagination-item short selected"><a href="!#">5</a></div>
    <div class="pagination-item short"><a>...</a></div>
    <div class="pagination-item short"><a href="!#">23</a></div>
    <div class="pagination-item short"><a href="!#">Next</a></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="prevnext">
                    <div className="content">
                        <Headline title="Prev/Next" link="#prevnext" size="4" />
                        <div className="divider"></div>

                        <p>
                            This variant is exactly the same type of pagination used at the bottom of the page to direct
                            users to the previous and next pages. This is just using the <code>pagination-item</code>{' '}
                            classes by themselves. The <code>pagination-prev</code> and <code>pagination-next</code> are
                            just helpers for text alignment.
                        </p>

                        <div className="pagination no-bullets">
                            <div className="pagination-item pagination-prev">
                                <a href="!#" className="u-block">
                                    <p className="pagination-item-subtitle">Previous</p>
                                    <h5 className="m-0">Choose Items</h5>
                                </a>
                            </div>
                            <div className="pagination-item pagination-next">
                                <a href="!#" className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="m-0">Order</h5>
                                </a>
                            </div>
                        </div>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="pagination no-bullets">
    <div class="pagination-item pagination-prev">
        <a href="!#" class="u-block">
            <p class="pagination-item-subtitle">Previous</p>
            <h5 class="m-0">Choose Items</h5></a>
    </div>
    <div class="pagination-item pagination-next">
        <a href="!#" class="u-block">
            <p class="pagination-item-subtitle">Next</p>
            <h5 class="m-0">Order</h5></a>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Modal', link: './modal' }}
                    nextLink={{ name: 'Placeholder', link: './placeholder' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(PaginationPage);
