import React from 'react';
import { Link } from 'react-router-dom';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { toc } from './toc';

export const ColorsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop">
                    <div className="content">
                        <Headline title="Why Cirrus?" link="#why" />
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <Link to="../update" className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">Playground</h5>
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
