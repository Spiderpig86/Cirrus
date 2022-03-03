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
import { TutorialBase, TutorialComplete } from './tutorial-components';
import { IFrame } from '../../../layouts/components/iframe';

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
                                <b>Layout</b> — content, divider, heroes, level, heights, widths, etc.
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
                            with <code>min-h-100</code> to allow it to span the height of the screen and a background
                            color of <code>bg-gray-100</code>. Inside of it will have 3 <code>section</code> tags, each
                            for the landing, stats, and contact form.
                        </p>

                        <CodeBlock
                            code={`<div class="bg-gray-100 min-h-100">
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
          <img class="w-100 w-60-sm w-auto-md" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
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
                            Not too shabby with only the base styling. Here, we will add in components to really bring
                            the page to life.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="utilities">
                    <div className="content">
                        <Headline title="Utilities" link="#utilities" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="designing">
                    <div className="content">
                        <Headline title="Designing with Cirrus" link="#designing" size="4" />
                        <div className="divider"></div>
                        <p>
                            Using a new framework can be slightly overwhelming, so this section is to help point out
                            common areas in the documentation to help you get up to speed.
                        </p>
                        <div className="space"></div>

                        <h6>Layout</h6>

                        <p>
                            Spacing is an important part of designing a page not just with Cirrus, but in general. This
                            can be accomplished by following some hierarchy for a layout, such as <code>section</code>,{' '}
                            <code>content</code>, and <code>row</code>. The <code>section</code> HTML tag semantically
                            spearates the content on the page, the <code>content</code> class adds the needed spacing,
                            and the <code>row</code> class can be used to position the child elements.
                        </p>

                        <CodeBlock
                            code={`<section>
    <div class="content">
        <p>Some text</p>
        <div class="row">
            <div class="col">Child 1</div>
            <div class="col">Child 2</div>
        </div>
    </div>
</section>`}
                            language="htmlbars"
                        />

                        <p>
                            More info can be found in the{' '}
                            <Link href="/layout/spacing">
                                <a className="u u-LR">Spacing</a>
                            </Link>{' '}
                            docs.
                        </p>

                        <div className="divider w-30 mx-auto"></div>

                        <p>
                            If you are looking to tile elements in a specific form, then I recommend getting started
                            with the following two pages.
                        </p>

                        <ul>
                            <li>
                                <Link href="/layout/columns">
                                    <a className="u u-LR">Columns (Flexbox)</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/grid/templates">
                                    <a className="u u-LR">Grid</a>
                                </Link>
                            </li>
                        </ul>

                        <div className="divider w-30 mx-auto"></div>

                        <p>
                            With some layout styles in place, now you specify a{' '}
                            <Link href="/layout/header">
                                <a className="u u-LR">header</a>
                            </Link>{' '}
                            and{' '}
                            <Link href="/layout/footer">
                                <a className="u u-LR">footer</a>
                            </Link>
                            .
                        </p>

                        <p>
                            This pretty much sums up the few pages that would help getting a base layout up and running.
                            You can find more styles to modify the layout under <i>Layout</i> or <i>Utilities</i>.
                        </p>
                        <div className="space"></div>

                        <h6>Components</h6>
                        <p>
                            There are lots of components that already come with the framework. I do not have any
                            specific recommendations other than to pick the ones you want to use. Each page has plenty
                            of examples to cover many possible use cases.
                        </p>
                    </div>
                </section>

                <Pagination
                    nextLink={{
                        name: 'Support',
                        link: './support',
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(StartGuidePage);
