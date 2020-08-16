import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Landing: React.FC<any> = () => {
    const pageAtTop = useSelector((state: any) => state.docReducer.pageAtTop);

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
            <section id="splash">
                <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                    <div className="hero-body">
                        <div className="content">
                            <h1 className="headline-4 white title">Cirrus.CSS</h1>
                            <h5 className="white sub-title font-alt font-normal">
                                A <b>component</b> and <b>utility</b> focused CSS framework <br /> designed for{' '}
                                <b>rapid prototyping</b>.
                            </h5>

                            <p className="white">
                                <b>0.6.0 Preview</b> / Coming Soon
                            </p>

                            <a href="./docs/start" className="u-inline-block">
                                <button className="btn-light outline">Get Started</button>
                            </a>
                        </div>
                    </div>
                    <div className={`transition ` + (pageAtTop ? `` : `transition--visible`)}></div>
                </div>
            </section>
            <section className="padtop">
                <div className="content u-text-center">
                    <h6 className="uppercase font-bold mb-3">
                        Created by <span className="text-primary">Stanley Lim</span>
                    </h6>
                    <p className="lead mb-3">
                        A fully responsive and comprehensive CSS framework with beautiful controls and simplistic
                        structure. Integrate it with any existing design or use it to kick start your next project.
                    </p>

                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">20.8 KB</h6>
                                <div className="uppercase font-bold text-gray-700">Gzipped</div>
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

                    <a className="u-inline-block mt-3" href="#">
                        <div className="btn btn-info">Install</div>
                    </a>
                </div>
            </section>
            <section className="padtop">
                <div className="content u-text-center">
                    <div className="content">
                        <div className="row">
                            <div className="col mb-2">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'boxes']} style={{ fontSize: '2rem' }} />
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">Modular</h6>
                                <div className="text-gray-700">
                                    Separate files with separate responsibilities. Compartmentalized and easy to use in your projects.{' '}
                                </div>
                            </div>
                            <div className="col mb-2">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'bolt']} style={{ fontSize: '2rem' }} />
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">Modern</h6>
                                <div className="text-gray-700">
                                    Supports the latest standards including <b>flexbox</b> and <b>CSS grid</b>.{' '}
                                </div>
                            </div>
                            <div className="col mb-2">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'address-card']} style={{ fontSize: '2rem' }} />
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">Components</h6>
                                <div className="text-gray-700">
                                    Beautiful pre-built components and styling for quick prototyping.{' '}
                                </div>
                            </div>
                            <div className="col mb-2">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'wrench']} style={{ fontSize: '2rem' }} />
                                <h6 className="lead uppercase mb-1 font-bold text-gray-700">Utilities</h6>
                                <div className="text-gray-700">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
