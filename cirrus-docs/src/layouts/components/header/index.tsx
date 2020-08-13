import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    extraClasses?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    library.add(fas);

    return (
        <div className={`header header-fixed unselectable header-animated ${props.extraClasses ?? ''}`}>
            <div className="header-brand">
                <div className="nav-item no-hover">
                    <Link to="/"><h6 className="title">Cirrus</h6></Link>
                </div>
                <div className="nav-item nav-btn" id="header-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header-nav" id="header-menu">
                <div className="nav-right">
                    <div className="nav-item">
                        <a className="smoothScroll" href="#colors">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small mr-2" icon={['fas', 'pen-fancy']} />
                            </span>
                            Design and Colors
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="smoothScroll" href="#colors">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small mr-2" icon={['fas', 'palette']} />
                            </span>
                            Examples
                        </a>
                    </div>
                    <div className="nav-item">
                        <a className="smoothScroll" href="#colors">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small mr-2" icon={['fas', 'boxes']} />
                            </span>
                            Docs
                        </a>
                    </div>
                    <div className="nav-item has-sub p-1">
                        <div className="list-dropdown dropdown-right">
                            <div className="btn-group">
                                <button className="btn-primary p-0">
                                    <a
                                        className="font-normal"
                                        href="https://github.com/Spiderpig86/Cirrus/releases"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                className="fa-wrapper small"
                                                icon={['fas', 'cloud-download-alt']}
                                            />
                                        </span>
                                        <span>Download</span>
                                    </a>
                                </button>
                                <button className="btn-primary btn-small btn-dropdown u-no-shadow">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'caret-down']} />
                                    </span>
                                </button>
                                <ul className="menu">
                                    <li className="menu-item selected">
                                        <a className="u-flex u-justify-content-center" href="#">
                                            <b>0.6.0</b>
                                            <div className="tag tag--info uppercase ml-1">Preview</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="u-flex u-justify-content-center"
                                            href="https://spiderpig86.github.io/Cirrus/"
                                        >
                                            0.5.5
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="u-flex u-justify-content-center"
                                            href="https://spiderpig86.github.io/Cirrus/0.5.4"
                                        >
                                            0.5.4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
