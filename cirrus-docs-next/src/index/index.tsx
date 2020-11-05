import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LandingLayout } from '../../layouts/landing';
import { ExampleCard } from '../getting-started/examples/example-card';
import { Context } from '../../store/store';
import { Preview } from './preview';

import { DOC_EXAMPLES } from '../../constants/examples';

const Landing: React.FC<any> = () => {
    const { state, dispatch } = useContext(Context);

    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    useEffect(() => {
        async function fetchGithubData() {
            const data = await Axios.get(`https://api.github.com/repos/Spiderpig86/Cirrus`);
            setStars(data.data.stargazers_count);
            setForks(data.data.forks);
        }

        fetchGithubData();
    }, []);

    return (
        <div>
            <Head>
                <title>Cirrus CSS 💎</title>
            </Head>
            <section id="splash">
                <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                    <div className="hero-body">
                        <div className="content">
                            <h1 className="headline-4 white title">Cirrus.CSS</h1>
                            <h5 className="text-gray-300 sub-title font-alt font-normal">
                                A <b className="white">component</b> and <b className="white">utility centric</b> SCSS
                                framework <br /> designed for <b className="white">rapid prototyping</b>.
                            </h5>

                            <p className="white">
                                <b>Version 0.6.0</b> / Gamma II
                            </p>

                            <div className="btn-group">
                                <Link href="/getting-started/setup">
                                    <button className="btn-light outline">Get Started</button>
                                </Link>
                                <Link href="/why">
                                    <button className="btn-light outline">Why Cirrus</button>
                                </Link>
                            </div>
                        </div>
                        <a
                            href="https://www.producthunt.com/posts/cirrus-v0-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cirrus-v0-6"
                            target="_blank"
                        >
                            <img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=273275&theme=light"
                                alt="Cirrus v0.6 - A component centric CSS framework for fast prototyping. | Product Hunt"
                                style={{
                                    width: '250px',
                                    height: '54px',
                                    position: 'absolute',
                                    bottom: '6rem',
                                    right: '3rem',
                                    zIndex: 99,
                                }}
                            />
                        </a>
                    </div>
                    <div className={`transition ` + (state.pageAtTop ? `` : `transition--visible`)}></div>
                </div>
            </section>
            <section className="py-8">
                <div className="content u-text-center">
                    <h6 className="uppercase font-bold mb-3">
                        Created by <span className="text-primary">Stanley Lim</span>
                    </h6>
                    <p className="lead mb-3">
                        A fully responsive and comprehensive SCSS framework with beautiful controls and simplistic
                        structure. Integrate it with any existing design or use it to kick start your next project.
                    </p>

                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">17.3 KB</h6>
                                <div className="uppercase font-bold text-gray-700">Compressed</div>
                            </div>
                            <div className="col">
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">{stars}</h6>
                                <div className="uppercase font-bold text-gray-700">Stars</div>
                            </div>
                            <div className="col">
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">{forks}</h6>
                                <div className="uppercase font-bold text-gray-700">Forks</div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="hero bg-indigo-100"
                        style={{
                            borderRadius: '.25rem',
                        }}
                    >
                        <div className="hero-body u-text-left">
                            <div className="row u-items-center">
                                <div className="col">
                                    <h3 className="title text-gray-800">Newsletter.</h3>
                                    <h6 className="subtitle font-normal font-alt text-gray-600">
                                        Subscribe for feature previews, bug fixes, and tutorials.
                                    </h6>
                                </div>
                                <div className="col">
                                    <form action="https://stanleylim.us2.list-manage.com/subscribe/post">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-group-input"
                                                autoCapitalize="off"
                                                autoCorrect="off"
                                                name="MERGE0"
                                                id="MERGE0"
                                                placeholder="Email"
                                                defaultValue=""
                                            />
                                            <input type="hidden" name="u" defaultValue="c29a21f0dd7ce0561ec3adb9f" />
                                            <input type="hidden" name="id" defaultValue="f783a43c04" />{' '}
                                            <input
                                                type="hidden"
                                                name="ht"
                                                defaultValue="ed00e8c36ca669627ce34a5802d7c3f956e35fa7:MTYwMzYxNzkyNy40MzE0"
                                            />
                                            <button type="submit" className="form-group-btn btn-primary">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-gray-200">
                <div className="content u-text-center">
                    <div className="row">
                        <div className="col mb-2">
                            <FontAwesomeIcon
                                className="fa-wrapper small"
                                icon={['fas', 'boxes']}
                                style={{ fontSize: '2rem' }}
                            />
                            <h6 className="lead uppercase mb-1 font-bold text-gray-700">Modular</h6>
                            <div className="text-gray-700">
                                Separate files with separate responsibilities. Compartmentalized and easy to use in your
                                projects.{' '}
                            </div>
                        </div>
                        <div className="col mb-2">
                            <FontAwesomeIcon
                                className="fa-wrapper small"
                                icon={['fas', 'bolt']}
                                style={{ fontSize: '2rem' }}
                            />
                            <h6 className="lead uppercase mb-1 font-bold text-gray-700">Modern</h6>
                            <div className="text-gray-700">
                                Supports the latest standards including <b>flexbox</b> and <b>CSS grid</b>.{' '}
                            </div>
                        </div>
                        <div className="col mb-2">
                            <FontAwesomeIcon
                                className="fa-wrapper small"
                                icon={['fas', 'compress-alt']}
                                style={{ fontSize: '2rem' }}
                            />
                            <h6 className="lead uppercase mb-1 font-bold text-gray-700">Compact</h6>
                            <div className="text-gray-700">
                                Cirrus packs a lot of features with only a 17.3 KB payload.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="content">
                    <div className="row mb-2">
                        <div className="col u-flex u-flex-column u-justify-center">
                            <h5 className="lead uppercase mb-1 font-bold text-gray-700">Component-Based</h5>
                            <div className="text-gray-700">
                                Beautiful pre-built components and styling for quick prototyping.
                            </div>
                        </div>
                        <div className="col">
                            <img src="/img/component.svg" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <img src="/img/utility.svg" />
                        </div>
                        <div className="col u-flex u-flex-column u-justify-center">
                            <h5 className="lead uppercase mb-1 font-bold text-gray-700">Granular Control</h5>
                            <div className="text-gray-700">
                                Need some quick way to adjust something? Something not looking quite right? Our utility
                                classes will come in handy.{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Preview />

            <section
                className="py-8"
                style={{
                    backgroundColor: '#1c222b',
                }}
            >
                <div className="content">
                    <h3 className="white uppercase u-text-center">Examples</h3>
                    <p className="white lead u-text-center">
                        Start off with a few examples and a few complete templates completely powered by Cirrus.
                    </p>
                    <div
                        className="row mx-auto"
                        style={{
                            maxWidth: '960px',
                        }}
                    >
                        {DOC_EXAMPLES.slice(0, 3).map((example, index) => (
                            <ExampleCard key={index} data={example} />
                        ))}
                    </div>

                    <div className="u-text-center">
                        <a href="./getting-started/examples" target="_blank">
                            <button className="btn-info btn-large">See More</button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-8">
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
        </div>
    );
};

export default withLayout(<LandingLayout />)(Landing);
