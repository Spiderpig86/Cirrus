import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { DefaultLayout } from '../../../layouts/default';

import { toc } from './toc';

import { PAGE_TITLE_PREFIX } from '../../../constants';
import { ResizableInternal } from '../../../layouts/components/resizable';
import { TutorialBase, TutorialComplete, TutorialComponents } from './tutorial-components';
import { IFrame } from '../../../layouts/components/iframe';
import { InternalLink } from '../../../layouts/components/link';
import { Blockquote } from '../../../layouts/components/blockquote';

export const StartGuidePage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Start Guide</title>
            </Head>
            <div>
                <section id="start-guide" className="padtop">
                    <div className="content">
                        <Headline title="Start Guide" link="#start-guide" />
                        <div className="divider"></div>
                        <p>
                            Getting started with a new framework can be difficult sometimes. This guide aims to make
                            understanding what types of classes to use and integrate with super simple to get you up to
                            speed quickly.
                        </p>
                        <p>
                            At a high level, the framework is broken down into 3 separate types of stylesheets that are
                            often used together:
                        </p>

                        <ul>
                            <li>
                                <b>Base</b> — consists of fonts, colors, layout/positioning, and other essential
                                classes.
                            </li>
                            <li>
                                <b>Component</b> — consists of prebuilt components that can be added to any project
                                right away.
                            </li>
                            <li>
                                <b>Utilities</b> — consists of atomic classes to modify specific styles of elements.
                            </li>
                        </ul>

                        <p>
                            To help you better understand what each type of styles are used for, we will be building an
                            example portfolio page. The final result is shown below.
                        </p>

                        <Blockquote accentColor="#fcd9bd">
                            <p>
                                Note that this tutorial mainly focuses on styling a page and does not include any
                                functionality. Feel free to extend and modify it on your own and see what you can come
                                up with. 😊
                            </p>
                        </Blockquote>
                    </div>

                    <ResizableInternal height="750px" top="50%">
                        <IFrame content={TutorialComplete} />
                    </ResizableInternal>
                </section>

                <section className="padtop" id="base">
                    <div className="content">
                        <Headline title="Base" link="#base" size="4" />
                        <div className="divider"></div>

                        <p>
                            The foundation of any page styled with Cirrus starts with its base styles. The base styles
                            of Cirrus consist of:
                        </p>
                        <ul>
                            <li>
                                <b>Reset and base stying.</b>
                            </li>
                            <li>
                                <b>Animations</b> — transitions and animation related styles.
                            </li>
                            <li>
                                <b>Fonts</b> — font sizes, font families, textual elements, etc.
                            </li>
                            <li>
                                <b>Grid</b> — CSS grid utility classes.
                            </li>
                            <li>
                                <b>Layout</b> — content, rows, columns, level, heights, widths, etc.
                            </li>
                            <li>
                                <b>Media</b> — videos, figures, images, etc.
                            </li>
                            <li>
                                <b>Modifiers</b> — input variants, text and background color classes.
                            </li>
                            <li>
                                <b>Spacing</b> — margin and padding.
                            </li>
                        </ul>

                        <p>
                            Much of the styling here is minimal and won't require much effort on your end to use in your
                            project. Its main goal is to reset the page and style only what's necessary to setup the
                            foundation for Cirrus components.
                        </p>

                        <p>
                            To setup our portfolio page, we will start with the base structure. We will start with a div
                            with <code>min-h-100p</code> to allow it to span the height of the screen and a background
                            color of <code>bg-gray-100</code>. Inside of it will have 3 <code>section</code> tags, each
                            for the landing, stats, and contact form.
                        </p>

                        <CodeBlock
                            code={`<div class="bg-gray-100 min-h-100p">
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="content px-12-lg px-24-xl">
        </div>
      </div>
    </div>
  </section>
</div>`}
                            language="html"
                        />

                        <p>
                            Starting with the first section, we will start by defining a <code>hero</code> with content
                            inside the <code>hero-body</code> to vertically and horizontally the text and image. Inside
                            of <code>hero-body</code>, we'll add another <code>content</code> class to further pad the
                            text
                        </p>
                        <CodeBlock
                            code={`...
<div class="hero">
  <div class="hero-body">
    <div class="content px-12-lg px-24-xl">
      <div class="">
        <div>
          <img class="w-100p w-60p-sm w-auto-md" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
        </div>
        <div>
          <h1 class="headline-3">hey!</h1>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
...`}
                            language="html"
                        />
                        <p>
                            The <code>content</code> class is one of the most essential classes used in Cirrus to add
                            responsiveness and center alignment to any group of elements on a page.
                        </p>

                        <p>For the stats and forms section, we'll just add in the other base classes used.</p>
                        <CodeBlock
                            code={`...
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h2>My Stats</h2>
  </div>
</section>
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h3>Want to work together?</h3>
    <p>Drop me a line!</p>
  </div>
</section>
...`}
                            language="html"
                        />

                        <div className="space space--lg"></div>

                        <p>At this point, we should get a page that looks like this:</p>
                    </div>

                    <ResizableInternal height="750px" top="50%">
                        <IFrame content={TutorialBase} />
                    </ResizableInternal>
                </section>

                <section className="padtop" id="components">
                    <div className="content">
                        <Headline title="Components" link="#components" size="4" />
                        <div className="divider"></div>

                        <p>
                            Not too shabby with only the base styling. We can use component styles to quickly add
                            crucial parts to our portfolio without much effort. Component styles are a majority of the
                            styles you see on the left sidebar, which include:
                        </p>
                        <ul>
                            <li>Buttons</li>
                            <li>Elements</li>
                            <li>Forms</li>
                        </ul>

                        <p>
                            Here, we will add in components to really bring the page to life. Let's start by adding the{' '}
                            <InternalLink url="/layout/header">Header</InternalLink> layout component to provide
                            navigation to our portfolio.
                        </p>

                        <CodeBlock
                            code={`...
  <div class="header header-clear u-unselectable header-animated px-0 px-2-md">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <a>
          <h6 class="tracking-tight">John Doe</h6>
        </a>
      </div>
      <div class="nav-item nav-btn" id="header-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="header-nav" id="header-menu">
      <div class="nav-right text-sm">
        <div class="nav-item">
          <a href="#">Dribbble</a>
        </div>
        <div class="nav-item">
          <a href="#">LinkedIn</a>
        </div>
        <div class="nav-item">
          <a href="#">About</a>
        </div>
        <div class="nav-item">
          <a href="#">Contact</a>
        </div>
        <div class="nav-item">
          <a class="btn btn-black btn--sm py-0" href="#">View Work</a>
        </div>
      </div>
    </div>
  </div>
...`}
                            language="html"
                        />

                        <p>
                            Next, we will fill out the stats section to showcase some testimonials, skills, etc. A great
                            component we can use is a <InternalLink url="/layout/frame">Frame</InternalLink> which
                            provides a structured way to layout components in a panel with a shadow. Inside the frame,
                            we can throw in an avatar, some stats, and some buttons for viewing work and hiring.
                        </p>
                        <p>
                            To showcase a list of skills, we can use a group of{' '}
                            <InternalLink url="/elements/tags">Tags</InternalLink>. To fit the overall design language,
                            let's set all of them to <code>uppercase</code> and with a background of{' '}
                            <code>bg-black</code>.
                        </p>

                        <CodeBlock
                            code={`...
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h2>My Stats</h2>
    <div>
      <div>
        <div class="frame bg-white">
          <div class="frame__header">
            <div>
              <figure class="avatar bg-transparent">
                <img src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80">
              </figure>
              <div>
                <h6 class="frame__title">John Doe</h6>
                <div class="frame__subtitle">Freelance Dev + Photographer</div>
              </div>
            </div>
          </div>
          <div class="frame__body">
            <div class="px-2 py-2 bg-black">
              <div class="text-white">
                <div>
                  <div>
                    <h6 class="mb-0">56</h6>
                    <p class="uppercase font-bold text-sm">Clients</p>
                  </div>
                  <div>
                    <h6 class="mb-0">100%</h6>
                    <p class="uppercase font-bold text-sm">On Time</p>
                  </div>
                  <div>
                    <h6 class="mb-0">4.8</h6>
                    <p class="uppercase font-bold text-sm">Stars</p>
                  </div>
                </div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
          <div class="frame__footer">
            <div class="space"></div>
            <div>
              <button class="btn-black outline">View Work</button>
              <button class="btn-black">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="tag-container">
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Adobe Suite</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Figma</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Invision</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">UI Design</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">UX Design</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">Typography</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">HTML</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">CSS</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">JavaScript</div>
          <div class="tag px-2 py-1 bg-black text-white text-md font-bold uppercase">TypeScript</div>
        </div>
      </div>
    </div>
  </div>
</section>
...`}
                            language="html"
                        />

                        <p>
                            Finally, what use is a portfolio if no one can contact us to collaborate on some awesome
                            projects? We can simply get a form going just by inserting some{' '}
                            <InternalLink url="/forms/inputs">Inputs</InternalLink> and{' '}
                            <InternalLink url="/forms/groups">grouping them</InternalLink>.
                        </p>
                        <p>
                            At the bottom we can add <InternalLink url="/layout/spacing">Spacing</InternalLink> to add
                            some padding at the bottom.
                        </p>

                        <CodeBlock
                            code={`...
<section class="mb-12">
<div class="content px-2 px-12-lg px-24-xl">
  <h3>Want to work together?</h3>
  <p>Drop me a line!</p>
  <div class="mb-1">
    <label class="m-0 mb-1">
      <b>Contact Info</b>
    </label>
    <div>
      <input placeholder="Name" />
      <input placeholder="Email" />
    </div>
  </div>
  <div class="mb-1">
    <label class="m-0 mb-1">
      <b>Message</b>
    </label>
    <textarea placeholder="Enter your message"></textarea>
  </div>
  <button class="btn-black">Submit</button>
</div>
</section>
<div class="space"></div>
...`}
                            language="html"
                        />

                        <p>With the components added in, our portfolio should look much better.</p>
                    </div>
                    <ResizableInternal height="750px" top="50%">
                        <IFrame content={TutorialComponents} />
                    </ResizableInternal>
                </section>

                <section className="padtop" id="utilities">
                    <div className="content">
                        <Headline title="Utilities" link="#utilities" size="4" />
                        <div className="divider"></div>

                        <p>
                            The portfolio looks good, but it can definitely be better. There are a couple things we
                            would want to lay out differently such as the landing section, rounding images, shadows,
                            etc.
                        </p>
                        <p>
                            This is where utility classes come in -- which can be found on the left sidebar. New classes
                            are added quite frequently so be sure to be on the lookout for when they are released.
                        </p>

                        <p>
                            First, let's use the <code>u-flex</code> utility to get the image in the landing section to
                            the left of the text. We can then add <code>u-round-xs u-shadow-lg</code> to round the image
                            a bit and add a shadow.
                        </p>

                        <CodeBlock
                            code={`...
  <div class="hero">
    <div class="hero-body">
      <div class="content px-12-lg px-24-xl">
        <div class="u-flex u-items-center u-gap-4 u-flex-column u-gap-8-lg u-flex-row-md">
          <div>
            <img class="u-round-xs w-100p w-60p-sm w-auto-md u-shadow-lg" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
          </div>
          <div>
            <h1 class="headline-3">hey!</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
...`}
                            language="html"
                        />

                        <p>
                            For the stats frame, let's center the text with <code>u-text-center</code>. We should also
                            tidy up the body by adding <code>u-round-sm u-shadow-lg</code> to the div outside of the
                            text. For the div with the text, use <code>u-text-center</code> to center the text. The
                            avatar can stand out more if we add <code>u-shadow-lg</code>.
                        </p>

                        <CodeBlock
                            code={`...
  <div class="frame__header u-text-center">
    <div>
      <figure class="avatar bg-transparent u-shadow-lg">
        <img src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"></figure>
        <div>
          <h6 class="frame__title">John Doe</h6>
          <div class="frame__subtitle">Freelance Dev + Photographer</div>
        </div>
    </div>
  </div>
...`}
                            language="html"
                        />

                        <p>
                            The stats should be adjacent to each other. We can do this with the flexbox utils{' '}
                            <code>u-flex u-justify-center u-gap-3</code>. The flexbox classes set the stats divs
                            adjacent to each other and we make them centered horizontally separated by 1.5rem from each
                            other.
                        </p>

                        <CodeBlock
                            code={`...
  <div class="frame__body">
    <div class="px-2 py-2 bg-black u-round-sm u-shadow-lg">
      <div class="u-text-center text-white">
        <div class="u-flex u-justify-center u-gap-3">
          <div>
            <h6 class="mb-0">56</h6>
            <p class="uppercase font-bold text-sm">Clients</p>
          </div>
          <div>
            <h6 class="mb-0">100%</h6>
            <p class="uppercase font-bold text-sm">On Time</p>
          </div>
          <div>
            <h6 class="mb-0">4.8</h6>
            <p class="uppercase font-bold text-sm">Stars</p>
          </div>
        </div>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat
          nulla pariatur.</p>
      </div>
    </div>
  </div>
...`}
                            language="html"
                        />

                        <p>
                            The buttons should also fill the bottom and be adjacent to each other. We can use the{' '}
                            <code>u-flex u-gap-1</code> classes on the button containing div. For the "Hire Me" button,
                            we can stretch it by setting its flex-grow to 1 with <code>u-flex-grow-1</code>.
                        </p>

                        <CodeBlock
                            code={`...
  <div class="frame__footer">
    <div class="space"></div>
    <div class="u-flex u-gap-1">
      <button class="btn-black outline">View Work</button>
      <button class="btn-black u-flex-grow-1">Hire Me</button>
    </div>
  </div>
...`}
                            language="html"
                        />

                        <p>
                            For the form, we can align the <i>Contact Info</i> inputs next to each other using{' '}
                            <code>u-flex u-gap-1</code>. The submit button should also be on the right using the{' '}
                            <code>u-pull-right</code> class.
                        </p>

                        <CodeBlock
                            code={`...
<section class="mb-12">
  <div class="content px-2 px-12-lg px-24-xl">
    <h3>Want to work together?</h3>
    <p>Drop me a line!</p>
    <div class="mb-1">
      <label class="m-0 mb-1">
        <b>Contact Info</b>
      </label>
      <div class="u-flex u-gap-1">
        <input placeholder="Name" />
        <input placeholder="Email" />
      </div>
    </div>
    <div class="mb-1">
      <label class="m-0 mb-1">
        <b>Message</b>
      </label>
      <textarea placeholder="Enter your message"></textarea>
    </div>
    <button class="btn-black u-pull-right">Submit</button>
  </div>
</section>
...`}
                            language="html"
                        />

                        <p>After these changes, you should be left with the final product.</p>
                    </div>

                    <ResizableInternal height="750px" top="50%">
                        <IFrame content={TutorialComplete} />
                    </ResizableInternal>
                </section>

                <section className="padtop" id="wrapping-up">
                    <div className="content">
                        <Headline title="Wrapping Up" link="#wrapping-up" size="4" />
                        <div className="divider"></div>

                        <p>I hope that guide was a useful introduction to developing your project with Cirrus. The portfolio here is by no means a finished product. There are many other things you can add such as more pages, a working dropdown hamburger menu, a working form, etc.</p>
                        <p>To give you a small hint, you can get a working dropdown hamburger menu using a small JavaScript snippet you can find <InternalLink url="/layout/header#dropdown">here</InternalLink>.</p>
                    </div>
                </section>

                <Pagination
                    prevLink={{
                        name: 'Managing Build Size',
                        link: './managing-build-size',
                    }}
                    nextLink={{
                        name: 'Release Notes',
                        link: './release-notes',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(StartGuidePage);
