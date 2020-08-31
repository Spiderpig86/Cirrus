import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import './index.scss';
import { setPageAtTop } from '../../store';

export const LandingLayout = ({ children, ...rest }: any) => {
    // Bind Redux Store
    const dispatch = useDispatch();
    const pageAtTop = useSelector((state: any) => state.pageAtTop);

    const [scrollTop, setScrollTop] = useState(0);

    // Track scroll top
    useEffect(() => {
        const onScroll = (e: any) => {
            const scrollOffset = e.target.documentElement.scrollTop;
            setScrollTop(scrollOffset);
            dispatch(setPageAtTop(scrollOffset <= 10));
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    const rightNavContent = (
        <div className="nav-item has-sub p-1">
            <div className="list-dropdown dropdown-right">
                <div className="btn-group">
                    <button className="btn-primary p-0">
                        <a
                            className="font-normal"
                            href="https://github.com/Spiderpig86/Cirrus/releases"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'cloud-download-alt']} />
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
                            <a className="u-flex u-justify-content-center" href="!#">
                                <b>0.6.0</b>
                                <div className="tag tag--info uppercase ml-1">Preview</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="u-flex u-justify-content-center" href="https://spiderpig86.github.io/Cirrus/">
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
    );

    return (
        <div>
            <Header extraClasses={scrollTop <= 10 ? 'header-clear header-landing' : 'header-dark'} rightNavChildren={rightNavContent} />
            {children}
            <Footer />
        </div>
    );
};
