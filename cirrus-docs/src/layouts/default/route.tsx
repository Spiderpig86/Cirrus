import React from 'react';
import { Route } from 'react-router-dom';

import { DefaultLayout } from './';

// Note: Layout structure: https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
export const DefaultLayoutRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <DefaultLayout {...matchProps}>
                    <Component {...matchProps} />
                </DefaultLayout>
            )}
        />
    );
};
