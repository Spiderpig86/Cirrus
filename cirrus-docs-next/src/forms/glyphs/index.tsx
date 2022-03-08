import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const FormsGlyphsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Form Glyphs</title>
            </Head>
            <div>
                <section className="padtop" id="glyphs">
                    <div className="content">
                        <Headline title="Form Glyphs" link="#glyphs" />
                        <div className="divider"></div>

                        <p>To add greater context, glyphs can be used inside forms themselves.</p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            To include glyphs inside your <code>input</code>, just add the{' '}
                            <code>input-contains-icon</code> to the <code>input</code> control. The glyph itself will be
                            at the same level as the input and wrapped within a <code>span</code> with the{' '}
                            <code>icon</code> class. By default, the glyphs will appear on the left side.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input type="email" className="input-contains-icon" placeholder="Email" />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                                    </span>
                                </div>
                                <div className="input-control">
                                    <input type="password" className="input-contains-icon" placeholder="Password" />
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'lock']} />
                                    </span>
                                </div>
                                <button className="animated btn-success u-pull-right">Log In</button>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="email" class="input-contains-icon" placeholder="Email" /><span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
</div>
<div class="input-control">
    <input type="password" class="input-contains-icon" placeholder="Password" /><span class="icon"><i class="fa fa-wrapper fa-lock"></i></span>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>

                        <p>
                            To set it to the right, use the <code>input-contains-icon-right</code> class and the{' '}
                            <code>icon-right</code> class on the icon. There exists a{' '}
                            <code>input-contains-icon-left</code> class, but that accomplishes the same thing as the
                            version of the class above.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-control">
                                    <input
                                        type="password"
                                        className="input-contains-icon-right"
                                        placeholder="Password"
                                    />
                                    <span className="icon icon-right">
                                        <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="input-control">
    <input type="password" class="input-contains-icon-right" placeholder="Password" />
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
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
                        <p>
                            The glyphs embedded in the <code>input</code> fields will automatically size themselves to
                            fit the parent.
                        </p>

                        <div className="input-control">
                            <input
                                type="email"
                                className="input-contains-icon input-contains-icon-right input--xs"
                                placeholder="Extra Small"
                            />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                            </span>
                            <span className="icon icon-right">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                            </span>
                        </div>
                        <div className="input-control">
                            <input
                                type="email"
                                className="input-contains-icon input-contains-icon-right input--sm"
                                placeholder="Small"
                            />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                            </span>
                            <span className="icon icon-right">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                            </span>
                        </div>
                        <div className="input-control">
                            <input
                                type="email"
                                className="input-contains-icon input-contains-icon-right"
                                placeholder="Normal"
                            />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                            </span>
                            <span className="icon icon-right">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                            </span>
                        </div>
                        <div className="input-control">
                            <input
                                type="email"
                                className="input-contains-icon input-contains-icon-right input--lg"
                                placeholder="Large"
                            />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                            </span>
                            <span className="icon icon-right">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                            </span>
                        </div>
                        <div className="input-control">
                            <input
                                type="email"
                                className="input-contains-icon input-contains-icon-right input--xl"
                                placeholder="Extra Large"
                            />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                            </span>
                            <span className="icon icon-right">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'chevron-right']} />
                            </span>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="input-control">
    <input type="email" class="input-contains-icon input-contains-icon-right input--xs" placeholder="Extra Small"/>
    <span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
</div>
<div class="input-control">
    <input type="email" class="input-contains-icon input-contains-icon-right input--sm" placeholder="Small"/>
    <span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
</div>
<div class="input-control">
    <input type="email" class="input-contains-icon input-contains-icon-right" placeholder="Normal"/>
    <span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
</div>
<div class="input-control">
    <input type="email" class="input-contains-icon input-contains-icon-right input--lg" placeholder="Large"/>
    <span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
</div>
<div class="input-control">
    <input type="email" class="input-contains-icon input-contains-icon-right input--xl" placeholder="Extra Large"/>
    <span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
    <span class="icon icon-right"><i class="fa fa-wrapper fa-chevron-right" aria-hidden="true"></i></span>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination
                    prevLink={{ name: 'Inputs', link: './inputs' }}
                    nextLink={{ name: 'Checkbox', link: './checkbox' }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormsGlyphsPage);
