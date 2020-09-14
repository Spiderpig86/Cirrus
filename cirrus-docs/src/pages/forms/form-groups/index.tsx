import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const FormGroupsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="toggle">
                    <div className="content">
                        <Headline title="Toggle" link="#toggle" />
                        <div className="divider"></div>

                        <p>
                            Cirrus allows you to bundle input fields in form groups with other components such as
                            buttons, dropdown menus, or labels using the <code>form-group</code> class. This adds some
                            unique styling to the elements creating a unified design when combining these components
                            together.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            Form groups come with their own set of helper classes that adds the grouping behavior to the
                            corresponding supported elements: <code>form-group-btn</code>, <code>form-group-input</code>
                            , and <code>form-group-label</code>.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="search" className="form-group-input" placeholder="Search" />
                                    <button className="form-group-btn">Go</button>
                                </div>
                                <div className="form-group">
                                    <label className="form-group-label">$</label>
                                    <input
                                        type="number"
                                        className="form-group-input"
                                        placeholder="How much would you like to donate?"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<div class="form-group">
    <input type="search" class="form-group-input" placeholder="Search"/>
    <button class="form-group-btn">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label">$</label>
    <input type="number" class="form-group-input" placeholder="How much would you like to donate?"/>
</div>`} language="htmlbars" />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            To display controls like buttons and labels on the right side, just place that component
                            last.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="number" className="form-group-input" placeholder="How about now?" />
                                    <label className="form-group-label">$</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<div class="form-group">
    <input type="number" class="form-group-input" placeholder="How about now?"/>
    <label class="form-group-label">$</label>
</div>`} language="htmlbars" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            And of course, more controls can be combined with each other with different sizes. To make
                            things easier, Cirrus is designed to make components to fit with other same sized controls.
                            For instance, any <code>*-small</code> class matches with all components that have the{' '}
                            <code>small</code> class.
                        </p>
                        <div className="form-group">
                            <label className="form-group-label label-xsmall">github.com/</label>
                            <input type="text" className="form-group-input input-xsmall" placeholder="Extra Small" />
                            <button className="form-group-btn btn-primary btn-xsmall">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label-small">github.com/</label>
                            <input type="text" className="form-group-input input-small" placeholder="Small" />
                            <button className="form-group-btn btn-primary btn-small">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">github.com/</label>
                            <input type="text" className="form-group-input" placeholder="Normal" />
                            <button className="btn-primary form-group-btn">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label-large">github.com/</label>
                            <input type="text" className="form-group-input input-large" placeholder="Large" />
                            <button className="form-group-btn btn-primary btn-large">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label-xlarge">github.com/</label>
                            <input type="text" className="form-group-input input-xlarge" placeholder="Extra Large" />
                            <button className="form-group-btn btn-primary btn-xlarge">Go</button>
                        </div>
                        <div className="space"></div>
                        <CodeBlock code={``} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="example">
                    <div className="content">
                        <Headline title="Example" link="#example" size="4" />
                        <div className="divider"></div>
                        <p>Below is an example form that uses a bunch of different fields together.</p>

                        <div className="u-no-padding">
                            <div className="mb-1">
                                <label className="font-bold">Contact</label>
                                <div className="section-body row">
                                    <div className="col-6 pl-0">
                                        <div className="input-control">
                                            <input
                                                className="input-contains-icon input-contains-icon input-contains-icon-left"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <span className="icon icon-left">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'user']} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-0">
                                        <div className="input-control">
                                            <input
                                                className="input-contains-icon input-contains-icon-left input-contains-icon-right text-success input-success"
                                                type="text"
                                                placeholder="Email"
                                                value="somebodyoncetoldme@gmail.com"
                                            />
                                            <span className="icon icon-left">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                                            </span>
                                            <span className="icon icon-right">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'check']} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <label className="font-bold">
                                    Phone <span className="info inline font-light">We are not telemarketers.</span>
                                </label>
                                <div className="section-body">
                                    <div className="form-group">
                                        <label className="form-group-label">+1</label>
                                        <input
                                            type="text"
                                            className="form-group-input"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-1 col-6 pl-0">
                                    <label className="font-bold">Choose One</label>
                                    <select className="select" placeholder="Choose one">
                                        <option>Shibe</option>
                                        <option>Doggo</option>
                                        <option>Pupper</option>
                                    </select>
                                </div>
                                <div className="mb-1 col-6 pr-0">
                                    <label className="font-bold label-small">
                                        Select One <span className="required">*</span>
                                    </label>
                                    <div className="section-body">
                                        <label className="radio">
                                            <input type="radio" name="member" />
                                            Yes
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="member" />
                                            No
                                        </label>
                                    </div>
                                    <span className="required info">This section is required.</span>
                                </div>
                            </div>
                            <div className="mb-1">
                                <label className="font-bold">Message</label>
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="mb-1">
    <label class="font-bold">Contact</label>
    <div class="section-body row">
        <div class="col-6 pl-0">
            <div class="input-control">
                <input class="input-contains-icon input-contains-icon input-contains-icon-left" type="text" placeholder="Name" />
                <span class="icon icon-left"><i class="fa fa-wrapper fa-user" aria-hidden="true"></i></span>
            </div>
        </div>
        <div class="col-6 pr-0">
            <div class="input-control">
                <input class="input-contains-icon input-contains-icon-left input-contains-icon-right text-success input-success" type="text" placeholder="Email" value="somebodyoncetoldme@gmail.com" />
                <span class="icon icon-left"><i class="fa fa-wrapper fa-envelope" aria-hidden="true"></i></span>
                <span class="icon icon-right"><i class="fa fa-wrapper fa-check" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
</div>
<div class="mb-1">
    <label class="font-bold">Phone <span class="info inline font-light">We are not telemarketers.</span></label>
    <div class="section-body">
        <div class="form-group">
            <label class="form-group-label">+1</label>
            <input type="text" class="form-group-input" placeholder="Enter your phone number" />
        </div>
    </div>
</div>
<div class="row">
    <div class="mb-1 col-6 pl-0">
        <label class="font-bold">Choose One</label>
        <select class="select" placeholder="Choose one">
            <option>Shibe</option>
            <option>Doggo</option>
            <option>Pupper</option>
        </select>
    </div>
    <div class="mb-1 col-6 pr-0">
        <label class="font-bold label-small">Select One <span class="required">*</span></label>
        <div class="section-body">
            <label class="radio">
                <input type="radio" name="member" /> Yes
            </label>
            <label class="radio">
                <input type="radio" name="member" /> No
            </label>
        </div>
        <span class="required info">This section is required.</span>
    </div>
</div>
<div class="mb-1">
    <label class="font-bold">Message</label>
    <textarea placeholder="Enter your message"></textarea>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Toggle', link: './toggle' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
