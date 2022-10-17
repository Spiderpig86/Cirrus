import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Modal } from './components/modal';
import { ExternalLink } from '../../../layouts/components/link';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';
import { TITLE_ELEMENTS } from '../../../config/sidebar';

export const ModalsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Modals</title>
            </Head>
            <div>
                <Modal id="example-modal" />
                <Modal id="structure-modal">
                    <div className="modal-header bg-gray-100">
                        <p className="font-bold">modal-header</p>
                    </div>
                    <div className="modal-body bg-gray-200">
                        <p className="font-bold">modal-body</p>
                    </div>
                    <div className="modal-footer bg-gray-300">
                        <p className="font-bold">modal-footer</p>
                    </div>
                </Modal>
                <Modal id="basic-modal" animation="modal-animated--zoom-in">
                    <div className="modal-header">
                        <a href="#components" className="u-pull-right" aria-label="Close">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'times']} />
                            </span>
                        </a>
                        <div className="modal-title">Invite</div>
                    </div>
                    <div className="modal-body">
                        <div className="r">
                            <h3 className="font-alt font-light u-text-center">Invite people to project</h3>
                        </div>
                        <div className="space"></div>
                        <div className="input-control">
                            <input type="text" className="input-contains-icon" placeholder="Search for team members" />
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'plus']}></FontAwesomeIcon>
                            </span>
                        </div>
                        <div className="divider"></div>

                        <div className="my-1">
                            <div
                                className="tile tile--center py-1 px-2 my-1"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar text-white bg-teal-400" data-text="Jn"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">John Newman</p>
                                    <p className="tile__subtitle m-0">jnewman@gmail.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'plus']}
                                            ></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="tile tile--center py-1 px-2 my-1"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar text-white bg-teal-500" data-text="Fw"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Franklin Watson</p>
                                    <p className="tile__subtitle m-0">fwatsonm@gmail.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'plus']}
                                            ></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="tile tile--center py-1 px-2 my-1"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar text-white bg-teal-600" data-text="Cr"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Cornelia Roberts</p>
                                    <p className="tile__subtitle m-0">croberts@outlook.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-danger btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'times']}
                                            ></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="tile tile--center py-1 px-2 my-1"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar text-white bg-teal-700" data-text="Da"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Dominic Alvarado</p>
                                    <p className="tile__subtitle m-0">dalvarado@yahoo.com</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'plus']}
                                            ></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="tile tile--center py-1 px-2 my-1"
                                style={{
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03)',
                                }}
                            >
                                <div className="tile__icon">
                                    <figure className="avatar text-white bg-teal-800" data-text="Sl"></figure>
                                </div>
                                <div className="tile__container">
                                    <p className="tile__title m-0">Stanley Lim</p>
                                    <p className="tile__subtitle m-0">slim@stanleylim.me</p>
                                </div>
                                <div className="tile__buttons">
                                    <button className="btn-success btn--sm uppercase">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'plus']}
                                            ></FontAwesomeIcon>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="form-section u-text-right">
                            <a href="#components">
                                <button className="btn btn--sm u-inline-block">Cancel</button>
                            </a>
                            <a href="#components">
                                <button className="btn-info btn--sm u-inline-block">Confirm</button>
                            </a>
                        </div>
                    </div>
                </Modal>

                <Modal id="small-modal" size="modal-small" />
                <Modal id="normal-modal" />
                <Modal id="large-modal" size="modal-large" />

                <Modal id="dropdown-modal" animation="modal-animated--dropdown" />
                <Modal id="in-modal" animation="modal-animated--zoom-in" />
                <Modal id="out-modal" animation="modal-animated--zoom-out" />

                <section className="padtop" id="modals">
                    <div className="content">
                        <Headline title="Modals" link="#modals" />
                        <div className="divider"></div>

                        <p>Modals are CSS-powered prompts designed for any site.</p>
                        <a href="#example-modal">
                            <button className="btn-primary">Show Dialog</button>
                        </a>
                    </div>
                </section>

                <section className="padtop" id="structure">
                    <div className="content">
                        <Headline title="Structure" link="#structure" size="4" />
                        <div className="divider"></div>
                        <p>
                            A <code>modal</code> comprises of these classes:
                        </p>

                        <ul>
                            <li>
                                <code>modal</code> - the darkened translucent background around{' '}
                                <code>modal-content</code>
                                <ul>
                                    <li>
                                        <code>modal-content</code> - the main dialog itself.
                                        <ul>
                                            <li>
                                                <code>modal-header</code> - header or title bar of the dialog.
                                            </li>
                                            <li>
                                                <code>modal-body</code> - main contents of the dialog.
                                            </li>
                                            <li>
                                                <code>modal-footer</code> - bottom portion of dialog.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a href="#structure-modal">
                            <button className="btn-primary">Structure Dialog</button>
                        </a>
                    </div>
                </section>

                <section className="padtop" id="basic">
                    <div className="content">
                        <Headline title="Basic" link="#basic" size="4" />
                        <div className="divider"></div>
                        <p>
                            There is quite a lot of flexibility when it comes to building your modal dialog. Typically,
                            the <code>modal-header</code> consists of some title and a close button, the{' '}
                            <code>modal-body</code> has whatever content you want, and the <code>modal-footer</code>{' '}
                            consists of buttons to act on a prompt.
                        </p>

                        <p>
                            <b>Opening a Modal</b>
                        </p>
                        <p>
                            To open a modal, a link must be used with the <code>href</code> set to be the{' '}
                            <code>id</code> of the modal. For example, if I create a <code>modal</code> with{' '}
                            <code>id</code> <code>test-modal</code>, then the <code>href</code> of the link to open the{' '}
                            <code>modal</code> should be set to <code>#test-modal</code>.
                        </p>
                        <CodeBlock
                            code={`<div class="modal" id="test-modal">
    <!-- Modal stuff -->
</div>

<a href="#test-modal">Open Modal</a>`}
                            language="htmlbars"
                        />

                        <p>
                            <b>Close Button Creation/Behavior</b>
                        </p>
                        <p>
                            The close button can be created using the <code>btn-close</code> class, but the examples
                            shown here, we will be using a FontAwesome glyph wrapped with a link.
                        </p>
                        <CodeBlock
                            code={`<div class="modal" id="test-modal">
    <div class="modal-header">
        <a href="#anchor-to-background" class="u-pull-right" aria-label="Close">
            <span class="icon">
                <i class="fa-wrapper fa fa-times></i>
            </span>
        </a>
    </div>
</div>`}
                            language="htmlbars"
                        />

                        <p>
                            Notice that the close link must be wrapped by an anchor tag containing an <code>href</code>{' '}
                            to some HTML element. The value you put in this <code>href</code> will alter the close
                            behavior of the modal dialog.
                        </p>

                        <p>
                            <b>Return to Specific Div</b>
                        </p>
                        <CodeBlock
                            code={`<a href="#TAG-OUTSIDE" class="modal-overlay close-btn" aria-label="Close"></a>`}
                            language="htmlbars"
                        />
                        <p>
                            <b>Return to Top</b>
                        </p>
                        <CodeBlock
                            code={`<a href="!#" class="modal-overlay close-btn" aria-label="Close"></a>`}
                            language="htmlbars"
                        />
                        <p>
                            <b>Keep Scroll Position</b>
                        </p>
                        <CodeBlock
                            code={`<a href="#NON-EXISTANT-DIV" class="modal-overlay close-btn" aria-label="Close"></a>`}
                            language="htmlbars"
                        />

                        <p>Below is an example of a basic modal dialog.</p>
                        <a href="#basic-modal">
                            <button className="btn-primary">Basic Dialog</button>
                        </a>
                        <div className="space"></div>

                        <CodeBlock
                            code={`<div class="modal modal-animated--zoom-in" id="basic-modal">
    <a href="#searchModalDialog" class="modal-overlay close-btn" aria-label="Close"></a>
    <div class="modal-content" role="document">
        <div class="modal-header"><a href="#components" class="u-pull-right" aria-label="Close"><span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 fa-wrapper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></span></a>
            <div class="modal-title">Invite</div>
        </div>
        <div class="modal-body">
            <div class="r">
                <h3 class="font-alt font-light u-text-center">Invite people to project</h3></div>
            <div class="space"></div>
            <div class="input-control">
                <input type="text" class="input-contains-icon" placeholder="Search for team members"><span class="icon"></div>
            <div class="divider"></div>
            <div class="my-1">
                <div class="tile tile--center py-1 px-2 my-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px 3px 6px;">
                    <div class="tile__icon">
                        <figure class="avatar text-white bg-teal-400" data-text="Jn"></figure>
                    </div>
                    <div class="tile__container">
                        <p class="tile__title m-0">John Newman</p>
                        <p class="tile__subtitle m-0">jnewman@gmail.com</p>
                    </div>
                    <div class="tile__buttons">
                        <button class="btn-success btn--sm uppercase"><span class="icon"></span></button>
                    </div>
                </div>
                <div class="tile tile--center py-1 px-2 my-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px 3px 6px;">
                    <div class="tile__icon">
                        <figure class="avatar text-white bg-teal-500" data-text="Fw"></figure>
                    </div>
                    <div class="tile__container">
                        <p class="tile__title m-0">Franklin Watson</p>
                        <p class="tile__subtitle m-0">fwatsonm@gmail.com</p>
                    </div>
                    <div class="tile__buttons">
                        <button class="btn-success btn--sm uppercase"><span class="icon"></span></button>
                    </div>
                </div>
                <div class="tile tile--center py-1 px-2 my-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px 3px 6px;">
                    <div class="tile__icon">
                        <figure class="avatar text-white bg-teal-600" data-text="Cr"></figure>
                    </div>
                    <div class="tile__container">
                        <p class="tile__title m-0">Cornelia Roberts</p>
                        <p class="tile__subtitle m-0">croberts@outlook.com</p>
                    </div>
                    <div class="tile__buttons">
                        <button class="btn-danger btn--sm uppercase"><span class="icon"></span></button>
                    </div>
                </div>
                <div class="tile tile--center py-1 px-2 my-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px 3px 6px;">
                    <div class="tile__icon">
                        <figure class="avatar text-white bg-teal-700" data-text="Da"></figure>
                    </div>
                    <div class="tile__container">
                        <p class="tile__title m-0">Dominic Alvarado</p>
                        <p class="tile__subtitle m-0">dalvarado@yahoo.com</p>
                    </div>
                    <div class="tile__buttons">
                        <button class="btn-success btn--sm uppercase"><span class="icon"></span></button>
                    </div>
                </div>
                <div class="tile tile--center py-1 px-2 my-1" style="box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.03) 0px 3px 6px;">
                    <div class="tile__icon">
                        <figure class="avatar text-white bg-teal-800" data-text="Sl"></figure>
                    </div>
                    <div class="tile__container">
                        <p class="tile__title m-0">Stanley Lim</p>
                        <p class="tile__subtitle m-0">slim@stanleylim.me</p>
                    </div>
                    <div class="tile__buttons">
                        <button class="btn-success btn--sm uppercase"><span class="icon"></span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-section u-text-right">
                <a href="#components">
                    <button class="btn btn--sm u-inline-block">Cancel</button>
                </a>
                <a href="#components">
                    <button class="btn-info btn--sm u-inline-block">Confirm</button>
                </a>
            </div>
        </div>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            Modals come in 3 sizes: <code>modal-small</code>, normal, and <code>modal-large</code>.
                            Append these classes to <code>modal</code> to set the size.
                        </p>

                        <div className="u-text-center mt-3">
                            <a href="#small-modal">
                                <button className="px-3">Small</button>
                            </a>
                            <a href="#normal-modal">
                                <button className="px-3">Normal</button>
                            </a>
                            <a href="#large-modal">
                                <button className="px-3">Large</button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="animations">
                    <div className="content">
                        <Headline title="Animations" link="#animations" size="4" />
                        <div className="divider"></div>
                        <p>
                            Modals have 3 animations: <code>modal-animated--dropdown</code>,{' '}
                            <code>modal-animated--zoom-in</code>, and <code>modal-animated--zoom-out</code>. Append
                            these classes to <code>modal</code> to set the animation mode.
                        </p>

                        <div className="u-text-center mt-3">
                            <a href="#dropdown-modal">
                                <button className="px-3">Dropdown</button>
                            </a>
                            <a href="#in-modal">
                                <button className="px-3">Zoom In</button>
                            </a>
                            <a href="#out-modal">
                                <button className="px-3">Zoom Out</button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="padtop" id="accessibility">
                    <div className="content">
                        <Headline title="Accessibility" link="#accessibility" size="4" />
                        <div className="divider"></div>
                        <p>
                            To be complaint with{' '}
                            <ExternalLink url="https://www.w3.org/TR/wai-aria-practices/#dialog_modal">
                                WAI-ARIA Best Practices
                            </ExternalLink>
                            , you can easily include this snippet of JavaScript to close all dialogs when hitting the
                            escape key.
                        </p>

                        <CodeBlock
                            code={`document.addEventListener('keyup', function(e) {
    if(e.key === "Escape") {
        const modals = document.querySelectorAll('.modal-overlay');
        for (const modal of modals) {
            modal.click();
        }
    }
});`}
                            language="javascript"
                        />
                    </div>
                </section>

                <Pagination
                    lookupProps={{
                        sectionName: TITLE_ELEMENTS,
                        pageName: `Modals`,
                    }}
                />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(ModalsPage);
