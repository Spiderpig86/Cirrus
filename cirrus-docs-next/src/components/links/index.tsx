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

export const LinksPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Links</title>
            </Head>
            <div>
                <section className="padtop" id="links">
                    <div className="content">
                        <Headline title="Links" link="#links" />
                        <div className="divider"></div>

                        <p>
                            Links themselves come with default styling within the framework. However, there are a lot of
                            classes that can be used to customize its hover behavior.
                        </p>

                        <a href="!#">I am just an ordinary link</a>

                        <p>
                            I am <a href="!#">inside</a> text.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="styles">
                    <div className="content">
                        <Headline title="Styles" link="#styles" size="4" />
                        <div className="divider"></div>
                        <div className="tag-container group-tags">
                            <div className="tag tag--dark">Extended</div>
                            <div className="tag tag--info">Style</div>
                        </div>

                        <p>
                            Links themselves come with default styling within the framework. However, there are a lot of
                            classes that can be used to customize its hover behavior.
                        </p>
                        <div className="space"></div>

                        <h6 className="uppercase">Types</h6>
                        <p className="title">Standard</p>
                        <p className="subtitle">A standard link with only a color transition.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#">Standard</a>
                            </div>
                            <div className="col-6">
                                <CodeBlock code={`<a href="!#">Standard</a>`} language="htmlbars" />
                            </div>
                        </div>

                        <p className="title">Underline</p>
                        <p className="subtitle">A link with underlined text.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="underline">
                                    Underline
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" className="underline">Underline</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Underline Animation (Left to Right)</p>
                        <p className="subtitle">Animated underlined link with a transition from left to right.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="u u-LR">
                                    Left to Right
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="u u-LR">Left to Right</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Underline Animation (Right to Left)</p>
                        <p className="subtitle">Animated underlined link with a transition from right to left.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="u u-RL">
                                    Right to Left
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="u u-RL">Right to Left</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Underline Animation (Center)</p>
                        <p className="subtitle">Animated underlined link with a transition from the center.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="u u-C">
                                    Center
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock code={`<a href="!#" classname="u u-C">Center</a>`} language="htmlbars" />
                            </div>
                        </div>

                        <p className="title">Outline Animation (Left to Right)</p>
                        <p className="subtitle">Animated outlined link with a transition from left to right.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="utb utb-LR">
                                    Left to Right
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-LR">Left to Right</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Outline Animation (Right to Left)</p>
                        <p className="subtitle">Animated outlined link with a transition from right to left.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="utb utb-RL">
                                    Right to Left
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-RL">Right to Left</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Outline Animation (Center)</p>
                        <p className="subtitle">Animated outlined link with a transition from the center.</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="utb utb-C">
                                    Center
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock code={`<a href="!#" classname="utb utb-C">Center</a>`} language="htmlbars" />
                            </div>
                        </div>

                        <p className="title">Opposite Transitions {'(L -> R / R -> L'})</p>
                        <p className="subtitle">
                            Animated outlined link with a transition with the top moving left to right and the bottom
                            right to left. Keep in mind that the class name refers to the direction of movement of the
                            top border.
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="utb utb-OLR">
                                    Look at me
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-OLR">Look at me</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Opposite Transitions {'(R -> L / L -> R)'}</p>
                        <p className="subtitle">
                            Animated outlined link with a transition with the top moving right to left and the bottom
                            left to right. Keep in mind that the class name refers to the direction of movement of the
                            top border.
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <a href="!#" className="utb utb-ORL">
                                    Crisscross
                                </a>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-ORL">Crisscross</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Square</p>
                        <p className="subtitle">Animated link with simultaneously drawn borders.</p>
                        <div className="row">
                            <div className="col-6">
                                <span className="usquare">
                                    <a href="!#" className="utb utb-OLR">
                                        I am a square
                                    </a>
                                </span>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-OLR">I am a square</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Delayed Square</p>
                        <p className="subtitle">Animated link with sequentially drawn borders.</p>
                        <div className="row">
                            <div className="col-6">
                                <span className="usquare delay">
                                    <a href="!#" className="utb utb-OLR">
                                        I am a square
                                    </a>
                                </span>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<a href="!#" classname="utb utb-OLR">I am a square</a>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Code', link: './code' }} nextLink={{ name: 'Lists', link: './lists' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(LinksPage);
