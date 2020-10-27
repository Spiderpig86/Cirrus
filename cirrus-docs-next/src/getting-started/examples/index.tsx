import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { ExampleCard } from './example-card';
import { DefaultLayout } from '../../../layouts/default';

import { toc } from './toc';
import { DOC_EXAMPLES } from '../../../constants/examples';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const ExamplesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Examples</title>
            </Head>
            <div>
                <section id="examples" className="padtop">
                    <div className="content">
                        <Headline title="Examples" link="#examples" />
                        <div className="divider"></div>
                        <p>Here are a couple of examples to help you discover what is possible with Cirrus.</p>

                        <div className="row">
                            {DOC_EXAMPLES.map((example, index) => (
                                <ExampleCard key={index} data={example} />
                            ))}
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Developing',
                        link: './developing',
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
