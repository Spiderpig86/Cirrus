import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import { ResponsiveBar } from '@nivo/bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../layouts/components/toc';
import { Headline } from '../../layouts/components/headline';
import { CodeBlock } from '../../layouts/components/codeblock';
import { DefaultLayout } from '../../layouts/default';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../constants';

export const WhyPage: React.FC<any> = (props) => {
    // TODO: Move to constants
    const data = [
        {
            id: 'Cirrus',
            memory: 17.6,
            color: '#f03d4d',
        },
        {
            id: 'Bootstrap',
            memory: 23.5,
            color: '#7952b3',
        },
        {
            id: 'FlatUI',
            memory: 24.1,
            color: '#8fd3ff',
        },
        {
            id: 'Bulma',
            memory: 26.0,
            color: '#01d1b2',
        },
        {
            id: 'Material',
            memory: 32.5,
            color: '#9c27b0',
        },
        {
            id: 'Semantic UI',
            memory: 101,
            color: '#35bdb2',
        },
    ];

    useEffect(() => {}, []);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Why</title>
            </Head>
            <div>
                <section id="introduction" className="padtop">
                    <div className="content">
                        <Headline title="Introduction" link="#introduction" />
                        <div className="divider"></div>
                        <p>
                            Introducing <b>Cirrus</b>, a modular, responsive, and component centric SCSS framework aimed
                            at bringing not only beautiful, hassle-free styling, but also a better developer experience.
                        </p>

                        <ul>
                            <li>
                                🎁 Construct your web app or website using by composing beautifully designed components.
                            </li>
                            <li>📱 Fully responsive by design.</li>
                            <li>🎨 Fully customizable themeing.</li>
                            <li>⚡ The only file you need is the minified CSS file from a CDN.</li>
                            <li>🌌 Fully open source.</li>
                        </ul>

                        <img
                            className="ml-1"
                            src="https://img.shields.io/badge/cirrus-0.6.1-blue.svg?style=flat-square"
                            alt="Version"
                        />
                        <img
                            className="ml-1"
                            src="https://img.shields.io/github/license/Spiderpig86/Cirrus.svg?style=flat-square"
                            alt="MIT License"
                        />
                        <img
                            className="ml-1"
                            src="https://img.shields.io/npm/dm/cirrus-ui.svg?style=flat-square"
                            alt="NPM Downloads"
                        />
                        <img
                            className="ml-1"
                            src="https://data.jsdelivr.com/v1/package/npm/cirrus-ui/badge"
                            alt="JsDelivr Downloads"
                        />
                    </div>
                </section>

                <section id="lightweight" className="padtop">
                    <div className="content">
                        <Headline title="Lightweight" link="#lightweight" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with lots of functionality in a small package which only consists of a single
                            minified CSS file. <b>No extra JS libraries required</b>. Coming in at{' '}
                            <b>17.6 KB with Brotli compression</b>, page loads are fast and animations are fluid.
                        </p>

                        {/* TODO MOVE TO NEW FILE */}
                        <div
                            className="mx-auto"
                            style={{
                                height: '400px',
                                maxWidth: '600px',
                            }}
                        >
                            <ResponsiveBar
                                data={data}
                                keys={['memory']}
                                indexBy="id"
                                margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
                                padding={0.3}
                                groupMode="grouped"
                                layout="vertical"
                                colors={(data) => data.data.color}
                                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Framework',
                                    legendPosition: 'middle',
                                    legendOffset: 32,
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'KB',
                                    legendPosition: 'middle',
                                    legendOffset: -50,
                                }}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor="#fff"
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                            />
                        </div>
                    </div>
                </section>

                <section id="modular" className="padtop">
                    <div className="content">
                        <Headline title="Modular" link="#modular" />
                        <div className="divider"></div>
                        <p>
                            As of <b>0.6.0</b>, Cirrus was re-engineered from the ground up to use Sass. This means you
                            can just import the modules that you need in your Sass files.
                        </p>

                        <CodeBlock
                            code={`@import '../node_modules/cirrus-ui/src/core/button.scss';

.my-button {
    @extend .btn;
}`}
                            language="scss"
                        />

                        <p className="mt-3">
                            Each file contains classes that only correspond to a component or functionality. For
                            instance, all the tag related classes can be found inside <code>tag.scss</code>. This
                            modular design makes it easier for anyone who wants to make modifications to the framework
                            and rebuild their own version of it.
                        </p>

                        <p>
                            In addition to being able to import the features you want, Cirrus comes in two flavors,{' '}
                            <b>core</b> and <b>extended</b>, that contain the main features and the full framework
                            respectively. More about that{' '}
                            <Link href="/getting-started/developing">
                                <a className="u u-LR">here</a>
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                <section id="prototype" className="padtop">
                    <div className="content">
                        <Headline title="Rapid Prototyping" link="#why" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with many different classes that help you quickly construct beautiful looking
                            components quickly without having to come up with your own design.
                        </p>

                        <p>
                            The example is constructed using an{' '}
                            <Link href="/components/avatar">
                                <a className="u u-LR">avatar</a>
                            </Link>
                            ,{' '}
                            <Link href="/components/tabs">
                                <a className="u u-LR">tabs</a>
                            </Link>
                            , and{' '}
                            <Link href="/components/tiles">
                                <a className="u u-LR">tiles</a>
                            </Link>
                            .
                        </p>

                        <div className="space"></div>
                        <div className="frame mb-3" style={{ height: '30rem' }}>
                            <div className="frame__header">
                                <div className="avatar">
                                    <img src="https://i.imgur.com/sbKJVxr.png" />
                                </div>
                                <p className="u-text-center frame__title">John Doe</p>
                                <p className="u-text-center frame__subtitle">Former youngest person on Earth</p>
                                <div className="tab-container tabs-fill">
                                    <ul>
                                        <li className="tab-item">
                                            <a>Favorites</a>
                                        </li>
                                        <li className="tab-item selected">
                                            <a>Profile</a>
                                        </li>
                                        <li className="tab-item">
                                            <a>Pins</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="frame__body">
                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fab', 'twitter']} />
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Twitter</p>
                                        <p className="tile__subtitle">@johndoe</p>
                                    </div>
                                    <div className="tile__buttons">
                                        <a href="!#" className="link-btn">
                                            <span className="icon">
                                                <i className="fa fa-wrapper fa-pencil small" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fab', 'instagram']} />
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Instagram</p>
                                        <p className="tile__subtitle">@johndoe</p>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'envelope']} />
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Email</p>
                                        <p className="tile__subtitle">johndoe@github.com</p>
                                    </div>
                                </div>

                                <div className="tile level p-1">
                                    <div className="tile-avatar">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'map-marker']}
                                            />
                                        </span>
                                    </div>
                                    <div className="tile__container">
                                        <p className="tile__title">Location</p>
                                        <p className="tile__subtitle">Toronto, Ontario</p>
                                    </div>
                                </div>
                            </div>
                            <div className="frame__footer"></div>
                        </div>
                        <CodeBlock
                            code={`<div class="frame" style="height: 30rem;">
    <div class="frame__header">
        <div class="avatar"><img src="https://i.imgur.com/sbKJVxr.png"/></div>
        <p class="u-text-center frame__title">John Doe</p>
        <p class="u-text-center frame__subtitle">Former youngest person on Earth</p>
        <div class="tab-container tabs-fill">
            <ul>
                <li class="tab-item"><a>Favorites</a></li>
                <li class="tab-item selected"><a>Profile</a></li>
                <li class="tab-item"><a>Pins</a></li>
            </ul>
        </div>
    </div>
    <div class="frame__body">
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-twitter" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Twitter</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
            <div class="tile__buttons"><a href="!#" class="link-btn"><span class="icon"><i class="fa fa-wrapper fa-pencil small" aria-hidden="true"></i></span></a></div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-instagram" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Instagram</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-envelope-o" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Email</p>
                <p class="tile__subtitle">johndoe@github.com</p>
            </div>
        </div>
        <div class="tile level p-1">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-map-marker" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Location</p>
                <p class="tile__subtitle">Toronto, Ontario</p>
            </div>
        </div>
    </div>
    <div class="frame__footer"></div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section id="control" className="padtop">
                    <div className="content">
                        <Headline title="Granular Control" link="#why" />
                        <div className="divider"></div>
                        <p>Cirrus now ships with many utility classes to get the exact look you want.</p>

                        <p>
                            Let's say we want to move the overlayed text on top of our image in the center and move the
                            image description to the right of the image only for larger screen sizes. The contents must
                            be vertically aligned.
                        </p>

                        <p>
                            All of these requirements can be done just with utility classes{' '}
                            <b>without any additional CSS.</b>
                        </p>

                        <div className="space"></div>

                        <p className="font-bold">Before</p>
                        <div>
                            <div>
                                <div>
                                    <p>Overlayed text.</p>
                                    <img
                                        src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"
                                        alt="cloud"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed
                                    nisi lacus.
                                </p>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div>
    <div>
        <div>
            <p>Overlayed text.</p>
            <img src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80" alt="cloud" />
        </div>
    </div>
    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus.</p></div>
</div>
`}
                            language="htmlbars"
                        />

                        <div className="space"></div>

                        <p className="font-bold">After</p>
                        <div className="row u-items-center">
                            <div className="col-lg-6">
                                <div className="u-relative u-center">
                                    <p className="u-absolute white font-bold u-center-alt lead">
                                        Overlayed text.
                                    </p>
                                    <img
                                        src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"
                                        alt="cloud"
                                        className="u-round"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="row u-items-center">
    <div class="col-lg-6">
        <div class="u-relative u-center">
            <p class="u-absolute white font-bold u-center-alt lead">Overlayed text.</p>
            <img src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80" alt="cloud" class="u-round" />
        </div>
    </div>
    <div class="col-lg-6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
