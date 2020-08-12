import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Sidebar } from '../components/sidebar';

export const DefaultLayout = ({ children, ...rest }: any) => {
    return (
        <div>
            <Header extraClasses="header-dark" />
            <div className="u-flex padtop">
                <div
                    className="mr-1"
                    style={{
                        width: '300px',
                    }}
                >
                    <Sidebar />
                </div>
                <div style={{
                    flexGrow: 1
                }}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};
