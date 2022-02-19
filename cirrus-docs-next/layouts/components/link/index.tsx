import Link from 'next/link';
import React from 'react';

export const ExternalLink: React.FC<any> = ({ children, ...rest }: any) => {
    return (
        <a
            className="u u-LR"
            target="_blank"
            href={rest.url}
            rel="noopener noreferrer"
            style={{
                cursor: 'pointer',
            }}
        >
            {children}
        </a>
    );
};

export const InternalLink: React.FC<any> = ({ children, ...rest }: any) => {
    return (
        <Link href={rest.url}>
            <a
                className="u u-LR"
                target="_blank"
                href={rest.url}
                style={{
                    cursor: 'pointer',
                }}
            >
                {children}
            </a>
        </Link>
    );
};
