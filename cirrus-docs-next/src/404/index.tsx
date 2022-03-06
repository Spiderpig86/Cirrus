import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import Link from 'next/link';
import { BlankLayout } from '../../layouts/blank';
import { PAGE_TITLE_PREFIX } from '../../constants';

export const _404: React.FC<any> = (props) => {
    return (
        <div>
            <Head>
                <title>{PAGE_TITLE_PREFIX} 😥 404 Not Found</title>
            </Head>
            <img
                src="https://images.unsplash.com/photo-1524838101135-a71ba219084d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=100"
                alt="404 Landing Image"
                style={{
                    height: '100vh',
                    objectFit: 'cover',
                    position: 'absolute',
                    width: '100%',
                    zIndex: -1,
                }}
            />
            <div
                className="w-100p u-flex u-flex-column u-text-center u-items-center u-justify-center"
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
                <h6 className="text-text-white">
                    Looks like you hit the wrong turn.{' '}
                    <Link href="/">
                        <a className="u u-LR text-indigo-500">Click to head home</a>
                    </Link>
                    .
                </h6>
            </div>
        </div>
    );
};

export default withLayout(<BlankLayout />)(_404);