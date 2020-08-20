import React from 'react';
import { Link } from 'react-router-dom';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { toc } from './toc';
import { Display } from './display';
import { v1, v2Colors, v2 } from './color-config';

export const ColorsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" />
                        <div className="divider"></div>
                        <p>
                            Cirrus has an extensive color palette that has been updated with <b>0.6.0</b> to make them
                            more accessible to all page elements.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="v1">
                    <div className="content">
                        <Headline title="v1 Colors" link="#v1" />
                        <div className="divider"></div>
                        <p>The standard color palette from older versions of the framework.</p>

                        {<Display swatches={v1} />}
                    </div>
                </section>

                <section className="padtop" id="v2">
                    <div className="content">
                        <Headline title="v2 Colors" link="#v2" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
                        <p>
                            Cirrus has an extensive color palette that has been updated with <b>0.6.0</b> to make them
                            more accessible to all page elements.
                        </p>
                        {v2Colors.map((color) => {
                            return (
                                <section id={color}>
                                    <h6>{color}</h6>
                                    <Display swatches={v2.get(color)!} />
                                </section>
                            );
                        })}
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <Link to="../update" className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">Typography</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