</div>
`}
                            language="htmlbars"
                        />

                        <div className="space"></div>
                    </div>
                </section>

                <section className="padtop" id="customize">
                    <div className="content">
                        <Headline title="Customize Your Build" link="#customize" />
                        <div className="divider"></div>

                        <p>
                            Starting with 0.6.0, Cirrus can be more easily customized by editing just a few
                            configuration files within the framework. <code>_size.scss</code> stores all configuration
                            for font sizes, spacing, and breakpoints. <code>theme.scss</code> is the central place to
                            modify any color that is used within the framework.
                        </p>

                        <CodeBlock
                            code={`/* Spacing */
$spacing-system: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32;
$space-size: 0.5rem;

/* Fonts */
$font-size-xs: .7rem;
$font-size-s: .85rem;
$font-size-m: 1rem;
$font-size-l: 1.35rem;
$font-size-xl: 1.75rem;

/* Grid Count */
$grid-columns: 12;

/* Grid Percents */
$grid-width: 1 / $grid-columns;

/* Tab Sizes */
$tab-sizes: ('xsmall': 0.6rem, 'small': 0.75rem, 'large': 1.25rem, 'xlarge': 1.5rem);

/* ... */`}
                            language="scss"
                        />
                        <p>
                            Find out how in the{' '}
                            <Link href="/getting-started/developing">
                                <a className="u u-LR">developing</a>
                            </Link>{' '}
                            section.
                        </p>
                    </div>
                </section>

                <section className="padtop u-text-center">
                    <div className="content">
                        <h1>Ready to give it a try?</h1>
                        <div className="space"></div>

                        <div className="row u-items-center">
                            <div className="col-lg-4">
                                <p className="lead">
                                    Learn how to setup Cirrus.
                                </p>
                                <Link href="/getting-started/setup">
                                    <button className="btn-info">
                                        Setup
                                        <span className="icon">
                                            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <p className="lead">Learn how to customize Cirrus.</p>
                                <Link href="/getting-started/developing">
                                    <button className="btn-link">
                                        Developing
                                        <span className="icon">
                                            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <p className="lead">Try out Cirrus without installing.</p>
                                <Link href="/playground">
                                    <button className="btn-primary">
                                        Playground
                                        <span className="icon">
                                            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <Link href="../playground">
                                    <a className="u-block">
                                        <p className="pagination-item-subtitle">Next</p>
                                        <h5 className="font-alt font-light m-0">Playground</h5>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(WhyPage);
