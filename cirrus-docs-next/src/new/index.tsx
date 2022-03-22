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
import { ECommerceCard } from '../index/components';
import { InternalLink } from '../../layouts/components/link';
import { v2 } from '../fundamentals/colors/color-config';

export const NewPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} What's New?</title>
            </Head>
            <div>
                <section id="whats-new" className="padtop">
                    <div className="content">
                        <Headline title="What's New in 0.7.0?" link="#whats-new" />
                        <div className="divider"></div>

                        <p>
                            Like Cirrus 0.6.0, 0.7.0 was another large undertaking that brought a large refactor of the
                            entire codebase to prioritize configurability and enhance overall developer experience. This
                            rewrite represents the first step in how Cirrus is repositioning as a
                            component-and-utility-centric SCSS framework.
                        </p>

                        <p>
                            There are a ton of things that were added in this new update, but below are a few big ones I
                            want to highlight. For a full list, please visit the{' '}
                            <InternalLink url="/getting-started/release-notes">release notes</InternalLink> to learn
                            more.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="new-way">
                    <div className="content">
                        <Headline size="4" title="A new way to use Cirrus" link="#new-way" />
                        <div className="divider"></div>
                        <p>
                            With previous versions, the only ways to use Cirrus was to either{' '}
                            <strong>linking the CDN link</strong> at the top of your page or{' '}
                            <strong>
                                importing <code>cirrus-ui</code>
                            </strong>{' '}
                            into your Node project.
                        </p>
                        <p>
                            This is fine, but it lacked any sort of customization. The only way to change Cirrus was to
                            clone the project and build your own version locally. Dart Sass has given me immense
                            opportunity to improve Cirrus&#39;s usability and fix technical debt and hacks. One of the
                            things it also enabled was directly importing Cirrus into your Sass/Scss project directly.
                        </p>
                        <p>
                            <strong>
                                Not only can you import different pre-configured versions of Cirrus, but also take
                                advantage of all the functions, mixins, constants, etc. that Cirrus comes built with.
                            </strong>
                        </p>

                        <CodeBlock
                            code={`// main.scss
@use "cirrus-ui/cirrus-core" as *; // Core build OR
@use "cirrus-ui/src/cirrus-ext" as *; // Extended build

@screen-above($md) {
    .my-class {
        background-color: rgba(#{hex-to-rgb(fill('blue', '600'))}, .25);
    }
}`}
                            language="scss"
                        />

                        <p>
                            No more having to build Cirrus separately and then copying and pasting the generated styles
                            to your project. Read more on this{' '}
                            <InternalLink url="/getting-started/configuration">here</InternalLink>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="configurability">
                    <div className="content">
                        <Headline size="4" title="Focus on configurability" link="#configurability" />
                        <div className="divider"></div>
                        <p>
                            One of the things this rewrite aimed to accomplish was configurability. In the past, CSS
                            frameworks were just things we plop into our project and we either accepted styles it gave
                            us or we spent countless hours overriding them to fit our needs. Why should we continue to
                            subject ourselves to that amount of torture?
                        </p>
                        <p>
                            0.7.0 marks a big step in dynamic class generation. Whether you are building Cirrus locally
                            or you&#39;re importing Cirrus directly into your Sass files, you can take advantage of
                            defining a configuration object in both scenarios when you import the framework. Use the
                            configuration object to specify viewports for classes, extend existing component and utility
                            styles, toggle features, and more.
                        </p>

                        <CodeBlock
                            code={`@use "cirrus-ui/src/cirrus-ext" as * with (
    $config: (
        excludes: (
            ABSOLUTES,
        ),
        opacity: null, // Disable default opacity classes
        extend: (
            // Add your own
            opacity: (
                25: .25,
                50: .5,
                75: .75,
            )
        )
    ),
);`}
                            language="scss"
                        />
                        <p>
                            Currently most utility classes and components can be customized through here in this
                            release, but I hope to extend this capability a lot more in future updates. Read more on
                            this <InternalLink url="/getting-started/configuration">here</InternalLink>.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="colors">
                    <div className="content">
                        <Headline title="Revamped colors" size="4" link="#colors" />
                        <div className="divider"></div>
                        <p>
                            Default colors have been tuned a bit for increased vibrancy and range. Of course, these
                            colors can be customized via the configuration object as well.
                        </p>

                        {['pink', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'gray'].map(
                            (color) => {
                                return (
                                    <div className="u-flex u-justify-center u-gap-1 mb-1" key={color}>
                                        {v2.get(color).map((className, index) => (
                                             <div
                                                key={color + className.class + index}
                                                className={`${className.class} p-3 u-round-xs p-4-xl`}
                                            />
                                        ))}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </section>

                <section className="padtop" id="utils">
                    <div className="content">
                        <Headline title="Utils, utils, and more utils" size="4" link="utils" />
                        <div className="divider"></div>
                        <p>
                            Utility classes within Cirrus have grown to be quite popular. This update adds utility
                            classes for:
                        </p>
                        <ul>
                            <li>
                                <InternalLink url="/fonts/letter-spacing">Letter Spacing</InternalLink> — utilities to
                                control letter spacing of an element.
                            </li>
                            <li>
                                <InternalLink url="/utils/flexbox#flex-wraps">Flex Wrap</InternalLink> — utiltiies to
                                control how flex items wrap.
                            </li>
                            <li>
                                <InternalLink url="/utils/flexbox#flex-grow">Flex Grow</InternalLink> — utilties to
                                control how flex items grow.
                            </li>
                            <li>
                                <InternalLink url="/utils/flexbox#flex-shrink">Flex Shrink</InternalLink> — utilities to
                                control how flex items shrink.
                            </li>
                            <li>
                                <InternalLink url="/fundamentals/colors#changing-opacity">Color Opacity</InternalLink> —
                                utilities to control color opacity (background and text/border).
                            </li>
                            <li>
                                <InternalLink url="/utils/gap">Flex/Grid Gap</InternalLink> — utilities to control
                                gutters between grid and flexbox items.
                            </li>
                            <li>
                                <InternalLink url="/fonts/size">Font Size</InternalLink> — utilities for font sizes.
                            </li>
                            <li>
                                <InternalLink url="/utils/box-shadow">Box Shadow</InternalLink> — utilities to add box
                                shadows to an element.
                            </li>
                            <li>
                                <InternalLink url="/utils/border-radius">Border Radius</InternalLink> — utilities to
                                control border radius of an element.
                            </li>
                            <li>
                                <InternalLink url="/layout/min-height">Min Height</InternalLink> — utilities to set min
                                height of an element.
                            </li>
                            <li>
                                <InternalLink url="/layout/max-height">Max Height</InternalLink> — utilities to set max
                                height of an element.
                            </li>
                            <li>
                                <InternalLink url="/layout/min-width">Min Width</InternalLink> — utilities to set min
                                width of an element.
                            </li>
                            <li>
                                <InternalLink url="/layout/max-width">Max Width</InternalLink> — utilities to set max
                                width of an element.
                            </li>
                            <li>
                                <InternalLink url="/fonts/font-weights">Font Weights</InternalLink> — utiltiies to
                                control font weight of an element.
                            </li>
                            <li>
                                <InternalLink url="/utils/opacity">Opacity</InternalLink> — utilities to control the
                                opacity of an element.
                            </li>
                            <li>
                                <InternalLink url="/utils/zindex">Z-Index</InternalLink> — utilities to control the
                                z-index of an element.
                            </li>
                        </ul>
                        <p>
                            A lot of classes have also seen the introduction of viewport variants. Those can be found in
                            the class specific documentation in the docs page.
                        </p>

                        <CodeBlock
                            code={`<div class="u-z-50 ...">50</div>
<div class="u-z-40 ...">40</div>
<div class="u-z-30 ...">30</div>
<div class="u-z-20 ...">20</div>
<div class="u-z-10 ...">10</div>
<div class="u-z-1 ...">1</div>
<div class="u-z-0 ...">0</div>
<div class="u-z-n1 ...">-1</div>
<div class="u-z-auto ...">auto</div>`}
                            language="scss"
                        />
                    </div>
                </section>

                <section className="padtop" id="components">
                    <div className="content">
                        <Headline title="Components" size="4" link="components" />
                        <div className="divider"></div>

                        <p>
                            This update wasn't as focused on introducing new components, but it was not forgotten. Some
                            of the new components styles are:
                        </p>
                        <ul>
                            <li>
                                <InternalLink url="/elements/breadcrumbs">Breadcrumbs</InternalLink> — a component used
                                to create a sense of hierarchy when navigating a website.
                            </li>
                            <li>
                                <InternalLink url="/elements/progress">Progress</InternalLink> — Cirrus comes with
                                styling right out of the box for the progress HTML element.
                            </li>
                            <li>
                                <InternalLink url="/animations">New Animations</InternalLink> — new animation classes
                                include pulse (skeleton loaders) and ping (notification).
                            </li>
                        </ul>

                        <div className="space space--lg"></div>

                        <div className="card px-4 py-3">
                            <div className="u-flex u-gap-3 animated pulse">
                                <div>
                                    <div className="bg-gray-300 u-round-full p-4"></div>
                                </div>
                                <div className="u-flex-grow-1">
                                    <div className="line bg-gray-300 w-100p u-round-xs"></div>
                                    <div className="space"></div>
                                    <div className="line bg-gray-300 w-100p u-round-xs"></div>
                                    <div className="grid u-gap-1 mb-0">
                                        <div className="line bg-gray-300 grid-c-3 u-round-xs"></div>
                                        <div className="line bg-gray-300 grid-c-9 u-round-xs"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="u-relative u-inline-flex">
                            <div className="u-round-xs u-shadow-lg p-3 bg-blue-100">
                                <div className="u-flex u-items-center u-gap-2">
                                    <div>
                                        <div className="avatar">
                                            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=128" />
                                        </div>
                                    </div>
                                    <div>
                                        <b>3 new unopened messages in the last hour.</b>
                                        <div className="text-gray-600">
                                            @johndoe sent "About your PR, it's mostly good but..."
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="notification u-inline-flex u-absolute u-top-0 u-right-0">
                                <span className="h-100p w-100p u-absolute u-inline-flex animated ping bg-blue-400 u-round-full"></span>
                                <span className="h-100p w-100p u-inline-flex bg-blue-400 u-round-full"></span>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="more">
                    <div className="content">
                        <Headline title="But wait, there's more" size="4" link="more" />
                        <div className="divider"></div>

                        <p>
                            Check out all the other changes in the{' '}
                            <InternalLink url="/getting-started/release-notes">release notes</InternalLink>.
                        </p>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(NewPage);
