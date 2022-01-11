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
import { ClassTable } from '../../../layouts/components/class-table';
import { Capitalize } from '../../../utils/string';

export const FontWeightsPage: React.FC<any> = (props) => {
    const DEFAULT_FONT_WEIGHT_CLASSES = {
        extrathin: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    };

    const classTable = Object.entries(DEFAULT_FONT_WEIGHT_CLASSES).map((entry) => {
        return {
            class: `font-${entry[0]}`,
            style: `font-weight: ${entry[1]}`,
        };
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Font Weights</title>
            </Head>
            <span>
                <section className="padtop" id="font-weights">
                    <div className="content">
                        <Headline title="Font Weights" link="#font-weights" />
                        <div className="divider"></div>

                        <p>These are classes that set the font weight of an element.</p>

                        <ClassTable classTable={classTable} />
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" size={'4'} link="#examples" />
                        <div className="divider"></div>

                        <p>
                            Cirrus comes with a ton of ways to customize your text ranging from changing font weights to
                            changing font styles.
                        </p>
                        <div className="space"></div>

                        <div className="row">
                            {Object.entries(DEFAULT_FONT_WEIGHT_CLASSES).map((entry) => {
                                return (
                                    <>
                                        <div className="col-lg-6">
                                            <p className="title">
                                                {Capitalize(entry[0])} ({entry[1]})
                                            </p>
                                            <p className={`subtitle font-${entry[0]}`}>
                                                The quick brown fox jumps over the lazy dog.
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <CodeBlock
                                                code={`<p class="font-${entry[0]}">The quick brown fox jumps over the lazy dog.</p>`}
                                                language="htmlbars"
                                            />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'Glyphs', link: './glyphs' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FontWeightsPage);
