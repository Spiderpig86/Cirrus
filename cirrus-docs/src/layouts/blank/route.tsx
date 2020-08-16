import React from 'react';
import { Route } from 'react-router-dom';

import { BlankLayout } from '.';

// Note: Layout structure: https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
export const BlankLayoutRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <BlankLayout>
                    <Component {...matchProps} />
                </BlankLayout>
            )}
        />
    );
};
