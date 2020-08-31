import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop">
                    <div className="content u-text-center">
                        <img src="https://raw.githubusercontent.com/Spiderpig86/Cirrus/master/img/CirrusLogo.png" style={{ maxWidth: '150px' }} alt="logo" />
                        <h1>About.</h1>
                        <div className="divider"></div>
                        <p>Started in late 2016, <b>Cirrus</b> was built as a side project of mine to foray into web development. Since then it has grown immensely with the addition of components, more utility classes, CSS grid, etc. My main goal for this framework is to make web development as painless as possible -- and that always starts with great documentation and consistency in design choices.</p>
                    </div>
                </section>

                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-prev">
                                <Link to="../playground" className="u-block">
                                    <p className="pagination-item-subtitle">Prev</p>
                                    <h5 className="font-alt font-light m-0">Playground</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
};
