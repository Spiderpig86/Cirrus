import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const HeaderPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Header</title>
            </Head>
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
                                title="Header Demo"
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head.html"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="header header-fixed u-unselectable header-animated">
    <div class="header-brand">
        <div class="nav-item no-hover">
            <a><h6 class="title">Logo</h6></a>
        </div>
        <div class="nav-item nav-btn" id="header-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="header-nav" id="header-menu">
        <div class="nav-left">
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-github" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-slack" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="nav-item text-center">
                <a href="#">
                    <span class="icon">
                        <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div class="nav-item has-sub toggle-hover" id="dropdown">
                <a class="nav-dropdown-link">Animated</a>
                <ul class="dropdown-menu dropdown-animated" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                </ul>
            </div>
        </div>

        <div class="nav-right">
            <div class="nav-item active">
                <a href="#">Active</a>
            </div>
            <div class="nav-item">
                <a href="#">Link 1</a>
            </div>
            <div class="nav-item has-sub" id="dropdown">
                <a class="nav-dropdown-link">Click Me</a>
                <ul class="dropdown-menu" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                    <li class="dropdown-menu-divider"></li>
                    <li role="menu-item"><a href="#">Fourth Item</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
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
                                title="Header Brand"
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
                            enabled devices <code>(&lt;= 768px)</code> and is automatically hidden for larger screen
                            sizes.
                            <span className="info">
                                The area used by <code>header-btn</code> is indicated in light pink.
                            </span>
                        </p>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-header-btn.html"
                                width="100%"
                                title="Header Button"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="header-brand">
    <div class="nav-item nav-btn" style="cursor: pointer; display: block; position: relative; margin-left: auto;">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`}
                            language="htmlbars"
                        />
                        <p>
                            To set the <code>header-btn</code> to the close state (when the dropdown menu is present,
                            simply add the <code>active</code> class to the button.
                        </p>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-header-btn-close.html"
                                width="100%"
                                title="Header Button Close"
                                style={{ height: '200px' }}
                            />
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
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-header-nav.html"
                                width="100%"
                                title="Header Nav"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <CodeBlock
                            code={`<div class="header header-fixed u-unselectable header-animated">
    <div class="header-brand">
        <div class="nav-item no-hover">
            <a><h6 class="title">Logo</h6></a>
        </div>
        <div class="nav-item">
            <a href="#">
                <span class="icon">
                    <i class="fab fa-wrapper fa-github"></i>
                </span>
            </a>
        </div>
        <div class="nav-item nav-btn" id="header-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="header-nav" style="background-color: #ffdadd;" id="header-menu">
        <!-- Other nav categories, controls, nav-items, etc. This is hidden on touch enabled devices -->
    </div>
</div>`}
                            language="htmlbars"
                        />
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
                        <CodeBlock
                            code={`// Get all the nav-btns in the page
let navBtns = document.querySelectorAll('.nav-btn');

// Add an event handler for all nav-btns to enable the dropdown functionality
navBtns.forEach(function (ele) {
    ele.addEventListener('click', function() {
        // Get the dropdown-menu associated with this nav button (insert the id of your menu)
        let dropDownMenu = document.getElementById('MENU_ID_HERE');

        // Toggle the nav-btn and the dropdown menu
        ele.classList.toggle('active');
        dropDownMenu.classList.toggle('active');
    });
});`}
                            language="javascript"
                        />
                        <div className="space"></div>
                        <h6>JQuery</h6>
                        <CodeBlock
                            code={`// Show dropdown when clicked
