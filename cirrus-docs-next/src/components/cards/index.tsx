import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';

import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const CardsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Cards</title>
            </Head>
            <div>
                <section className="padtop" id="cards">
                    <div className="content">
                        <Headline title="Cards" link="#cards" />
                        <div className="divider"></div>

                        <p>
                            A <code>card</code> can be thought of a more specialized and elegant version of a{' '}
                            <code>frame</code> with different configurations and a hover effect.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>

                        <p>
                            The structure for the <code>card</code> contains quite a number of classes, so below is a
                            breakdown of what is supported.
                        </p>

                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content belong here, inside a <code>content</code> div.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="btn-link outline">Buttons</button>
                                        <button className="btn-link outline">Go here</button>
                                    </div>
                                    <div className="card__footer">
                                        <div className="u-text-center">
                                            <span>
                                                This is additional footer text in <code>card__footer</code>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <h6>Structure</h6>
                                <ul>
                                    <li>
                                        <code>card</code>
                                        <ul>
                                            <li>
                                                <code>card__header</code> (alternate title)
                                            </li>
                                            <li>
                                                <code>card__container</code>
                                                <ul>
                                                    <li>
                                                        <code>card__image</code>
                                                    </li>
                                                    <li>
                                                        <code>card__title-container</code>
                                                        <ul>
                                                            <li>
                                                                <code>title</code>
                                                            </li>
                                                            <li>
                                                                <code>subtitle</code>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <code>content</code>
                                            </li>
                                            <li>
                                                <code>card__action-bar</code>
                                            </li>
                                            <li>
                                                <code>card__footer</code>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="card" style="max-width: 350px;">
    <div class="card__container">
        <div class="card__image"></div>
        <div class="card__title-container">
            <p class="title">Title</p><span class="subtitle">Subtitle</span></div>
    </div>
    <div class="content">
        <p>Text and other content belong here, inside a <code>content</code> div.</p>
    </div>
    <div class="card__action-bar u-center">
        <button class="btn-link outline">Buttons</button>
        <button class="btn-link outline">Go here</button>
    </div>
    <div class="card__footer">
        <div class="u-text-center"><span>This is additional footer text in <code>card__footer</code>.</span></div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>

                        <p>
                            Below is just a simple example of a <code>card</code> that contains a centered image and
                            some text components.
                        </p>

                        <div
                            className="card"
                            style={{
                                maxWidth: '250px',
                            }}
                        >
                            <div className="content u-text-center pt-3">
                                <FontAwesomeIcon
                                    className="fa-wrapper text-blue-600 bg-blue-100 p-3"
                                    icon={['fas', 'bolt']}
                                    style={{
                                        borderRadius: '100%',
                                        height: '4.75rem',
                                        width: '4.75rem',
                                    }}
                                />
                                <p id="projectname" className="title mt-2 mb-0">
                                    Fast. Very fast.
                                </p>
                                <p>Blazing fast speed you can depend on.</p>
                            </div>
                        </div>

                        <CodeBlock
                            code={`<div class="card" style="max-width: 250px;">
    <div class="content u-text-center pt-3">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" class="svg-inline--fa fa-bolt fa-w-10 fa-wrapper text-blue-600 bg-blue-100 p-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="border-radius: 100%; height: 4.75rem; width: 4.75rem;">
            <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
        </svg>
        <p id="projectname" class="title mt-2 mb-0">Fast. Very fast.</p>
        <p>Blazing fast speed you can rely on.</p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="animated">
                    <div className="content">
                        <Headline title="Animated" link="#animated" size="4" />
                        <div className="divider"></div>

                        <p>
                            The animated variant of a card comes with a title container the slides up to reveal more
                            information on hover.
                        </p>
                        <p>
                            Compared to a typical card, there are a couple of key differences to note regardingthe code.
                        </p>
                        <ul>
                            <li>
                                An animated card must have the <code>card--slide-up</code> class along with the{' '}
                                <code>card</code> class.
                            </li>
                            <li>
                                To display an image, it is recommended to create a <code>card__image</code> div nested
                                inside a <code>card__container</code> div.
                            </li>
                            <li>
                                Unlike the standard card above, the title and subtitle are placed in the{' '}
                                <code>card__mobile-title</code> div below the <code>card__container</code>.
                            </li>
                            <li>
                                The content or text of the card is then placed inside a standard <code>content</code>{' '}
                                div now with the <code>card__body</code> class.
                            </li>
                        </ul>

                        <p>Following the steps above should yield a card similar to the one below.</p>

                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card card--slide-up">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://unsplash.it/640/480?random&blur)',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="card__mobile-title">
                                        <div className="content">
                                            <div className="tile">
                                                <div className="tile__container">
                                                    <p className="tile__title">Kangaroo Valley Safari</p>
                                                    <p className="tile__subtitle">By John Doe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__footer content">2 min. read 22 comments</div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<div class="card card--slide-up">
    <div class="card__container">
        <div class="card__image" style="background-image: url(&quot;https://unsplash.it/640/480?random&amp;blur&quot;);"></div>
    </div>
    <div class="card__mobile-title">
        <div class="content">
            <div class="tile">
                <div class="tile__container">
                    <p class="tile__title">Kangaroo Valley Safari</p>
                    <p class="tile__subtitle">By John Doe</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card__body content">
        <p>Located two hours south of Sydney in the Southern Highland of New South Wales...</p>
    </div>
    <div class="card__footer content">2 min. read 22 comments</div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="grouping">
                    <div className="content">
                        <Headline title="Grouping" link="#grouping" size="4" />
                        <div className="divider"></div>

                        <p>
                            Cards can be grouped using Cirrus's{' '}
                            <Link href="../grid/">
                                <a className="u u-LR">flexbox grid</a>
                            </Link>{' '}
                            system.
                        </p>

                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://placeimg.com/640/480/nature)',
                                            }}
                                        ></div>

                                        <div className="card__title-container">
                                            <p className="title">Kangaroo Valley Safari</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage:
                                                    'url(https://source.unsplash.com/category/nature/640x480)',
                                            }}
                                        ></div>

                                        <div className="card__title-container">
                                            <p className="title">Kangaroo Valley Safari</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage:
                                                    'url(https://source.unsplash.com/category/nature/640x480)',
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Kangaroo Valley Safari</p>
                                            <span className="subtitle">By John Doe</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="btn">SHARE</button>
                                        <button className="btn">LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Grouping with animated cards.</p>

                        <div className="row">
                            <div className="col-4">
                                <div className="card card--slide-up">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://unsplash.it/640/480?random&amp;blur)',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="card__mobile-title">
                                        <div className="content">
                                            <div className="tile">
                                                <div className="tile__container">
                                                    <p className="tile__title">Kangaroo Valley Safari</p>
                                                    <p className="tile__subtitle">By John Doe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__footer content">2 min. read 22 comments</div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card card--slide-up">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://unsplash.it/g/640/480?random)',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="card__mobile-title">
                                        <div className="content">
                                            <div className="tile tile--center">
                                                <div className="tile__icon">
                                                    <figure className="avatar">
                                                        <img
                                                            src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"
                                                            alt="Person"
                                                        />
                                                    </figure>
                                                </div>

                                                <div className="tile__container">
                                                    <p className="tile__title">Kangaroo Valley Safari</p>
                                                    <p className="tile__subtitle">By John Doe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__footer content">2 min. read 22 comments</div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card card--slide-up">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://source.unsplash.com/user/erondu/640x480)',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="card__mobile-title">
                                        <div className="content">
                                            <div className="tile">
                                                <div className="tile__container">
                                                    <p className="tile__title">Kangaroo Valley Safari</p>
                                                    <p className="tile__subtitle">By John Doe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body content">
                                        <p>
                                            Located two hours south of Sydney in the Southern Highland of New South
                                            Wales...
                                        </p>
                                    </div>
                                    <div className="card__footer content">03:45 - 1 Jan 2017</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="equal">
                    <div className="content">
                        <Headline title="Equal Heights" link="#equal" size="4" />
                        <div className="divider"></div>

                        <p>
                            You may have noticed that the heights of the cards are not the same if the length of the
                            content is different. To fix this, you can add the <code>h-100 u-flex u-flex-column</code>{' '}
                            classes to <code>card</code>.
                        </p>
                        <p>
                            Note that <b>this does not work with the card with the animated card above</b>.
                        </p>

                        <h6>Before</h6>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content is embedded in the content div here. Embed the{' '}
                                            <code>card__image</code> in the <code>card__container</code> above.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="uppercase">Buttons</button>
                                        <button className="uppercase">Go here</button>
                                    </div>
                                    <div className="card__footer">
                                        <div className="u-text-center">
                                            <span>
                                                This is additional footer text in <code>card__footer</code>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content is embedded in the content div here. Embed the{' '}
                                            <code>card__image</code> in the <code>card__container</code> above.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h6>After</h6>
                        <div className="row">
                            <div className="col-4">
                                <div className="card h-100 u-flex u-flex-column">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content is embedded in the content div here. Embed the{' '}
                                            <code>card__image</code> in the <code>card__container</code> above.
                                        </p>
                                    </div>
                                    <div className="card__action-bar u-center">
                                        <button className="uppercase">Buttons</button>
                                        <button className="uppercase">Go here</button>
                                    </div>
                                    <div className="card__footer">
                                        <div className="u-text-center">
                                            <span>
                                                This is additional footer text in <code>card__footer</code>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card h-100 u-flex u-flex-column">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Text and other content is embedded in the content div here. Embed the{' '}
                                            <code>card__image</code> in the <code>card__container</code> above.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card h-100 u-flex u-flex-column">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundColor: 'rebeccapurple',
                                                backgroundImage: `radial-gradient(
                                    circle at top right, 
                                    rgba(0, 255, 255, 1), rgba(0, 255, 255, 0)
                                  ),
                                  radial-gradient(
                                    circle at bottom left, 
                                    rgba(255, 20, 146, 1), rgba(255, 20, 146, 0)
                                  )`,
                                            }}
                                        ></div>
                                        <div className="card__title-container">
                                            <p className="title">Title</p>
                                            <span className="subtitle">Subtitle</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>
                        <p>
                            Here are a couple of examples to help you get started with designing using{' '}
                            <code>cards</code>.
                        </p>
                        <div className="space"></div>

                        <h6>Twitter Card</h6>

                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage:
                                                    'url(https://images.unsplash.com/photo-1467952497026-86722ef1916f?dpr=1.25&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=)',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="content">
                                        <div className="space"></div>
                                        <div className="tile tile--center">
                                            <div className="tile__icon">
                                                <figure className="avatar">
                                                    <img
                                                        src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic-132x132.jpg"
                                                        alt="Person"
                                                    />
                                                </figure>
                                            </div>

                                            <div className="tile__container">
                                                <p className="tile__title">Joanne Doe</p>
                                                <p className="tile__subtitle">
                                                    <a href="!#">@jdoe</a>
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            Testing my new DSLR. Wow check out that deer! <a href="!#">#nature</a>
                                        </p>
                                    </div>
                                    <div className="card__footer level content">
                                        6:32 PM - 3 Jul 18
                                        <div className="u-pull-right">
                                            <div className="level-right">
                                                <a className="level-item" href="!#">
                                                    <span className="icon">
                                                        <i
                                                            className="fa fa-wrapper small fa-reply"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </a>
                                                <a className="level-item">
                                                    <span className="icon">
                                                        <i
                                                            className="fa fa-wrapper small fa-retweet"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </a>
                                                <a className="level-item">
                                                    <span className="icon">
                                                        <i
                                                            className="fa fa-wrapper small fa-heart"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<div class="card">
    <div class="card__container">
        <div class="card__image" style="background-image: url(https://images.unsplash.com/photo-1467952497026-86722ef1916f?dpr=1.25&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=799&amp;q=80&amp;cs=tinysrgb&amp;crop=)"></div>
    </div>
    <div class="content">
        <div class="space"></div>
        <div class="tile tile--center">
            <div class="tile__icon">
                <figure class="avatar">
                    <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic-132x132.jpg" alt="Person">
                </figure>
            </div>

            <div class="tile__container">
                <p class="tile__title">Joanne Doe</p>
                <p class="tile__subtitle"><a>@jdoe</a></p>
            </div>
        </div>
        <p>Testing my new DSLR. Wow check out that deer! <a href="!#">#nature</a></p>
    </div>
    <div class="card__footer level content">
        6:32 PM - 3 Jul 18
        <div class="u-pull-right">
            <div class="level-right">
                <a class="level-item">
                    <span class="icon"><i class="fa fa-wrapper small fa-reply" aria-hidden="true"></i></span>
                </a>
                <a class="level-item">
                    <span class="icon"><i class="fa fa-wrapper small fa-retweet" aria-hidden="true"></i></span>
                </a>
                <a class="level-item">
                    <span class="icon"><i class="fa fa-wrapper small fa-heart" aria-hidden="true"></i></span>
                </a>
            </div>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--xl"></div>

                        <h6>Simple Tweet Card</h6>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card__header">
                                        <p className="font-bold px-3">This is the title</p>
                                    </div>
                                    <div className="content">
                                        <p>
                                            This is some sample text spam spam spam spam spam spam spam.{' '}
                                            <a href="!#">#place</a>
                                            <a href="!#">#holder</a>
                                            <a href="!#">@Cirrus</a>
                                        </p>
                                    </div>
                                    <div className="card__footer level content">6:32 PM - 3 Jul 18</div>
                                    <div className="card__action-bar u-center">
                                        <button className="btn-transparent outline">Cancel</button>
                                        <button className="btn-transparent outline">Save</button>
                                        <button className="btn-transparent outline">Post</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="card">
    <div class="card__header">
        <p class="font-bold px-3">This is the title</p>
    </div>
    <div class="content">
        <p>This is some sample text spam spam spam spam spam spam spam. <a href="!#">#place</a><a href="!#">#holder</a><a href="!#">@Cirrus</a></p>
    </div>
    <div class="card__footer level content">6:32 PM - 3 Jul 18</div>
    <div class="card__action-bar u-center">
        <button class="btn-transparent outline">Cancel</button>
        <button class="btn-transparent outline">Save</button>
        <button class="btn-transparent outline">Post</button>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Avatar', link: './avatar' }}
                    nextLink={{ name: 'Code', link: './code' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(CardsPage);
