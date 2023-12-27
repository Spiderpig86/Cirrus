import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { Blockquote } from '../../../layouts/components/blockquote';
import { TITLE_GRID } from '../../../config/sidebar';
import { VersionTag } from '../../../layouts/components/tag';

export const GridGapPage: React.FC<any> = (props) => {
    const classTable = {
        'grid-gap-0': 'u-gap-0',
        'grid-gap-1': 'u-gap-1',
        'grid-gap-2': 'u-gap-1',
        'grid-gap-3': 'u-gap-2',
        'grid-gap-4': 'u-gap-2',
        'grid-gap-5': 'u-gap-3',
        'grid-gap-6': 'u-gap-4',
        'grid-gap-7': 'u-gap-6',
        'grid-gap-8': 'u-gap-8',
        'grid-gap-9': 'u-gap-10',
        'grid-gap-10': 'u-gap-16',
        'grid-gap-11': 'u-gap-20',
        'grid-gap-12': 'u-gap-24',
    };

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Grid Gap</title>
            </Head>
            <div>
                <section className="padtop" id="gap">
                    <div className="content">
                        <Headline title="Grid Gap" link="#gap" />
                        <div className="divider"></div>
                        <VersionTag text={`Deprecated`} version={`0.7.0`} />

                        <Blockquote accentColor="#fcd9bd">
                            Note that this has been deprecated in favor of the new{' '}
                            <Link href="/utils/gap">
                                <a className="u u-LR">Gap</a>
                            </Link>{' '}
                            utility classes.
                        </Blockquote>

                        <p>
                            Since the old <code>grid-gap</code> classes have been deprecated, below is a conversion
                            table to the new classes that should ease any migration that is needed which mostly match
                            the styles of the previous <code>grid-gap</code> classes.
                        </p>

                        <table className="class-table table fixed-head u-text-left">
                            <thead>
                                <tr>
                                    <th
                                        style={{
                                            width: '200px',
                                        }}
                                    >
                                        Old
                                    </th>
                                    <th>New</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(classTable).map((row, index) => (
                                    <tr key={index}>
                                        <td
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <code className="text-gray-600 bg-gray-100">{row[0]}</code>
                                        </td>
                                        <td>
                                            <code className="text-green-600 bg-green-100">{row[1]}</code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_GRID,
                        pageName: `Gap`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(GridGapPage);
