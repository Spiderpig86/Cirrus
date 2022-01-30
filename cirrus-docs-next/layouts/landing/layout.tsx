import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalHotKeys, KeyMap } from 'react-hotkeys';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Context } from '../../store/store';
import { setPageAtTop } from '../../store/reducer';
import { VERSION } from '../../constants';
import { ExternalLink } from '../components/link';
import { loadScripts } from '../../utils/scripts';

import initializeAlgolia from '../../static/js/algolia.js';

export const LandingLayout = ({ children, ...rest }: any) => {
    // Bind Redux Store
    const { state, dispatch } = useContext(Context);

    const [scrollTop, setScrollTop] = useState(0);

    const keyMap: KeyMap = {
        SEARCH_FOCUS: {
            sequence: 'shift+s',
            action: 'keydown',
        },
    };

    const keyHandlers = {
        SEARCH_FOCUS: React.useCallback((e) => {
            if (document.querySelector('#cirrus-search')) {
                e.preventDefault();
                (document.querySelector('#cirrus-search') as HTMLInputElement).focus();
                (document.querySelector('#cirrus-search') as HTMLInputElement).value = '';
            }
        }, []),
    };

    loadScripts(
        ['https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'],
        () => initializeAlgolia(),
        []
    );

    // Track scroll top
    useEffect(() => {
        const onScroll = (e: any) => {
            const scrollOffset = e.target.documentElement.scrollTop;
            setScrollTop(scrollOffset);

            setPageAtTop(scrollOffset <= 10, dispatch);
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    const rightNavContent = (
        <>
            <div
                className="nav-item u-justify-flex-end"
                style={{
                    flexGrow: 1,
                }}
            >
                <input
                    type="search"
                    id="cirrus-search"
                    className="input--sm"
                    placeholder="Search (Press Shift + S to focus)"
                />
            </div>
            <div className="nav-item has-sub p-1">
                <div className="list-dropdown dropdown-right">
                    <div className="btn-group">
                        <button className="btn-transparent p-0">
                            <ExternalLink link="https://github.com/Spiderpig86/Cirrus/releases">Download</ExternalLink>
                        </button>
                        <button className="btn-transparent btn--sm btn-dropdown u-no-shadow p-0">
                            <span className="icon">
                                <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'caret-down']} />
                            </span>
                        </button>
                        <ul className="menu">
                            <li className="menu-item selected">
                                <a className="u-flex u-justify-content-center" href="!#">
                                    <b>{VERSION}</b>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="u-flex u-justify-content-center" href="https://v0-6-3.cirrus-ui.com/">
                                    0.6.3
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
        </>
    );

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={keyHandlers}>
            <Header
                extraClasses={scrollTop <= 10 ? 'header-clear header-landing' : 'header-light'}
                rightNavChildren={rightNavContent}
            />
            {children}
            <Footer />
            <script
                type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            ></script>
        </GlobalHotKeys>
    );
};
