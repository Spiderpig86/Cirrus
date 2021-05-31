import React from 'react';
import Head from 'next/head';

import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const HeroPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Hero</title>
            </Head>
            <div>
                <section className="padtop" id="hero">
                    <div className="content">
                        <Headline title="Hero" link="#hero" />
                        <div className="divider"></div>
                        <p>
                            A <code>hero</code> is a layout used for creating splash screens. This is most commonly seen
                            in the home page of websites.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>
                        <p>
                            The structure of a <code>hero</code> is actually quite simple. It leaves a lot of
                            flexibility for whatever content you want to add in the middle of it.
                        </p>
                        <h6>Structure</h6>
                        <ul>
                            <li>
                                <code>hero</code> - main container of the layout.
                                <ul>
                                    <li>
                                        <code>hero-body</code> - body that holds your content.
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="hero bg-teal-500 p-2 u-flex u-flex-column">
                            <p className="p-1 white">hero (padding shown for clarity)</p>
                            <div className="hero-body bg-teal-700">
                                <p className="white">hero-body</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>
                        <p>
                            Below is a simple example of a <code>hero</code> with some text.
                        </p>
                    </div>

                    <div className="hero bg-indigo-100">
                        <div className="hero-body">
                            <div className="px-3 w-100">
                                <div className="u-flex u-justify-space-between u-items-center">
                                    <div>
                                        <h2 className="title" style={{
                                            letterSpacing: '-0.025rem'
                                        }}>I am the title.</h2>
                                        <h5 className="subtitle text-gray-500" style={{
                                            letterSpacing: '-0.025rem'
                                        }}>And I am the subtitle.</h5>
                                    </div>
                                        <div className="u-items-flex-end u-inline-flex">
                                            <button className="u-shadow btn-link">Button 1</button>
                                            <button className="u-shadow ml-1">Button 2</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="content">
                        <CodeBlock
                            code={`<div class="hero bg-indigo-600">
    <div class="hero-body">
        <div class="content">
            <h2 class="title white">I am the title.</h2>
            <h5 class="subtitle text-gray-300">And I am the subtitle.</h5></div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="fullscreen">
                    <div className="content">
                        <Headline title="Fullscreen" link="#fullscreen" size="4" />
                        <div className="divider"></div>
                        <p>
                            Apply the <code>fullscreen</code> class on the <code>hero</code> to make it stretch the full
                            length and width of the screen. It does not do that here since it is embedded inside the
                            docs page, so it will just fill its container.
                        </p>
                    </div>

                    <div className="hero fullscreen bg-yellow-200">
                        <div className="hero-body">
                            <div className="mx-auto">
                                <h1 className="title uppercase">Look!</h1>
                                <h3 className="subtitle text-gray-600" style={{
                                    letterSpacing: '-.025rem'
                                }}>I am tall!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>

                    <div className="content">
                        <CodeBlock
                            code={`<div class="hero fullscreen bg-yellow-200">
    <div class="hero-body">
        <div class="mx-auto">
            <h1 class="title uppercase">Look!</h1>
            <h3 class="subtitle text-gray-600">I am tall!</h3></div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="parallax">
                    <div className="content">
                        <Headline title="Parallax" link="#parallax" size="4" />
                        <div className="divider"></div>
                        <p>
                            Of course, you can always stick an image into the <code>hero</code> with the{' '}
                            <code>hero-img</code> class and add parallax with the <code>parallax-img</code> class.
                        </p>
                    </div>

                    <div className="u-relative">
                        <div
                            className="header unselectable header-animated header-clear u-absolute py-2"
                            style={{ zIndex: 1 }}
                        >
                            <div className="header-brand">
                                <div className="nav-item no-hover">
                                    <a href="!#">
                                        <h6 className="title white">Logo</h6>
                                    </a>
                                </div>
                                <div className="nav-item nav-btn" id="header-btn">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <div className="header-nav" id="header-menu">
                                <div className="nav-left">
                                    <div className="nav-item text-center">
                                        <a href="!#">
                                            <span className="icon white">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'github']} />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="nav-item text-center">
                                        <a href="!#">
                                            <span className="icon white">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'slack']} />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="nav-item text-center">
                                        <a href="!#">
                                            <span className="icon white">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fab', 'twitter']} />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="nav-item has-sub toggle-hover" id="dropdown">
                                        <a className="nav-dropdown-link white">Animated</a>
                                        <ul className="dropdown-menu dropdown-animated" role="menu">
                                            <li role="menu-item">
                                                <a href="!#">First Item</a>
                                            </li>
                                            <li role="menu-item">
                                                <a href="!#">Second Item</a>
                                            </li>
                                            <li role="menu-item">
                                                <a href="!#">Third Item</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-right">
                                    <div className="nav-item active">
                                        <a className="white" href="!#">
                                            Active
                                        </a>
                                    </div>
                                    <div className="nav-item">
                                        <a className="white" href="!#">
                                            Link 1
                                        </a>
                                    </div>
                                    <div className="nav-item has-sub" id="dropdown">
                                        <a className="nav-dropdown-link white">Click Me</a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li role="menu-item">
                                                <a href="!#">First Item</a>
                                            </li>
                                            <li role="menu-item">
                                                <a href="!#">Second Item</a>
                                            </li>
                                            <li role="menu-item">
                                                <a href="!#">Third Item</a>
                                            </li>
                                            <li className="dropdown-menu-divider" />
                                            <li role="menu-item">
                                                <a href="!#">Fourth Item</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                            <div className="hero-body">
                                <div className="content u-text-center">
                                    <h1 className="uppercase white title">Easily create beautiful splash screens</h1>
                                    <h3 className="uppercase white sub-title faded">
                                        Only 6 lines needed and no additional CSS
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>

                    <div className="content">
                        <CodeBlock
                            code={`<div id="splash-img" class="hero fullscreen hero-img parallax-img">
    <div class="hero-body">
        <div class="content u-text-center">
            <h1 class="uppercase white title">Easily create beautiful splash screens</h1>
            <h3 class="uppercase white sub-title faded">Only 6 lines needed and no additional CSS</h3></div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Height', link: './height' }}
                    nextLink={{ name: 'Level', link: './level' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(HeroPage);
