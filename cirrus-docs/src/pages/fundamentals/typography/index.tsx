import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';

import './index.scss';

export const TypographyPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="typography">
                    <div className="content">
                        <Headline title="Typography" link="#typography" />
                        <div className="divider"></div>
                        <p>
                            <b>Cirrus</b> incorporates beautiful typography to make your website stand out from the
                            rest. Nunito Sans, by{' '}
                            <a href="http://sansoxygen.com/" className="u u-LR">
                                <b>Vernon Adams</b>
                            </a>{' '}
                            is chosen for the default typography for most elements such as <code>paragraphs</code>,{' '}
                            <code>articles</code>, <code>blockquotes</code>, and more while Montserrat adds a bold but
                            elegant touch to titles.
                        </p>
                        <p>
                            The <code>font-size</code> have been converted to rems which is independent of the font
                            sizes of the parent elements. The default is set to 1rem (16px) where each interval of rem
                            is 16 pixels.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="typefaces">
                    <div className="content">
                        <Headline title="Typefaces" link="#typefaces" />
                        <div className="divider"></div>

                        <p>These are the two main fonts used in the framework the elements they are used in.</p>

                        <div className="frame mb-2">
                            <div className="frame__header"></div>
                            <div className="frame__body">
                                <h1 className="title headline-3">Aa</h1>
                                <h4 className="subtitle font-normal">Montserrat</h4>
                                <div className="space"></div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6 className="title font-normal">Normal</h6>
                                        <h2 className="subtitle font-normal">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className="title font-bold">Bold</h6>
                                        <h2 className="subtitle font-bold">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className="title font-light">Numbers (Light)</h6>
                                        <h2 className="subtitle font-light">0123456789</h2>
                                    </div>
                                </div>

                                <p className="font-bold">Used in:</p>
                                <div className="tags">
                                    <span className="tag tag--info text-light">h1</span>
                                    <span className="tag tag--info text-light">h2</span>
                                    <span className="tag tag--info text-light">h3</span>
                                    <span className="tag tag--info text-light">h4</span>
                                    <span className="tag tag--info text-light">h5</span>
                                    <span className="tag tag--info text-light">h6</span>
                                </div>
                            </div>
                            <div className="frame__footer"></div>
                        </div>
                        <div className="frame mb-2">
                            <div className="frame__header"></div>
                            <div className="frame__body">
                                <h1 className="font-alt title headline-3 font-light">Aa</h1>
                                <h4 className="font-alt subtitle font-normal">Nunito Sans</h4>
                                <div className="space"></div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6 className="font-alt title font-light">Light</h6>
                                        <h2 className="font-alt subtitle font-light">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className="font-alt title font-normal">Normal</h6>
                                        <h2 className="font-alt subtitle font-normal">AaBbCcDd</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6 className="font-alt title font-bold">Bold</h6>
                                        <h2 className="font-alt subtitle font-bold">AaBbCcDd</h2>
                                    </div>
                                    <div className="col-lg-6">
                                        <h6 className="font-alt title font-light">Numbers (Light)</h6>
                                        <h2 className="font-alt subtitle font-light">0123456789</h2>
                                    </div>
                                </div>

                                <p className="font-bold">Used in:</p>
                                <div className="tags">
                                    <span className="tag tag--info text-light">p</span>
                                    <span className="tag tag--info text-light">label</span>
                                    <span className="tag tag--info text-light">span</span>
                                    <span className="tag tag--info text-light">blockquote</span>
                                    <span className="tag tag--info text-light">code</span>
                                    <span className="tag tag--info text-light">article</span>
                                </div>
                            </div>
                            <div className="frame__footer"></div>
                        </div>
                    </div>
                </section>

                <Pagination prevLink={{
                    name: 'Colors',
                    link: './colors'
                }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
