import React from 'react';
import { Link } from 'react-router-dom';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { toc } from './toc';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const VariantsPage: React.FC<any> = (props) => {

    return (
        <main className="page-layout">
            <div>
                <section className="padtop">
                    <div className="content">
                        <Headline title="Variants" link="#variants" />
                        <div className="divider"></div>
                        <p>
                            Other variants of buttons include loading button, animated, and close button. Also include
                            circle and pilled.
                        </p>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Glyphs', link: './glyphs' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
