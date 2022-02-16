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
import {
    Frame,
    Card,
    MenuList,
    Pagination,
    Panel,
    Tabs,
    FancyBuyCard,
    LoginCard,
    PersonCard,
    ECommerceCard,
    ResponsiveLandingHTML,
} from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TabContainer } from '../../layouts/components/tabs/tab-container';
import { ResizableInternal } from '../../layouts/components/resizable';
import { IFrame } from '../../layouts/components/iframe';
import { PLAYGROUND_ENDPOINT_MAP } from '../../constants/playground';

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
                                A <b className="">component-and-utility-centric</b> SCSS framework designed for{' '}
                                <b className="">rapid prototyping</b>. Use beautiful pre-built components to bootstrap
                                your next project and utility classes to polish your final design.
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
                            Getting started with Cirrus is a few commands or lines of HTML away (depending on how you
                            want to import it). The framework is designed to be pluggable into any new or existing
                            projects.
                        </p>

                        <Link href="">
                            <a className="u u-LR text-lg u-inline-flex u-justify-center u-items-center">
                                Learn more
                                <FontAwesomeIcon className="ml-1" icon={['fas', 'chevron-right']} />
                            </a>
                        </Link>
                        <div className="space space--lg"></div>

                        <div className="">
                            <p className="lead font-bold">Integate to any HTML page.</p>
                            <div className="u-text-left pb-4">
                                <CodeBlock
                                    code={`<!-- Import Cirrus from CDN with relevant fonts -->
<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cirrus-ui/dist/cirrus.min.css">`}
                                    language="htmlbars"
                                />
                            </div>
                            <p className="lead font-bold">Import into any node project.</p>
                            <div className="u-text-left">
                                <p>Install the package.</p>
                                <CodeBlock code={`$ yarn add cirrus-ui`} language="shell" />
                                <p>Import into project.</p>
                                <CodeBlock
                                    code={`// index.js
import 'cirrus-ui';`}
                                    language="javascript"
                                />
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
                        Decision-fatigue-free design system.
                    </h1>

                    <div className="content">
                        <p className="lead text-gray-600">
                            Sitting at the core of Cirrus is its <b>design system</b>. Every aspect of the design system
                            is exposed via utility functions which allows you to develop consistent user interfaces.
                        </p>
                    </div>

                    <TabContainer
                        id="#decision-free-tabs"
                        selectedIndex={0}
                        tabs={[
                            {
                                title: 'Typography',
                                children: (
                                    <div className="u-text-left">
                                        <div className="frame">
                                            <div className="frame__body">
                                                <div className="row u-items-center">
                                                    <div className="col">
                                                        <h1 className="title headline-1">Aa</h1>
                                                        <h4 className="subtitle font-normal">Montserrat</h4>

                                                        <div className="pt-2">
                                                            <div className="">
                                                                <h6 className="title font-normal">Normal</h6>
                                                                <h2 className="subtitle font-normal">AaBbCcDd</h2>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="title font-bold">Bold</h6>
                                                                <h2 className="subtitle font-bold">AaBbCcDd</h2>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="title font-light">Numbers (Light)</h6>
                                                                <h2 className="subtitle font-light">0123456789</h2>
                                                            </div>
                                                        </div>

                                                        <p className="font-bold">Used In</p>
                                                        <div className="tags">
                                                            <span className="tag tag--info text-light mb-1">h1</span>
                                                            <span className="tag tag--info text-light mb-1">h2</span>
                                                            <span className="tag tag--info text-light mb-1">h3</span>
                                                            <span className="tag tag--info text-light mb-1">h4</span>
                                                            <span className="tag tag--info text-light mb-1">h5</span>
                                                            <span className="tag tag--info text-light mb-1">h6</span>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h1 className="font-alt title headline-1 font-light">Aa</h1>
                                                        <h4 className="font-alt subtitle font-normal">Nunito Sans</h4>

                                                        <div className="pt-2">
                                                            <div className="">
                                                                <h6 className="font-alt title font-normal">Normal</h6>
                                                                <h2 className="font-alt subtitle font-normal">
                                                                    AaBbCcDd
                                                                </h2>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="font-alt title font-bold">Bold</h6>
                                                                <h2 className="font-alt subtitle font-bold">
                                                                    AaBbCcDd
                                                                </h2>
                                                            </div>
                                                            <div className="">
                                                                <h6 className="font-alt title font-light">
                                                                    Numbers (Light)
                                                                </h6>
                                                                <h2 className="font-alt subtitle font-light">
                                                                    0123456789
                                                                </h2>
                                                            </div>
                                                        </div>

                                                        <p className="font-bold">Used In</p>
                                                        <div className="tags">
                                                            <span className="tag tag--info text-light mb-1">p</span>
                                                            <span className="tag tag--info text-light mb-1">label</span>
                                                            <span className="tag tag--info text-light mb-1">span</span>
                                                            <span className="tag tag--info text-light mb-1">
                                                                blockquote
                                                            </span>
                                                            <span className="tag tag--info text-light mb-1">code</span>
                                                            <span className="tag tag--info text-light mb-1">
                                                                article
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col w-100 pt-4 u-flex u-flex-column">
                                                        <CodeBlock
                                                            code={`<h1 class="title headline-1">Aa</h1>
<h4 class="subtitle font-normal">Montserrat</h4>
<div class="pt-2">
    <h6 class="title font-normal">Normal</h6>
    <h2 class="subtitle font-normal">AaBbCcDd</h2>
    <h6 class="title font-bold">Bold</h6>
    <h2 class="subtitle font-bold">AaBbCcDd</h2>
    <h6 class="title font-light">Numbers (Light)</h6>
    <h2 class="subtitle font-light">0123456789</h2>
</div>

<h1 class="font-alt title headline-1 font-light">Aa</h1>
<h4 class="font-alt subtitle font-normal">Nunito Sans</h4>
<div class="pt-2">
    <h6 class="font-alt title font-normal">Normal</h6>
    <h2 class="font-alt subtitle font-normal">AaBbCcDd</h2>
    <h6 class="font-alt title font-bold">Bold</h6>
    <h2 class="font-alt subtitle font-bold">AaBbCcDd</h2>
    <h6 class="font-alt title font-light">Numbers (Light)</h6>
    <h2 class="font-alt subtitle font-light">0123456789</h2>
</div>`}
                                                            language="htmlbars"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="frame__footer" />
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: 'Colors',
                                children: (
                                    <div className="u-text-left">
                                        <div className="frame bg-gray-000 u-shadow-lg">
                                            <div className="frame__body">
                                                <div className="row u-items-center">
                                                    <div className="col-6">
                                                        {['blue', 'indigo', 'pink', 'orange'].map((color) => {
                                                            return (
                                                                <div className="p-2 my-2 bg-white u-round-sm u-shadow-sm">
                                                                    <div className="u-flex u-gap-1 u-flex-wrap">
                                                                        {[
                                                                            100,
                                                                            200,
                                                                            300,
                                                                            400,
                                                                            500,
                                                                            600,
                                                                            700,
                                                                            800,
                                                                            900,
                                                                        ].map((level) => {
                                                                            return (
                                                                                <div
                                                                                    className={`p-3 u-round-full u-shadow-md bg-${color}-${level}`}
                                                                                ></div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                    <p className="text-gray-700 font-bold uppercase my-0 mt-1 text-sm">
                                                                        {color} (100 - 900)
                                                                    </p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="col-6 pt-2">
                                                        <CodeBlock
                                                            code={`<div class="p-2 my-2 bg-white u-round-sm u-shadow-sm">
    <div class="u-flex u-gap-1 u-flex-wrap">
        <div class="p-3 u-round-full u-shadow-md bg-blue-100"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-200"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-300"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-400"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-500"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-600"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-700"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-800"></div>
        <div class="p-3 u-round-full u-shadow-md bg-blue-900"></div>
    </div>
</div>
<div class="p-2 my-2 bg-white u-round-sm u-shadow-sm">
    <div class="u-flex u-gap-1 u-flex-wrap">
        <div class="p-3 u-round-full u-shadow-md bg-indigo-100"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-200"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-300"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-400"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-500"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-600"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-700"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-800"></div>
        <div class="p-3 u-round-full u-shadow-md bg-indigo-900"></div>
    </div>
</div>
<div class="p-2 my-2 bg-white u-round-sm u-shadow-sm">
    <div class="u-flex u-gap-1 u-flex-wrap">
        <div class="p-3 u-round-full u-shadow-md bg-pink-100"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-200"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-300"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-400"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-500"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-600"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-700"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-800"></div>
        <div class="p-3 u-round-full u-shadow-md bg-pink-900"></div>
    </div>
</div>

<!-- ... -->`}
                                                            language="htmlbars"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: 'Sizes',
                                children: (
                                    <div className="u-text-left">
                                        <div className="frame bg-indigo-100">
                                            <div className="frame__body">
                                                <div className="row u-items-center">
                                                    <div className="col-4">
                                                        {[32, 24, 20, 16, 12, 10, 8].map((size) => {
                                                            return (
                                                                <div className="w-100">
                                                                    <div
                                                                        className={`bg-indigo-500 text-white my-2 pl-2 pr-${size} py-1 u-round-sm u-inline-block u-shadow-lg`}
                                                                    >
                                                                        <span className="font-bold">pr-{size}</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="col-8 pt-2">
                                                        <CodeBlock
                                                            code={`<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-32 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-32</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-24 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-24</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-20 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-20</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-16 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-16</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-12 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-12</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-10 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-10</span></div>
</div>
<div class="w-100">
    <div class="bg-indigo-500 text-white my-2 pl-2 pr-8 py-1 u-round-sm u-inline-block u-shadow-lg"><span class="font-bold">px-8</span></div>
</div>`}
                                                            language="htmlbars"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: 'Opacity',
                                children: (
                                    <div className="u-text-left">
                                        <div className="frame bg-green-100">
                                            <div className="frame__body">
                                                <div className="row u-items-center py-2">
                                                    <div className="col-4">
                                                        {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((opacity) => {
                                                            return (
                                                                <div
                                                                    className={`u-opacity-${opacity} bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg`}
                                                                >
                                                                    <div className="font-bold">u-opacity-{opacity}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className="col-8">
                                                        <CodeBlock
                                                            code={`<div class="u-opacity-100 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-100</div>
</div>
<div class="u-opacity-90 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-90</div>
</div>
<div class="u-opacity-80 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-80</div>
</div>
<div class="u-opacity-70 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-70</div>
</div>
<div class="u-opacity-60 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-60</div>
</div>
<div class="u-opacity-50 bg-green-500 text-white w-100 mb-1 pl-2 py-1 u-round-sm u-shadow-lg">
    <div class="font-bold">u-opacity-50</div>
</div>

<!-- ... -->`}
                                                            language="htmlbars"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                title: 'Shadow',
                                children: (
                                    <div className="u-text-left">
                                        <div className="frame">
                                            <div className="frame__body">
                                                <div className="row u-items-center py-2">
                                                    <div className="col-6">
                                                        <div className="grid-md grid-cols-2">
                                                            {['none', 'xs', 'sm', 'md', 'lg', 'xl'].map((level) => {
                                                                return (
                                                                    <div
                                                                        className={`bg-gray-000 u-round-xs u-shadow-${level} px-4 py-3 m-2`}
                                                                    >
                                                                        <div className="font-bold">
                                                                            {`u-shadow-${level}`}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <CodeBlock
                                                            code={`<div class="bg-gray-000 u-round-xs u-shadow-none px-4 py-3 m-2">
    <div class="font-bold">u-shadow-none</div>
</div>
<div class="bg-gray-000 u-round-xs u-shadow-xs px-4 py-3 m-2">
    <div class="font-bold">u-shadow-xs</div>
</div>
<div class="bg-gray-000 u-round-xs u-shadow-sm px-4 py-3 m-2">
    <div class="font-bold">u-shadow-sm</div>
</div>
<div class="bg-gray-000 u-round-xs u-shadow-md px-4 py-3 m-2">
    <div class="font-bold">u-shadow-md</div>
</div>
<div class="bg-gray-000 u-round-xs u-shadow-lg px-4 py-3 m-2">
    <div class="font-bold">u-shadow-lg</div>
</div>
<div class="bg-gray-000 u-round-xs u-shadow-xl px-4 py-3 m-2">
    <div class="font-bold">u-shadow-xl</div>
</div>`}
                                                            language="htmlbars"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                            },
                        ]}
                    />
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
                    <div className="space space--lg"></div>
                </div>

                <div>
                    <div className="w-90 mx-auto">
                        <ResizableInternal height="800px" top="50%">
                            <div
                                style={{
                                    height: '800px',
                                }}
                            >
                                <IFrame
                                    content={`<link href="${PLAYGROUND_ENDPOINT_MAP.get(
                                        PLAYGROUND_ENDPOINT_MAP.keys().next().value
                                    )}" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<body>${ResponsiveLandingHTML}</body>`}
                                />
                            </div>
                        </ResizableInternal>
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
                        A solid foundation for any idea.
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

                    <div className="row">
                        <div className="p-1 u-flex u-items-center u-justify-center col-6 col-lg-4 col-xl-2">
                            <FancyBuyCard />
                        </div>
                        <div className="p-1 u-flex u-items-center u-justify-center col-6 col-lg-4 col-xl-3">
                            <LoginCard />
                        </div>
                        <div className="p-1 u-flex u-items-center u-justify-center col-6 col-lg-4 col-xl-2">
                            <PersonCard />
                        </div>
                        <div className="p-1 u-flex u-items-center u-justify-center col-6 col-lg-6 col-xl-5">
                            <ECommerceCard />
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
                    <div className="u-text-left my-4">
                        <CodeBlock
                            code={`@use "internal/config" as * with (
  $config: (
    extend: (
      opacity: (
        25: 0.25,
        50: 0.5,
        75: 0.75
      )
    )
  )
);

@use "ext";`}
                            language={'scss'}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default withLayout(<LandingLayout />)(Landing);
