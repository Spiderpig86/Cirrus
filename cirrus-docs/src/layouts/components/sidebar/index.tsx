import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

export const Sidebar: React.FC<any> = () => {
    return (
        <div className="sidebar px-3">
            <ul className="menu mb-5">
                <li className="menu-item">
                    <div className="menu-addon">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'clock']} />
                        </span>
                    </div>
                    <a href="#">
                        <b>Bold Item</b>
                    </a>
                </li>
                <li className="menu-item">
                    <div className="menu-addon">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'clock']} />
                        </span>
                    </div>
                    <a href="#">
                        <b>Bold Item</b>
                    </a>
                </li>
                <li className="menu-item">
                    <div className="menu-addon">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'clock']} />
                        </span>
                    </div>
                    <a href="#">
                        <b>Bold Item</b>
                    </a>
                </li>
                <li className="menu-item">
                    <div className="menu-addon">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'clock']} />
                        </span>
                    </div>
                    <a href="#">
                        <b>Bold Item</b>
                    </a>
                </li>
                <li className="menu-item">
                    <div className="menu-addon">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'clock']} />
                        </span>
                    </div>
                    <a href="#">
                        <b>Bold Item</b>
                    </a>
                </li>
            </ul>

            <span className="font-bold uppercase text-gray-500">Getting Started</span>
            <ul className="menu">
                <li className="menu-item selected">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
                <li className="menu-item">
                    <a href="#">Basic Item</a>
                </li>
            </ul>
        </div>
    );
};
