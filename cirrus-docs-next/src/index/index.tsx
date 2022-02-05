import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '@moxy/next-layout';
import Axios from 'axios';
import TextLoop from 'react-text-loop';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { LandingLayout } from '../../layouts/landing';
import { ExampleCard } from '../getting-started/examples/example-card';
import { Context } from '../../store/store';
import { CodeBlock } from '../../layouts/components/codeblock';

import { DOC_EXAMPLES } from '../../constants/examples';
import { VERSION, VERSION_NAME } from '../../constants';
import { Frame, Card, MenuList, Pagination, Panel, Tabs } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div
                    className="u-absolute hero fullscreen hero-img u-z-0"
                    style={{
                        backgroundColor: '#e5e5f7',
                        opacity: '0.1',
                        backgroundImage:
                            'linear-gradient(#d73277 2px, transparent 2px), linear-gradient(90deg, #d73277 2px, transparent 2px), linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(90deg, #444cf7 1px, #e5e5f7 1px)',
                        backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
                        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                    }}
                ></div>
                <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                    <div className="hero-body u-z-1">
                        <div className="content w-100 w-80-md u-text-center">
                            <h1
                                className="headline-3 title"
                                style={{
                                    letterSpacing: '-.05em',
                                }}
                            >
                                Spend more time{' '}
                                <TextLoop>
                                    <span className="text-indigo-600">building</span>
                                    <span className="text-indigo-600">crafting</span>
                                    <span className="text-indigo-600">designing</span>
                                </TextLoop>{' '}
                                <br />
                                <span className="font-bold text-pink-600">and less time worrying about CSS.</span>
                            </h1>
                            <div className="space"></div>
                            <p className="sub-title lead font-alt font-normal mx-auto w-60-md u-none u-block-lg">
                                A <b className="">component</b> and <b className="">utility centric</b> SCSS framework{' '}
                                designed for <b className="">rapid prototyping</b>. Use beautiful pre-built components
                                to bootstrap your next project and utility classes to polish your final design.
                            </p>

                            <p>
                                <b>Version {VERSION}</b> / {VERSION_NAME}
                            </p>

                            <div className="u-flex u-gap-1 u-items-center u-justify-center">
                                <Link href="/docs">
                                    <button className="btn-dark outline font-bold mb-2">Get Started</button>
                                </Link>
                                <CodeBlock code={`$ yarn add cirrus-ui`} language="shell" style={nord} />
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
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">17.8 KB</h6>
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

                    <div className="newsletter hero u-round-sm">
                        <div className="hero-body u-text-left u-shadow-xl">
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

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        Dead simple setup.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Getting started with Cirrus is a single command or line of HTML away (depending on how you
                            want to import it). The framework is designed to be pluggable into any new or existing
                            projects.
                        </p>

                        <Link href="">
                            <a className="u u-LR text-lg u-inline-flex u-justify-center u-items-center">
                                Learn more
                                <FontAwesomeIcon className="ml-1" icon={['fas', 'chevron-right']} />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        Decision fatigue free design system.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Sitting at the core of Cirrus is its <b>design system</b>. Every aspect of the design system
                            is exposed via utility functions which allows you to develop consistent user interfaces.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        Responsive at its core.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Cirrus enables you to design for mobile right out of the box. With its responsive components
                            and utility classes, controlling how your design scales with width and height can be done{' '}
                            <b>inline</b> inside the HTML without requiring extra media queries.
                        </p>

                        <Link href="">
                            <a className="u u-LR text-lg u-inline-flex u-justify-center u-items-center">
                                Learn more
                                <FontAwesomeIcon className="ml-1" icon={['fas', 'chevron-right']} />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        No need to start from square one.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Starting a new project or business shouldn't always mean designing your UI from scratch.
                            Save time by using Cirrus's fully responsive components.
                        </p>
                    </div>
                    <div className="space space--lg"></div>

                    <div className="u-relative">
                        <div className="content mx-auto grid u-text-left u-gap-3 grid-cols-1 grid-cols-3-lg">
                            <div className="grid-c-1 grid-r-6 u-flex u-gap-3 u-flex-column">
                                <MenuList />
                                <Card />
                            </div>
                            <div className="grid-c-2 grid-r-1">
                                <Panel />
                            </div>
                            <div className="grid-c-2">
                                <Pagination />
                            </div>
                            <div className="grid-c-2">
                                <Tabs />
                            </div>
                            <div className="grid-c-2 grid-r-2">
                                <Frame />
                            </div>
                        </div>
                        <div className="transition transition--tall transition--visible"></div>
                    </div>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Or if you do want to start from scatch, build and extend from existing components to fit
                            your use cases.
                        </p>
                    </div>

                    <p>TODO MORE COMPONENTS</p>
                </div>
            </section>

            <section className="py-8">
                <div className="content u-text-center">
                    <h1
                        className="headline-4"
                        style={{
                            letterSpacing: '-.025em',
                        }}
                    >
                        Make Cirrus your own.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Customize Cirrus to make it yours. Toss out default font sizes, modify existing colors, add
                            new animations, etc. You can do all this right from the framework's config file.
                        </p>
                    </div>

                    <Link href="">
                        <a className="u u-LR text-lg u-inline-flex u-justify-center u-items-center">
                            Learn more
                            <FontAwesomeIcon className="ml-1" icon={['fas', 'chevron-right']} />
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default withLayout(<LandingLayout />)(Landing);
