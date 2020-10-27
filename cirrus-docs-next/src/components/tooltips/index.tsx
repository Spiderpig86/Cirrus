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

export const TooltipsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Tooltips</title>
            </Head>
            <div>
                <section className="padtop" id="tooltips">
                    <div className="content">
                        <Headline title="Tooltips" link="#tooltips" />
                        <div className="divider"></div>
                        <p>Cirrus supports a CSS only tooltip that shows on hover in different directions.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            A tooltip can be added to any component you want just by sticking the <code>tooltip</code>{' '}
                            class to it. Use the <code>data-tooltip</code> attribute to specify the tooltip content.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="u-center">
                                    <div className="m-1">
                                        <button className="btn-primary tooltip" data-tooltip="Tooltip 1">
                                            Button 1
                                        </button>
                                    </div>
                                    <div className="m-1">
                                        <button className="btn-primary tooltip" data-tooltip="Tooltip 2">
                                            Button 2
                                        </button>
                                    </div>
                                    <div className="m-1">
                                        <button className="btn-primary tooltip" data-tooltip="Tooltip 3">
                                            Button 3
                                        </button>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <div className="u-center">
                                    <label className="tooltip tooltip-bottom" data-tooltip="Hey there!">
                                        <input type="radio" /> Hover over me
                                    </label>
                                    <label
                                        className="tooltip tooltip-bottom"
                                        data-tooltip="No more long captions for checkboxes"
                                    >
                                        <input type="checkbox" /> Tooltips are cool!
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="u-center">
    <div class="m-1">
        <button class="btn-primary tooltip" data-tooltip="Tooltip 1">Button 1</button>
    </div>
    <div class="m-1">
        <button class="btn-primary tooltip" data-tooltip="Tooltip 2">Button 2</button>
    </div>
    <div class="m-1">
        <button class="btn-primary tooltip" data-tooltip="Tooltip 3">Button 3</button>
    </div>
</div>
<div class="space"></div>
<div class="u-center">
    <label class="tooltip tooltip-bottom" data-tooltip="Hey there!">
        <input type="radio"> Hover over me</label>
    <label class="tooltip tooltip-bottom" data-tooltip="No more long captions for checkboxes">
        <input type="checkbox"> Tooltips are cool!</label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="directions">
                    <div className="content">
                        <Headline title="Directions" link="#directions" size="4" />
                        <div className="divider"></div>
                        <p>
                            Show your tooltips in different directions. The direction class follows a{' '}
                            <code>tooltip--[direction]</code> convention, where the direciton can be any of the ones
                            listed below.
                        </p>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="button-container">
                                    <button className="tooltip" data-tooltip="Tooltip Top (Default)">
                                        Tooltip Top
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--top-left" data-tooltip="Tooltip Top Left">
                                        Tooltip Top Left
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--top-right" data-tooltip="Tooltip Top Right">
                                        Tooltip Top Right
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--bottom" data-tooltip="Tooltip Bottom">
                                        Tooltip Bottom
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--bottom-left" data-tooltip="Tooltip Bottom Left">
                                        Tooltip Bottom Left
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button
                                        className="tooltip tooltip--bottom-right"
                                        data-tooltip="Tooltip Bottom Right"
                                    >
                                        Tooltip Bottom Right
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--left" data-tooltip="Tooltip Left">
                                        Tooltip Left
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button className="tooltip tooltip--right" data-tooltip="Tooltip Right">
                                        Tooltip Right
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <CodeBlock
                                    code={`<div class="button-container">
    <button class="tooltip" data-tooltip="Tooltip Top (Default)">Tooltip Top</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--top-left" data-tooltip="Tooltip Top Left">Tooltip Top Left</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--top-right" data-tooltip="Tooltip Top Right">Tooltip Top Right</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--bottom" data-tooltip="Tooltip Bottom">Tooltip Bottom</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--bottom-left" data-tooltip="Tooltip Bottom Left">Tooltip Bottom Left</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--bottom-right" data-tooltip="Tooltip Bottom Right">Tooltip Bottom Right</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--left" data-tooltip="Tooltip Left">Tooltip Left</button>
</div>
<div class="btn-container">
    <button class="tooltip tooltip--right" data-tooltip="Tooltip Right">Tooltip Right</button>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Toast', link: './toast' }}
                    nextLink={{ name: 'Trees', link: './trees' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TooltipsPage);
