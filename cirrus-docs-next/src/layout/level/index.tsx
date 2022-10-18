import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_LAYOUT } from '../../../config/sidebar';

export const LevelPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Level</title>
            </Head>
            <div>
                <section className="padtop" id="level">
                    <div className="content">
                        <Headline title="Level" link="#level" />
                        <div className="divider"></div>
                        <p>
                            The <code>level</code> class is a type of layout that usese flexbox with{' '}
                            <code>justify-content: center</code>.
                        </p>
                        <p>
                            The children of the <code>level</code> class are called <code>level-item</code>. Each{' '}
                            <code>level-item</code> can have the <code>level-content</code> class to allow for flex grow
                            to stretch the div.
                        </p>
                        <div
                            className="level"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)',
                                width: '100%',
                                borderRadius: '.3rem',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                className="level-item"
                                style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '1rem' }}
                            >
                                <div className="u-text-center">
                                    <p>
                                        .level-item
                                        <br />
                                        padding: 1rem
                                    </p>
                                </div>
                            </div>
                            <div
                                className="level-item"
                                style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '2rem 1rem' }}
                            >
                                <div className="u-text-center">
                                    <p>
                                        .level-item
                                        <br />
                                        padding: 1.5rem 1rem
                                    </p>
                                </div>
                            </div>
                            <div
                                className="level-item"
                                style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '1rem' }}
                            >
                                <div className="u-text-center">
                                    <p>
                                        .level-item
                                        <br />
                                        padding: 1rem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            Above is an example that uses the <code>level</code> class as the container and then the{' '}
                            <code>level-item</code> class to space out the children and keep the left and right divs in
                            the center (vertically speaking) to the parent div.
                        </p>
                        <div className="level">
                            <div className="level-left">
                                <h6 className="level-item uppercase">Brand</h6>
                                <a href="!#" className="level-item uppercase" style={{ padding: '0 1rem' }}>
                                    Item 1
                                </a>
                                <a href="!#" className="level-item uppercase" style={{ padding: '0 1rem' }}>
                                    Item 2
                                </a>
                            </div>
                            <div>
                                <p className="level-item">Center</p>
                            </div>
                            <div className="level-right">
                                <div className="form-group">
                                    <input type="search" className="form-group-input" placeholder="Search" />
                                    <button className="form-group-btn">Go</button>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <p>
                            You can also create your very own navbar with the level class. This differs from the header
                            class in the sense that divs have more padding with the same color along with a slight
                            adjustment to the divs.
                        </p>

                        <div
                            className="level"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)',
                                borderRadius: '.3rem',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                className="level-content level-item mr-1"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <p>
                                    .level-item
                                    <br />
                                    .level-content
                                </p>
                            </div>
                            <div
                                className="level-item level-content level-item"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <p>
                                    .level-content
                                    <br />
                                    .level-item
                                </p>
                            </div>
                            <div
                                className="level-content level-item ml-1"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <p>
                                    .level-item
                                    <br />
                                    .level-content
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                        <blockquote>Tl;dr: For navbars, check out the header menu documentation.</blockquote>
                        <div className="space space--lg"></div>

                        <h6>Fill Height</h6>

                        <p>
                            Looking at the previous examples, you may be wondering how to force the{' '}
                            <code>level-items</code> to fill the height of its parent container. This is easily done by
                            adding the <code>fill-height</code> class to the <code>level</code> div.
                        </p>
                        <div
                            className="level fill-height"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #fff1eb 0%, #ace0f9 100%)',
                                borderRadius: '.3rem',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                className="level-left level-content level-item mr-1"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <p>Totally</p>
                            </div>
                            <div
                                className="level-item level-content level-item"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <div>
                                    <p>Equal</p>
                                    <p>Equal</p>
                                    <p>Equal</p>
                                </div>
                            </div>
                            <div
                                className="level-content level-item ml-1"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <p>Heights</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_LAYOUT,
                        pageName: `Level`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(LevelPage);
