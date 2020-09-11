import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { toc } from './toc';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const FormsInputsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
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
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Name:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="name" value="John Doe" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Email:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="email" value="john.doe@cirrus.io" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">URL:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="url" value="https://spiderpig86.github.io/Cirrus" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Search:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Telephone:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="tel" value="1-(800)-777-7777" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Password:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="password" value="password" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Number:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="number" value="420" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Date:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="date" value="2017-3-21" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Color:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="color" value="#f03d4d" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">File:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item">
                                        <input type="file" />
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Select:</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item input-control">
                                        <select className="select" placeholder="Choose one">
                                            <option>Shibe</option>
                                            <option>Doggo</option>
                                            <option>Pupper</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row ignore-screen level">
                                    <div className="col-3 ignore-screen level-item">
                                        <p className="m-0">Select (Multiple):</p>
                                    </div>
                                    <div className="col-9 ignore-screen level-item input-control">
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
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Name:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="name" value="John Doe"></div>
</div>
<!-- Email -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Email:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="email" value="john.doe@cirrus.io"></div>
</div>
<!-- Url -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">URL:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="url" value="https://spiderpig86.github.io/Cirrus"></div>
</div>
<!-- Search -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Search:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="search" placeholder="Search"></div>
</div>
<!-- Tel -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Telephone:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="tel" value="1-(800)-777-7777"></div>
</div>
<!-- Password -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Password:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="password" value="password"></div>
</div>
<!-- Number -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Number:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="number" value="420"></div>
</div>
<!-- Date -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Date:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="date" value="2017-3-21"></div>
</div>
<!-- Color -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Color:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="color" value="#f03d4d"></div>
</div>
<!-- File -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">File:</span></div>
    <div className="col-9 ignore-screen level-item"><input type="file"></div>
</div>
<!-- Select -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Select:</p></div>
    <div className="col-9 ignore-screen level-item input-control">
        <select className="select" placeholder="Choose one">
            <option>Shibe</option>
            <option>Doggo</option>
            <option>Pupper</option>
        </select>
    </div>
</div>
<!-- Select (Multiple) -->
<div className="row ignore-screen level">
    <div className="col-3 ignore-screen level-item"><p className="m-0">Select (Multiple):</p></div>
    <div className="col-9 ignore-screen level-item input-control">
        <select className="select" multiple>
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
                                    <input type="text" className="input-xsmall" placeholder="Extra small (0.65rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input-small" placeholder="Small (0.75rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" placeholder="Normal (0.85rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input-large" placeholder="Large (1.5rem)" />
                                </div>
                                <div className="input-control">
                                    <input type="text" className="input-xlarge" placeholder="Extra large (2rem)" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="text" class="input-xsmall" placeholder="Extra small (0.65rem)">
</div>
<div class="input-control">
    <input type="text" class="input-small" placeholder="Small (0.75rem)">
</div>
<div class="input-control">
    <input type="text" placeholder="Normal (0.85rem)">
</div>
<div class="input-control">
    <input type="text" class="input-large" placeholder="Large (1.5rem)">
</div>
<div class="input-control">
    <input type="text" class="input-xlarge" placeholder="Extra large (2rem)">
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <p>
                            The same sizing principle also applies to select controls. Select also uses the classes{' '}
                            <code>input-xsmall, input-small, input-large, and input-xlarge</code>.
                        </p>

                        <div className="input-control">
                            <select className="select input-xsmall" placeholder="Dropdown Xsmall">
                                <option value="1">Dropdown Xsmall</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select input-small" placeholder="Dropdown Small">
                                <option value="1">Dropdown Small</option>
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
                            <select className="select input-large" placeholder="Dropdown Large">
                                <option value="1">Dropdown Large</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <select className="select input-xlarge" placeholder="Dropdown Xlarge">
                                <option value="1">Dropdown Xlarge</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="input-control">
    <select class="select input-xsmall" placeholder="Dropdown Xsmall">
        <option value="1">Dropdown Xsmall</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select input-small" placeholder="Dropdown Small">
        <option value="1">Dropdown Small</option>
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
    <select class="select input-large" placeholder="Dropdown Large">
        <option value="1">Dropdown Large</option>
        <option value="2">2</option>
    </select>
</div>
<div class="input-control">
    <select class="select input-xlarge" placeholder="Dropdown Xlarge">
        <option value="1">Dropdown Xlarge</option>
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
                                <textarea>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </textarea>
                                <input type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<textarea>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input type="submit" class="btn-primary pull-right"/>`} language='htmlbars' />
                            </div>
                        </div>

                        
                        <p className="mb-0">
                            <b>Focused</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea className="input-focused">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </textarea>
                                <input disabled type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<textarea class="input-focused">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input type="submit" class="btn-primary pull-right"/>`} language='htmlbars' /></div>
                        </div>

                        <p className="mb-0">
                            <b>Disabled</b>
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <textarea disabled>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </textarea>
                                <input disabled type="submit" className="btn-primary pull-right" />
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock code={`<textarea disabled>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</textarea>
<input disabled type="submit" class="btn-primary pull-right"/>`} language='htmlbars' /></div>
                        </div>
                    </div>
                </section>

                <Pagination nextLink={{ name: 'States', link: './states' }} />
            </span>
            <TableOfContents entries={toc} />
        </main>
    );
};
