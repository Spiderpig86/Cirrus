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

export const FramesPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Frames</title>
            </Head>
            <div>
                <section className="padtop" id="frames">
                    <div className="content">
                        <Headline title="Frames" link="#frames" />
                        <div className="divider"></div>
                        <p>
                            Frames are designed similar to{' '}
                            <Link href="../components/cards">
                                <a className="u u-LR">cards</a>
                            </Link>
                            , but provide more flexibility to the developer to align items in a structured layout.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            The structure of the <code>frame</code> only consists of a couple of sections.
                        </p>

                        <h6>Structure</h6>
                        <ul>
                            <li>
                                <code>frame</code>
                                <ul>
                                    <li>
                                        <code>frame__header</code>
                                        <ul>
                                            <li>
                                                <code>frame__title</code>
                                            </li>
                                            <li>
                                                <code>frame__subtitle</code>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>frame__body</code>
                                    </li>
                                    <li>
                                        <code>frame__footer</code>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="frame">
                                    <div
                                        className="frame__header"
                                        style={{ background: '#eee', padding: '1rem', margin: '1rem' }}
                                    >
                                        <div className="frame__title u-text-center">Frame Title</div>
                                        <div className="frame__subtitle u-text-center">Frame Subtitle</div>
                                        <div className="frame__subtitle u-text-center">This is the frame header.</div>
                                    </div>
                                    <div
                                        className="frame__body"
                                        style={{ background: '#eee', padding: '1rem', margin: '1rem' }}
                                    >
                                        <div className="frame__title u-text-center">Frame Body</div>
                                        <div className="frame__subtitle u-text-center">
                                            Insert any component here, including a frame navigation menu using{' '}
                                            <code>frame-nav</code>. The frame will auto-expand and if a specific height
                                            is set, a scrollbar will appear to take care of overflow.
                                        </div>
                                        <blockquote className="u-text-center">
                                            The white margins between the gray boxes is to demonstrate how the frame
                                            sub sections are separated.
                                        </blockquote>
                                    </div>
                                    <div
                                        className="frame__footer"
                                        style={{ background: '#eee', padding: '1rem', margin: '1rem' }}
                                    >
                                        <div className="frame__title u-text-center">Frame Footer</div>
                                        <div className="frame__subtitle u-text-center">
                                            Takes up the bottom of the frame.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="frame">
    <div class="frame__header u-text-center">
        <div>
            <figure class="avatar"><img src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"></figure>
        </div>
        <div>
            <div class="frame__title">John Doe</div>
            <div class="frame__subtitle">Freelance Photographer</div>
        </div>
        <div class="row"><a class="col" href="!#"><i class="fa fa-wrapper fa-facebook link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-twitter link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-instagram link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-medium link-btn" aria-hidden="true"></i></a></div>
    </div>
    <div class="content-no-padding">
        <div class="divider m-0"></div>
    </div>
    <div class="frame__body">
        <div class="content u-text-center">
            <h5>Lorem! Ipsum!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="content-no-padding">
        <div class="divider m-0"></div>
    </div>
    <div class="frame__footer">
        <div class="frame__subtitle u-text-center"><i>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i></div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="examples">
                    <div className="content">
                        <Headline title="Examples" link="#examples" size="4" />
                        <div className="divider"></div>
                        <p>Below are some examples for inspiration.</p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="frame">
                                    <div className="frame__header u-text-center">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg" />
                                            </figure>
                                        </div>
                                        <div>
                                            <div className="frame__title">John Doe</div>
                                            <div className="frame__subtitle">Freelance Photographer</div>
                                        </div>
                                        <div className="row">
                                            <a className="col" href="!#">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small link-btn"
                                                    icon={['fab', 'facebook']}
                                                />
                                            </a>
                                            <a className="col" href="!#">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small link-btn"
                                                    icon={['fab', 'twitter']}
                                                />
                                            </a>
                                            <a className="col" href="!#">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small link-btn"
                                                    icon={['fab', 'instagram']}
                                                />
                                            </a>
                                            <a className="col" href="!#">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small link-btn"
                                                    icon={['fab', 'medium']}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="content-no-padding">
                                        <div className="divider m-0" />
                                    </div>
                                    <div className="frame__body">
                                        <div className="content u-text-center">
                                            <h5>Lorem! Ipsum!</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content-no-padding">
                                        <div className="divider m-0" />
                                    </div>
                                    <div className="frame__footer">
                                        <div className="frame__subtitle u-text-center">
                                            <i>
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollit anim id est laborum.
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="frame">
    <div class="frame__header u-text-center">
        <div>
            <figure class="avatar"><img src="https://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"></figure>
        </div>
        <div>
            <div class="frame__title">John Doe</div>
            <div class="frame__subtitle">Freelance Photographer</div>
        </div>
        <div class="row"><a class="col" href="#"><i class="fa fa-wrapper fa-facebook link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-twitter link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-instagram link-btn" aria-hidden="true"></i></a><a class="col" href="#"><i class="fa fa-wrapper fa-medium link-btn" aria-hidden="true"></i></a></div>
    </div>
    <div class="content-no-padding">
        <div class="divider m-0"></div>
    </div>
    <div class="frame__body">
        <div class="content u-text-center">
            <h5>Lorem! Ipsum!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div class="content-no-padding">
        <div class="divider m-0"></div>
    </div>
    <div class="frame__footer">
        <div class="frame__subtitle u-text-center"><i>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i></div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>
                            This one demonstrates overflow on the y-axis with{' '}
                            <Link href="../components/tiles">
                                <a className="u u-LR">tiles</a>
                            </Link>
                            .
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="frame" style={{ height: '30rem' }}>
                                    <div
                                        className="frame__header"
                                        style={{ boxShadow: '0 2px 3px rgba(85, 85, 85, 0.1)' }}
                                    >
                                        <div className="frame__title title m-0">Super Awesome Group Chat</div>
                                    </div>
                                    <div className="frame__body">
                                        <div className="space" />
                                        <div className="my-1">
                                            <div className="tile tile--center m-0">
                                                <div className="tile-icon">
                                                    <figure className="avatar img-small" data-text="El" />
                                                </div>
                                                <div className="tile__container">
                                                    <p className="tile__title m-0">Elk</p>
                                                    <p className="tile__subtitle m-0">Hey guys.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <div className="tile tile--center m-0">
                                                <figure className="avatar img-small">
                                                    <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                                </figure>
                                                <div className="tile__container">
                                                    <p className="tile__title m-0">Tony</p>
                                                    <p className="tile__subtitle m-0">What's up?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <div className="tile tile--center m-0">
                                                <div className="tile-icon">
                                                    <figure className="avatar img-small" data-text="El" />
                                                </div>
                                                <div className="tile__container">
                                                    <p className="tile__title m-0">Elk</p>
                                                    <p className="tile__subtitle m-0">
                                                        I started working on a new webapp. However I'm pretty lazy when
                                                        it comes to designing from the ground up. Anyone know any good
                                                        CSS frameworks for rapid prototyping?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <div className="tile tile--center m-0">
                                                <div className="tile-icon">
                                                    <figure className="avatar img-small">
                                                        <img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png" />
                                                    </figure>
                                                </div>
                                                <div className="tile__container">
                                                    <p className="tile__title m-0">Tony</p>
                                                    <p className="tile__subtitle m-0">
                                                        Check out Cirrus.{' '}
                                                        <a href="https://spiderpig86.github.io/Cirrus">
                                                            https://spiderpig86.github.io/Cirrus
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <div className="tile tile--center m-0">
                                                <div className="tile-icon">
                                                    <figure className="avatar img-small" data-text="El" />
                                                </div>
                                                <div className="tile__container">
                                                    <p className="tile__title m-0">Elk</p>
                                                    <p className="tile__subtitle m-0">Just what I needed.</p>
                                                </div>
                                                <div className="tile__buttons">
                                                    <a href="!#">
                                                        <i
                                                            className="fa fa-wrapper fa-ellipsis-v small"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame__footer">
                                        <div className="form-group input-control">
                                            <input
                                                type="text"
                                                className="form-group-input input--sm input-contains-icon"
                                                placeholder="Send a message"
                                            />
                                            <span className="icon">
                                                <a href="!#">
                                                    <FontAwesomeIcon
                                                        className="fa-wrapper small"
                                                        icon={['fas', 'plus']}
                                                    />
                                                </a>
                                            </span>
                                            <button className="btn-primary form-group-btn btn--sm">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="frame" style="height: 30rem;">
    <div class="frame__header" style="box-shadow: rgba(85, 85, 85, 0.1) 0px 2px 3px;">
        <div class="frame__title title m-0">Super Awesome Group Chat</div>
    </div>
    <div class="frame__body">
        <div class="space"></div>
        <div class="my-1">
            <div class="tile tile--center m-0">
                <div class="tile-icon">
                    <figure class="avatar img-small" data-text="El"></figure>
                </div>
                <div class="tile__container">
                    <p class="tile__title m-0">Elk</p>
                    <p class="tile__subtitle m-0">Hey guys.</p>
                </div>
            </div>
        </div>
        <div class="my-1">
            <div class="tile tile--center m-0">
                <figure class="avatar img-small"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
                <div class="tile__container">
                    <p class="tile__title m-0">Tony</p>
                    <p class="tile__subtitle m-0">What's up?</p>
                </div>
            </div>
        </div>
        <div class="my-1">
            <div class="tile tile--center m-0">
                <div class="tile-icon">
                    <figure class="avatar img-small" data-text="El"></figure>
                </div>
                <div class="tile__container">
                    <p class="tile__title m-0">Elk</p>
                    <p class="tile__subtitle m-0">I started working on a new webapp. However I'm pretty lazy when it comes to designing from the ground up. Anyone know any good CSS frameworks for rapid prototyping?</p>
                </div>
            </div>
        </div>
        <div class="my-1">
            <div class="tile tile--center m-0">
                <div class="tile-icon">
                    <figure class="avatar img-small"><img src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"></figure>
                </div>
                <div class="tile__container">
                    <p class="tile__title m-0">Tony</p>
                    <p class="tile__subtitle m-0">Check out Cirrus. <a href="https://spiderpig86.github.io/Cirrus">https://spiderpig86.github.io/Cirrus</a></p>
                </div>
            </div>
        </div>
        <div class="my-1">
            <div class="tile tile--center m-0">
                <div class="tile-icon">
                    <figure class="avatar img-small" data-text="El"></figure>
                </div>
                <div class="tile__container">
                    <p class="tile__title m-0">Elk</p>
                    <p class="tile__subtitle m-0">Just what I needed.</p>
                </div>
                <div class="tile__buttons"><a href="#"><i class="fa fa-wrapper fa-ellipsis-v small" aria-hidden="true"></i></a></div>
            </div>
        </div>
    </div>
    <div class="frame__footer">
        <div class="form-group input-control">
            <input type="text" class="form-group-input input--sm input-contains-icon" placeholder="Send a message"><span class="icon"><a href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14 fa-wrapper small" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></a></span>
            <button class="btn-primary form-group-btn btn--sm">Send</button>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>This one uses different components (tabcontrol, card tiles, etc...) inside the frame.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="frame" style={{ height: '30rem' }}>
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
                                        <div className="tile level r">
                                            <div className="tile-avatar">
                                                <span className="icon">
                                                    <FontAwesomeIcon
                                                        className="fa-wrapper small link-btn"
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
                                                        <i
                                                            className="fa fa-wrapper fa-pencil small"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tile level r">
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
                                        <div className="tile level r">
                                            <div className="tile-avatar">
                                                <span className="icon">
                                                    <FontAwesomeIcon
                                                        className="fa-wrapper small"
                                                        icon={['fas', 'envelope']}
                                                    />
                                                    <i className="fa fa-wrapper fa-envelope-o" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="tile__container">
                                                <p className="tile__title">Email</p>
                                                <p className="tile__subtitle">johndoe@github.com</p>
                                            </div>
                                        </div>
                                        <div className="tile level r">
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
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="frame" style="height: 30rem;">
    <div class="frame__header">
        <div class="avatar"><img src="https://i.imgur.com/sbKJVxr.png"></div>
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
        <div class="tile level r">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-twitter" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Twitter</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
            <div class="tile__buttons"><a href="#" class="link-btn"><span class="icon"><i class="fa fa-wrapper fa-pencil small" aria-hidden="true"></i></span></a></div>
        </div>
        <div class="tile level r">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-instagram" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Instagram</p>
                <p class="tile__subtitle">@johndoe</p>
            </div>
        </div>
        <div class="tile level r">
            <div class="tile-avatar"><span class="icon"><i class="fa fa-wrapper fa-envelope-o" aria-hidden="true"></i></span></div>
            <div class="tile__container">
                <p class="tile__title">Email</p>
                <p class="tile__subtitle">johndoe@github.com</p>
            </div>
        </div>
        <div class="tile level r">
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
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Footer', link: './footer' }}
                    nextLink={{ name: 'Header', link: './header' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FramesPage);
