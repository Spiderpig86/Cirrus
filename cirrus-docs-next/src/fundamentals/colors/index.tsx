import React from 'react';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { Display } from './display';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { v1, v2Colors, v2 } from './color-config';

export const ColorsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Colors" link="#colors" />
                        <div className="divider"></div>
                        <span className="tag-container group-tags">
                            <div className="tag tag--dark">Added</div>
                            <div className="tag tag--info">0.6.0</div>
                        </span>
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
                        {v2Colors.map((color, index) => {
                            return (
                                <section key={index} id={color}>
                                    <h6>{color}</h6>
                                    <Display swatches={v2.get(color)!} />
                                </section>
                            );
                        })}
                    </div>
                </section>

                <Pagination
                    nextLink={{
                        name: 'Typography',
                        link: './typography',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ColorsPage);
