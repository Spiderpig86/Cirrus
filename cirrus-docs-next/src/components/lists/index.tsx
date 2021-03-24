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

export const ListsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
        <Head>
            <title>{PAGE_TITLE_PREFIX} Lists</title>
        </Head>
            <div>
                <section className="padtop" id="lists">
                    <div className="content">
                        <Headline title="Lists" link="#lists" />
                        <div className="divider"></div>

                        <p>
                            Besides basic styling for lists, Cirrus also ships with classes that allow lists to be
                            incorporated with other classes in unique ways.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>

                        <p>Minimal styles are used to tweak the look of lists.</p>
                        <div className="space"></div>

                        <h6>Types</h6>
                        <p className="title">Bulleted (Default)</p>
                        <p className="subtitle">A standard list with bullets preceding the list item.</p>
                        <div className="row u-items-center">
                            <div className="col-6">
                                <ul>
                                    <li>Apple</li>
                                    <li>Google</li>
                                    <li>Facebook</li>
                                    <li>Microsoft</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<ul>
    <li>Apple</li>
    <li>Google</li>
    <li>Facebook</li>
    <li>Microsoft</li>
</ul>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Numbered</p>
                        <p className="subtitle">An ordered list with numbers for each item.</p>
                        <div className="row u-items-center">
                            <div className="col-6">
                                <ol>
                                    <li>Apple</li>
                                    <li>Google</li>
                                    <li>Facebook</li>
                                    <li>Microsoft</li>
                                </ol>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<ol>
    <li>Apple</li>
    <li>Google</li>
    <li>Facebook</li>
    <li>Microsoft</li>
</ol>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Plain</p>
                        <p className="subtitle">
                            A list with no item decorations using the <code>no-bullets</code> class.
                        </p>
                        <div className="row u-items-center">
                            <div className="col-6">
                                <ul className="no-bullets">
                                    <li>Apple</li>
                                    <li>Google</li>
                                    <li>Facebook</li>
                                    <li>Microsoft</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<ul class="no-bullets">
    <li>Apple</li>
    <li>Google</li>
    <li>Facebook</li>
    <li>Microsoft</li>
