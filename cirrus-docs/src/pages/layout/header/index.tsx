import React from 'react';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const HeaderPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="header">
                    <div className="content">
                        <Headline title="Header" link="#header" />
                        <div className="divider"></div>
                        <p>
                            Cirrus makes designing the perfect header extremely simple. It is designed to be as flexible
                            and responsive as a header menu could be with automatic element hiding for different screen
                            sizes as well as support for dropdown menus. The basic outline for the header menu can be
                            seen below.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>Below is a basic example of a header.</p>
                        <h6>Structure</h6>
                        <ul>
                            <li>
                                <code>header</code> will serve as the parent container for the header component.
                                <ul>
                                    <li>
                                        <code>header-brand</code> is the left most container of the <code>header</code>{' '}
                                        with the website logo <b>always showing</b>. Extra links can be added here if
                                        needed.
                                    </li>
                                    <li>
                                        <code>header-nav</code> is designed for adding links, dropdown menus, and other
                                        components. The components are <b>hidden</b> for tablets and phones and are
                                        rendered in a main dropdown menu that can be accessed by the hamburger button.
                                        <ul>
                                            <li>
                                                <code>nav-left</code> is the left most container of the{' '}
                                                <code>header-nav</code> that will display components like links,
                                                buttons, etc on the left side of the screen and the top part of the menu
                                                on touch enabled devices.
                                                <ul>
                                                    <li>
                                                        <code>nav-item</code> serves as the main container for all
                                                        components of any <code>nav-*</code> container. Slight padding
                                                        is added into the control. Adding the <code>has-sub</code> class
                                                        indicates that the item has a dropdown menu.
                                                        <ul>
                                                            <li>
                                                                <code>nav-dropdown-link</code> specifies that the link
                                                                inside the <code>nav-item</code> is associated to an
                                                                adjacent <code>dropdown-menu</code>.
                                                            </li>
                                                            <li>
                                                                <code>dropdown-menu</code> is the dropdown menu (
                                                                <code>ul</code>) itself that can contain <code>li</code>{' '}
                                                                or any other elements.
                                                                <ul>
                                                                    <li>
                                                                        <code>dropdown-menu-divider</code> is a divider
                                                                        used to separate <code>dropdown-menu</code>{' '}
                                                                        components.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="space"></div>

                        <LazyLoad height={200}>
                            <iframe
                                className="w-100"
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head.html"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock code={``} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="brand">
                    <div className="content">
                        <Headline title="Header Brand" link="#brand" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>header-brand</code> serves as the part of the header menu that showcases your
                            website brand, logo, etc. It is positioned in the left most part of the <code>header</code>{' '}
                            and is <b>always</b> visible on any screen size. However, the <code>header-nav</code> will
                            fill the width of the parent container for touch enabled devices <code>(&lt;= 768px)</code>{' '}
                            but will only take up the space it needs for larger devices <code>(&gt; 768px)</code>.
                        </p>
                        <CodeBlock
                            code={`<div class="header">
    <div class="header-brand">
        <!-- Insert other nav-items -->
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>
                        <p>
                            The <code>header-brand</code> can also contain other controls other than just your website
                            name. For instance, it can hold buttons, links, textviews, and other controls.
                            <span className="info">
                                The area used by <code>header-brand</code> is indicated in light pink.
                            </span>
                        </p>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-header-brand.html"
                                width="100%"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <p>
                            Note that the <code>header-brand</code> should always have the <code>nav-btn</code> as a way
                            for touch enabled devices to access the <code>header-nav</code>.
                        </p>
                        <p>
                            Another thing to note is that the <code>first-child</code> of the <code>header-brand</code>{' '}
                            will have an extra padding of <code>1rem</code> in the left and right designed especially
                            for logo placement.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="button">
                    <div className="content">
                        <Headline title="Header Button" link="#button" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>header-btn</code> is used to style a <code>div</code> or <code>button</code> as a
                            hamburger button that will show a dropdown menu when clicked. This only appears for touch
                            enabled devices <code>(&lt;= 768px)</code> and is automatically hidden for larger scree
                            sizes.
                            <span className="info">
                                The area used by <code>header-btn</code> is indicated in light pink.
                            </span>
                        </p>

                        <LazyLoad height={200}>
                            <iframe src="./test" width="100%" style={{ height: '200px' }} />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock code={``} language="htmlbars" />
                        <p>
                            To set the <code>header-btn</code> to the close state (when the dropdown menu is present,
                            simply add the <code>active</code> class to the button.
                        </p>

                        <LazyLoad height={200}>
                            <iframe src="./test" width="100%" style={{ height: '200px' }} />
                        </LazyLoad>
                    </div>
                </section>

                <section className="padtop" id="nav">
                    <div className="content">
                        <Headline title="Header Nav" link="#nav" size="4" />
                        <div className="divider"></div>{' '}
                        <p>
                            The <code>header-nav</code> is the adjacent container of the <code>header-brand</code> that
                            holds dropdown menus, links, buttons, and other components. Unlike the{' '}
                            <code>header-brand</code>, the <code>header-nav</code> is hidden on touch enabled devices{' '}
                            <code>(&lt;= 768px)</code> and is only shown as a dropdown menu of the header menu. For
                            larger devices, the <code>header-nav</code> fills the remaining space in the{' '}
                            <code>header</code>.
                            <span className="info">
                                The area used by <code>header-nav</code> is indicated in light pink.
                            </span>
                        </p>
                        <LazyLoad height={200}>
                            <iframe src="./test" width="100%" style={{ height: '200px' }} />
                        </LazyLoad>
                        <CodeBlock code={``} language="htmlbars" />
                        <div className="space"></div>
                        <p>
                            Since that <code>header-nav</code> fills up the rest of the space for devices with widths
                            larger than <code>768px</code>, Cirrus provides different layouts to place elements within
                            the container itself using <code>nav-left</code>, <code>nav-center</code>, and{' '}
                            <code>nav-right</code> directly as children.
                        </p>
                        <div className="space"></div>
                        <h5>JavaScript Toggle</h5>
                        <p>
                            Keep in mind that the script used to toggle the menus is not included in Cirrus and it is
                            best to develop a custom one that fits your site. Below is a sample of what can fit in any
                            site running Cirrus.
                        </p>
                        <h6>Plain JavaScript</h6>
                        <CodeBlock code={``} language="htmlbars" />
                        <div className="space"></div>
                        <h6>JQuery</h6>
                        <CodeBlock code={``} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="regions">
                    <div className="content">
                        <Headline title="Nav Regions" link="#regions" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="item">
                    <div className="content">
                        <Headline title="Nav Item" link="#item" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="dropdown">
                    <div className="content">
                        <Headline title="Nav Dropdown" link="#dropdown" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="headers">
                    <div className="content">
                        <Headline title="Static Headers" link="#headers" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <section className="padtop" id="themes">
                    <div className="content">
                        <Headline title="Themes" link="#themes" size="4" />
                        <div className="divider"></div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Frames', link: './frames' }}
                    nextLink={{ name: 'Hero', link: './hero' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
