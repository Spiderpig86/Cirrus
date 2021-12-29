import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const FormsInputsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Form Inputs</title>
            </Head>
            <span>
                <section className="padtop" id="inputs">
                    <div className="content">
                        <Headline title="Inputs" link="#inputs" />
                        <div className="divider"></div>

                        <p>Cirrus inputs come with styling for all sorts of input types.</p>

                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div className="input-control">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-control">
                                        <select className="select" placeholder="Select One">
                                            <option value="I love this">I love Cirrus</option>
                                            <option value="I still love this">I also love Cirrus</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" className="btn-primary" />
                            </div>
                        </form>
                    </div>
                </section>
                <section className="padtop" id="types">
                    <div className="content">
                        <Headline title="Input Types" link="#types" size="4" />
                        <div className="divider"></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Name:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="name" value="John Doe" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Email:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="email" value="john.doe@cirrus.io" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">URL:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="url" value="https://spiderpig86.github.io/Cirrus" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Search:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Telephone:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="tel" value="1-(800)-777-7777" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Password:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="password" value="password" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Number:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="number" value="420" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Date:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="date" value="2017-3-21" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Time:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="time" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Color:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="color" value="#f03d4d" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">File:</p>
                                    </div>
                                    <div className="col-xs-9 level-item">
                                        <input type="file" />
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Select:</p>
                                    </div>
                                    <div className="col-xs-9 level-item input-control">
                                        <select className="select" placeholder="Choose one">
                                            <option>Shibe</option>
                                            <option>Doggo</option>
                                            <option>Pupper</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row level">
                                    <div className="col-xs-3 level-item">
                                        <p className="m-0">Select (Multiple):</p>
                                    </div>
                                    <div className="col-xs-9 level-item input-control">
                                        <select className="select" multiple>
                                            <option>Shibe</option>
                                            <option>Doggo</option>
                                            <option>Pupper</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<!-- Name -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Name:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="name" value="John Doe"></div>
</div>
<!-- Email -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Email:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="email" value="john.doe@cirrus.io"></div>
</div>
<!-- Url -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">URL:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="url" value="https://spiderpig86.github.io/Cirrus"></div>
</div>
<!-- Search -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Search:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="search" placeholder="Search"></div>
</div>
<!-- Tel -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Telephone:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="tel" value="1-(800)-777-7777"></div>
</div>
<!-- Password -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Password:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="password" value="password"></div>
</div>
<!-- Number -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Number:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="number" value="420"></div>
</div>
<!-- Date -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Date:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="date" value="2017-3-21"></div>
</div>
<!-- Time -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Time:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="time"></div>
</div>
<!-- Color -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Color:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="color" value="#f03d4d"></div>
</div>
<!-- File -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">File:</p>
    </div>
    <div class="col-xs-9 level-item"><input type="file"></div>
</div>
<!-- Select -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Select:</p>
    </div>
    <div class="col-xs-9 level-item input-control">
        <select class="select" placeholder="Choose one">
            <option>Shibe</option>
            <option>Doggo</option>
            <option>Pupper</option>
        </select>
    </div>
</div>
<!-- Select (Multiple) -->
<div class="row level">
    <div class="col-xs-3 level-item">
        <p class="m-0">Select (Multiple):</p>
    </div>
    <div class="col-xs-9 level-item input-control">
        <select class="select" multiple>
            <option>Shibe</option>
            <option>Doggo</option>
            <option>Pupper</option>
        </select>
    </div>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>Inputs come in extra small, small, normal, large and extra large size configurations.</p>
                        <div className="space"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input type="text" className="input--xs" placeholder="Extra small (0.75rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input--sm" placeholder="Small (0.875rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" placeholder="Normal (1rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input--lg" placeholder="Large (1.25rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input--xl" placeholder="Extra large (1.5rem)" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="text" class="input--xs" placeholder="Extra small (0.75rem)">
</div>
<div class="input-control">
    <input type="text" class="input--sm" placeholder="Small (0.875rem)">
</div>
<div class="input-control">
    <input type="text" placeholder="Normal (1rem)">
</div>
<div class="input-control">
    <input type="text" class="input--lg" placeholder="Large (1.25rem)">
</div>
<div class="input-control">
    <input type="text" class="input--xl" placeholder="Extra large (1.5rem)">
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <p>
                            The same sizing principle also applies to select controls. Select also uses the classes{' '}
                            <code>input--xs, input--sm, input--lg, and input--xl</code>.
                        </p>

                        <div className="input-control">
                            <select className="select input--xs" placeholder="Dropdown Xs">
                                <option value="1">Dropdown Xs</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select input--sm" placeholder="Dropdown Sm">
                                <option value="1">Dropdown Sm</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select" placeholder="Dropdown Normal">
                                <option value="1">Dropdown Normal</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select input--lg" placeholder="Dropdown Lg">
                                <option value="1">Dropdown Lg</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select input--xl" placeholder="Dropdown Xl">
                                <option value="1">Dropdown Xl</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="input-control">
    <select class="select input--xs" placeholder="Dropdown Xs">
        <option value="1">Dropdown Xs</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select input--sm" placeholder="Dropdown Small">
        <option value="1">Dropdown Sm</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select" placeholder="Dropdown Normal">
        <option value="1">Dropdown normal</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select input--lg" placeholder="Dropdown Large">
        <option value="1">Dropdown Lg</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select input--xl" placeholder="Dropdown Xlarge">
        <option value="1">Dropdown Xl</option>
        <option value="2">2</option>
    </select>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>
                <section className="padtop" id="states">
                    <div className="content">
                        <Headline title="States" link="#states" size="4" />
                        <div className="divider"></div>
                        <p>
                            Inputs also have states that trigger based on user interaction or by setting a specific
                            class.
                        </p>
                        <h6>States</h6>

                        <p>
                            <b>Normal</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input type="text" placeholder="Normal state" />
                                </div>
                                <div className="input-control">
                                    <select className="select" placeholder="Dropdown">
                                        <option value="1">Normal state</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="text" placeholder="Normal state" />
