import React from 'react';
import { Route } from 'react-router-dom';

import { LandingLayout } from './';

// Note: Layout structure: https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
export const LandingLayoutRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <LandingLayout>
                    <Component {...matchProps} />
                </LandingLayout>
            )}
        />
    );
};
