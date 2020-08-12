import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import './index.scss';

export const LandingLayout = ({ children, ...rest }: any) => {


    return (
        <div>
            <Header extraClasses={'header-clear header-landing'} />
            {children}
            <Footer />
        </div>
    );
};
