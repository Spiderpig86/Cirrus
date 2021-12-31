import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const FormsTogglePage: React.FC<any> = (props) => {
    // TODO: Create constants
    const v1Colors = ['dark', 'primary', 'link', 'info', 'success', 'warning', 'danger'];
    return (
        <main className="page-layout">
        <Head>
            <title>{PAGE_TITLE_PREFIX} Toggle</title>
        </Head>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossOrigin="anonymous"
            ></link>
            <div>
                <section className="padtop" id="toggle">
                    <div className="content">
                        <Headline title="Toggle" link="#toggle" />
                        <div className="divider"></div>

                        <p>Toggles are CSS only components that are great for touch devices for user selection.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            Toggles are a custom Cirrus component not standard to the HTML spec and can be used as an
                            alternative to checkboxes.
                        </p>

                        <p>
                            Like the other extended form controls, toggles are built around using classes that have the{' '}
                            <code>form-ext-*</code> prefix.
                        </p>

                        <p>The structure of a toggle is as follows:</p>
                        <ul>
                            <li>
                                <code>form-ext-control</code>
                                <ul>
                                    <li>
                                        <code>form-ext-toggle__label</code>
                                        <ul>
                                            <li>
                                                <code>span</code>
                                            </li>
                                            <li>
                                                <code>form-ext-toggle</code>
                                                <ul>
                                                    <li>
                                                        <code>form-ext-input</code>
                                                    </li>
                                                    <li>
                                                        <code>form-ext-toggle__toggler</code>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="space"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle off</span>
                                        <div className="form-ext-toggle">
                                            <input name="toggleCheckbox" type="checkbox" className="form-ext-input" />
                                            <div className="form-ext-toggle__toggler">
                                                <i></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle on</span>
                                        <div className="form-ext-toggle">
                                            <input
                                                name="toggleCheckbox"
                                                type="checkbox"
                                                className="form-ext-input"
                                                defaultChecked
                                            />
                                            <div className="form-ext-toggle__toggler">
                                                <i></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle off</span>
        <div class="form-ext-toggle">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input" />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle on</span>
        <div class="form-ext-toggle">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="stylized">
                    <div className="content">
                        <Headline title="Stylized" link="#stylized" size="4" />
                        <div className="divider"></div>

                        <p>The toggles also come in many different variations.</p>

                        <p>
                            To make the toggle disabled, add the <code>disabled</code> property on the input itself.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle off</span>
                                        <div className="form-ext-toggle">
                                            <input
                                                name="toggleCheckbox"
                                                type="checkbox"
                                                className="form-ext-input"
                                                disabled
                                            />
                                            <div className="form-ext-toggle__toggler">
                                                <i></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle on</span>
                                        <div className="form-ext-toggle">
                                            <input
                                                name="toggleCheckbox"
                                                type="checkbox"
                                                className="form-ext-input"
                                                defaultChecked
                                                disabled
                                            />
                                            <div className="form-ext-toggle__toggler">
                                                <i></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle off</span>
        <div class="form-ext-toggle">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input" disabled />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle on</span>
        <div class="form-ext-toggle">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input" disabled checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>
                            The existing variants for checkboxes consists of all the{' '}
                            <Link href="/fundamentals/colors#v1">
                                <a className="u u-LR">v1 colors</a>
                            </Link>
                            .
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                {v1Colors.map((color) => {
                                    return (
                                        <div className="form-ext-control">
                                            <label className="form-ext-toggle__label">
                                                <span>{color}</span>
                                                <div className={`form-ext-toggle form-ext-toggle--${color}`}>
                                                    <input
                                                        name={`toggleCheckbox-${color}`}
                                                        type="checkbox"
                                                        className={`form-ext-input`}
                                                        defaultChecked
                                                    />
                                                    <div className="form-ext-toggle__toggler">
                                                        <i></i>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>dark</span>
        <div class="form-ext-toggle form-ext-toggle--dark">
            <input name="toggleCheckbox-dark" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>primary</span>
        <div class="form-ext-toggle form-ext-toggle--primary">
            <input name="toggleCheckbox-primary" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>link</span>
        <div class="form-ext-toggle form-ext-toggle--link">
            <input name="toggleCheckbox-link" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>info</span>
        <div class="form-ext-toggle form-ext-toggle--info">
            <input name="toggleCheckbox-info" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>success</span>
        <div class="form-ext-toggle form-ext-toggle--success">
            <input name="toggleCheckbox-success" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>warning</span>
        <div class="form-ext-toggle form-ext-toggle--warning">
            <input name="toggleCheckbox-warning" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>danger</span>
        <div class="form-ext-toggle form-ext-toggle--danger">
            <input name="toggleCheckbox-danger" type="checkbox" class="form-ext-input" checked />
            <div class="form-ext-toggle__toggler"><i></i></div>
        </div>
    </label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="glyphs">
                    <div className="content">
                        <Headline title="Glyphs" link="#glyphs" size="4" />
                        <div className="divider"></div>

                        <p>
                            You can also embed glyphs within your toggles. For the example used below, you must have
                            FontAwesome's CSS library loaded on the page.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle success</span>
                                        <div className="form-ext-toggle form-ext-toggle--success">
                                            <input name="toggleCheckbox" type="checkbox" className="form-ext-input" />
                                            <div className="form-ext-toggle__toggler">
                                                <i
                                                    className="fa"
                                                    data-check-icon=""
                                                    data-uncheck-icon=""
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-ext-control">
                                    <label className="form-ext-toggle__label">
                                        <span>Toggle error</span>
                                        <div className="form-ext-toggle form-ext-toggle--error">
                                            <input
                                                name="toggleCheckbox"
                                                type="checkbox"
                                                className="form-ext-input"
                                                defaultChecked
                                            />
                                            <div className="form-ext-toggle__toggler">
                                                <i
                                                    className="fa"
                                                    data-check-icon=""
                                                    data-uncheck-icon=""
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle success</span>
        <div class="form-ext-toggle form-ext-toggle--success">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input">
            <div class="form-ext-toggle__toggler"><i class="fa" data-check-icon="" data-uncheck-icon="" aria-hidden="true"></i></div>
        </div>
    </label>
</div>
<div class="form-ext-control">
    <label class="form-ext-toggle__label"><span>Toggle error</span>
        <div class="form-ext-toggle form-ext-toggle--error">
            <input name="toggleCheckbox" type="checkbox" class="form-ext-input" checked="">
            <div class="form-ext-toggle__toggler"><i class="fa" data-check-icon="" data-uncheck-icon="" aria-hidden="true"></i></div>
        </div>
    </label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Radio', link: './radio' }}
                    nextLink={{ name: 'Form Groups', link: './form-groups' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormsTogglePage);