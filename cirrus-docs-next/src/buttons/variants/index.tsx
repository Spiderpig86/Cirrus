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
import { TITLE_BUTTONS } from '../../../config/sidebar';

export const VariantsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Button Variants</title>
            </Head>
            <div>
                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" />
                        <div className="divider"></div>
                        <p>
                            Besides your typical clickable button, buttons also come in other forms to support other use
                            case.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="animated">
                    <div className="content">
                        <Headline title="Animated Button" link="#animated" size={`4`} />
                        <div className="divider"></div>
                        <p>
                            The <code>.btn-animated</code> class adds a slight "push" to the button when clicked.
                        </p>

                        <div className="btn-container">
                            <button className="btn-animated">Button</button>
                        </div>
                        <div className="btn-container">
                            <div className="btn btn-animated">Button</div>
                        </div>
                        <div className="btn-container">
                            <input className="btn-animated" type="submit" value="Submit" />
                        </div>

                        <CodeBlock
                            code={`<button class="btn-animated">Button</button>
<div class="btn btn-animated">Button</div>
<input class="btn-animated" type="submit" value="Submit" />`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="disabled">
                    <div className="content">
                        <Headline title="Disabled Button" link="#disabled" size={`4`} />
                        <div className="divider"></div>
                        <p>
                            Add the <code>disabled</code> keyword to make the button unselectable. The same effect can also be achieved using the <code>btn--disabled</code> class.
                        </p>

                        <blockquote
                            className="bg-orange-100 text-orange-700"
                            style={{
                                fontSize: '1rem',
                            }}
                        >
                            Note that the <code>disabled</code> attribute is not supported in <code>a</code> and <code>div</code> based buttons according to the HTML spec. You must use the <code>btn--disabled</code> class.
                        </blockquote>

                        <div className="u-flex u-gap-1">
                            <button className="btn-info" disabled>
                                Disabled
                            </button>
                            <button className="btn-info btn--disabled">Disabled</button>
                            <div className="btn btn-info btn--disabled">Disabled</div>
                            <input className="btn-info" type="submit" disabled value="Submit Disabled" />
                            <a href="#" className="btn btn-info btn--disabled">
                                Disabled
                            </a>
                        </div>

                        <CodeBlock code={`<button class="btn-info btn--disabled">Disabled</button>
<div class="btn btn-info btn--disabled">Disabled</div>
<input class="btn-info" type="submit" disabled value="Submit Disabled" />
<a href="#" class="btn btn-info btn--disabled">Disabled</a>`} language="htmlbars" />
                    </div>
                </section>

                <section className="padtop" id="loading">
                    <div className="content">
                        <Headline title="Loading Button" link="#loading" size={`4`} />
                        <div className="divider"></div>
                        <p>
                            Add the <code>.animated</code> and <code>.loading</code> classes to create a button
                            containing a spinner. Since it relies on the button to contain text for height, you must
                            specify some text. To hide the text, you just need to add the <code>.hide-text</code> class
                            as well.
                        </p>

                        <button className="animated loading hide-text">123</button>

                        <CodeBlock
                            code={`<button class="animated loading hide-text">123</button>`}
                            language="htmlbars"
                        />

                        <p>
                            To display text, there are two helper classes created to show text to the left and right of
                            the spinner.
                        </p>

                        <p>
                            To set the spinner to appear to the left of text, use the <code>.loading-left</code> class.
                        </p>
                        <button className="animated loading loading-left btn-link">Loading</button>
                        <CodeBlock
                            code={`<button class="animated loading loading-left btn-link">Loading</button>`}
                            language="htmlbars"
                        />

                        <p>
                            To set the spinner to appear to the right of text, use the <code>.loading-right</code>{' '}
                            class.
                        </p>
                        <button className="animated loading loading-right btn-link">Loading</button>
                        <CodeBlock
                            code={`<button class="animated loading loading-right btn-link">Loading</button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="close">
                    <div className="content">
                        <Headline title="Close Button" link="#close" size={`4`} />
                        <div className="divider"></div>
                        <p>
                            This is the generic close button control that can be added to other components in Cirrus.
                            Below is an example of a <code>.frame</code> containing a <code>.btn-close</code>.
                        </p>

                        <div className="frame mb-3">
                            <div className="frame__header">
                                <span className="pb-1">
                                    <b>This is a popup.</b>
                                </span>
                                <button className="btn-close u-pull-right"></button>
                            </div>
                            <div className="frame__body">
                                <p>You can close me now.</p>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="frame">
    <div class="frame__header"><span class="pb-1"><b>This is a popup.</b></span>
        <button class="btn-close u-pull-right"></button>
    </div>
    <div class="frame__body">
        <p>You can close me now.</p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="shapes">
                    <div className="content">
                        <Headline title="Shapes" link="#shapes" size={`4`} />
                        <div className="divider"></div>
                        <p>Modifier classes can be used to change the shape of a button as shown below.</p>
                        <div className="space"></div>

                        <h6>Pilled</h6>
                        <p>
                            This provides a rounded shape for the button that closely resembles a pill with the{' '}
                            <code>btn--pilled</code> class.
                        </p>
                        <button className="btn-info btn--pilled">Test</button>
                        <CodeBlock code={`<button class="btn-info btn--pilled">Test</button>`} language="htmlbars" />
                        <div className="space"></div>

                        <h6>Circle</h6>
                        <p>
                            The <code>btn--circle</code> class turns a button into a circle. The circle size will scale
                            based on the contents of the button.
                        </p>
                        <button className="btn-danger btn--circle">
                            <b>Small</b>
                        </button>
                        <button className="btn-warning btn--circle">
                            <h6 className="px-2">Bigger</h6>
                        </button>
                        <button className="btn-success btn--circle">
                            <h3 className="px-2">Biggest</h3>
                        </button>

                        <CodeBlock
                            code={`<button class="btn-danger btn--circle"><b>Small</b></button>
<button class="btn-warning btn--circle"><h6 class="px-2">Bigger</h6></button>
<button class="btn-success btn--circle"><h3 class="px-2">Biggest</h3></button>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_BUTTONS,
                        pageName: `Variants`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(VariantsPage);
