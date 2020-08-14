import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export interface HeaderProps {
    extraClasses?: string;
    rightNavChildren?: JSX.Element;
}

export const Header: React.FC<HeaderProps> = (props) => {
    library.add(fas);

    return (
        <div className={`header header-fixed unselectable header-animated ${props.extraClasses ?? ''}`}>
            <div className="w-100">
                <div className="header__contents mx-auto">
                    <div className="header-brand">
                        <div className="nav-item no-hover">
                            <Link to="/">
                                <h6 className="title">Cirrus</h6>
                            </Link>
                        </div>
                        <div className="nav-item nav-btn" id="header-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header-nav" id="header-menu">
                        <div className="nav-left">
                            <div className="nav-item">
                                <a className="smoothScroll" href="#colors">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'pen-fancy']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="smoothScroll" href="#colors">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'palette']} />
                                    </span>
                                </a>
                            </div>
                            <div className="nav-item">
                                <a className="smoothScroll" href="#colors">
                                    <span className="icon">
                                        <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'boxes']} />
                                    </span>
                                </a>
                            </div>
                        </div>

                        {props.rightNavChildren && <div className="nav-right">{props.rightNavChildren}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