</div>
<div class="input-control">
    <select class="select" placeholder="Dropdown">
        <option value="1">Normal state</option>
    </select>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Focused</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input type="text" className="input-focused" placeholder="Focused state" />
                                </div>
                                <div className="input-control">
                                    <select className="select input-focused" placeholder="Dropdown">
                                        <option value="1">Focused state</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
<input type="text" class="input-focused" placeholder="Focused state" />
</div>
<div class="input-control">
<select class="select input-focused" placeholder="Dropdown">
    <option value="1">Focused state</option>
</select>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Disabled</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input disabled type="text" placeholder="Disabled state" />
                                </div>
                                <div className="input-control">
                                    <select disabled className="select" placeholder="Dropdown">
                                        <option value="1">Disabled state</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
<input disabled type="text" placeholder="Disabled state" />
</div>
<div class="input-control">
<select disabled class="select" placeholder="Dropdown" />
    <option value="1">Disabled state</option>
</select>
</div>
<div class="row">
<input disabled type="checkbox"> Check this</input>
<input disabled type="radio"> I'm a radio button.</input>
</div>
<input disabled type="submit" class="animated" />`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Success</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input
                                        type="text"
                                        className="text-success input-success"
                                        placeholder="Success state"
                                    />
                                </div>
                                <div className="input-control">
                                    <select className="select text-success input-success" placeholder="Dropdown">
                                        <option value="1">Success state</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="text" class="text-success input-success" placeholder="Success state" />
</div>
<div class="input-control">
    <select class="select text-success input-success" placeholder="Dropdown">
        <option value="1">Success state</option>
    </select>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            <b>Error</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input
                                        type="text"
                                        className="text-danger input-error"
                                        placeholder="Success state"
                                    />
                                </div>
                                <div className="input-control">
                                    <select className="select text-danger input-error" placeholder="Dropdown">
                                        <option value="1">Error/Danger state</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="text" class="text-danger input-error" placeholder="Success state" />
</div>
<div class="input-control">
    <select class="select text-danger input-error" placeholder="Dropdown">
        <option value="1">Error/Danger state</option>
    </select>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padtop" id="label">
                    <div className="content">
                        <Headline title="Label" link="#label" size="4" />
                        <div className="divider"></div>

                        <p>
                            Labels are quite basic within Cirrus's forms. An additional <code>info</code> class exists
                            for labels that are meant to serve as footnotes or additional context in a form.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <label>Regular Label</label>
                                <input type="text" placeholder="The label above is a regular label." />
                                <span className="info u-text-center">
                                    I am using the <code>info</code> class.
                                </span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="col-lg-6">
    <label>Regular Label</label>
    <input type="text" placeholder="The label above is a regular label." />
    <span class="info u-text-center">I am using the <code>info</code> class.</span>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <label>Email</label>
                                <input type="text" placeholder="john.doe@cirrus.io" />
                                <span className="info u-text-center">We promise we won't spam!</span>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<label>Email</label>
<input type="text" placeholder="john.doe@cirrus.io" />
<span class="info u-text-center">We promise we won't spam!</span>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padtop" id="textarea">
                    <div className="content">
                        <Headline title="TextArea" link="#textarea" size="4" />
                        <div className="divider"></div>
                        <p>
                            Text areas are a great way to allow users to input more data with multiline support compared
                            to a regular text field.
                        </p>
                        <textarea placeholder="I'm resizable!"></textarea>

                        <h6>States</h6>
                        <p className="mb-0">
                            <b>Normal</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea
                                    defaultValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.`}
                                ></textarea>
                                <input type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<textarea>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input type="submit" class="btn-primary pull-right"/>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="mb-0">
                            <b>Focused</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea
                                    className="input-focused"
                                    defaultValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.`}
                                ></textarea>
                                <input disabled type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<textarea class="input-focused">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input type="submit" class="btn-primary pull-right"/>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p className="mb-0">
                            <b>Disabled</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea
                                    disabled
                                    defaultValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.`}
                                ></textarea>
                                <input disabled type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<textarea disabled>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input disabled type="submit" class="btn-primary pull-right"/>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Pagination nextLink={{ name: 'With Glyphs', link: './glyphs' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormsInputsPage);
