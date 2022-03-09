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
import { PAGE_TITLE_PREFIX, VERSION } from '../../constants';
import { Preview } from './preview';
import { ECommerceCard } from '../index/components';

export const DocsPage: React.FC<any> = (props) => {
    // TODO: Move to constants
    const data = [
        {
            id: 'Cirrus',
            memory: 20.6,
            color: '#f03d4d',
        },
        {
            id: 'Bootstrap',
            memory: 22.4,
            color: '#7952b3',
        },
        {
            id: 'Bulma',
            memory: 26.9,
            color: '#01d1b2',
        },
        {
            id: 'Foundation',
            memory: 32.1,
            color: '#8fd3ff',
        },
        {
            id: 'Tailwind',
            memory: 74.3,
            color: '#9c27b0',
        },
        {
            id: 'Semantic UI',
            memory: 79.6,
            color: '#35bdb2',
        },
    ];

    useEffect(() => {}, []);

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Documentation</title>
            </Head>
            <div>
                <section id="introduction" className="padtop">
                    <div className="content">
                        <Headline title="Introduction" link="#introduction" />
                        <p className="lead">Hit the ground running with Cirrus at your own pace.</p>
                        <div className="divider"></div>

                        <div className="grid grid-cols-1 u-gap-1 grid-cols-3-xl">
                            <div
                                className="u-relative u-round-sm p-2 u-shadow-lg bg-orange-500 u-overflow-hidden"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to bottom right,rgba(208,56,1,1),rgba(227,160,8,1))',
                                }}
                            >
                                <h6 className="text-white font-alt">Dive into the docs.</h6>
                                <p className="text-white u-color-opacity-80">
                                    Learn how to get started with Cirrus one step at a time.
                                </p>
                                <img
                                    className="u-absolute u-left-0 u-opacity-50"
                                    src="img/docs-placeholder.png"
                                    style={{
                                        objectFit: 'cover',
                                        mixBlendMode: 'soft-light',
                                    }}
                                ></img>
                                <div className="space space--xl"></div>
                                <Link href="/getting-started/setup">
                                    <button className="btn-dark u-relative u-bg-opacity-80 mt-4">Start reading</button>
                                </Link>
                            </div>
                            <div
                                className="u-relative u-overflow-hidden u-round-sm p-2 u-shadow-lg bg-pink-600"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to bottom right,rgba(214,31,105,1),rgba(240,82,82,1))',
                                }}
                            >
                                <h6 className="text-white font-alt">Try it on the browser.</h6>
                                <p className="text-white u-color-opacity-80">
                                    Try out the framework in the playground without any setup or installation.
                                </p>
                                <img
                                    className="u-absolute u-left-0 u-opacity-50"
                                    src="img/docs-placeholder2.png"
                                    style={{
                                        objectFit: 'cover',
                                        mixBlendMode: 'hard-light',
                                    }}
                                ></img>
                                <div className="space space--xl"></div>
                                <Link href="/playground">
                                    <button className="btn-dark u-relative u-bg-opacity-80">Start coding</button>
                                </Link>
                            </div>
                            <div
                                className="u-round-sm p-2 u-shadow-lg bg-purple-600 u-opacity-50"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(to bottom right,rgba(104,117,245,1),rgba(126,58,242,1))',
                                }}
                            >
                                <h6 className="text-white font-alt">Grab some components.</h6>
                                <p className="text-white u-color-opacity-80">
                                    Build your project with beautifully pre-built components now.
                                </p>
                                <div className="space space--xl"></div>
                                <Link href="">
                                    <button disabled className="btn-dark u-bg-opacity-40 mt-4">
                                        Coming soon
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Preview /> */}

                <section id="what" className="padtop">
                    <div className="content">
                        <Headline title="What is Cirrus?" link="#what" size="3" />
                        <div className="divider"></div>

                        <p>
                            Introducing <b>Cirrus</b>, a modular, responsive, and component centric SCSS framework aimed
                            at bringing not only beautiful, hassle-free styling, but also a better developer experience.
                            Almost all generated styles can be modified via its config style so you can mold the
                            framework to whatever you want.
                        </p>

                        <ul>
                            <li>🎁 Construct your web app or website by composing beautifully designed components.</li>
                            <li>🛠 Shipped with utility classes to design with scale.</li>
                            <li>📱 Fully responsive by design.</li>
                            <li>🎨 Almost fully customizable styles and classes.</li>
                            <li>⚡ The only file you need is the minified CSS file from a CDN.</li>
                            <li>🌌 Fully open source.</li>
                        </ul>

                        <div className="u-inline-flex u-flex-wrap u-gap-1">
                            <img
                                src={`https://img.shields.io/badge/cirrus-${VERSION}-blue.svg?style=flat-square`}
                                alt="Version"
                            />
                            <img
                                src="https://img.shields.io/github/license/Spiderpig86/Cirrus.svg?style=flat-square"
                                alt="MIT License"
                            />
                            <img
                                src="https://img.shields.io/npm/dm/cirrus-ui.svg?style=flat-square"
                                alt="NPM Downloads"
                            />
                            <img
                                src="https://data.jsdelivr.com/v1/package/npm/cirrus-ui/badge"
                                alt="JsDelivr Downloads"
                            />
                        </div>
                    </div>
                </section>

                <section id="why" className="padtop">
                    <div className="content">
                        <Headline title="Why Cirrus?" link="#lightweight" size="3" />
                        <div className="divider"></div>
                        <p>
                            Here are a couple of reasons why <b>you should</b> consider Cirrus for your next project.
                        </p>
                        <div className="space"></div>

                        <section id="prototype" className="">
                            <Headline title="1. Built for Rapid Prototyping" link="#prototype" size="5" />
                            <div className="divider"></div>
                            <p>
                                Cirrus was built to remove all the overhead associated with designing any app. The
                                framework comes with many different classes that help you quickly construct beautiful
                                looking components quickly without having to come up with your own design.
                            </p>

                            <p>
                                The example below is constructed using an{' '}
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
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fab', 'twitter']}
                                                />
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
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fab', 'instagram']}
                                                />
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
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'envelope']}
                                                />
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
                        </section>

                        <section id="utilities" className="padtop">
                            <Headline title="2. Faster Iteration with Utilities" link="#utilities" size="5" />
                            <div className="divider"></div>
                            <p>
                                Starting with a full suite of prebuilt components doesn't mean sacrificing control over
                                your design. Cirrus comes with a variety of utility classes to make your idea a reality.
                            </p>
                            <p>These utility classes help with:</p>

                            <ul>
                                <li>
                                    Designing components in a bottom up fashion{' '}
                                    <b>writing little to no additional CSS</b>.
                                </li>
                                <li>
                                    Sticking to a consistent design system <b>(which you can customize yourself!)</b>.
                                </li>
                                <li>
                                    <b>Reducing overhead</b> of class naming, organization, and structuring within your
                                    project.
                                </li>
                                <li>Tweaking existing components to your liking.</li>
                            </ul>

                            <div className="u-center p-8 bg-gray-100 u-shadow-sm">
                                <ECommerceCard />
                            </div>
                            <div className="space"></div>

                            <CodeBlock
                                code={`<div class="bg-white u-round-sm u-shadow-lg u-overflow-hidden">
  <div class="u-flex">
    <div class="p-3">
      <div class="u-flex u-justify-space-between u-gap-2 u-items-center">
        <div class="u-text-left">
          <p class="m-0 lead font-bold text-black tracking-tight">SuperRepo Go Volt</p>
          <div class="tag bg-green-200 text-green-600 text-xs font-bold uppercase">In-Stock</div>
        </div>
        <p class="lead mb-0 font-bold text-black">$90</p>
      </div>
      <div class="u-flex u-gap-1 mt-2">
        <a href="#" class="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">7</a>
        <a href="#" class="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">8</a>
        <a href="#" class="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">9</a>
        <a href="#" class="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">10</a>
        <a href="#" class="size bg-black text-white text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">11</a>
        <a href="#" class="size bg-gray-100 text-gray-800 text-xs u-round-sm font-bold u-flex u-items-center u-justify-center" style="height: 2rem; width: 2rem;">12</a>
      </div>
      <div class="divider"></div>
      <div class="u-flex u-gap-1">
        <button class="btn-black btn--sm mb-0 u-shadow-sm">Buy Now</button>
        <button class="bg-white btn--sm mb-0">Add to Cart</button>
        <button class="bg-white btn--sm mb-0">♥</button>
      </div>
      <p class="mb-0 mt-2 text-sm tracking-tight text-gray-600">Free shipping on orders over $25.</p>
    </div>
    <div>
      <img class="h-100p img-cover" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80">
    </div>
  </div>
</div>`}
                                language="htmlbars"
                            />
                        </section>

                        <section id="lightweight" className="padtop">
                            <Headline title="3. Lightweight" link="#lightweight" size="5" />
                            <div className="divider"></div>
                            <p>
                                Cirrus comes with lots of functionality in a small package which only consists of a
                                single minified CSS file. <b>No extra JS libraries required</b>. Coming in at{' '}
                                <b>20.6 KB with Brotli compression</b>, page loads are fast and data usage is minimal.
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
                            <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Framework</th>
                                        <th>Minified</th>
                                        <th>Gzip</th>
                                        <th>Brotli</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Semantic UI</td>
                                        <td>628.5kb</td>
                                        <td>102.3kb</td>
                                        <td className="bg-green-100">79.6kb</td>
                                    </tr>
                                    <tr>
                                        <td>Tailwind</td>
                                        <td>2927.5kb</td>
                                        <td>297.4kb</td>
                                        <td className="bg-green-200">74.3kb</td>
                                    </tr>
                                    <tr>
                                        <td>Foundation</td>
                                        <td>182.0kb</td>
                                        <td>38.5kb</td>
                                        <td className="bg-green-300">32.1kb</td>
                                    </tr>
                                    <tr>
                                        <td>Bulma</td>
                                        <td>206.6kb</td>
                                        <td>27.5kb</td>
                                        <td className="bg-green-400">26.9kb</td>
                                    </tr>
                                    <tr>
                                        <td>Bootstrap</td>
                                        <td>155.6kb</td>
                                        <td>23kb</td>
                                        <td className="bg-green-500">22.4kb</td>
                                    </tr>
                                    <tr className="">
                                        <td>
                                            <b>Cirrus</b>
                                        </td>
                                        <td>
                                            <b>198kb</b>
                                        </td>
                                        <td>
                                            <b>30.4kb</b>
                                        </td>
                                        <td className="bg-green-600 text-white">
                                            <b>20.6kb</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section id="sass" className="padtop">
                            <Headline title="4. Sass First" link="#sass" size="5" />
                            <div className="divider"></div>

                            <p>
                                Cirrus is written in Sass, meaning you can leverage the power of Sass right inside your
                                project out of the box. Importing Cirrus into your project is quite simple.
                            </p>
                            <p>
                                Once imported, you can use Cirrus's mixins, variables, and functions right in your
                                project.
                            </p>
                            <CodeBlock
                                code={`// main.scss
@use "node_modules/cirrus-ui/cirrus-core" as *; // Core build OR
@use "node_modules/cirrus-ui/src/cirrus-ext" as *; // Extended build

@screen-above($md) {
    .my-class {
        background-color: rgba(#{hex-to-rgb(fill('blue', '600'))}, .25);
    }
}`}
                                language="scss"
                            />
                        </section>

                        <section className="padtop" id="customize">
                            <Headline title="5. Customize it for You" link="#customize" size="5" />
                            <div className="divider"></div>

                            <p>
                                Cirrus is a framework that is designed to be customized. At its core is a powerful
                                config object that dictates which classes should be generated. This mechanism makes it
                                easy to...
                            </p>

                            <p>...add additional styles.</p>
                            <CodeBlock
                                code={`// main.scss
@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        extend: (
            opacity: (
                25: .25,
                75: .75,
            ),
            round: (
                50: 50%,
            ),
        ),
    )
)`}
                                language="scss"
                            />

                            <p>...turn off features.</p>
                            <CodeBlock
                                code={`// main.scss
@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            AVATAR,
            MODAL,
            PAGINATION,

            CLEARFIX,
            OPACITY,
        )
    )
)`}
                                language="scss"
                            />

                            <p>...toggle viewport variants for classes.</p>
                            <CodeBlock
                                code={`// main.scss
@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        viewports: (
            FLOAT: false,
            GAP: true,
        )
    )
)`}
                                language="scss"
                            />

                            <p>...overwrite defaults.</p>
                            <CodeBlock
                                code={`// main.scss
// Note that I am not using the extend keyword
@use "node_modules/cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        letter-spacing: (
            tightest: -.3rem,
            tighter: -.2rem,
            tight: -.1rem,
        )
    )
)`}
                                language="scss"
                            />

                            <p>And a lot more.</p>

                            <p>
                                Find out how in the{' '}
                                <Link href="/getting-started/developing">
                                    <a className="u u-LR">developing</a>
                                </Link>{' '}
                                section.
                            </p>
                        </section>
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

export default withLayout(<DefaultLayout />)(DocsPage);
