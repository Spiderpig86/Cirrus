import React from 'react';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../../layouts/components/toc';
import { Headline } from '../../../../layouts/components/headline';
import { Pagination } from '../../../../layouts/components/pagination';
import { DOC_EXAMPLES } from '../../../../constants/examples';
import { ExampleCard } from './example-card';
import { DefaultLayout } from '../../../../layouts/default';

import { toc } from './toc';

export const ExamplesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section id="examples" className="padtop">
                    <div className="content">
                        <Headline title="Examples" link="#examples" />
                        <div className="divider"></div>
                        <p>Here are a couple of examples to help you discover what is possible with Cirrus.</p>

                        <div className="row">
                            {DOC_EXAMPLES.map((example) => (
                                <ExampleCard data={example} />
                            ))}
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Browser Support',
                        link: './browser-support',
                    }}
                    nextLink={{
                        name: 'Release Notes',
                        link: './release-notes',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ExamplesPage);