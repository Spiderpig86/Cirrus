import React from 'react';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazyload';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';

export const TreePage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="trees">
                    <div className="content">
                        <Headline title="Trees" link="#trees" />
                        <div className="divider"></div>
                        <p>
                            A <code>tree</code> is a <b>CSS only</b> list that lays out <code>menu-items</code> in a
                            vertical menu with a toggle.{' '}
                        </p>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>
                        <p>
                            A <code>tree</code> has children that are denoted with the <code>tree-item</code> class. The{' '}
                            <code>tree-item</code> can then have menu list of <code>menu-items</code> in the{' '}
                            <code>tree-item-body</code> with the title above it being a <code>tree-item-header</code>.{' '}
                        </p>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="checkbox" id="color1" className="u-none" />
                                        <label className="tree-item-header" htmlFor="color1">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Color Palette 1
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">#364b60</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">#169f83</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">#2dcc71</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">#e57d1f</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">#eec10e</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h6>Structure</h6>
                                <ul>
                                    <li>
                                        <code>tree</code>
                                        <ul>
                                            <li>
                                                <code>input</code> - this input must either be a <code>checkbox</code>{' '}
                                                or <code>radio</code>. The input must also use the <code>u-none</code>{' '}
                                                class. The <code>id</code> must be the same as the associated{' '}
                                                <code>tree-item-header</code>.
                                            </li>
                                            <li>
                                                <code>tree-item-header</code> - the label that the user will click on to
                                                toggel the dropdown.
                                            </li>
                                            <li>
                                                <code>tree-item-body</code> consists of the <code>menu</code> to be
                                                shown.
                                                <ul>
                                                    <li>
                                                        <code>menu</code> - a standard{' '}
                                                        <Link href="./lists#menus">
                                                            <a className="u u-LR">Menu List</a>
                                                        </Link>
                                                        .
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            The toggle is created by a simple <code>input</code> (checkbox or radiobutton depending on
                            the behavior you want) with a check property.
                        </p>
                        <div className="space"></div>

                        <p className="title m-0">Regular Tree (Checkboxes)</p>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="checkbox" id="tree1" className="u-none" />
                                        <label className="tree-item-header" htmlFor="tree1">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Trees
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Oak</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Birch</a>
                                                </li>
                                                <li className="menu-item">
                                                    <div className="tree">
                                                        <input type="checkbox" id="tree2" className="u-none" />
                                                        <label className="tree-item-header" htmlFor="tree2">
                                                            <span className="icon">
                                                                <FontAwesomeIcon
                                                                    className="fa-wrapper small"
                                                                    icon={['fas', 'chevron-right']}
                                                                />
                                                            </span>
                                                            Evergreens
                                                        </label>
                                                        <div className="tree-item-body">
                                                            <ul className="menu">
                                                                <li className="menu-item">
                                                                    <a href="!#">Cedar</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="!#">Loblolly Pine</a>
                                                                </li>
                                                                <li className="menu-item">
                                                                    <a href="!#">Pitch Pine</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="checkbox" id="tree3" className="u-none" />
                                        <label className="tree-item-header" htmlFor="tree3">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Fruits
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Mangosteen</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Durian</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Jabuticaba</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="checkbox" id="tree4" className="u-none" />
                                        <label className="tree-item-header" htmlFor="tree4">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Flowers
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Jade Vine</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Ghost Orchid</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Corpse Flower</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <CodeBlock
                                    code={`<div class="tree">
    <div class="tree-item">
        <input type="checkbox" id="tree1" class="u-none">
        <label class="tree-item-header" for="tree1">
            <span class="icon">
                                    <i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i>
                                </span> Trees
        </label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Oak</a></li>
                <li class="menu-item"><a href="!#">Birch</a></li>
                <li class="menu-item">
                    <div class="tree">
                        <input type="checkbox" id="tree2" class="u-none">
                        <label class="tree-item-header" for="tree2">
                            <span class="icon">
                                                    <i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i>
                                                </span> Evergreens
                        </label>
                        <div class="tree-item-body">
                            <ul class="menu">
                                <li class="menu-item"><a href="!#">Cedar</a></li>
                                <li class="menu-item"><a href="!#">Loblolly Pine</a></li>
                                <li class="menu-item"><a href="!#">Pitch Pine</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="tree">
    <div class="tree-item">
        <input type="checkbox" id="tree3" class="u-none">
        <label class="tree-item-header" for="tree3">
            <span class="icon">
                                    <i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i>
                                </span> Fruits
        </label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Mangosteen</a></li>
                <li class="menu-item"><a href="!#">Durian</a></li>
                <li class="menu-item"><a href="!#">Jabuticaba</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="tree">
    <div class="tree-item">
        <input type="checkbox" id="tree4" class="u-none">
        <label class="tree-item-header" for="tree4">
            <span class="icon">
                                    <i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i>
                                </span> Flowers
        </label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Jade Vine</a></li>
                <li class="menu-item"><a href="!#">Ghost Orchid</a></li>
                <li class="menu-item"><a href="!#">Corpse Flower</a></li>
            </ul>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p className="title m-0">Exclusive Tree (Radio)</p>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="radio" id="tree5" className="u-none" name="radioTree" />
                                        <label className="tree-item-header" htmlFor="tree5">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Trees
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Oak</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Birch</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="radio" id="tree6" className="u-none" name="radioTree" />
                                        <label className="tree-item-header" htmlFor="tree6">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Fruits
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Mangosteen</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Durian</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Jabuticaba</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="radio" id="tree7" className="u-none" name="radioTree" />
                                        <label className="tree-item-header" htmlFor="tree7">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            Flowers
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Jade Vine</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Ghost Orchid</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Corpse Flower</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <CodeBlock
                                    code={`<div class="tree">
    <div class="tree-item">
        <input type="radio" id="tree5" class="u-none" name="radioTree">
        <label class="tree-item-header" for="tree5"><span class="icon"><i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Trees</label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Oak</a></li>
                <li class="menu-item"><a href="!#">Birch</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="tree">
    <div class="tree-item">
        <input type="radio" id="tree6" class="u-none" name="radioTree">
        <label class="tree-item-header" for="tree6"><span class="icon"><i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Fruits</label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Mangosteen</a></li>
                <li class="menu-item"><a href="!#">Durian</a></li>
                <li class="menu-item"><a href="!#">Jabuticaba</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="tree">
    <div class="tree-item">
        <input type="radio" id="tree7" class="u-none" name="radioTree">
        <label class="tree-item-header" for="tree7"><span class="icon"><i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>Flowers</label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Jade Vine</a></li>
                <li class="menu-item"><a href="!#">Ghost Orchid</a></li>
                <li class="menu-item"><a href="!#">Corpse Flower</a></li>
            </ul>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p className="title m-0">Mixed Tree</p>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="tree">
                                    <div className="tree-item">
                                        <input type="radio" id="mixTree1" className="u-none" />
                                        <label className="tree-item-header" htmlFor="mixTree1">
                                            <span className="icon">
                                                <FontAwesomeIcon
                                                    className="fa-wrapper small"
                                                    icon={['fas', 'chevron-right']}
                                                />
                                            </span>
                                            (Radio Button)
                                        </label>
                                        <div className="tree-item-body">
                                            <ul className="menu">
                                                <li className="menu-item">
                                                    <a href="!#">Menu Item 1</a>
                                                </li>
                                                <li className="menu-item">
                                                    <div className="tree">
                                                        <div className="tree-item">
                                                            <input type="checkbox" id="mixTree2" className="u-none" />
                                                            <label className="tree-item-header" htmlFor="mixTree2">
                                                                <span className="icon">
                                                                    <FontAwesomeIcon
                                                                        className="fa-wrapper small"
                                                                        icon={['fas', 'chevron-right']}
                                                                    />
                                                                </span>
                                                                (Checkbox)
                                                            </label>
                                                            <div className="tree-item-body">
                                                                <ul className="menu">
                                                                    <li className="menu-item">
                                                                        <a href="!#">Menu Item 1.1</a>
                                                                    </li>
                                                                    <li className="menu-item">
                                                                        <a href="!#">Menu Item 1.2</a>
                                                                    </li>
                                                                    <li className="menu-item">
                                                                        <a href="!#">Menu Item 1.3</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="!#">Menu Item 3</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <CodeBlock
                                    code={`<div class="tree">
    <div class="tree-item">
        <input type="radio" id="mixTree1" class="u-none">
        <label class="tree-item-header" for="mixTree1"><span class="icon"><i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>(Radio Button)</label>
        <div class="tree-item-body">
            <ul class="menu">
                <li class="menu-item"><a href="!#">Menu Item 1</a></li>
                <li class="menu-item">
                    <div class="tree">
                        <div class="tree-item">
                            <input type="checkbox" id="mixTree2" class="u-none">
                            <label class="tree-item-header" for="mixTree2"><span class="icon"><i class="fa fa-wrapper fa-chevron-right small" aria-hidden="true"></i></span>(Checkbox)</label>
                            <div class="tree-item-body">
                                <ul class="menu">
                                    <li class="menu-item"><a href="!#">Menu Item 1.1</a></li>
                                    <li class="menu-item"><a href="!#">Menu Item 1.2</a></li>
                                    <li class="menu-item"><a href="!#">Menu Item 1.3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="menu-item"><a href="!#">Menu Item 3</a></li>
            </ul>
        </div>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="layout">
                    <div className="content">
                        <Headline title="Tree Nav Layout" link="#layout" size="4" />
                        <div className="divider"></div>
                        <p>
                            A great way to use the <code>tree</code> class is by embedding it inside a{' '}
                            <code>tree-nav</code> as a fixed menu on the side of the page.
                        </p>
                        <h6>Structure</h6>
                        <ul>
                            <li>
                                <code>tree-nav-body</code>
                                <ul>
                                    <li>
                                        <code>tree-nav-header</code> - holds a link used to trigger the sidebar to
                                        appear. Visible on tablet or smaller screen dimensions.
                                    </li>
                                    <li>
                                        <code>tree-nav</code> - sidebar that appears on the left.
                                        <ul>
                                            <li>
                                                <code>tree</code> - the tree component mentioned above containing
                                                different menu options.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>tree-nav-close</code> - link used to represent a close button for the
                                        menu. Visible on tablet or smaller screen dimensions.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            For mobile devices <code>(&lt;= 768px)</code>, the <code>tree-nav-header</code> will be
                            visble to show a toggle switch to show the <code>tree-nav</code>.
                        </p>
                        <div className="space"></div>

                        <LazyLoad height={200} once>
                            <iframe
                                src="https://spiderpig86.github.io/Cirrus/0.6.0/docs/lists/tree-nav.html"
                                width="100%"
                                height="600"
                            ></iframe>
                        </LazyLoad>
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Tooltips', link: './tooltips' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(TreePage);
