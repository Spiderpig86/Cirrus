import React from 'react';
import { Link } from 'react-router-dom';

export const _404: React.FC<any> = (props) => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1524838101135-a71ba219084d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=100"
                style={{
                    height: '100vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    width: '100%',
                    zIndex: -1,
                }}
            />
            <div
                className="w-100 u-flex u-flex-column u-text-center u-items-center u-justify-center"
                style={{
                    height: '100vh',
                }}
            >
                <h1
                    className="font-bold"
                    style={{
                        fontSize: '12rem',
                        mixBlendMode: 'soft-light',
                    }}
                >
                    404
                </h1>
                <h6 className="white">
                    Looks like you hit the wrong turn.{' '}
                    <Link to="/" className="u u-LR text-indigo-500">
                        Click to head home
                    </Link>
                    .
                </h6>
            </div>
        </div>
    );
};
