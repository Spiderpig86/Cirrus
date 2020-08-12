import React from 'react';

import './index.scss';

export const Landing: React.FC<any> = () => {
    return (
        <section id="splash">
            <div id="splash-img" className="hero fullscreen hero-img parallax-img">
                <div className="hero-body">
                    <div className="content">
                        <h1 className="headline-4 white title">Cirrus.CSS</h1>
                        <h5 className="white sub-title font-alt font-normal">
                            A <b>component</b> and <b>utility</b> focused CSS framework <br /> designed for {' '}
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
                <div id="fade" className=""></div>
            </div>
        </section>
    );
};
