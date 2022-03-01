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

export const ToastPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Toast</title>
            </Head>
            <div>
                <section className="padtop" id="toast">
                    <div className="content">
                        <Headline title="Toast" link="#toast" />
                        <div className="divider"></div>
                        <p>Use toasts to notify users of any changes.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            A <code>toast</code> is the only class we need to worry about for this component. Anything
                            can be added within a toast.
                        </p>
                        <p>
                            To add a title for the toast, use the <code>toast__title</code> class on a text element.
                        </p>

                        <div className="toast toast--primary mx-0">
                            <h4 className="toast__title">Danger!</h4>
                            <p>Run.</p>
                        </div>
                        <CodeBlock
                            code={`<div class="toast toast--primary">
    <button class="btn-close"></button>
    <h4 class="toast__title">Danger!</h4>
    <p>Run.</p>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            A close button can be added with a <code>btn-close</code> div.
                        </p>

                        <div className="toast mx-0">
                            <button className="btn-close"></button>
                            <p>Just kidding. False alarm.</p>
                        </div>
                        <CodeBlock
                            code={`<div class="toast">
    <button class="btn-close"></button>
    <p>Just kidding. False alarm.</p>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            The <code>toast--translucent</code> class adds a bit of translucency to the toast.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="styles">
                    <div className="content">
                        <Headline title="Styles" link="#styles" size="4" />
                        <div className="divider"></div>

                        <p>Toasts can be customized using the v1 pre-built color classes.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="toast toast--success">
                                    <button className="btn-close"></button>
                                    <p>Success</p>
                                </div>
                                <div className="toast toast--warning">
                                    <button className="btn-close"></button>
                                    <p>Warning</p>
                                </div>
                                <div className="toast toast--danger">
                                    <button className="btn-close"></button>
                                    <p>Error</p>
                                </div>
                                <div className="toast toast--info">
                                    <button className="btn-close"></button>
                                    <p>Info</p>
                                </div>
                                <div className="toast toast--link">
                                    <button className="btn-close"></button>
                                    <p>Link</p>
                                </div>
                                <div className="toast toast--primary">
                                    <button className="btn-close"></button>
                                    <p>Primary</p>
                                </div>
                                <div className="toast toast--gray">
                                    <button className="btn-close"></button>
                                    <p>Gray</p>
                                </div>
                                <div className="toast toast--dark">
                                    <button className="btn-close"></button>
                                    <p>Dark</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="col-lg-6">
    <div class="toast toast--success">
        <button class="btn-close"></button>
        <p>Success</p>
    </div>
    <div class="toast toast--warning">
        <button class="btn-close"></button>
        <p>Warning</p>
    </div>
    <div class="toast toast--danger">
        <button class="btn-close"></button>
        <p>Error</p>
    </div>
    <div class="toast toast--info">
        <button class="btn-close"></button>
        <p>Info</p>
    </div>
    <div class="toast toast--link">
        <button class="btn-close"></button>
        <p>Link</p>
    </div>
    <div class="toast toast--primary">
        <button class="btn-close"></button>
        <p>Primary</p>
    </div>
    <div class="toast toast--gray">
        <button class="btn-close"></button>
        <p>Gray</p>
    </div>
    <div class="toast toast--dark">
        <button class="btn-close"></button>
        <p>Dark</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Tiles', link: './tiles' }}
                    nextLink={{ name: 'Tooltips', link: './tooltips' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ToastPage);
