import React from 'react';
import { withLayout } from '@moxy/next-layout';
import Head from 'next/head';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_ELEMENTS } from '../../../config/sidebar';

export const AvatarPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Accordion</title>
            </Head>
            <div>
                <section className="padtop" id="accordion">
                    <div className="content">
                        <Headline title="Accordion" link="#accordion" />
                        <div className="divider"></div>

                        <p>
                            The <code>accordion</code> class provides styles for the <code>details</code> and{' '}
                            <code>summary</code> HTML elements.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>

                        <p>
                            An <code>accordion</code> comprises of these classes:
                        </p>

                        <div className="row">
                            <div className="col-6">
                                <CodeBlock
                                    language="htmlbars"
                                    code={`<details class="accordion">
    <summary class="accordion__summary">Summary</summary>
    <!-- Other children -->
</details>`}
                                />
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>
                                        <code>accordion</code> - class applied on the <code>details</code> element.
                                        <ul>
                                            <li>
                                                <code>accordion__summary</code> - class applied on the{' '}
                                                <code>summary</code> element.
                                            </li>
                                            <li>Other child elements...</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is a default styled <code>accordion</code>.
                        </p>
                        <details className="accordion">
                            <summary className="accordion__summary">Accordion 1</summary>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam,
                                tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae
                                tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
                                lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
                                mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit
                                amet, congue turpis.
                            </p>
                        </details>
                        <details open className="accordion">
                            <summary className="accordion__summary">Accordion 2</summary>
                            <ul>
                                <li>Vestibulum id elit quis massa interdum sodales.</li>
                                <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
                                <li>Quisque sed eros non eros ornare elementum.</li>
                                <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
                            </ul>
                        </details>
                        <details className="accordion">
                            <summary className="accordion__summary">Accordion 3</summary>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam,
                                tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae
                                tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
                                lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
                                mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit
                                amet, congue turpis.
                            </p>
                        </details>

                        <CodeBlock
                            code={`<details class="accordion">
    <summary class="accordion__summary">Accordion 1</summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed,
        auctor id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
        ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit
        sollicitudin. Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum
        ultrices, porta turpis sit amet, congue turpis.</p>
</details>
<details class="accordion">
    <summary class="accordion__summary">Accordion 2</summary>
    <ul>
        <li>Vestibulum id elit quis massa interdum sodales.</li>
        <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
        <li>Quisque sed eros non eros ornare elementum.</li>
        <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
    </ul>
</details>
<details class="accordion">
    <summary class="accordion__summary">Accordion 3</summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed,
        auctor id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
        ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit
        sollicitudin. Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum
        ultrices, porta turpis sit amet, congue turpis.</p>
</details>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Accordion`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(AvatarPage);
