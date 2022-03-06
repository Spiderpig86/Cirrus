import React, { useEffect } from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CodeBlock } from '../../layouts/components/codeblock';
import { TableOfContents } from '../../layouts/components/toc';
import { Headline } from '../../layouts/components/headline';
import { Tag } from '../../layouts/components/tag';
import { DefaultLayout } from '../../layouts/default';
import { toc } from './toc';

import initializeAnimations from '../../static/js/animations.js';
import { PAGE_TITLE_PREFIX } from '../../constants';

export const AnimationsPage: React.FC<any> = (props) => {
    useEffect(() => {
        initializeAnimations();
    });

    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Animations</title>
            </Head>
            <div>
                <section className="padtop" id="animations">
                    <div className="content">
                        <Headline title={'Animations'} link={'#animations'} />
                        <div className="divider"></div>
                        <p>
                            Animations are an essential part crafting beautiful websites that aren't just stunning, but
                            are also alive. Cirrus comes bundled with animated components to help you get started.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="spinner">
                    <div className="content">
                        <Headline title={'Loading'} link={'#spinner'} size="4" />
                        <div className="divider"></div>
                        <p>
                            The loading spinner serves as an elegant indicator for progress in webpages. Just add the{' '}
                            <code>animated loading</code> selectors to the element and Cirrus will handle the rest.
                        </p>
                        <p>
                            By default, the spinner will be horizontally centered and it will override any text. To hide
                            the text, just add the <code>hide-text</code> class.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card u-flex u-items-center u-justify-center">
                                    <div className="animated loading hide-text">
                                        <p>Hidden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="card u-flex u-items-center u-justify-center">
    <div class="animated loading hide-text">
        <p>Hidden</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            The spinner's color could also be changed to text-white with the <code>loading-white</code>{' '}
                            class.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="card u-flex u-items-center u-justify-center"
                                    style={{
                                        background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                                    }}
                                >
                                    <div className="animated loading hide-text loading-white">
                                        <p>Hidden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="card u-flex u-items-center u-justify-center" style="background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));">
    <div class="animated loading hide-text loading-white">
        <p>Hidden</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            To show the spinner to the left, use the <code>loading-left</code> class.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="card"
                                    style={{
                                        background: 'linear-gradient(to right, #EC6EAD, #3494E6)',
                                    }}
                                >
                                    <div className="animated loading loading-left loading-white text-white">
                                        <p>loading-left</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="card u-flex u-items-center u-justify-center" style="background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));">
    <div class="animated loading hide-text loading-white">
        <p>Hidden</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            For the right, use the <code>loading-right</code> class.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="card"
                                    style={{
                                        background: 'linear-gradient(to right, #ff5858, #f857a6)',
                                    }}
                                >
                                    <div className="animated loading loading-right loading-white text-white u-text-right">
                                        <p>loading-right</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="card" style="background: linear-gradient(to right, rgb(255, 88, 88), rgb(248, 87, 166));">
    <div class="animated loading loading-right loading-white text-white u-text-right">
        <p>loading-right</p>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="effects">
                    <div className="content">
                        <Headline title="Effects" link="#effects" size="4" />
                        <div className="divider"></div>

                        <p>
                            Effects are animations that respond to a specific user interaction, such as a user hovering
                            over an element.
                        </p>

                        <section className="pt-4" id="hover-grow">
                            <Headline title="Hover Grow" link="#hover-grow" size="6" />
                            <p>
                                This is a subtle animation that enlarges a given element on hover. Just add the{' '}
                                <code>hover-grow</code> class to your element.
                            </p>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="hover-grow">
                                        <img src="/img/credit-card.svg" />
                                    </div>
                                    <div className="u-text-center">Hover me.</div>
                                </div>
                                <div className="col-lg-8">
                                    <CodeBlock
                                        code={`<div class="hover-grow">
    <img src="../../card.svg" />
</div>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="padtop" id="entrance-animations">
                    <div className="content">
                        <Headline title="Entrance Animations" link="#entrance-animations" size="4" />
                        <div className="divider"></div>
                        <p>These are animations that only run once when the page is loaded or the class is toggled.</p>
                        <div className="space"></div>

                        <section className="pt-4" id="bounce">
                            <Headline title="Bounce" link="#bounce" size="6" />
                            <p>Bouncing animation with a glyph.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <span className="icon animated" id="bounce-heart">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'heart']} />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<span class="icon"><i class="fa fa-wrapper fa-heart animated bounce" aria-hidden="true"></i></span>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>

                            <button className="docs-btn-play" id="toggle-bounce-heart">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Bouncing animation with a div.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <div className="bg-orange-400 text-white u-text-center animated" id="bounce-div">
                                        <p>This is a div!</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<div class="bg-orange-400 text-white u-text-center animated bounce">
    <p>This is a div!</p>
</div>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-bounce-div">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Bouncing animation with a button.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <button className="btn-info animated" id="bounce-btn">
                                        Button
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<button class="btn-info animated bounce">Button</button>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-bounce-btn">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                        </section>

                        <section className="pt-4" id="bounce-in">
                            <Headline title="Bounce In" link="#bounce-in" size="6" />
                            <p>Bounce in animation with a glyph.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <span className="icon animated" id="bounce-in-heart">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'heart']} />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<span class="icon"><i class="fa fa-wrapper fa-heart animated bounceIn" aria-hidden="true"></i></span>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-bounce-in-heart">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Bounce in animation with a div.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <div className="bg-orange-400 text-white u-text-center animated" id="bounce-in-div">
                                        <p>This is a div!</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<div class="bg-orange-400 text-white u-text-center animated bounceIn">
    <p>This is a div!</p>
</div>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-bounce-in-div">
                                <span className="icon ">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Bounce in animation with a button.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <button className="btn-info animated" id="bounce-in-btn">
                                        Button
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<button class="btn-info animated bounceIn">Button</button>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-bounce-in-btn">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                        </section>

                        <section className="pt-4" id="fade-in">
                            <Headline title="Fade In" link="#fade-in" size="6" />
                            <p>Fade in animation with a glyph.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <span className="icon animated" id="fade-in-heart">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'heart']} />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<span class="icon"><i class="fa fa-wrapper fa-heart animated fadeIn" aria-hidden="true"></i></span>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-fade-in-heart">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Fade in animation with a div.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <div className="bg-orange-400 text-white u-text-center animated" id="fade-in-div">
                                        <p>This is a div!</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<div class="bg-orange-400 text-white u-text-center animated fadeIn">
    <p>This is a div!</p>
</div>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-fade-in-div">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Fade in animation with a button.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <button className="btn-info animated" id="fade-in-btn">
                                        Button
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<button class="btn-info animated fadeIn">Button</button>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-fade-in-btn">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                        </section>
                    </div>
                </section>

                <section className="padtop" id="infinite-animations">
                    <div className="content">
                        <Headline title="Infinite Animations" link="#infinite-animations" size="4" />
                        <div className="divider"></div>
                        <Tag
                            leftProps={{
                                classes: `tag--dark`,
                                text: `New`,
                            }}
                            rightProps={{
                                classes: `tag--info`,
                                text: `0.7.0`,
                            }}
                        />
                        <p>These are animations that only run continuously.</p>
                        <div className="space"></div>

                        <section className="pt-4" id="pound">
                            <Headline title="Pound" link="#pound" size="6" />
                            <p>Pound animation with a glyph.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <span className="icon animated paused pound" id="pound-heart">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'heart']} />
                                    </span>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<span class="icon"><i class="fa fa-wrapper fa-heart animated pound" aria-hidden="true"></i></span>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-pound-heart">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <p>Pound animation with a div.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <div
                                        className="bg-orange-400 text-white u-text-center animated paused pound"
                                        id="pound-div"
                                    >
                                        <p>This is a div!</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<div class="bg-orange-400 text-white u-text-center animated pound">
    <p>This is a div!</p>
</div>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-pound-div">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                            <div className="space"></div>
                            <p>Pound animation with a button.</p>
                            <div className="row">
                                <div className="col-lg-6 u-text-center">
                                    <button className="btn-info animated paused pound" id="pound-btn">
                                        Button
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <CodeBlock
                                        code={`<button class="btn-info animated pound">Button</button>`}
                                        language="htmlbars"
                                    />
                                </div>
                            </div>
                            <button className="docs-btn-play" id="toggle-pound-btn">
                                <span className="icon">
                                    <FontAwesomeIcon className="fa-wrapper pad-right" icon={['fas', 'play']} />
                                </span>
                                Play
                            </button>
                        </section>

                        <section className="pt-4" id="pulse">
                            <Headline title="Pulse" link="#pulse" size="6" />
                            <p>
                                Add the <code>pulse</code> animation to simulate pulsing in an out by oscillating the
                                element's opacity. This is a great animation for skeleton loaders as seen below.
                            </p>

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
                            <div className="space"></div>

                            <CodeBlock
                                code={`<div class="card px-4 py-3">
    <div class="u-flex u-gap-3 animated pulse">
        <div>
            <div class="bg-gray-300 u-round-full p-4"></div>
        </div>
        <div class="u-flex-grow-1">
            <div class="line bg-gray-300 w-100p u-round-xs"></div>
            <div class="space"></div>
            <div class="line bg-gray-300 w-100p u-round-xs"></div>
            <div class="grid u-gap-1 mb-0">
                <div class="line bg-gray-300 grid-c-3 u-round-xs"></div>
                <div class="line bg-gray-300 grid-c-9 u-round-xs"></div>
            </div>
        </div>
    </div>
</div>`}
                                language="htmlbars"
                            />
                        </section>

                        <section className="pt-4" id="ping">
                            <Headline title="Ping" link="#ping" size="6" />
                            <p>
                                Add the <code>pulse</code> animation to simulate pulsing in an out by oscillating the
                                element's opacity. This is a great animation for skeleton loaders as seen below.
                            </p>
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
                            <div className="space"></div>

                            <CodeBlock
                                code={`<div class="u-relative u-inline-flex">
    <div class="u-round-xs u-shadow-lg p-3 bg-blue-100">
        <div class="u-flex u-items-center u-gap-2">
            <div>
                <div class="avatar"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=128"></div>
            </div>
            <div><b>3 new unopened messages in the last hour.</b>
                <div class="text-gray-600">@johndoe sent "About your PR, it's mostly good but..."</div>
            </div>
        </div>
    </div><span class="notification u-inline-flex u-absolute u-top-0 u-right-0"><span class="h-100p w-100p u-absolute u-inline-flex animated ping bg-blue-400 u-round-full"></span><span class="h-100p w-100p u-inline-flex bg-blue-400 u-round-full"></span></span>
</div>`}
                                language="htmlbars"
                            />
                        </section>
                    </div>
                </section>

                <section className="padtop" id="animation-utils">
                    <div className="content">
                        <Headline title="Animation Utils" link="#animation-utils" size="4" />
                        <div className="divider"></div>
                        <p>
                            Cirrus comes with a couple of tools you can use to help test or modify animation behavior.
                        </p>
                        <div className="space"></div>

                        <h6>Infinite Animation</h6>
                        <p>
                            This will sustain an animation when the user is on the page. This even works for animations
                            not designed to be infinitely looped. The only change needed is the addition of the{' '}
                            <code>infinite</code> class to the component.
                        </p>
                        <p>Below is an example using the fade in animation.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <button className="btn-primary animated fadeIn infinite">Infinitely Fading</button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<button class="btn-primary animated fadeIn infinite">Infinitely Fading</button>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <p>
                            Now this animation seems to cut off at the end of the cycle. To make it alternate, just add
                            the <code>alternate</code> class to make the animation more fluid.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <button className="btn-primary animated fadeIn infinite alternate">
                                    Alternating Fading
                                </button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<button class="btn-primary animated fadeIn infinite alternate">Alternating Fading</button>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <h6>Pausing Animations</h6>
                        <p>
                            This is great with testing your animations and works well with JavaScript calls also. All
                            you need to do is add a class to the animated component called <code>paused</code>.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <button className="btn-primary animated bounce infinite alternate paused">
                                    Paused
                                </button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<button class="btn-primary animated bounce infinite alternate paused">Paused</button>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(AnimationsPage);
