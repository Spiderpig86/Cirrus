import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import { DefaultLayout } from '../../layouts/default';
import { PAGE_TITLE_PREFIX } from '../../constants';

export const AboutPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} About</title>
            </Head>
            <div>
                <section className="padtop">
                    <div className="content u-text-center">
                        <img
                            src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png"
                            style={{ maxWidth: '150px' }}
                            alt="logo"
                        />
                        <h1>About.</h1>
                        <div className="divider"></div>
                        <p>
                            Started in late 2016, <b>Cirrus</b> was built as a side project of mine to foray into web
                            development. Since then it has grown immensely with the addition of components, more utility
                            classes, CSS grid, etc. My main goal for this framework is to make web development as
                            painless as possible -- and that always starts with great documentation and consistency in
                            design choices.
                        </p>
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <h3 className="uppercase u-text-center">Support the Project :)</h3>
                        <p className="lead u-text-center">Feeling generous? Support the project.</p>
                        <div className="row u-text-center">
                            <div className="col-6">
                                <h4 className="font-alt font-light">
                                    Donate <b>once</b>.
                                </h4>
                                <a
                                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5JW89TNNHB4JL&currency_code=USD&source=url"
                                    target="_blank"
                                    className="u-no-padding u-inline-block"
                                >
                                    <img src="/img/paypal.jpg" className="_shadow" />
                                </a>
                            </div>
                            <div className="col-6">
                                <h4 className="font-alt font-light">
                                    Donate <b>monthly</b>.
                                </h4>
                                <a
                                    href="https://www.patreon.com/bePatron?u=20654861"
                                    target="_blank"
                                    className="u-no-padding u-inline-block"
                                >
                                    <img src="/img/become_a_patron_button.png" className="_shadow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-prev">
                                <Link href="../playground">
                                    <a className="u-block">
                                        <p className="pagination-item-subtitle">Prev</p>
                                        <h5 className="font-alt font-light m-0">Playground</h5>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default withLayout(<DefaultLayout />)(AboutPage);
