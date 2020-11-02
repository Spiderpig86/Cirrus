import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Footer } from '../components/footer';
import { loadScripts } from '../../utils/scripts';

import initializeAlgolia from '../../static/js/algolia.js';

export const DefaultLayout = ({ children, ...rest }: any) => {
    loadScripts(
        ['https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js'],
        () => initializeAlgolia(),
        []
    );

    // Search bar
    const rightNavChildren: JSX.Element = (
        <div className="nav-item">
            <input type="search" id="cirrus-search" className="input-small" placeholder="Search..." />
        </div>
    );

    return (
        <div>
            <Header extraClasses="header--docs-theme" rightNavChildren={rightNavChildren} />
            <div className="default-layout tree-nav-body mx-auto mb-0">
                <div className="tree-nav-header u-items-center">
                    <a href="#sidebar" className="u-hide-tablet u-shadow-none">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'chevron-right']} />
                        </span>
                    </a>
                </div>
                <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
                    <div className="sidebar-wrapper">
                        <Sidebar {...rest} />
                    </div>
                </div>
                <a
                    href="#nonexistent-div"
                    id="sidebar-close"
                    className="tree-nav-close p-0 u-shadow-none"
                    style={{
                        boxShadow: 'none',
                    }}
                ></a>
                <div
                    className="tree-nav-container h-auto"
                    style={{
                        flexGrow: 1,
                    }}
                >
                    {children}
                </div>
            </div>
            <Footer />
            <script
                type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            ></script>
        </div>
    );
};