</ul>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="title">Details</p>
                        <p className="subtitle">A list designed for detailed descriptions.</p>
                        <div className="row u-items-center">
                            <div className="col-6">
                                <dl>
                                    <dt>Apple</dt>
                                    <dd>
                                        Apple Inc. is an American multinational technology company headquartered in
                                        Cupertino, California that designs, develops, and sells consumer electronics,
                                        ...
                                    </dd>
                                </dl>
                            </div>
                            <div className="col-6">
                                <CodeBlock
                                    code={`<dl>
    <dt>Apple</dt>
    <dd>
        Apple Inc. is an American multinational technology company headquartered in
        Cupertino, California that designs, develops, and sells consumer electronics, ...
    </dd>
</dl>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space xlarge"></div>

                        <h6>Nested Lists</h6>
                        <p>
                            Cirrus will automatically style and pad nested lists so you don't have to. Just add the{' '}
                            <code>nested-list</code> class to the div containing the list.
                        </p>
                        <div className="row">
                            <div className="col-4">
                                <ul>
                                    <li>List Item 1</li>
                                    <li>List Item 2</li>
                                    <li>
                                        List Item 3
                                        <ul>
                                            <li>List Item 3.a</li>
                                            <li>List Item 3.b</li>
                                            <li>
                                                List Item 3.c
                                                <ul>
                                                    <li>List Item 3.c.i</li>
                                                    <li>List Item 3.c.ii</li>
                                                    <li>List Item 3.c.iii</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ol>
                                    <li>List Item 1</li>
                                    <li>List Item 2</li>
                                    <li>
                                        List Item 3
                                        <ol>
                                            <li>List Item 3.a</li>
                                            <li>List Item 3.b</li>
                                            <li>
                                                List Item 3.c
                                                <ol>
                                                    <li>List Item 3.c.i</li>
                                                    <li>List Item 3.c.ii</li>
                                                    <li>List Item 3.c.iii</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            <div className="col-4">
                                <ol>
                                    <li>List Item 1</li>
                                    <li>List Item 2</li>
                                    <li>
                                        List Item 3
                                        <ol>
                                            <li>List Item 3.a</li>
                                            <li>List Item 3.b</li>
                                            <li>
                                                List Item 3.c
                                                <ul>
                                                    <li>List Item 3.c.i</li>
                                                    <li>List Item 3.c.ii</li>
                                                    <li>List Item 3.c.iii</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>
        List Item 3
        <ul>
            <li>List Item 3.a</li>
            <li>List Item 3.b</li>
            <li>
                List Item 3.c
                <ul>
                    <li>List Item 3.c.i</li>
                    <li>List Item 3.c.ii</li>
                    <li>List Item 3.c.iii</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="menus">
                    <div className="content">
                        <Headline title="Menu Lists" link="#menus" size="4" />
                        <div className="divider"></div>
                        <p>
                            A <code>menu</code> can be thought of a stylized list created to be incorporated into other
                            Cirrus components or used standalone.
                        </p>
                        <p>
                            This can be created by adding the <code>menu</code> class to your <code>ol</code> or{' '}
                            <code>ul</code> and adding the <code>menu-item</code> class to each <code>li</code>. To
                            select a list item, add the <code>selected</code> class to the <code>menu-item</code>.
                        </p>

                        <div className="row">
                            <div className="col-lg-5">
                                <ul className="menu">
                                    <li className="menu-item selected">
                                        <a href="!#">One</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Two</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="!#">Three</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-7">
                                <h6>Structure</h6>
                                <ul>
                                    <li>
                                        <code>menu</code>
                                        <ul>
                                            <li>
                                                <code>menu-item</code>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="dropdown">
                    <div className="content">
                        <Headline title="Dropdown List" link="#dropdown" size="6" />

                        <p>
                            Drop down menus are easy to configure in Cirrus using lists. Simply wrap the button and the
                            menu in a <code>list-dropdown</code> container and Cirrus will automatically style all the
                            components for the dropdown menu. To display the menu on the right side, just add the{' '}
                            <code>menu-right</code> class to the <code>list-dropdown</code> container. These dropdown
                            menus can work straight out of the box and also support JavaScript events when needed.
                        </p>

                        <p className="font-bold">Dropdown with Separate Button</p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="list-dropdown">
                                    <div className="btn-group">
                                        <button className="btn-primary">Dropdown</button>
                                        <button className="btn-primary btn-small btn-dropdown">
                                            <FontAwesomeIcon icon={['fas', 'caret-down']} />
                                        </button>
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <a href="!#">Google Chrome</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Firefox</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Polarity</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-1">
                                <CodeBlock
                                    code={`<div class="list-dropdown">
    <div class="btn-group">
        <button class="btn-primary">Dropdown</button>
        <button class="btn-primary btn-small btn-dropdown"><i class="fa fa-wrapper fa-caret-down" aria-hidden="true"></i>
        </button>
        <ul class="menu">
            <li class="menu-item"><a href="!#">Google Chrome</a></li>
            <li class="menu-item"><a href="!#">Firefox</a></li>
            <li class="menu-item"><a href="!#">Polarity</a></li>
        </ul>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p className="font-bold">Dropdown Right Aligned</p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="list-dropdown dropdown-right">
                                    <button className="btn-primary btn-dropdown m-0">
                                        Dropdown <FontAwesomeIcon className="ml-1" icon={['fas', 'caret-down']} />
                                    </button>
                                    <ul className="menu">
                                        <li className="menu-item">
                                            <a href="!#">Google Chrome</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="!#">Firefox</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="!#">Polarity</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-1">
                                <CodeBlock
                                    code={`<div class="list-dropdown dropdown-right">
    <button class="btn-primary btn-dropdown m-0">Dropdown
        <i class="fa fa-wrapper fa-caret-down" aria-hidden="true"></i>
    </button>
    <ul class="menu">
        <li class="menu-item"><a href="!#">Google Chrome</a></li>
        <li class="menu-item"><a href="!#">Firefox</a></li>
        <li class="menu-item"><a href="!#">Polarity</a></li>
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p className="font-bold">Dropdown Transparent Button</p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="list-dropdown">
                                    <button className="btn-transparent btn-dropdown m-0">
                                        Dropdown <FontAwesomeIcon className="ml-1" icon={['fas', 'caret-down']} />
                                    </button>
                                    <ul className="menu">
                                        <li className="menu-item">
                                            <a href="!#">Google Chrome</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="!#">Firefox</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="!#">Polarity</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-1">
                                <CodeBlock
                                    code={`<div class="list-dropdown">
    <button class="btn-transparent btn-dropdown m-0">
        Dropdown <i class="fa fa-wrapper fa-caret-down" aria-hidden="true"></i></button>
    <ul class="menu">
        <li class="menu-item">
            <a href="!#">Google Chrome</a>
        </li>
        <li class="menu-item">
            <a href="!#">Firefox</a>
        </li>
        <li class="menu-item">
            <a href="!#">Polarity</a>
        </li>
    </ul>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="other">
                    <div className="content">
                        <Headline title="Other Examples" link="#other" size="6" />
                        <p>More examples to help you get started.</p>
                        <div className="space"></div>

                        <p>
                            <b>Menu in Frame</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="frame">
                                    <div className="frame__body">
                                        <div className="frame__header">
                                            <div className="tile level">
                                                <div className="tile__icon">
                                                    <figure className="avatar">
                                                        <img src="https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1398292826/a1tq244sp7uqhb5a0utg.png" />
                                                    </figure>
                                                </div>
                                                <div className="tile__container">
                                                    <p className="tile__title">Richard Hendricks.</p>
                                                    <p className="tile__subtitle">Founder and CEO of Pied Piper.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="menu">
                                            <li className="divider"></li>
                                            <li className="menu-item selected">
                                                <div className="menu-addon right">
                                                    <span className="icon">
                                                        <i
                                                            className="fa fa-wrapper fa-ellipsis-h small"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </span>
                                                </div>
                                                <a href="!#">News Feed</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Messenger</a>
                                            </li>
                                            <p className="menu-title uppercase">Shortcuts</p>
                                            <li className="menu-item">
                                                <a href="!#">Some App</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<div class="frame">
    <div class="frame__body">
        <div class="frame__header">
            <div class="tile level">
                <div class="tile__icon">
                    <figure class="avatar"><img src="https://crunchbase-production-res.cloudinary.com/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1398292826/a1tq244sp7uqhb5a0utg.png"></figure>
                </div>
                <div class="tile__container">
                    <p class="tile__title">Richard Hendricks.</p>
                    <p class="tile__subtitle">Founder and CEO of Pied Piper.</p>
                </div>
            </div>
        </div>
        <ul class="menu">
            <li class="divider"></li>
            <li class="menu-item selected">
                <div class="menu-addon right"><span class="icon"><i class="fa fa-wrapper fa-ellipsis-h small" aria-hidden="true"></i></span></div><a href="!#">News Feed</a></li>
            <li class="menu-item"><a href="!#">Messenger</a></li>
            <p class="menu-title uppercase">Shortcuts</p>
            <li class="menu-item"><a href="!#">Some App</a></li>
        </ul>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            <b>Menu in Card</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card">
                                    <div className="card__container">
                                        <div
                                            className="card__image"
                                            style={{
                                                backgroundImage: 'url(https://source.unsplash.com/random/640x480)',
                                            }}
                                        ></div>

                                        <div className="card__title-container">
                                            <p className="title">Unsplash Viewer</p>
                                            <span className="subtitle">Rate this photo.</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Did you like the photo?</p>
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <a href="!#">
                                                    <span className="icon">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'check']}
                                                        />
                                                    </span>
                                                    Yes
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">
                                                    <span className="icon">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'times']}
                                                        />
                                                    </span>
                                                    No
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<div class="card">
    <div class="card__container">
        <div class="card__image" style="background-image: url(&quot;https://source.unsplash.com/random/640x480&quot;);"></div>
        <div class="card__title-container">
            <p class="title">Unsplash Viewer</p><span class="subtitle">Rate this photo.</span></div>
    </div>
    <div class="content">
        <p>Did you like the photo?</p>
        <ul class="menu">
            <li class="menu-item"><a href="!#"><span class="icon"><i class="fa fa-wrapper fa-check small" aria-hidden="true"></i></span>Yes</a></li>
            <li class="menu-item"><a href="!#"><span class="icon"><i class="fa fa-wrapper fa-times small" aria-hidden="true"></i></span>No</a></li>
        </ul>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            <b>Navigation Menus</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="frame">
                                    <div className="frame__header">
                                        <p className="title m-0">Bookmarks</p>
                                    </div>
                                    <div className="frame__body">
                                        <ul className="menu">
                                            <li className="divider" data-label="TECH"></li>
                                            <li className="menu-item">
                                                <a href="!#">Github</a>
                                            </li>
                                            <li className="menu-item selected">
                                                <div className="menu-addon">
                                                    <span className="icon">
                                                        <FontAwesomeIcon
                                                            className="fa-wrapper small"
                                                            icon={['fas', 'folder']}
                                                        />
                                                    </span>
                                                </div>
                                                <a href="!#">Tech News</a>
                                                <ul className="menu">
                                                    <li className="menu-item">
                                                        <a href="!#">Hacker News</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="!#">Lobste.rs</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="menu">
                                            <li className="divider" data-label="PROCRASTINATION"></li>
                                            <li className="menu-item">
                                                <a href="!#">Facebook</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Twitter</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="frame-footer"></div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<div class="frame">
    <div class="frame__header">
        <p class="title m-0">Bookmarks</p>
    </div>
    <div class="frame__body">
        <ul class="menu">
            <li class="divider" data-label="TECH"></li>
            <li class="menu-item"><a href="!#">Github</a></li>
            <li class="menu-item selected">
                <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-folder small" aria-hidden="true"></i></span></div><a href="!#">Tech News</a>
                <ul class="menu">
                    <li class="menu-item"><a href="!#">Hacker News</a></li>
                    <li class="menu-item"><a href="!#">Lobste.rs</a></li>
                </ul>
            </li>
        </ul>
        <ul class="menu">
            <li class="divider" data-label="PROCRASTINATION"></li>
            <li class="menu-item"><a href="!#">Facebook</a></li>
            <li class="menu-item"><a href="!#">Twitter</a></li>
            <li class="menu-item"><a href="!#">Instagram</a></li>
        </ul>
    </div>
    <div class="frame-footer"></div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <ul className="menu">
                                    <li className="menu-item">
                                        <div className="menu-addon">
                                            <span className="icon">
                                                <span className="icon">
                                                    <FontAwesomeIcon
                                                        className="fa-wrapper small"
                                                        icon={['fas', 'clock']}
                                                    />
                                                </span>
                                            </span>
                                        </div>
                                        <a href="!#">Real-Time</a>
                                    </li>
                                    <li className="menu-item selected">
                                        <div className="menu-addon">
                                            <span className="icon">
                                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'user']} />
                                            </span>
                                        </div>
                                        <a href="!#">Audience</a>
                                        <ul className="menu">
                                            <li className="menu-item">
                                                <a href="!#">Overview</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">Active Users</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">
                                                    Lifetime Value <sup>BETA</sup>
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="!#">
                                                    Cohort Analytics <sup>BETA</sup>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <div className="menu-addon">
                                            <span className="icon">
                                                <span className="icon">
                                                    <FontAwesomeIcon
                                                        className="fa-wrapper small"
                                                        icon={['fas', 'share']}
                                                    />
                                                </span>
                                            </span>
                                        </div>
                                        <a href="!#">Acquisition</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-7">
                                <CodeBlock
                                    code={`<ul class="menu">
    <li class="menu-item">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-clock-o" aria-hidden="true"></i></span></div><a href="!#">Real-Time</a></li>
    <li class="menu-item selected">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-user" aria-hidden="true"></i></span></div><a href="!#">Audience</a>
        <ul class="menu">
            <li class="menu-item"><a href="!#">Overview</a></li>
            <li class="menu-item"><a href="!#">Active Users</a></li>
            <li class="menu-item"><a href="!#">Lifetime Value <sup>BETA</sup></a></li>
            <li class="menu-item"><a href="!#">Cohort Analytics <sup>BETA</sup></a></li>
        </ul>
    </li>
    <li class="menu-item">
        <div class="menu-addon"><span class="icon"><i class="fa fa-wrapper fa-share-alt" aria-hidden="true"></i></span></div><a href="!#">Acquisition</a></li>
</ul>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Links', link: './links' }}
                    nextLink={{ name: 'Modals', link: './modals' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ListsPage);