$('#header-btn').on('click', function(e) {
    $('#MENU_ID_HERE').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

// Hide menu after clicking menu item
$('.dropdown-menu li').on('click', function(e) {
     $('#MENU_ID_HERE').removeClass('active');
     $('.nav-btn').removeClass('active');
});`}
                            language="javascript"
                        />
                    </div>
                </section>

                <section className="padtop" id="regions">
                    <div className="content">
                        <Headline title="Nav Regions" link="#regions" size="4" />
                        <div className="divider"></div>
                        <p>
                            The nav regions or the <code>nav-left</code>, <code>nav-center</code>, and{' '}
                            <code>nav-right</code> classes denote the different regions in the nav-bar. The children of
                            these classes will align based on their class suffix (elements in <code>nav-left</code> will
                            be left aligned and items in <code>nav-right</code> will be right aligned). The containers
                            by themselves will take up all the remaining space in the <code>header-nav</code>, but will
                            space out evenly with the addition of more regions.
                        </p>

                        <p>
                            Note that this only shows for <code>&gt; 768px</code>.
                        </p>
                        <p className="info text-center m-0">
                            Only 1 region present (<code>nav-left</code>).
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-dist-1.html"
                                width="100%"
                                title="Header Demo Nav 1"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <p className="info text-center m-0">
                            Only 2 regions present (<code>nav-left</code> and <code>nav-right</code>).
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-dist-2.html"
                                width="100%"
                                title="Header Demo Nav 2"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <p className="info text-center m-0">
                            All regions present (<code>nav-left</code>, <code>nav-center</code> and{' '}
                            <code>nav-right</code>).
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-dist-3.html"
                                width="100%"
                                title="Header Demo Nav 3"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space large"></div>

                        <h6>Nav Left</h6>
                        <p>
                            This will display contents on the <b>left</b> side of the <code>header-nav</code> and items
                            are left aligned.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-left.html"
                                width="100%"
                                title="Header Demo Left"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <h6>Nav Center</h6>
                        <p>
                            This will display contents on the <b>center</b> of the <code>header-nav</code> and items are
                            centered.
                            <br />
                            <span className="info">
                                Note that this will not appear directly in the center if the <code>header-brand</code>{' '}
                                has elements.
                            </span>
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-center.html"
                                width="100%"
                                title="Header Demo Center"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <h6>Nav Right</h6>
                        <p>
                            This will display contents on the <b>right</b> side of the <code>header-nav</code> and items
                            are right aligned.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-right.html"
                                width="100%"
                                title="Header Demo Right"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <div className="space large"></div>
                    </div>
                </section>

                <section className="padtop" id="item">
                    <div className="content">
                        <Headline title="Nav Item" link="#item" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>nav-item</code> class is the fundamental component that serves as the parent
                            container to all the other elements inside these components:
                        </p>
                        <ul>
                            <li>
                                <code>header-brand</code>{' '}
                            </li>
                            <li>
                                <code>header-nav</code>{' '}
                            </li>
                            <li>
                                <code>dropdown-menu</code>
                            </li>
                            <li>
                                <code>nav-left</code>
                            </li>
                            <li>
                                <code>nav-right</code>
                            </li>
                        </ul>

                        <p>
                            Elements such as links, paragraphs, inputs, and other controls can be placed inside. Below
                            are some examples in code.
                        </p>

                        <p>
                            A <code>header-brand</code> <b>logo</b>.
                        </p>
                        <CodeBlock
                            code={`<div class="nav-item">
    <img src="./logo.png" />
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            A <b>link</b>.
                        </p>
                        <CodeBlock
                            code={`<div class="nav-item">
    <a href="#">Link</a>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            The <b>dropdown menu toggle</b>.
                        </p>
                        <CodeBlock
                            code={`<div class="nav-item has-sub" id="dropdown">
    <a class="nav-dropdown-link">
        <span class="icon">
            <i class="fa fa-wrapper fa-book" aria-hidden="true"></i>
        </span> 
        Docs
    </a>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <p>
                            Or any other <b>elements</b>.
                        </p>
                        <CodeBlock
                            code={`<div class="nav-item has-sub">
    <input type="text" />
    <button class="btn-accent">Hello</button>
    <button class="btn-accent">World</button>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-dropdown-content.html"
                                title="Header Dropdown Content"
                                width="100%"
                            />
                        </LazyLoad>
                        <p>
                            Cirrus provides flexibility for which type of elements you can use for your{' '}
                            <code>nav-item</code> elements which can be declared as either <code>&lt;div&gt;</code> or{' '}
                            <code>&lt;a&gt;</code>.
                        </p>
                        <div className="space"></div>
                        <h6>States</h6>
                        <p>
                            <code>nav-items</code> have 3 basic states: <code>normal</code> (no selector),{' '}
                            <code>:hover</code>, and <code>active</code>. To disable any hover effect, just add{' '}
                            <code>no-hover</code> to the <code>nav-item</code>.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-navitem-states.html"
                                width="100%"
                                title="Header Nav Item States"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                    </div>
                </section>

                <section className="padtop" id="dropdown">
                    <div className="content">
                        <Headline title="Nav Dropdown" link="#dropdown" size="4" />
                        <div className="divider"></div>
                        <p>
                            The <code>dropdown-menu</code> allows you to display a drpdown menu from a{' '}
                            <code>nav-item</code> that displays additional options. This is simply a{' '}
                            <code>nav-item</code> that has an <code>has-sub</code> class attached to it to indicate that
                            this contains a dropdown menu with additional options. On desktops <code>&gt; 768px</code>,
                            the dropdown menu appears as a regular menu item and the menu portion displays below the{' '}
                            <code>nav-item</code>. On mobile devices, it just expands the <code>nav-item</code> it is
                            in. The user clicks this toggle and the <code>dropdown-menu</code> will appear based on its
                            previous state. The whole implementation is really broken down into two parts:
                        </p>
                        <div className="space"></div>

                        <h6>1) The Dropdown Toggle</h6>
                        <p>
                            Inside the <code>nav-item has-sub</code> element, the main toggle of the component will be
                            handled by an anchor tag with the <code>nav-dropdown-link</code> class. Inside this control,
                            icons and text can be added to specify the contents of the menu. When the dropdown menu is
                            shown, the <code>active</code> class will be added to the <code>nav-item has-sub</code>{' '}
                            element (the parent).
                        </p>
                        <CodeBlock
                            code={`<div class="nav-item has-sub">
    <a class="nav-dropdown-link">
        <span class="icon"><i class="fa fa-wrapper fa-book"></i></span> 
    Docs</a>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>
                        <h6>2) The Menu Itself</h6>
                        <p>
                            The menu itself will be <b>adjacent</b> to the <code>nav-dropdown-link</code> and is a{' '}
                            <code>ul</code> with the <code>dropdown-menu</code> class. Addition modifers include:
                        </p>
                        <ul>
                            <li>
                                <code>dropdown-animated</code> - adds animation when the menu is shown and hidden.
                            </li>
                            <li>
                                <code>dropdown-dark</code> - adds a dark theme to the dropdown menu.
                            </li>
                            <li>
                                <code>dropdown-shown</code> - shows the dropdown menu.
                            </li>
                        </ul>
                        <p>
                            Embedded inside the dropdown-menu <code>ul</code>, <code>li</code> is used to denote the
                            list items. Within the list items, any component can also be added.
                        </p>
                        <p>
                            Putting the two elements together, we can get a dropdown menu structure that looks something
                            like this:
                        </p>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-dropdown.html"
                                title="Header Dropdown"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="nav-item has-sub">
    <a class="nav-dropdown-link">
        Me
    </a>
    <ul class="dropdown-menu dropdown-animated" role="menu">
        <li role="menu-item"><a>About</a></li>
        <li role="menu-item"><a>Achievements</a></li>
        <li role="menu-item"><a>Likes</a></li>
    </ul>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>JavaScript (jQuery)</h6>
                        <p>
                            With JavaScript, the cleanest solution relies on jQuery. Below is a snippet that should work
                            for general implementations of the <code>dropdown-menu</code>, but may require slight
                            modification depending on the design of the website.
                        </p>
                        <CodeBlock
                            code={`$('.has-sub').on('click', function(e) { // Get all dropdown menu toggles
    $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide all other dropdown menus
    $('.has-sub').not($(this)).removeClass('active'); // Remove the active selector from the other dropdown toggles
    $(this).children('.dropdown-menu').toggleClass('dropdown-shown'); // Show/hide the dropdown menu associated with the toggle being clicked
    $(this).toggleClass('active'); // Toggle the active selector on the nav-item
});`}
                            language="javascript"
                        />
                        <div className="space"></div>

                        <h6>CSS-only Toggle</h6>
                        <p>
                            If <b>JavaScript</b> is not an option in showing the menu, Cirrus now provides a hover
                            toggle to show and hide the <code>dropdown-menu</code> with only CSS. To do so, the{' '}
                            <code>toggle-hover</code> class needs to be added to the <code>nav-item has-sub</code>{' '}
                            element. <b>That is all.</b>
                        </p>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-dropdown-hover.html"
                                width="100%"
                                title="Header Dropdown Hover"
                                style={{ height: '200px' }}
                            />
                        </LazyLoad>
                        <CodeBlock
                            code={`<div class="nav-item has-sub toggle-hover">
    <a class="nav-dropdown-link">
        Menu
    </a>
    <ul class="dropdown-menu dropdown-animated" role="menu">
        <li role="menu-item"><a>Profile</a></li>
        <li role="menu-item"><a>Messages</a></li>
        <li role="menu-item"><a>Log Out</a></li>
    </ul>
</div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <h6>Positioning</h6>
                        <p>
                            Customizing the positioning of the <code>dropdown-menu</code> is very simple. By default,
                            Cirrus will automatically align and position them depending if it is inside a{' '}
                            <code>nav-left</code>, <code>nav-center</code>, or <code>nav-right</code>. Menus in the left
                            navigation menu are left aligned, menus in the center are centered, and menus on the right
                            are right aligned. This ensures that the menus do not go past the screens.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-dropdown-align.html"
                                title="Header Dropdown Align"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <h6>Dropdown Divider</h6>
                        <p>
                            The <code>dropdown-menu-divider</code> allows you to separate dropdown menu items to provide
                            clearer organization. This class could be added to a list item, <code>div</code>, or{' '}
                            <code>hr</code> and it would display the same.
                        </p>
                        <CodeBlock
                            code={`<li class="dropdown-menu-divider"></li>
<!-- OR -->
<div class="dropdown-menu-divider"></div>
<!-- OR -->
<hr class="dropdown-menu-divider"></div>`}
                            language="htmlbars"
                        />
                        <div className="space"></div>

                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-dropdown-divider.html"
                                title="Header Dropdown Divider"
                                width="100%"
                            />
                        </LazyLoad>
                    </div>
                </section>

                <section className="padtop" id="static">
                    <div className="content">
                        <Headline title="Static Headers" link="#static" size="4" />
                        <div className="divider"></div>
                        <p>
                            By default, headers in Cirrus are not fixed to the top of the screen, but to the top of the
                            page. To create a static header, simply add the <code>header-fixed</code> selector to the
                            header to make it stick to the top of the screen.
                        </p>
                        <p>
                            A <b>normal</b> header.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-nofix.html"
                                title="Header Demo Not Fixed"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <p>
                            A <b>fixed</b> header.
                        </p>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-fix.html"
                                title="Header Demo Fixed"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                    </div>
                </section>

                <section className="padtop" id="themes">
                    <div className="content">
                        <Headline title="Themes" link="#themes" size="4" />
                        <div className="divider"></div>
                        <p>
                            When it comes to header themes, Cirrus's design language also applies to this component.
                            Below are some predefined <code>header</code> styles.
                        </p>

                        <h6>Default</h6>
                        <p>
                            By default, the <code>header</code> is designed with a white background with a drop shadow.
                            Text elements have the default text color of the framework <code>(#374054)</code> and links
                            have the default link color of the framework <code>(#8292a2)</code>.
                        </p>
                        <ul>
                            <li>
                                Text Color: <kbd style={{ background: '#374054', color: '#fff' }}>#374054</kbd>
                            </li>
                            <li>
                                Link Color: <kbd style={{ background: '#495057', color: '#fff' }}>#495057</kbd>
                            </li>
                            <li>
                                Background Color: <kbd style={{ background: '#fff', color: '#222' }}>#ffffff</kbd>
                            </li>
                        </ul>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head.html"
                                title="Header Demo Light"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <h6>Dark</h6>
                        <p>
                            The dark theme for the header bar adds a bold look to the overall webpage which contrasts
                            well with websites with bright colors while matching websites with darker colors. The design
                            blends well with other designs with a lower opacity than the default theme to allow for some
                            translucency.
                        </p>
                        <ul>
                            <li>
                                Text Color: <kbd style={{ background: '#fff', color: '#222' }}>#ffffff</kbd>
                            </li>
                            <li>
                                Link Color: <kbd style={{ background: '#fff', color: '#222' }}>#ffffff</kbd>
                            </li>
                            <li>
                                Background Color:{' '}
                                <kbd style={{ background: 'rgba(0, 0, 0, 0.87)', color: '#fff' }}>
                                    rgba(0, 0, 0, 0.87)
                                </kbd>
                            </li>
                        </ul>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-dark.html"
                                title="Header Demo Dark"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>

                        <h6>Clear</h6>
                        <p>
                            The clear theme is based on the default theme, but with a few minor changes. The background
                            is transparent instead of white, the box-shadow is removed, and the{' '}
                            <code>dropdown-menu</code> is rounded on all sides.
                        </p>
                        <ul>
                            <li>
                                Text Color: <kbd style={{ background: '#fff', color: '#222' }}>#ffffff</kbd>
                            </li>
                            <li>
                                Link Color: <kbd style={{ background: '#fff', color: '#222' }}>#ffffff</kbd>
                            </li>
                            <li>
                                Background Color: <kbd>transparent</kbd>
                            </li>
                        </ul>
                        <LazyLoad height={200}>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/header/demo-head-clear.html"
                                title="Header Demo Clear"
                                width="100%"
                            />
                        </LazyLoad>
                        <div className="space"></div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Frames', link: './frames' }}
                    nextLink={{ name: 'Height', link: './height' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(HeaderPage);
