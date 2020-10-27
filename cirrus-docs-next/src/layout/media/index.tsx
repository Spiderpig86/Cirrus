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

export const MediaPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Media</title>
            </Head>
            <div>
                <section className="padtop" id="media">
                    <div className="content">
                        <Headline title="Media" link="#media" />
                        <div className="divider"></div>
                        <p>Embed figures, videos, and responsive images in your website.</p>
                    </div>
                </section>

                <section className="padtop" id="images">
                    <div className="content">
                        <Headline title="Images" link="#images" size="4" />
                        <div className="divider"></div>
                        <p>
                            Never worry about resizing images ever again. Add the <code>img-stretch</code> class to make
                            your graphic responsive to all screen sizes.
                        </p>

                        <div>
                            <img
                                className="img-stretch"
                                src="https://images.unsplash.com/photo-1429516387459-9891b7b96c78?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=574fe169c8e82622c91ccfafab46c444&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            ></img>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<img class="img-stretch" src="https://images.unsplash.com/photo-1429516387459-9891b7b96c78?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=574fe169c8e82622c91ccfafab46c444&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80">`}
                            language="htmlbars"
                            breakAll={true}
                        />
                        <div className="space large"></div>

                        <p>
                            Having the image cover a parent element or just being contained in it can be achived by
                            using the <code>img-cover</code> and <code>img-contain</code> classes respectively. These
                            are particularly helpful when the image or parent has a <b>fixed height</b> (below is an
                            example with a fixed height of 350px).
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <figure className="fig">
                                    <img
                                        className="img-cover"
                                        style={{ background: '#eee', height: '350px' }}
                                        src="https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f093285a418b6aadfc00bd4b8354ec02&auto=format&fit=crop&w=1050&q=80"
                                    />
                                    <figcaption className="fig-caption u-text-center">
                                        Image with <code>img-cover</code>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<figure class="fig"><img class="img-cover" src="https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=f093285a418b6aadfc00bd4b8354ec02&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" style="background: rgb(238, 238, 238); height: 350px;">
    <figcaption class="fig-caption u-text-center">Image with <code>img-cover</code></figcaption>
</figure>`}
                                    language="htmlbars"
                                    breakAll={true}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <figure className="fig">
                                    <img
                                        className="img-contain"
                                        style={{ background: '#eee', height: '350px' }}
                                        src="https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f093285a418b6aadfc00bd4b8354ec02&auto=format&fit=crop&w=1050&q=80"
                                    />
                                    <figcaption className="fig-caption u-text-center">
                                        Image with <code>img-contain</code>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<img class="img-contain" src="https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=f093285a418b6aadfc00bd4b8354ec02&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" style="background: rgb(238, 238, 238); height: 350px;">`}
                                    language="htmlbars"
                                    breakAll={true}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="figures">
                    <div className="content">
                        <Headline title="Figures" link="#figures" size="4" />
                        <div className="divider"></div>
                        <p>
                            Figures are simply containers for an images that would be positioned independently from the
                            main flow of the page.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <figure className="fig">
                                    <img
                                        className="img-stretch"
                                        src="https://images.unsplash.com/photo-1505027593521-2436e2dbe299?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7165b20d98851219a4e11f93ab5f5115&auto=format&fit=crop&w=701&q=80"
                                    />
                                    <figcaption className="fig-caption u-text-center">
                                        Yosemite Valley, United States
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <figure className="fig">
                                    <img src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4a086173e78551f89a3e22d03a8053f&auto=format&fit=crop&w=1050&q=80" />
                                </figure>
                                <figure className="fig">
                                    <img src="https://images.unsplash.com/photo-1505954137021-b6bf5a131a7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf4f58d000f1975f391ec2482626a48b&auto=format&fit=crop&w=1050&q=80" />
                                </figure>
                            </div>
                        </div>
                        <p>
                            To add a caption and separate the image from the rest of the page, surround it with a{' '}
                            <code>figure</code> tag with the <code>fig</code> class. This allows the image to span a
                            given area while leaving space underneath it for a simple caption.
                        </p>
                        <CodeBlock
                            code={`<figure class="fig">
    <img src="img/yosemite-falls.png" />
    <figcaption class="fig-caption u-text-center">
        Yosemite Valley, United States
    </figcaption>
</figure>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="videos">
                    <div className="content">
                        <Headline title="Videos" link="#videos" size="4" />
                        <div className="divider"></div>
                        <p>
                            As for videos, responsiveness can be achieved by adding the <code>media-stretch</code> class
                            to the parent div holding the video.
                        </p>
                        <div className="row media-stretch">
                            <iframe
                                width={560}
                                height={315}
                                src="https://www.youtube.com/embed/dmK5-3ZhXX8"
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        <p>
                            To change the aspect ratio of videos, Cirrus introduces modifiers <code>rat-4-3</code> and{' '}
                            <code>rat-1-1</code> to change aspect ratios with the <code>media-stretch</code> class.
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <div className="media-stretch rat-1-1">
                                    <iframe
                                        width={560}
                                        height={315}
                                        src="https://www.youtube.com/embed/wVB5eKNz_kI"
                                        frameBorder={0}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="u-text-center">1:1 ratio</p>
                            </div>
                            <div className="col-6">
                                <div className="media-stretch rat-4-3">
                                    <iframe
                                        width={560}
                                        height={315}
                                        src="https://www.youtube.com/embed/Scxs7L0vhZ4"
                                        frameBorder={0}
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="u-text-center">4:3 ratio</p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="media-stretch rat-1-1">
    <iframe width="560" height="315" src="./..." frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>`}
                            language="htmlbars"
                        />

                        <p>
                            To make a video fullscreen, add the <code>video-fullscreen</code> class to your{' '}
                            <code>video</code> element.
                        </p>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Hero', link: './hero' }} nextLink={{ name: 'Media', link: './media' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(MediaPage);
