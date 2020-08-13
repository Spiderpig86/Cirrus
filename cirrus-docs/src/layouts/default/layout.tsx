import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Sidebar } from '../components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DefaultLayout = ({ children, ...rest }: any) => {
    return (
        <div>
            <Header extraClasses="header-dark" />
            <div className="default-layout tree-nav-body padtop content" style={{ height: '100%' }}>
                <div className="tree-nav-header">
                    <a href="#sidebar" className="u-hide-tablet">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'bars']} />
                        </span>
                    </a>
                </div>
                <div className="sidebar-container tree-nav p-0" id="sidebar">
                    <Sidebar />
                </div>
                <a href="#sidebar-close" id="sidebar-close" className="tree-nav-close"></a>
                <div
                    className="tree-nav-container"
                    style={{
                        flexGrow: 1,
                    }}
                >
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};
