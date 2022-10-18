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
import { TITLE_FORMS } from '../../../config/sidebar';

export const FormsRadioPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
        <Head>
            <title>{PAGE_TITLE_PREFIX} Radio</title>
        </Head>
            <div>
                <section className="padtop" id="radio">
                    <div className="content">
                        <Headline title="Radio" link="#radio" />
                        <div className="divider"></div>

                        <p>Cirrus comes with a styled version of a radio button.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>By default, radio buttons in Cirrus come with very minimal styling.</p>

                        <div className="row">
                            <div className="col-lg-6 u-center">
                                <label>
                                    <input type="radio" name="house" checked /> Starks
                                </label>
                                <label>
                                    <input type="radio" name="house" /> Lannisters
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<label><input type="radio" name="house" checked/> Starks</label>
<label><input type="radio" name="house" /> Lannisters</label>`} language="htmlbars" />
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
                        <p>The structure of an extended radio button is as follows:</p>
                        <ul>
                            <li>
                                <code>form-ext-control form-ext-radio</code>
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
                                <div className="form-ext-control form-ext-radio">
                                    <input id="radio-1a" name="customRadio1" className="form-ext-input" type="radio" />
                                    <label className="form-ext-label" htmlFor="radio-1a">
                                        Unselected
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-radio">
                                    <input
                                        id="radio-2a"
                                        name="customRadio1"
                                        className="form-ext-input"
                                        type="radio"
                                        defaultChecked
                                    />
                                    <label className="form-ext-label" htmlFor="radio-2a">
                                        Selected
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-radio">
                                    <input id="radio-3a" name="customRadio1" className="form-ext-input" type="radio" />
                                    <label className="form-ext-label" htmlFor="radio-3a">
                                        Unselected
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <CodeBlock
                                    code={`<div class="form-ext-control form-ext-radio">
    <input id="radio-1a" name="customRadio1" class="form-ext-input" type="radio">
    <label class="form-ext-label" for="radio-1a">Unselected</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="radio-2a" name="customRadio1" class="form-ext-input" type="radio" checked>
    <label class="form-ext-label" for="radio-2a">Selected</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="radio-3a" name="customRadio1" class="form-ext-input" type="radio">
    <label class="form-ext-label" for="radio-3a">Unselected</label>
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
                                
                            <div className="form-ext-control form-ext-radio">
                                    <input id="radio-1b" name="customRadio2" className="form-ext-input" type="radio" disabled/>
                                    <label className="form-ext-label" htmlFor="radio-1a">
                                        Unselected
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-radio">
                                    <input
                                        id="radio-2b"
                                        name="customRadio2"
                                        className="form-ext-input"
                                        type="radio"
                                        defaultChecked
                                        disabled
                                    />
                                    <label className="form-ext-label" htmlFor="radio-2a">
                                        Selected
                                    </label>
                                </div>
                                <div className="form-ext-control form-ext-radio">
                                    <input id="radio-3b" name="customRadio2" className="form-ext-input" type="radio" disabled/>
                                    <label className="form-ext-label" htmlFor="radio-3a">
                                        Unselected
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <CodeBlock
                                    code={`<div class="form-ext-control form-ext-radio">
    <input id="radio-1b" name="customRadio2" class="form-ext-input" type="radio" disabled />
    <label class="form-ext-label" for="radio-1a">Unselected</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="radio-2b" name="customRadio2" class="form-ext-input" type="radio" disabled checked />
    <label class="form-ext-label" for="radio-2a">Selected</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="radio-3b" name="customRadio2" class="form-ext-input" type="radio" disabled />
    <label class="form-ext-label" for="radio-3a">Unselected</label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space space--lg"></div>

                        <p>
                            The existing variants for checkboxes consists of all the{' '}
                            <Link href="/fundamentals/colors#v1">
                                <a className="u u-LR">
                                v1 colors
                                </a>
                            </Link>
                            .
                        </p>
                        <div className="row">
                            <div className="col-lg-3">
                                {v1Colors.map((color) => {
                                    return (
                                        <div className="form-ext-control form-ext-radio">
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
                                    code={`<div class="form-ext-control form-ext-radio">
    <input id="check-dark" class="form-ext-input form-ext-input--dark" type="checkbox" checked />
    <label class="form-ext-label" for="check-dark">dark</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-primary" class="form-ext-input form-ext-input--primary" type="checkbox" checked />
    <label class="form-ext-label" for="check-primary">primary</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-link" class="form-ext-input form-ext-input--link" type="checkbox" checked />
    <label class="form-ext-label" for="check-link">link</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-info" class="form-ext-input form-ext-input--info" type="checkbox" checked />
    <label class="form-ext-label" for="check-info">info</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-success" class="form-ext-input form-ext-input--success" type="checkbox" checked />
    <label class="form-ext-label" for="check-success">success</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-warning" class="form-ext-input form-ext-input--warning" type="checkbox" checked />
    <label class="form-ext-label" for="check-warning">warning</label>
</div>
<div class="form-ext-control form-ext-radio">
    <input id="check-danger" class="form-ext-input form-ext-input--danger" type="checkbox" checked />
    <label class="form-ext-label" for="check-danger">danger</label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_FORMS,
                        pageName: `Radio`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormsRadioPage);