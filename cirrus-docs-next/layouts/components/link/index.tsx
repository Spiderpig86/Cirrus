import React from 'react';

export interface LinkProps {
    url: string;
}

export const ExternalLink: React.FC<any> = ({ children, ...rest }: any) => {
    return (
        <a className="u u-LR" target="_blank" href={rest.url} rel='noopener noreferrer' style={{
            cursor: 'pointer'
        }}>{children}</a>
    );
};