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
import { PAGE_TITLE_PREFIX, v1Colors } from '../../../constants';

export const FormsCheckboxPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Checkbox</title>
            </Head>
            <div>
                <section className="padtop" id="checkbox">
                    <div className="content">
                        <Headline title="Checkbox" link="#checkbox" />
                        <div className="divider"></div>

                        <p>Cirrus comes with a styled version of a checkbox.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>By default, checkboxes in Cirrus come with very minimal styling.</p>

                        <div className="row">
                            <div className="col-lg-6 u-center">
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                                <label>
                                    <input type="checkbox" /> Read our{' '}
                                    <a href="!#" className="u-inline-block">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-ext-control form-ext-checkbox">
    <input id="check1" class="form-ext-input" type="checkbox">
    <label class="form-ext-label" for="check1">Unchecked</label>
</div>
<div class="form-ext-control form-ext-checkbox">
    <input id="check2" class="form-ext-input" type="checkbox" checked>
    <label class="form-ext-label" for="check2">Checked</label>
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

                        <p>
                            Stylized checkboxes are animated and come with different variations. Since this is part of
                            the extended controls styling, we use classes from the extended forms file which are
                            prefixed with <code>form-ext</code>.
                        </p>
                        <p>The structure of an extended checkbox is as follows:</p>
                        <ul>
                            <li>
                                <code>form-ext-control form-ext-checkbox</code>
                                <ul>
                                    <li>
                                        <code>form-ext-input</code>
                                    </li>
                                    <li>
                                        <code>form-ext-label</code>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-ext-control form-ext-checkbox">
                                    <input id="check1" className="form-ext-input" type="checkbox" />
                                    <label className="form-ext-label" htmlFor="check1">
                                        Unchecked
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-checkbox">
                                    <input id="check2" className="form-ext-input" type="checkbox" checked />
                                    <label className="form-ext-label" htmlFor="check2">
                                        Checked
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <CodeBlock
                                    code={`<div class="form-ext-control form-ext-checkbox">
    <input id="check1" class="form-ext-input" type="checkbox" disabled="">
    <label class="form-ext-label" for="check1">Unchecked</label>
</div>
<div class="form-ext-control form-ext-checkbox">
    <input id="check2" class="form-ext-input" type="checkbox" disabled="" checked />
    <label class="form-ext-label" for="check2">Checked</label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>
                            For disabled forms, just add the <code>disabled</code> property.
                        </p>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-ext-control form-ext-checkbox">
                                    <input id="check1" className="form-ext-input" type="checkbox" disabled />
                                    <label className="form-ext-label" htmlFor="check1">
                                        Unchecked
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-checkbox">
                                    <input id="check2" className="form-ext-input" type="checkbox" checked disabled />
                                    <label className="form-ext-label" htmlFor="check2">
                                        Checked
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <CodeBlock
                                    code={`<div class="form-ext-control form-ext-checkbox">
    <input id="check1" class="form-ext-input" type="checkbox" disabled />
    <label class="form-ext-label" for="check1">Unchecked</label>
</div>
<div class="form-ext-control form-ext-checkbox">
    <input id="check2" class="form-ext-input" type="checkbox" disabled checked />
    <label class="form-ext-label" for="check2">Checked</label>
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
                            <div className="col-lg-3">
                                {v1Colors.map((color) => {
                                    return (
                                        <div className="form-ext-control form-ext-checkbox">
                                            <input
                                                id={`check-${color}`}
                                                className={`form-ext-input form-ext-input--${color}`}
                                                type="checkbox"
                                                defaultChecked
                                            />
                                            <label className="form-ext-label" htmlFor={`check-${color}`}>
                                                {color}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="col-lg-9">
                                <CodeBlock
                                    code={`<div class="col-lg-6">
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-dark" class="form-ext-input form-ext-input--dark" type="checkbox" checked />
        <label class="form-ext-label" for="check-dark">dark</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-primary" class="form-ext-input form-ext-input--primary" type="checkbox" checked />
        <label class="form-ext-label" for="check-primary">primary</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-link" class="form-ext-input form-ext-input--link" type="checkbox" checked />
        <label class="form-ext-label" for="check-link">link</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-info" class="form-ext-input form-ext-input--info" type="checkbox" checked />
        <label class="form-ext-label" for="check-info">info</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-success" class="form-ext-input form-ext-input--success" type="checkbox" checked />
        <label class="form-ext-label" for="check-success">success</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-warning" class="form-ext-input form-ext-input--warning" type="checkbox" checked />
        <label class="form-ext-label" for="check-warning">warning</label>
    </div>
    <div class="form-ext-control form-ext-checkbox">
        <input id="check-danger" class="form-ext-input form-ext-input--danger" type="checkbox" checked />
        <label class="form-ext-label" for="check-danger">danger</label>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'With Glyphs', link: './glyphs' }}
                    nextLink={{ name: 'Radio', link: './radio' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormsCheckboxPage);
